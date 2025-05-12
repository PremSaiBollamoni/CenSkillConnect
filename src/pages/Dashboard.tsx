import { useNavigate } from 'react-router-dom';

import { Briefcase, BookOpen, Users, GraduationCap, Building2 } from 'lucide-react';
import LogoutButton from '../components/LogoutButton';
import TopCompanies from '../components/TopCompanies';

export default function Dashboard() {
  const navigate = useNavigate();

  const options = [
    {
      title: 'Internships',
      icon: GraduationCap,
      path: '/internships',
      description: 'Find internship opportunities',
    },
    {
      title: 'Jobs',
      icon: Briefcase,
      path: '/jobs',
      description: 'Explore job openings',
    },
    {
      title: 'Practice',
      icon: BookOpen,
      path: '/practice',
      description: 'Enhance your skills',
    },
    {
      title: 'Mentorship',
      icon: Users,
      path: '/mentorship',
      description: 'Connect with mentors',
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-gray-300 bg-clip-text text-transparent">
            Welcome to CenSkillConnect
          </h1>
          <LogoutButton />
        </div>

        <div className="card mb-8">
          <div className="flex items-start space-x-6">
            <Building2 className="w-12 h-12 text-red-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">About CenSkillConnect</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                CenSkillConnect is your gateway to career success. We bridge the gap between talent and opportunity, 
                offering a comprehensive platform for job seekers to discover their potential and connect with leading 
                companies across industries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-500 mb-1">1000+</div>
                  <div className="text-sm text-gray-400">Active Jobs</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-500 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Partner Companies</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-500 mb-1">10k+</div>
                  <div className="text-sm text-gray-400">Success Stories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option) => (
            <button
              key={option.title}
              onClick={() => navigate(option.path)}
              className="card hover:scale-105 group"
            >
              <option.icon className="w-12 h-12 mb-4 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-400">{option.description}</p>
            </button>
          ))}
        </div>

        <TopCompanies />

        <div className="mt-12 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Quick Industry Selections</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Technology', 'Healthcare', 'Finance', 'Education'].map((industry) => (
              <button
                key={industry}
                className="p-4 bg-gray-900/50 rounded-lg hover:bg-red-900/30 transition-all duration-300"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}