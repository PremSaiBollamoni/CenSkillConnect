import React from 'react';
import PageHeader from '../components/PageHeader';
import { Users } from 'lucide-react';

export default function Mentorship() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          title="Mentorship Program" 
          subtitle="Connect with industry experts and accelerate your career growth"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <Users className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
            <p className="text-gray-400">
              Our mentorship program is under development. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}