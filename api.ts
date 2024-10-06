export const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
];

export const products = [
  {
    id: 1,
    serialNumber: 1001,
    isNew: 1,
    photo: '/assets/images/monitor.webp',
    title: 'Dell UltraSharp U2723QE',
    type: 'Monitor',
    specification: '27" 4K UHD, IPS',
    guarantee: {
      start: '2023-01-01 09:00:00',
      end: '2025-01-01 09:00:00',
    },
    price: [
      { value: 500, symbol: 'USD', isDefault: 0 },
      { value: 13700, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2023-01-01 09:00:00',
  },
  {
    id: 2,
    serialNumber: 1002,
    isNew: 1,
    photo: '/assets/images/monitor.webp',
    title: 'Apple MacBook Pro 14 M2',
    type: 'Laptop',
    specification: '14" Retina, M2 Chip, 16GB RAM, 512GB SSD',
    guarantee: {
      start: '2023-02-10 10:15:00',
      end: '2026-02-10 10:15:00',
    },
    price: [
      { value: 2000, symbol: 'USD', isDefault: 0 },
      { value: 55000, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2023-02-10 10:15:00',
  },
  {
    id: 3,
    serialNumber: 1003,
    isNew: 0,
    photo: '/assets/images/monitor.webp',
    title: 'Logitech MX Keys',
    type: 'Keyboard',
    specification: 'Wireless, Backlit',
    guarantee: {
      start: '2022-06-15 11:20:00',
      end: '2024-06-15 11:20:00',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2700, symbol: 'UAH', isDefault: 1 },
    ],
    order: 3,
    date: '2022-06-15 11:20:00',
  },
  {
    id: 4,
    serialNumber: 1004,
    isNew: 1,
    photo: '/assets/images/monitor.webp',
    title: 'Samsung Odyssey G7',
    type: 'Monitor',
    specification: '32" QHD, Curved, 240Hz',
    guarantee: {
      start: '2023-04-25 14:00:00',
      end: '2026-04-25 14:00:00',
    },
    price: [
      { value: 800, symbol: 'USD', isDefault: 0 },
      { value: 22000, symbol: 'UAH', isDefault: 1 },
    ],
    order: 4,
    date: '2023-04-25 14:00:00',
  },
  {
    id: 5,
    serialNumber: 1005,
    isNew: 0,
    photo: '/assets/images/monitor.webp',
    title: 'Razer DeathAdder V2',
    type: 'Mouse',
    specification: 'Wired, RGB Lighting, 20K DPI',
    guarantee: {
      start: '2022-11-01 12:00:00',
      end: '2024-11-01 12:00:00',
    },
    price: [
      { value: 70, symbol: 'USD', isDefault: 0 },
      { value: 1900, symbol: 'UAH', isDefault: 1 },
    ],
    order: 5,
    date: '2022-11-01 12:00:00',
  },
  {
    id: 6,
    serialNumber: 1006,
    isNew: 1,
    photo: '/assets/images/monitor.webp',
    title: 'HP Spectre x360',
    type: 'Laptop',
    specification: '13" FHD, Intel i7, 16GB RAM, 1TB SSD',
    guarantee: {
      start: '2023-06-05 09:30:00',
      end: '2026-06-05 09:30:00',
    },
    price: [
      { value: 1800, symbol: 'USD', isDefault: 0 },
      { value: 49500, symbol: 'UAH', isDefault: 1 },
    ],
    order: 6,
    date: '2023-06-05 09:30:00',
  },
  {
    id: 7,
    serialNumber: 1007,
    isNew: 1,
    photo: '/assets/images/monitor.webp',
    title: 'Sony WH-1000XM5',
    type: 'Headphone',
    specification: 'Wireless, Noise Cancelling',
    guarantee: {
      start: '2023-07-12 13:00:00',
      end: '2025-07-12 13:00:00',
    },
    price: [
      { value: 350, symbol: 'USD', isDefault: 0 },
      { value: 9600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 7,
    date: '2023-07-12 13:00:00',
  },
  {
    id: 8,
    serialNumber: 1008,
    isNew: 1,
    photo: '/assets/images/monitor.webp',
    title: 'LG UltraGear 27GN950-B',
    type: 'Monitor',
    specification: '27" 4K UHD, Nano IPS, 144Hz',
    guarantee: {
      start: '2023-08-15 16:00:00',
      end: '2026-08-15 16:00:00',
    },
    price: [
      { value: 900, symbol: 'USD', isDefault: 0 },
      { value: 24700, symbol: 'UAH', isDefault: 1 },
    ],
    order: 8,
    date: '2023-08-15 16:00:00',
  },
  {
    id: 9,
    serialNumber: 1009,
    isNew: 0,
    photo: '/assets/images/monitor.webp',
    title: 'Corsair K95 RGB Platinum',
    type: 'Keyboard',
    specification: 'Mechanical, RGB Backlit, Macro Keys',
    guarantee: {
      start: '2022-03-22 11:00:00',
      end: '2024-03-22 11:00:00',
    },
    price: [
      { value: 200, symbol: 'USD', isDefault: 0 },
      { value: 5500, symbol: 'UAH', isDefault: 1 },
    ],
    order: 9,
    date: '2022-03-22 11:00:00',
  },
  {
    id: 10,
    serialNumber: 1010,
    isNew: 1,
    photo: '/assets/images/monitor.webp',
    title: 'Logitech G Pro Wireless',
    type: 'Mouse',
    specification: 'Wireless, RGB Lighting, 25K DPI',
    guarantee: {
      start: '2023-09-01 08:45:00',
      end: '2025-09-01 08:45:00',
    },
    price: [
      { value: 150, symbol: 'USD', isDefault: 0 },
      { value: 4100, symbol: 'UAH', isDefault: 1 },
    ],
    order: 10,
    date: '2023-09-01 08:45:00',
  },
];
