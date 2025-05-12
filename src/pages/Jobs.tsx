import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import LocationSelect from '../components/LocationSelect';
import { Building2, MapPin, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Jobs() {
  const [category, setCategory] = useState<'fresher' | 'experienced' | ''>('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          title="Job Opportunities" 
          subtitle="Find your next career opportunity"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <button
            onClick={() => setCategory('fresher')}
            className={`card text-left ${
              category === 'fresher' ? 'border-red-500' : ''
            }`}
          >
            <Briefcase className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fresher Jobs</h3>
            <p className="text-gray-400">
              Perfect for recent graduates and those starting their career
            </p>
          </button>

          <button
            onClick={() => setCategory('experienced')}
            className={`card text-left ${
              category === 'experienced' ? 'border-red-500' : ''
            }`}
          >
            <Building2 className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experienced Professionals</h3>
            <p className="text-gray-400">
              Opportunities for professionals with work experience
            </p>
          </button>
        </div>

        {category && (
          <div className="mt-8">
            <button
              onClick={() => navigate('/apply', { state: { type: category }})}
              className="btn-primary"
            >
              Continue to Application
            </button>
          </div>
        )}
      </div>
    </div>
  );
}