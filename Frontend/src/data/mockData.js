/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const DEFAULT_USERS = [
  {
    id: 'pulas-kayu',
    name: 'Pulas Kayu',
    email: 'pulas@mentalwellness.app',
    avatar: '🌸',
    joinedDate: '2026-05-01'
  }
];

export const DEFAULT_MOODS = [
  {
    id: 'mood-1',
    userId: 'pulas-kayu',
    mood: 'calm',
    note: 'Felt really peaceful reading during my lunch break today.',
    date: '2026-06-10'
  },
  {
    id: 'mood-2',
    userId: 'pulas-kayu',
    mood: 'happy',
    note: 'Spent time with friends in the park. The sunset was incredible!',
    date: '2026-06-11'
  },
  {
    id: 'mood-3',
    userId: 'pulas-kayu',
    mood: 'stressed',
    note: 'Feeling overwhelmed with coding assignments and deadlines.',
    date: '2026-06-12'
  },
  {
    id: 'mood-4',
    userId: 'pulas-kayu',
    mood: 'anxious',
    note: 'A bit anxious about tomorrow\'s test, but looking forward to the weekend.',
    date: '2026-06-13'
  },
  {
    id: 'mood-5',
    userId: 'pulas-kayu',
    mood: 'happy',
    note: 'Scored well on the design project! Stayed hopeful and did my best.',
    date: '2026-06-14'
  }
];

export const DEFAULT_JOURNALS = [
  {
    id: 'journal-1',
    userId: 'pulas-kayu',
    title: 'Finding Peace in the Commute',
    content: 'Today, instead of scrolling on social media during my bus ride, I plugged in my headphones and listened to peaceful ambient acoustic music. It changed the entire mood of my day. I felt so much more grounded.',
    mood: 'calm',
    date: '2026-06-10T14:30:00.000Z'
  },
  {
    id: 'journal-2',
    userId: 'pulas-kayu',
    title: 'A Bright Sunset & Warm Tea',
    content: 'After a busy week of studying, I made a warm cup of peppermint tea and walked to the park. The sunset was soft peach and purple. I need to remind myself to take these small breaks. Self-care is not a reward, it is a foundation.',
    mood: 'happy',
    date: '2026-06-11T18:45:00.000Z'
  },
  {
    id: 'journal-3',
    userId: 'pulas-kayu',
    title: 'Academic Pressures getting to me',
    content: 'Today I felt overwhelmed with multiple assignments. My chest felt tight and I struggled to focus. But I stopped, closed my eyes, completed a simple 4-4-6 breathing cycle, and felt better after going for a brief walk. It\'s okay to take things one step at a time.',
    mood: 'stressed',
    date: '2026-06-12T10:15:00.000Z'
  }
];
