'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface SchoolFormData {
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
}

export default function AddSchool() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SchoolFormData>();

  const onSubmit = async (data: SchoolFormData) => {
    if (!selectedImage) {
      setMessage({ type: 'error', text: 'Please select an image' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('address', data.address);
      formData.append('city', data.city);
      formData.append('state', data.state);
      formData.append('contact', data.contact);
      formData.append('email_id', data.email_id);
      formData.append('image', selectedImage);

      const response = await fetch('/api/schools', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: '🎉 School added successfully!' });
        reset();
        setSelectedImage(null);
        setImagePreview(null);
        // Reset file input
        const fileInput = document.getElementById('image') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to add school' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Add New School</h1>

      {message && (
        <div className={`p-4 mb-4 rounded-2xl ${
          message.type === 'success' 
            ? 'success-container' 
            : 'error-container'
        }`}>
          <p className="text-base font-semibold">{message.text}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* School Name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">School Name</label>
          <input
            {...register('name', { required: 'School name is required' })}
            type="text"
            id="name"
            className="form-input"
            placeholder="Enter school name"
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            {...register('address', { required: 'Address is required' })}
            id="address"
            className="form-input"
            rows={1}
            placeholder="Enter school address"
          />
          {errors.address && <p className="form-error">{errors.address.message}</p>}
        </div>

        {/* City and State Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="city" className="form-label">City</label>
            <input
              {...register('city', { required: 'City is required' })}
              type="text"
              id="city"
              className="form-input"
              placeholder="Enter city"
            />
            {errors.city && <p className="form-error">{errors.city.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="state" className="form-label">State</label>
            <input
              {...register('state', { required: 'State is required' })}
              type="text"
              id="state"
              className="form-input"
              placeholder="Enter state"
            />
            {errors.state && <p className="form-error">{errors.state.message}</p>}
          </div>
        </div>

        {/* Contact and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="contact" className="form-label">Contact Number</label>
            <input
              {...register('contact', { 
                required: 'Contact number is required',
                pattern: {
                  value: /^\d+$/,
                  message: 'Contact number must contain only digits'
                }
              })}
              type="tel"
              id="contact"
              className="form-input"
              placeholder="Enter contact number"
            />
            {errors.contact && <p className="form-error">{errors.contact.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email_id" className="form-label">Email ID</label>
            <input
              {...register('email_id', { 
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address'
                }
              })}
              type="email"
              id="email_id"
              className="form-input"
              placeholder="Enter email address"
            />
            {errors.email_id && <p className="form-error">{errors.email_id.message}</p>}
          </div>
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label htmlFor="image" className="form-label">School Image</label>
          <div className="file-upload-container">
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="file-upload-input"
              required
            />
            <label htmlFor="image" className="file-upload-label">
              {imagePreview ? '📷 Change Image' : '📷 Choose Image'}
            </label>
            
            {imagePreview && (
              <div className="mt-3">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-24 h-24 object-cover rounded-lg mx-auto border-2 border-blue-200"
                />
              </div>
            )}
            
            <p className="file-upload-text">
              Supported formats: JPG, PNG, GIF • Max size: 5MB
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-btn"
          >
            {isSubmitting ? '⏳ Adding School...' : '🚀 Add School'}
          </button>
        </div>
      </form>
    </div>
  );
}
