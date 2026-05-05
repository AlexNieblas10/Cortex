// ── Company ───────────────────────────────────────────────────────────────────
export const COMPANY = {
  name:      'Nexara Systems',
  initials:  'NX',
  tagline:   'Edge Intelligence for Critical Industries',
  copyright: '2025',
} as const;

// ── Product ───────────────────────────────────────────────────────────────────
export const PRODUCT = {
  name:       'COREX-9',
  shortName:  'COREX',
  version:    '9',
  generation: 'Generation 9 · Industrial Series',
  tagline:    'Edge Platform for Critical Industry',
  description:
    'Eight-core ARM embedded computing platform with native LTE/4G connectivity, ' +
    'integrated GNSS positioning, protected CAN-FD bus and four high-resistance USB ports. ' +
    'Engineered for uninterrupted operations in heavy transport, industrial automation and remote IoT networks.',
  badgeLabel: 'New generation',
  chipStatus: 'Unit online',
  chipSub:    'Linux OS · LTE active',
  metaDesc:
    'COREX-9: 8-core ARM embedded platform with LTE, GNSS, CAN-FD and protected USB. ' +
    'Built for industrial telematics, edge computing and critical IoT networks.',
} as const;

// ── Pricing ───────────────────────────────────────────────────────────────────
export const PRICING = {
  amount:            '$2,490 USD',
  note:              'Unit price · Tax not included · Shipping quoted per project',
  warranty:          '12-month warranty · Nexara technical support included',
  availabilityLabel: 'Available now',
  ctaTitle:          'Deploy the COREX-9 in your operation',
  ctaDesc:
    'Eight ARM cores, native cellular connectivity, integrated GNSS and professional-grade ' +
    'industrial protections — one unit ready to deploy in the field.',
} as const;

// ── UI / Button labels ────────────────────────────────────────────────────────
export const UI = {
  btnBuy:        'Buy now',
  btnBuyLoading: 'Processing...',
  btnQuote:      'Request a quote',
  btnSpecs:      'View specifications',
  btnCancel:     'Close',
} as const;

// ── Simulated payment error ───────────────────────────────────────────────────
export const PAYMENT_ERROR = {
  title: 'Payment could not be processed',
  body:
    'The payment processor did not respond within the expected time. ' +
    'Please try again in a few moments or contact us directly to arrange your purchase.',
  code:  'ERR_GATEWAY_TIMEOUT_502',
} as const;

// ── Hero stats ────────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { val: '8 cores',  label: 'ARM Cortex-A76/A55' },
  { val: '4× USB',   label: 'AntiKill protection'  },
  { val: '9–36 VDC', label: 'Industrial range'     },
  { val: 'CAN-FD',   label: 'Vehicle / OBD bus'    },
] as const;

// ── Features strip ────────────────────────────────────────────────────────────
export const STRIP_FEATURES = [
  { icon: 'cpu',        val: 'RK3588',    label: '8-core ARM'      },
  { icon: 'wifi',       val: '4G / LTE',  label: 'SIM7600G-H'      },
  { icon: 'navigation', val: 'GNSS',      label: 'GPS + GLONASS'   },
  { icon: 'zap',        val: 'CAN-FD',    label: 'Industrial bus'  },
  { icon: 'shield',     val: 'AntiKill',  label: 'USB protection'  },
  { icon: 'battery',    val: 'PowerSave', label: 'Sleep < 200 ms'  },
] as const;

// ── Use cases ─────────────────────────────────────────────────────────────────
export const USE_CASES = [
  {
    icon:  'truck',
    title: 'Fleet telematics',
    desc:
      'Continuous GPS tracking, CAN odometer readings and OBD/J1939 diagnostics ' +
      'with real-time LTE transmission for heavy transport and mining fleet operators.',
  },
  {
    icon:  'tool',
    title: 'Field automation',
    desc:
      'Lightweight embedded PLC for signal acquisition, actuator control and local ' +
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
    title: 'AI-powered visual inspection',
    desc:
      'Multi-camera USB processing directly at the edge using the RK3588 neural engine, ' +
      'eliminating cloud latency and bandwidth requirements.',
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
      '9–36 VDC tolerance and continuous operation without periodic maintenance.',
  },
] as const;

// ── Technical specifications ──────────────────────────────────────────────────
export const SPECS = [
  { label: 'Processor',           value: 'Rockchip RK3588 · 4× Cortex-A76 + 4× Cortex-A55' },
  { label: 'Operating system',    value: 'Embedded Linux (Yocto / Debian compatible)'        },
  { label: 'Cellular module',     value: 'SIM7600G-H · Cat-4 LTE / 4G global'                },
  { label: 'GNSS',                value: 'GPS, GLONASS, BeiDou, Galileo (integrated)'         },
  { label: 'Field bus',           value: 'CAN-FD with ESD-protected transceiver'              },
  { label: 'USB ports',           value: '4× USB 3.0 Host · Integrated AntiKill protection'   },
  { label: 'Audio',               value: '2× amplified output 3 W / 8 Ω'                     },
  { label: 'Control output',      value: '1× Low-side 2 A for relay or inductive load'       },
  { label: 'Power input',         value: '9–36 VDC · Native 12 V and 24 V compatible'        },
  { label: 'Power management',    value: 'Auxiliary MCU · PowerSave sleep · sequential boot'  },
  { label: 'SIM',                 value: 'Removable Nano-SIM · dual-SIM support via firmware' },
  { label: 'Status indicators',   value: '6× LED: power, system, LTE, GNSS, CAN, fault'      },
  { label: 'Thermal management',  value: 'Internal fan connector · aluminum heatsink profile' },
  { label: 'Electrical protections', value: 'ESD · short circuit · reverse polarity · transients · OCP' },
] as const;

// ── Electrical protection badges ──────────────────────────────────────────────
export const PROTECTIONS = [
  'ESD on all ports',
  'Short circuit',
  'Reverse polarity',
  'Line transients',
  'Overcurrent (OCP)',
  'AntiKill USB',
  'Isolated CAN-FD',
  'Inductive low-side',
] as const;

// ── Image gallery ─────────────────────────────────────────────────────────────
export const GALLERY = [
  { src: '/render-hero.png',    label: '3/4 view',       alt: 'COREX-9 front panel — USB ports and connectors' },
  { src: '/render-antenna.png', label: 'Antenna / Fan',  alt: 'COREX-9 antenna connectors MAIN, AUX, GNSS and fan' },
  { src: '/render-ports.png',   label: 'Port panel',     alt: 'COREX-9 port panel — front view'                },
] as const;

// ── Specs section side images ─────────────────────────────────────────────────
export const SPECS_IMAGES = [
  { src: '/render-iso1.png', alt: 'COREX-9 isometric view — industrial environment' },
  { src: '/render-iso2.png', alt: 'COREX-9 side view — antenna and fan detail'      },
] as const;

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '#gallery',      label: 'Product'        },
  { href: '#applications', label: 'Applications'   },
  { href: '#specs',        label: 'Specifications' },
  { href: '#cta',          label: 'Buy'            },
] as const;
