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

const photo = (id, alt) => ({
  src: u(id, 1200, 72),
  alt,
});

export const gallery = {
  flooring: [
    photo('1694889649834-91ff242d1763', 'Polyaspartic floor coating with decorative flake'),
    photo('1734477127040-c5845f5af500', 'High-gloss epoxy garage floor'),
    photo('1647299852821-40401c0b0976', 'Garage floor before refinishing'),
    photo('1694889649275-6026059d3887', 'Finished concrete floor with light-grey flake'),
    photo('1635108198395-82a67cd5eaec', 'Garage entry with new floor coating'),
    photo('1605649461784-edc01e09ad44', 'Decorative flake floor close-up'),
  ],
  storage: [
    photo('1558985212-326a47fec1bb', 'Slatwall garage storage system with tools'),
    photo('1581094271901-8022df4466f9', 'Custom garage cabinets in matte black'),
    photo('1558985250-27a406d64cb3', 'Overhead garage storage racks'),
    photo('1581092919535-21ec0eaecde8', 'Organized garage shelving wall'),
    photo('1558981403-c5f9899a28bc', 'Custom workbench with pegboard'),
    photo('1581094288338-2314dddb7ece', 'Wall-mounted garage organization system'),
  ],
  lighting: [
    photo('1631679706909-1844bbd07221', 'Bright LED panel garage lighting'),
    photo('1558985212-326a47fec1bb', 'Layered garage lighting design'),
    photo('1610483178636-2f0c7c1c6a44', 'Modern garage with linear LEDs'),
    photo('1604014237800-1c9102c219da', 'Task lighting over workbench'),
    photo('1556228453-efd6c1ff04f6', 'Recessed garage ceiling lighting'),
    photo('1556909114-44e3e9399a2e', 'Accent lighting on cabinets'),
  ],
  full: [
    photo('1734477127040-c5845f5af500', 'Full garage transformation with floor, storage, and lighting'),
    photo('1694889649834-91ff242d1763', 'Showroom-quality finished garage'),
    photo('1581092919535-21ec0eaecde8', 'Complete garage makeover with cabinets'),
    photo('1610483178636-2f0c7c1c6a44', 'Premium garage transformation overview'),
    photo('1581094271901-8022df4466f9', 'Modern luxury garage finish'),
    photo('1604014237800-1c9102c219da', 'Custom-built garage workspace'),
  ],
};
