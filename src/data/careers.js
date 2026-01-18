export const companies = [
  {
    id: 'ryanair',
    name: 'Ryanair',
    positions: [
      { id: 'gha', title: 'Ground Handling Agent', posted: '11/03/2025', summary: 'Support safe and efficient turnarounds: ramp, baggage, and dispatch.', applyUrl: '#' },
      { id: 'police-officer', title: 'Police Officer', posted: '11/03/2025', summary: 'Patrol terminals, respond to incidents, and ensure passenger safety.', applyUrl: '#' },
      { id: 'cadet-pilot', title: 'Cadet Pilot', posted: '11/03/2025', summary: 'Learn operations and fly sectors as First Officer under supervision.', applyUrl: '#' }
    ]
  },
  { id: 'aether-media', name: 'Aether Media', positions: [
      { id: 'video-editor', title: 'Video Editor', posted: '10/03/2025', summary: 'Edit trailers, recaps, and social clips with brand consistency.', applyUrl: '#' },
      { id: 'graphic-designer', title: 'Graphic Designer', posted: '10/03/2025', summary: 'Create campaign assets and thumbnails that drive engagement.', applyUrl: '#' }
    ]
  },
  { id: 'aether-academy', name: 'Aether Academy', positions: [
      { id: 'teacher', title: 'Teacher', posted: '09/03/2025', summary: 'Lead roleplay lessons and manage classroom experiences effectively.', applyUrl: '#' }
    ]
  },
  { id: 'ofsted', name: 'Ofsted', positions: [
      { id: 'inspector', title: 'Inspector', posted: '08/03/2025', summary: 'Audit standards across education groups and publish findings.', applyUrl: '#' }
    ]
  }
];

export const totalPositions = companies.reduce((acc, c) => acc + c.positions.length, 0);
