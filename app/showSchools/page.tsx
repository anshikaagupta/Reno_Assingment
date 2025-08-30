'use client';

import { useState, useEffect } from 'react';

interface School {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  image: string;
  email_id: string;
  created_at: string;
}

export default function ShowSchools() {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/schools');
      const data = await response.json();

      if (response.ok) {
        setSchools(data.schools);
      } else {
        setError(data.error || 'Failed to fetch schools');
      }
    } catch (error) {
      setError('An error occurred while fetching schools');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="schools-container">
        <div className="loading-container">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <p className="mt-6 text-xl text-white font-semibold">Loading amazing schools...</p>
            <p className="mt-2 text-blue-100">Please wait while we fetch the data</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="schools-container">
        <div className="error-container">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-800 mb-4">Oops! Something went wrong</h2>
            <p className="text-red-700 mb-6">{error}</p>
            <button
              onClick={fetchSchools}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              🔄 Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (schools.length === 0) {
    return (
      <div className="schools-container">
        <div className="empty-state">
          <div className="text-6xl mb-4">🏫</div>
          <h2 className="empty-state-title">No Schools Found</h2>
          <p className="empty-state-text">
            There are no schools in the database yet. Be the first to add a school and start building our network!
          </p>
          <a href="/" className="empty-state-button">
            ✨ Add Your First School
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="schools-container">
      <div className="schools-header">
        {/* <h1 className="schools-title">Our Amazing Schools</h1>
        <p className="schools-subtitle">
          Discover incredible educational institutions in our growing network
        </p> */}
        <div className="schools-count">
          🎓 {schools.length} {schools.length === 1 ? 'School' : 'Schools'} Found
        </div>
      </div>

      <div className="schools-grid">
        {schools.map((school, index) => (
          <div 
            key={school.id} 
            className="school-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="school-image-container">
              <img
                src={`/schoolImages/${school.image}`}
                alt={school.name}
                className="school-image"
                onError={(e) => {
                  // Fallback image if the uploaded image fails to load
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjE3NSIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TY2hvb2wgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
                }}
              />
              <div className="school-location-badge">
                📍 {school.city}, {school.state}
              </div>
            </div>
            
            <div className="school-info">
              <h3 className="school-name">{school.name}</h3>
              <div className="school-details">
                <div className="school-detail-item">
                  <span className="school-detail-icon">📍</span>
                  <span className="school-detail-text">{school.address}</span>
                </div>
                <div className="school-detail-item">
                  <span className="school-detail-icon">🏙️</span>
                  <span className="school-detail-text">{school.city}, {school.state}</span>
                </div>
                <div className="school-detail-item">
                  <span className="school-detail-icon">📞</span>
                  <span className="school-detail-text">{school.contact}</span>
                </div>
                <div className="school-detail-item">
                  <span className="school-detail-icon">✉️</span>
                  <span className="school-detail-text">{school.email_id}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/"
          className="empty-state-button text-xl px-10 py-4"
        >
          🚀 Add Another School
        </a>
      </div>
    </div>
  );
}
