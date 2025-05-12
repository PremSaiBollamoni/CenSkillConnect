import React from 'react';
import PageHeader from '../components/PageHeader';
import { FileText, CheckSquare, AlertCircle } from 'lucide-react';

export default function ResumeBuilder() {
  const tips = [
    {
      title: 'Professional Summary',
      content: 'Write a compelling 2-3 sentence summary highlighting your key skills and career objectives.',
      icon: FileText
    },
    {
      title: 'Work Experience',
      content: 'List your experience in reverse chronological order. Use action verbs and quantify achievements.',
      icon: CheckSquare
    },
    {
      title: 'Skills Section',
      content: 'Include both technical and soft skills relevant to your target role.',
      icon: AlertCircle
    }
  ];

  const sections = [
    {
      title: 'Contact Information',
      items: [
        'Full name',
        'Professional email address',
        'Phone number',
        'Location (City, State)',
        'LinkedIn profile (optional)'
      ]
    },
    {
      title: 'Education',
      items: [
        'Degree and major',
        'University name',
        'Graduation year',
        'Relevant coursework',
        'Academic achievements'
      ]
    },
    {
      title: 'Technical Skills',
      items: [
        'Programming languages',
        'Frameworks and libraries',
        'Development tools',
        'Databases',
        'Cloud platforms'
      ]
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          title="Resume Builder" 
          subtitle="Learn how to create an effective resume"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {tips.map((tip) => (
            <div key={tip.title} className="card">
              <tip.icon className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-400">{tip.content}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="card">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-400">
                    <CheckSquare className="w-4 h-4 text-red-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 card">
          <h3 className="text-xl font-semibold mb-4">Pro Tips</h3>
          <ul className="space-y-3">
            <li className="flex items-start text-gray-400">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
              Tailor your resume for each job application
            </li>
            <li className="flex items-start text-gray-400">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
              Keep it concise - aim for 1-2 pages
            </li>
            <li className="flex items-start text-gray-400">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
              Use keywords from the job description
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}