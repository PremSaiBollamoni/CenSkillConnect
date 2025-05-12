import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import LocationSelect from '../components/LocationSelect';
import toast from 'react-hot-toast';

export default function ApplicationForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { type } = location.state || { type: 'fresher' };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: type === 'experienced' ? '' : '0',
    jobType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <PageHeader 
          title="Job Application" 
          subtitle={`Application form for ${type} position`}
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="input-primary"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="input-primary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Phone
            </label>
            <input
              type="tel"
              required
              className="input-primary"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Preferred Location
            </label>
            <LocationSelect
              value={formData.location}
              onChange={(value) => setFormData({ ...formData, location: value })}
            />
          </div>

          {type === 'experienced' && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Years of Experience
              </label>
              <input
                type="number"
                required
                min="1"
                className="input-primary"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
            </div>
          )}

          <button type="submit" className="btn-primary w-full">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}