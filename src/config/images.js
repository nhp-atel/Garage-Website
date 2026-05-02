// Photos sourced from Unsplash (free under the Unsplash License).
// Swap any URL below to update site-wide imagery.

const u = (id, w = 1600, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  // Hero — right-side feature image
  hero: {
    src: u('1694889649834-91ff242d1763', 1400, 80),
    srcSet: `${u('1694889649834-91ff242d1763', 800, 70)} 800w, ${u('1694889649834-91ff242d1763', 1400, 78)} 1400w, ${u('1694889649834-91ff242d1763', 2000, 80)} 2000w`,
    alt: 'Modern residential garage with finished interior and EV charger',
    credit: 'Photo: Unsplash',
  },

  // Before / After comparison
  before: {
    src: u('1647299852821-40401c0b0976', 1600, 75),
    srcSet: `${u('1647299852821-40401c0b0976', 900, 70)} 900w, ${u('1647299852821-40401c0b0976', 1600, 75)} 1600w`,
    alt: 'Cluttered, disorganized garage filled with tools and storage before transformation',
  },
  after: {
    src: u('1734477127040-c5845f5af500', 1600, 78),
    srcSet: `${u('1734477127040-c5845f5af500', 900, 70)} 900w, ${u('1734477127040-c5845f5af500', 1600, 78)} 1600w`,
    alt: 'Clean, finished garage with polished floor and organized space after transformation',
  },

  // Accent — used in problem/services
  accent1: {
    src: u('1694889649275-6026059d3887', 1200, 75),
    alt: 'Modern garage interior with EV charger and finished walls',
  },

  // Cluttered detail (a different cluttered shot for the problem section)
  cluttered: {
    src: u('1635108198395-82a67cd5eaec', 1200, 72),
    alt: 'Cluttered residential workshop garage interior',
  },
};
