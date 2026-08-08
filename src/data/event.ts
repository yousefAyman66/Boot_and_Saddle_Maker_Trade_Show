// Single source of truth for all event information.
// Update these values for future events (e.g. the 39th Annual).

export const event = {
  name: 'Boot & Saddle Maker Trade Show',
  edition: '38th Annual',
  year: 2026,
  dates: 'October 2–3, 2026',
  datesShort: 'Oct 2–3, 2026',
  isoStart: '2026-10-02T09:00:00-05:00', // Central Daylight Time
  isoEnd: '2026-10-03T17:00:00-05:00',
  hours: '9:00 AM – 5:00 PM',
  venue: {
    name: 'The MPEC',
    street: '1000 Fifth Street',
    city: 'Wichita Falls',
    state: 'TX',
    fullAddress: '1000 Fifth Street, Wichita Falls, TX',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+MPEC+1000+Fifth+Street+Wichita+Falls+TX',
    embedUrl:
      'https://www.google.com/maps?q=The+MPEC,1000+Fifth+Street,Wichita+Falls,TX&output=embed',
  },
} as const;

export const generalContact = {
  person: 'Kathy Kimmel',
  phone: '(325) 330-1380',
  phoneHref: 'tel:+13253301380',
} as const;

export const privacyContact = {
  name: 'Boot and Saddle Maker Trade Show',
  phone: '(254) 977-3226',
  phoneHref: 'tel:+12549773226',
  street: '2080 CR 304',
  city: 'Comanche',
  state: 'TX',
  zip: '76442',
  address: '2080 CR 304, Comanche, TX 76442',
} as const;

export const privacyPolicyLastUpdated = 'June 2026';

export const site = {
  url: 'bootandsaddlemakertradeshow.com',
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Seminars', href: '#seminars' },
  { label: 'Boot Contest', href: '#boot-contest' },
  { label: 'Saddle Contest', href: '#saddle-contest' },
  { label: 'Registration', href: '#registration' },
  { label: 'Contact', href: '#contact' },
];
