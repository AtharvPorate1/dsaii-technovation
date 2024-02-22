export const eventStartDate = 'April 1, 2024 10:00:00';

export const coordinators = [
  { name: 'Coordinator 1', roll: 'Roll 1', phone: 'Phone 1', email: 'email1@example.com' },
  { name: 'Coordinator 2', roll: 'Roll 2', phone: 'Phone 2', email: 'email2@example.com' },
  // Add more coordinators here with similar structure
];

export const mainCoordinators = [
  {
    name: 'Main Coordinator 1',
    imgSrc: '/path/to/image1.jpg',
    roles: ['Role 1', 'Role 2']
  },
  {
    name: 'Main Coordinator 2',
    imgSrc: '/path/to/image2.jpg',
    roles: ['Role 3', 'Role 4']
  },
  // Add more main coordinators here with similar structure
];

export const highlights = ['Highlight 1', 'Highlight 2', 'Highlight 3'];

export const events = {
  '0': {
    id: '0',
    title: 'Event 1',
    figureSrc: '/path/to/image.jpg',
    day: 0,
    time: '10:00 - 11:00',
    venue: 'Venue 1',
    desc: 'Description 1',
    type: 'Type 1',
    highlight: false
  },
  // Add more events here with similar structure
};

export const eventSlots = {
  '0': ['EventID1', 'EventID2'],
  '1': ['EventID3', 'EventID4'],
  // Add more event slots here with similar structure
}
