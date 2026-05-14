// Photos sourced from Unsplash (free under the Unsplash License).
// Swap any URL below to update site-wide imagery.

const u = (id, w = 1600, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  hero: {
    src: u('1694889649834-91ff242d1763', 1400, 80),
    srcSet: `${u('1694889649834-91ff242d1763', 800, 70)} 800w, ${u('1694889649834-91ff242d1763', 1400, 78)} 1400w, ${u('1694889649834-91ff242d1763', 2000, 80)} 2000w`,
    alt: 'Modern residential garage with finished interior and EV charger',
    credit: 'Photo: Unsplash',
  },

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

  accent1: {
    src: u('1694889649275-6026059d3887', 1200, 75),
    alt: 'Modern garage interior with EV charger and finished walls',
  },

  cluttered: {
    src: u('1635108198395-82a67cd5eaec', 1200, 72),
    alt: 'Cluttered residential workshop garage interior',
  },
};

// Gallery uses picsum.photos with stable seeds — guaranteed to load.
// Swap each entry with real project photos when available.
const placeholder = (seed, alt) => ({
  src: `https://picsum.photos/seed/${seed}/1200/900`,
  alt,
});

export const gallery = {
  flooring: [
    placeholder('mg-floor-1', 'Polyaspartic floor coating with decorative flake'),
    placeholder('mg-floor-2', 'High-gloss epoxy garage floor'),
    placeholder('mg-floor-3', 'Finished concrete floor with light-grey flake'),
    placeholder('mg-floor-4', 'Garage entry with new floor coating'),
    placeholder('mg-floor-5', 'Decorative flake floor close-up'),
    placeholder('mg-floor-6', 'Three-car garage with full coating system'),
  ],
  storage: [
    placeholder('mg-store-1', 'Slatwall garage storage system with tools'),
    placeholder('mg-store-2', 'Custom garage cabinets in matte black'),
    placeholder('mg-store-3', 'Overhead garage storage racks'),
    placeholder('mg-store-4', 'Organized garage shelving wall'),
    placeholder('mg-store-5', 'Custom workbench with pegboard'),
    placeholder('mg-store-6', 'Wall-mounted garage organization system'),
  ],
  lighting: [
    placeholder('mg-light-1', 'Bright LED panel garage lighting'),
    placeholder('mg-light-2', 'Layered garage lighting design'),
    placeholder('mg-light-3', 'Modern garage with linear LEDs'),
    placeholder('mg-light-4', 'Task lighting over workbench'),
    placeholder('mg-light-5', 'Recessed garage ceiling lighting'),
    placeholder('mg-light-6', 'Accent lighting on cabinets'),
  ],
  full: [
    placeholder('mg-full-1', 'Full garage transformation with floor, storage, and lighting'),
    placeholder('mg-full-2', 'Showroom-quality finished garage'),
    placeholder('mg-full-3', 'Complete garage makeover with cabinets'),
    placeholder('mg-full-4', 'Premium garage transformation overview'),
    placeholder('mg-full-5', 'Modern luxury garage finish'),
    placeholder('mg-full-6', 'Custom-built garage workspace'),
  ],
};
