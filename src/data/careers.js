export const companies = [
  {
    id: 'ryanair',
    name: 'Ryanair',
    positions: [
      {
        id: 'flight-deck',
        title: 'Flight Deck',
        posted: '19/01/2026',
        summary:
          "Train with our experienced senior pilots and become a First Officer. Work closely with Cabin Crew to ensure a smooth and safe flight. Opportunities to progress to Senior First Officer, Captain, or qualify for our exclusive A320 fleet.",
        applyUrl: '#'
      },
      {
        id: 'cabin-crew',
        title: 'Cabin Crew',
        posted: '19/01/2026',
        summary:
          "Check in passengers, greet them at the plane, and serve onboard at cruise. Progress to Team Leader managing daily efficiency, or Director of Inflight.",
        applyUrl: '#'
      },
      {
        id: 'ground-handling-agent',
        title: 'Ground Handling Agent',
        posted: '19/01/2026',
        summary:
          "Load bags, refuel aircraft, manage catering, and drive airside vehicles. Marshal aircraft and ensure departures run smoothly. Grow into Team Leader or Director of Ground Operations.",
        applyUrl: '#'
      }
    ]
  }
];

export const totalPositions = companies.reduce((acc, c) => acc + c.positions.length, 0);
