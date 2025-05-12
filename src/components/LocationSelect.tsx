import React from 'react';

interface LocationSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function LocationSelect({ value, onChange }: LocationSelectProps) {
  const locations = [
    'Bangalore',
    'Mumbai',
    'Delhi',
    'Hyderabad',
    'Chennai',
    'Pune',
    'Remote',
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="input-primary"
    >
      <option value="">Select Location</option>
      {locations.map((location) => (
        <option key={location} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
}