import React from 'react';

const companies = [
  {
    name: 'Shell',
    industry: 'Consulting & Technology Services',
    openings: 20,
    logo: 'https://1000logos.net/wp-content/uploads/2017/06/Shell-Logo-500x421.png',
    description: 'Shell provides consulting, technology services, and solutions to clients worldwide.'
  },
  {
    name: 'Amazon',
    industry: 'E-Commerce & Cloud Computing',
    openings: 35,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    description: 'Amazon is a global leader in e-commerce and cloud computing services.'
  },
  {
    name: 'Google',
    industry: 'Technology & Internet Services',
    openings: 30,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    description: 'Google specializes in internet services, software, and hardware development.'
  },
  {
    name: 'Microsoft',
    industry: 'Software & Technology',
    openings: 25,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    description: 'Microsoft is a technology company known for its software products and services.'
  },
  {
    name: 'IBM',
    industry: 'Cloud Computing & AI',
    openings: 18,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    description: 'IBM is a global technology and consulting company specializing in cloud computing and AI solutions.'
  },
  {
    name: 'Facebook (Meta)',
    industry: 'Social Media & Technology',
    openings: 15,
    logo: 'https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo.png',
    description: 'Meta is the parent company of Facebook, focusing on social media and the metaverse.'
  },
  {
    name: 'Oracle',
    industry: 'Database Software & Cloud Solutions',
    openings: 12,
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-700x394.png',
    description: 'Oracle is a leader in database software and offers cloud solutions for enterprises.'
  },
  {
    name: 'SAP',
    industry: 'Enterprise Software',
    openings: 10,
    logo: 'https://e7.pngegg.com/pngimages/25/122/png-clipart-sap-se-business-logo-sap-erp-successfactors-business-blue-text.png',
    description: 'SAP provides enterprise software to manage business operations and customer relations.'
  }
];

export default function TopCompanies() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Top Hiring Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <div
            key={company.name}
            className="group text-center hover:scale-105 transform transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-full h-auto mb-2" // Remove rounding and use full logo
              style={{ maxHeight: '50px', objectFit: 'contain' }} // Maintain aspect ratio
            />
            <div>
              <h3 className="font-semibold text-white">{company.name}</h3>
              <p className="text-sm text-gray-300">{company.industry}</p>
            </div>
            <div className="text-sm text-white font-light mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {company.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
