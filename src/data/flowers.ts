export type Season = 'Spring' | 'Summer' | 'Autumn' | 'Winter';

export interface Flower {
  id: string;
  name: string;
  season: Season;
  price: number;
  image: string; // side view
  topViewImage: string; // top view
  size: number; // base size in px for builder
}

export const flowers: Flower[] = [
  {
    id: 'f1',
    name: 'Garden Rose',
    season: 'Summer',
    price: 6.50,
    image: '/assets/garden-rose-side.jpg',
    topViewImage: '/assets/garden-rose-top.png',
    size: 150,
  },
  {
    id: 'f2',
    name: 'Blush Peony',
    season: 'Spring',
    price: 9.00,
    image: '/assets/blush-peony-side.jpg',
    topViewImage: '/assets/blush-peony-top.png',
    size: 160,
  },
  {
    id: 'f3',
    name: 'Butter Tulip',
    season: 'Spring',
    price: 3.50,
    image: '/assets/butter-tulip-side.jpg',
    topViewImage: '/assets/butter-tulip-top.png',
    size: 130,
  },
  {
    id: 'f4',
    name: 'Oriental Lily',
    season: 'Summer',
    price: 7.00,
    image: '/assets/oriental-lily-side.jpg',
    topViewImage: '/assets/oriental-lily-top.png',
    size: 170,
  },
  {
    id: 'f5',
    name: 'Coral Ranunculus',
    season: 'Spring',
    price: 5.50,
    image: '/assets/coral-ranunculus-side.jpg',
    topViewImage: '/assets/coral-ranunculus-top.png',
    size: 140,
  },
  {
    id: 'f6',
    name: 'White Daisy',
    season: 'Spring',
    price: 2.50,
    image: '/assets/white-daisy-side.jpg',
    topViewImage: '/assets/white-daisy-top.png',
    size: 120,
  },
  {
    id: 'f7',
    name: 'Pink Snapdragon',
    season: 'Summer',
    price: 4.50,
    image: '/assets/pink-snapdragon-side.jpg',
    topViewImage: '/assets/pink-snapdragon-top.png',
    size: 180,
  }
];
