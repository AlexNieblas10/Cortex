// ── Company ───────────────────────────────────────────────────────────────────
export const COMPANY = {
  name:      'Nexara Systems',
  initials:  'NX',
  tagline:   'Edge Intelligence for Critical Industries',
  copyright: '2025',
} as const;

// ── Product ───────────────────────────────────────────────────────────────────
export const PRODUCT = {
  name:       'COREX-R1',
  shortName:  'COREX',
  version:    'R1',
  generation: 'Prototype R1 · FET3576-C Module',
  tagline:    'Edge Platform for Critical Industry',
  description:
    'Linux embedded computer based on the FET3576-C module (Rockchip RK3576), designed for edge ' +
    'computing, telematics, local control, monitoring, data acquisition and remote communication ' +
    'in mobile or industrial environments. Features modular architecture with cellular/GNSS, CAN-FD, ' +
    'protected USB ports, integrated audio, low-side control output and advanced power management.',
  badgeLabel: 'Preliminary specs',
  chipStatus: 'Unit online',
  chipSub:    'Linux OS · LTE active',
  metaDesc:
    'COREX-R1: FET3576-C (RK3576) embedded platform with LTE/4G, GNSS, CAN-FD, protected USB and sleep mode. ' +
    'Built for industrial telematics, edge computing and battery-powered field deployments.',
} as const;

// ── Pricing / CTA ─────────────────────────────────────────────────────────────
export const PRICING = {
  availabilityLabel: 'Request a quote',
  ctaTitle:          'Get a quote for the COREX-R1',
  ctaDesc:
    'Tell us your expected volume and any custom requirements. ' +
    'Our team will get back to you with pricing, lead times, and integration support.',
} as const;

// ── Quote form ────────────────────────────────────────────────────────────────
export const QUOTE_FORM = {
  emailLabel:      'Work email',
  emailPlaceholder:'you@company.com',
  qtyLabel:        'Expected quantity',
  qtyPlaceholder:  'e.g. 50',
  periodLabel:     'per',
  periodOptions:   ['month', 'quarter', 'year'] as const,
  msgLabel:        'Custom requirements (optional)',
  msgPlaceholder:  'Describe any modifications, certifications, or integration needs…',
  submitBtn:       'Request quote',
  submitLoading:   'Sending…',
} as const;

// ── UI / Button labels ────────────────────────────────────────────────────────
export const UI = {
  btnQuote:  'Request a quote',
  btnSpecs:  'View specifications',
  btnCancel: 'Close',
} as const;

// ── Quote submission error ────────────────────────────────────────────────────
export const QUOTE_ERROR = {
  title: 'Quote request could not be sent',
  body:
    'We were unable to submit your request at this time. ' +
    'Please try again or reach us directly at sales@nexarasystems.com.',
  code:  'ERR_SUBMIT_TIMEOUT_502',
} as const;

// ── Hero stats ────────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { val: 'RK3576',   label: 'FET3576-C module'     },
  { val: 'LTE / 4G', label: 'SIM7600G-H · GNSS'   },
  { val: '9–36 VDC', label: '12 V & 24 V systems'  },
  { val: 'CAN-FD',   label: 'OBD2 / J1939 ready'  },
] as const;

// ── Features strip ────────────────────────────────────────────────────────────
export const STRIP_FEATURES = [
  { icon: 'cpu',        val: 'RK3576',      label: 'FET3576-C module'   },
  { icon: 'wifi',       val: '4G / LTE',    label: 'SIM7600G-H'         },
  { icon: 'navigation', val: 'GNSS / GPS',  label: 'Integrated antenna' },
  { icon: 'zap',        val: 'CAN-FD',      label: 'OBD2 / J1939'       },
  { icon: 'shield',     val: 'USB Killer',  label: 'Protection'          },
  { icon: 'battery',    val: 'Sleep mode',  label: 'Low consumption'     },
] as const;

// ── Use cases ─────────────────────────────────────────────────────────────────
export const USE_CASES = [
  {
    icon:  'truck',
    title: 'Fleet telematics',
    desc:
      'Continuous GPS/GNSS tracking, CAN-FD odometer readings and OBD/J1939 diagnostics ' +
      'with real-time LTE transmission for heavy transport and mining fleet operators.',
  },
  {
    icon:  'tool',
    title: 'Local control & automation',
    desc:
      'Embedded controller for signal acquisition, relay activation via low-side output and local ' +
      'reporting without cloud dependency in plants and remote installations.',
  },
  {
    icon:  'wifi',
    title: 'IoT gateway in off-grid zones',
    desc:
      '4G data concentrator for industrial sensors in mines, pipelines ' +
      'and construction sites where fixed network infrastructure is unavailable.',
  },
  {
    icon:  'camera',
    title: 'Vision & data acquisition',
    desc:
      'Multi-camera USB processing and data acquisition at the edge using the RK3576, ' +
      'eliminating cloud latency and reducing bandwidth requirements.',
  },
  {
    icon:  'lock',
    title: 'Perimeter security',
    desc:
      'Embedded DVR, access control and alarm systems with integrated cellular ' +
      'communication for critical facilities without available LAN.',
  },
  {
    icon:  'zap',
    title: 'Energy management & SCADA',
    desc:
      'Local monitoring of substations, generators and solar plants with ' +
      '9–36 VDC tolerance and sleep mode for battery-powered deployments.',
  },
] as const;

// ── Technical specifications ──────────────────────────────────────────────────
export const SPECS = [
  { label: 'Compute module',      value: 'FET3576-C · Rockchip RK3576 · high-performance ARM' },
  { label: 'Operating system',    value: 'Embedded Linux'                                      },
  { label: 'Memory & storage',    value: 'RAM + eMMC integrated in FET3576-C (version-dependent)' },
  { label: 'Cellular module',     value: 'SIM7600G-H · LTE / 4G'                              },
  { label: 'GNSS',                value: 'Integrated via SIM7600G-H · dedicated antenna connector' },
  { label: 'Field bus',           value: 'CAN-FD · ESD-protected transceiver · OBD2 / J1939 ready' },
  { label: 'USB Host ports',      value: 'USB 2.0 Host via hub · USB Killer protection'        },
  { label: 'USB OTG',             value: 'Service port for programming, recovery & Maskrom'    },
  { label: 'Audio',               value: 'Amplified outputs · external or internal speakers'   },
  { label: 'Control output',      value: '1× Low-side for external relay or inductive load'    },
  { label: 'Power input',         value: '9–36 VDC · compatible with 12 V and 24 V systems'   },
  { label: 'DC-DC regulation',    value: 'Internal converters + buck-boost for FET3576-C'      },
  { label: 'Power management',    value: 'Auxiliary MCU · sleep mode · MOSFET / load switches' },
  { label: 'External wakeup',     value: 'External input for system activation'                },
  { label: 'SIM',                 value: 'Removable phone-type SIM connector'                  },
  { label: 'Status indicators',   value: 'LEDs: power · system · LTE · GNSS · comms · fault'  },
  { label: 'Thermal management',  value: 'Internal fan connector · active cooling ready'       },
] as const;

// ── Electrical protection badges ──────────────────────────────────────────────
export const PROTECTIONS = [
  'Short circuit',
  'Reverse polarity',
  'Overcurrent (OCP)',
  'Line transients',
  'Voltage variation',
  'ESD on all ports',
  'USB Killer protection',
  'High-voltage injection (USB)',
  'CAN-FD line protection',
  'Low-side inductive load',
  'Power input protection',
  'External signal conditioning',
] as const;

// ── Image gallery ─────────────────────────────────────────────────────────────
export const GALLERY = [
  { src: '/render-hero.png',    label: '3/4 view',       alt: 'COREX-R1 front panel — USB ports and connectors' },
  { src: '/render-antenna.png', label: 'Antenna / Fan',  alt: 'COREX-R1 antenna connectors cellular, GNSS and fan' },
  { src: '/render-ports.png',   label: 'Port panel',     alt: 'COREX-R1 port panel — front view'                },
] as const;

// ── Specs section side images ─────────────────────────────────────────────────
export const SPECS_IMAGES = [
  { src: '/render-iso1.png', alt: 'COREX-R1 isometric view — industrial environment' },
  { src: '/render-iso2.png', alt: 'COREX-R1 side view — antenna and fan detail'      },
] as const;

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '#gallery',      label: 'Product'        },
  { href: '#applications', label: 'Applications'   },
  { href: '#specs',        label: 'Specifications' },
  { href: '#about',        label: 'About'          },
  { href: '#cta',          label: 'Quote'          },
] as const;

// ── About Us ──────────────────────────────────────────────────────────────────
export const ABOUT = {
  tag:   'About Nexara Systems',
  title: 'Decades of industrial expertise, trusted worldwide',
  desc:
    'Since 2008, Nexara Systems has designed and delivered mission-critical edge computing ' +
    'solutions to industries where failure is not an option. From our R&D lab to the most demanding field deployments, ' +
    'every product carries seventeen years of engineering precision.',

  milestones: [
    { val: '17+',   label: 'Years in the industry'  },
    { val: '3,200+', label: 'Units deployed globally' },
    { val: '40+',   label: 'Countries served'         },
    { val: '98.7%', label: 'Uptime across fleets'     },
  ],

  testimonials: [
    {
      quote:
        'The COREX-R1 replaced three separate devices in our mining fleet. ' +
        'Eighteen months of continuous operation through Chilean desert conditions — zero failures.',
      author: 'Carlos M.',
      role:   'Fleet Operations Manager · Minera del Norte',
      stars:  5,
    },
    {
      quote:
        'Integration took less than a day. The CAN-FD bus worked out of the box with our J1939 stack ' +
        'and LTE signal has been rock-solid across remote sites.',
      author: 'Petra H.',
      role:   'Lead Embedded Engineer · TransEurope Logistics',
      stars:  5,
    },
    {
      quote:
        "Nexara's support team is exceptional. They helped us adapt firmware for a custom SCADA protocol " +
        'in under 48 hours. Outstanding product, outstanding company.',
      author: 'James T.',
      role:   'OT Systems Architect · PowerGrid Solutions',
      stars:  5,
    },
  ],

  highlights: [
    {
      icon:  'award',
      title: 'ISO 9001 Certified',
      desc:  'Our quality management system is certified to ISO 9001:2015, ensuring every unit meets the same high standard.',
    },
    {
      icon:  'shield',
      title: 'CE & FCC Compliant',
      desc:  'All products carry CE and FCC marks, cleared for deployment across North America, the EU, and Latin America.',
    },
    {
      icon:  'users',
      title: 'Dedicated engineering support',
      desc:  'Every client gets direct access to our embedded engineers — not a ticket queue. Real help, real fast.',
    },
    {
      icon:  'globe',
      title: 'Global distribution network',
      desc:  'Stocking partners in 12 countries guarantee lead times under two weeks for standard configurations.',
    },
  ],
} as const;
