import { gallery } from './images.js';

export const serviceDetails = {
  flooring: {
    slug: 'flooring',
    label: '01',
    eyebrow: 'Garage flooring',
    title: 'Floors built for daily use, designed to last.',
    intro:
      'Polyaspartic, epoxy, and decorative flake systems engineered for daily wear, hot tire pickup, and Midwest winters. Every floor starts with full surface prep so the finish bonds properly and looks right for years.',
    photos: gallery.flooring,
    sections: [
      {
        title: 'Coating systems',
        items: [
          { name: 'Polyaspartic', detail: 'Cures in one day. UV-stable. Best for full-day use and severe winters.' },
          { name: 'Epoxy', detail: 'Reliable, durable, and more affordable. Strong daily-use option.' },
          { name: 'Decorative flake', detail: 'Adds depth, hides imperfections, and improves grip. Available in custom blends.' },
        ],
      },
      {
        title: 'What\'s included',
        items: [
          { name: 'Surface prep', detail: 'Diamond grinding or shot blasting for proper adhesion.' },
          { name: 'Crack repair', detail: 'Structural repairs and joint filling before coating.' },
          { name: 'Topcoat', detail: 'Clear UV-stable topcoat for chemical and stain resistance.' },
          { name: 'Final inspection', detail: 'Walk-through and care guide before sign-off.' },
        ],
      },
    ],
    timeline: '1–2 days on site',
  },
  storage: {
    slug: 'storage',
    label: '02',
    eyebrow: 'Storage solutions',
    title: 'Storage designed around how you actually use your space.',
    intro:
      'We design the layout first, then build it. The result is a garage where everything has a place — and where the floor stays clear for what actually belongs there.',
    photos: gallery.storage,
    sections: [
      {
        title: 'Systems we install',
        items: [
          { name: 'Slatwall', detail: 'Modular wall panels with hooks, baskets, and shelves. Reconfigurable as your needs change.' },
          { name: 'Overhead racks', detail: 'Ceiling-mounted storage for seasonal items, luggage, and bulk goods.' },
          { name: 'Custom cabinets', detail: 'Built-in cabinets in finishes that match your floor and walls.' },
          { name: 'Workbenches', detail: 'Custom-sized work surfaces with integrated pegboard and lighting.' },
        ],
      },
      {
        title: 'Built around your routine',
        items: [
          { name: 'Layout planning', detail: 'We map storage to how you actually use the space — not just where walls happen to be.' },
          { name: 'Tool organization', detail: 'Dedicated zones for tools, sports, lawn care, and seasonal items.' },
          { name: 'Expandable', detail: 'Systems can grow as your storage needs change.' },
        ],
      },
    ],
    timeline: '1–2 days on site',
  },
  lighting: {
    slug: 'lighting',
    label: '03',
    eyebrow: 'Lighting upgrades',
    title: 'Brighter, more polished, and easier to work in.',
    intro:
      'Most garages are under-lit and use the wrong color temperature. We design layered lighting — ambient, task, and accent — so the space feels finished and works for every use.',
    photos: gallery.lighting,
    sections: [
      {
        title: 'Lighting layers',
        items: [
          { name: 'Ambient', detail: 'Bright, even overhead LED panels for full-space coverage.' },
          { name: 'Task', detail: 'Focused lighting over workbenches, tool zones, and storage areas.' },
          { name: 'Accent', detail: 'Cabinet and toe-kick lighting for that finished, showroom feel.' },
        ],
      },
      {
        title: 'Why it matters',
        items: [
          { name: 'Safety', detail: 'Proper lighting reduces accidents and makes the space easier to use after dark.' },
          { name: 'Showroom quality', detail: 'The right light makes a great floor and storage system actually look great.' },
          { name: 'Smart switching', detail: 'Optional dimmers and zone control for different uses.' },
        ],
      },
    ],
    timeline: 'Half day to 1 day on site',
  },
  'wall-finishing': {
    slug: 'wall-finishing',
    label: '04',
    eyebrow: 'Wall & finishing',
    title: 'Finished walls that match the rest of your home.',
    intro:
      'The walls are what people see first when the door goes up. We handle drywall, paint, trim, and ceiling finishing so the garage stops looking like a garage — and starts looking like a real room.',
    photos: gallery.full,
    sections: [
      {
        title: 'What we handle',
        items: [
          { name: 'Drywall', detail: 'Repair, replace, or finish unfinished drywall to a clean paint-ready state.' },
          { name: 'Paint', detail: 'Premium interior paint in your choice of color — including bronze accent walls.' },
          { name: 'Trim & baseboard', detail: 'Crown molding, baseboards, and door casings to match your home.' },
          { name: 'Ceiling', detail: 'Smooth or textured ceiling finishing, including drop ceiling options.' },
        ],
      },
      {
        title: 'The difference it makes',
        items: [
          { name: 'Looks finished', detail: 'A painted, trimmed garage instantly looks like part of the home.' },
          { name: 'Easier to clean', detail: 'Sealed walls and proper paint repel dust and clean easily.' },
          { name: 'Higher resale', detail: 'Finished garages add real value and curb appeal.' },
        ],
      },
    ],
    timeline: '1–3 days on site',
  },
  custom: {
    slug: 'custom',
    label: '05',
    eyebrow: 'Custom upgrades',
    title: 'Bespoke additions that make the garage truly yours.',
    intro:
      'EV chargers, dog wash stations, custom shop layouts, hobby zones — the additions that turn a great garage into one that fits your life specifically.',
    photos: gallery.full,
    sections: [
      {
        title: 'Popular custom builds',
        items: [
          { name: 'EV charger installation', detail: 'Level 2 charger install with proper electrical and finished cable management.' },
          { name: 'Dog wash stations', detail: 'Plumbed wash stations with proper drainage — perfect for muddy paws.' },
          { name: 'Shop layouts', detail: 'Workbenches, tool storage, and dust collection designed around your craft.' },
          { name: 'Hobby zones', detail: 'Dedicated spaces for bikes, golf, fitness, or anything else.' },
        ],
      },
      {
        title: 'How it works',
        items: [
          { name: 'Discovery', detail: 'We walk through your space and discuss how you want to use it.' },
          { name: 'Custom design', detail: 'We design the addition to integrate with your flooring, storage, and lighting.' },
          { name: 'Install', detail: 'Same coordinated team handles every part of the build.' },
        ],
      },
    ],
    timeline: 'Varies by scope',
  },
};
