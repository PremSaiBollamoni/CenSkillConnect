import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Code, Brain, FileText, PenTool } from 'lucide-react';

export default function Practice() {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Coding Assessment',
      icon: Code,
      path: '/practice/coding',
      description: 'Practice coding problems and improve your skills',
    },
    {
      title: 'Aptitude Test',
      icon: Brain,
      path: '/practice/aptitude',
      description: 'Enhance your logical and mathematical thinking',
    },
    {
      title: 'Reasoning',
      icon: PenTool,
      path: '/practice/reasoning',
      description: 'Sharpen your analytical and reasoning abilities',
    },
    {
      title: 'Resume Builder',
      icon: FileText,
      path: '/practice/resume',
      description: 'Learn how to create an effective resume',
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          title="Practice & Improve" 
          subtitle="Enhance your skills with our comprehensive practice sections"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <button
              key={section.title}
              onClick={() => navigate(section.path)}
              className="card text-left"
            >
              <section.icon className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}