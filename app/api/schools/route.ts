import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/database';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const name = formData.get('name') as string;
    const address = formData.get('address') as string;
    const city = formData.get('city') as string;
    const state = formData.get('state') as string;
    const contact = formData.get('contact') as string;
    const email_id = formData.get('email_id') as string;
    const imageFile = formData.get('image') as File;

    // Validation
    if (!name || !address || !city || !state || !contact || !email_id || !imageFile) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email_id)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate contact number (numeric only)
    if (!/^\d+$/.test(contact)) {
      return NextResponse.json(
        { error: 'Contact number must contain only digits' },
        { status: 400 }
      );
    }

    // Handle image upload
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Create unique filename
    const timestamp = Date.now();
    const originalName = imageFile.name;
    const extension = originalName.split('.').pop();
    const filename = `school_${timestamp}.${extension}`;
    
    // Ensure schoolImages directory exists
    const uploadDir = join(process.cwd(), 'public', 'schoolImages');
    await mkdir(uploadDir, { recursive: true });
    
    // Save image to public/schoolImages folder
    const imagePath = join(uploadDir, filename);
    await writeFile(imagePath, buffer);
    
    // Save to database
    const connection = await pool.getConnection();
    
    try {
      const [result] = await connection.execute(
        'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, address, city, state, contact, filename, email_id]
      );
      
      connection.release();
      
      return NextResponse.json({
        success: true,
        message: 'School added successfully',
        schoolId: (result as any).insertId
      });
      
    } catch (dbError) {
      connection.release();
      throw dbError;
    }
    
  } catch (error) {
    console.error('Error adding school:', error);
    return NextResponse.json(
      { error: 'Failed to add school' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const connection = await pool.getConnection();
    
    try {
      const [rows] = await connection.execute('SELECT * FROM schools ORDER BY created_at DESC');
      connection.release();
      
      return NextResponse.json({
        success: true,
        schools: rows
      });
      
    } catch (dbError) {
      connection.release();
      throw dbError;
    }
    
  } catch (error) {
    console.error('Error fetching schools:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schools' },
      { status: 500 }
    );
  }
}
