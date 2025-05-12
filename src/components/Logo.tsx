import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-3" aria-label="CenSkillConnect Logo">
      <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg transition-transform transform hover:rotate-6 hover:scale-105">
        <Briefcase className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-extrabold bg-gradient-to-r from-red-500 to-gray-300 bg-clip-text text-transparent transition duration-300 ease-in-out hover:text-gray-500">
        CenSkillConnect
      </span>
    </div>
  );
}
