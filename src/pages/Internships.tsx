import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import LocationSelect from '../components/LocationSelect';
import { Calendar, Building2, MapPin, IndianRupee } from 'lucide-react';
import { internshipListings, jobTypes } from '../data/jobListings';
import { useNavigate } from 'react-router-dom';

export default function Internships() {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredInternships = internshipListings.filter(
    (internship) =>
      (!type || internship.type === type) &&
      (!location || internship.location === location) &&
      (!searchTerm || 
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          title="Internship Opportunities" 
          subtitle="Find the perfect internship to kickstart your career"
        />

        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Search
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title or company"
                className="input-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Internship Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="input-primary"
              >
                <option value="">All Types</option>
                {jobTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Location
              </label>
              <LocationSelect value={location} onChange={setLocation} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship, index) => (
            <div 
              key={index} 
              className="card hover:scale-105 cursor-pointer"
              onClick={() => navigate('/apply', { 
                state: { type: 'internship', position: internship.title } 
              })}
            >
              <div className="flex items-center mb-4">
                <img
                  src={internship.logo}
                  alt={internship.company}
                  className="w-12 h-12 rounded-lg mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{internship.title}</h3>
                  <p className="text-gray-400 text-sm">{internship.type}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2" />
                  {internship.company}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {internship.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {internship.duration}
                </div>
                <div className="flex items-center">
                  <IndianRupee className="w-4 h-4 mr-2" />
                  {internship.stipend}
                </div>
              </div>

              <button className="btn-primary w-full mt-4">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No internships found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}