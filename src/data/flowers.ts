export type Season = 'Spring' | 'Summer' | 'Autumn' | 'Winter';

export interface Flower {
  id: string;
  name: string;
  season: Season;
  price: number;
  image: string;
  size: number; // base size in px for builder
}

export const flowers: Flower[] = [
  {
    id: 'f1',
    name: 'Garden Rose',
    season: 'Summer',
    price: 6.50,
    image: '/assets/garden-rose.jpg',
    size: 150,
  },
  {
    id: 'f2',
    name: 'Blush Peony',
    season: 'Spring',
    price: 9.00,
    image: '/assets/blush-peony.jpg',
    size: 160,
  },
  {
    id: 'f3',
    name: 'Butter Tulip',
    season: 'Spring',
    price: 3.50,
    image: '/assets/butter-tulip.jpg',
    size: 130,
  },
  {
    id: 'f4',
    name: 'Oriental Lily',
    season: 'Summer',
    price: 7.00,
    image: '/assets/oriental-lily.jpg',
    size: 170,
  },
  {
    id: 'f5',
    name: 'Coral Ranunculus',
    season: 'Spring',
    price: 5.50,
    image: '/assets/coral-ranunculus.jpg',
    size: 140,
  },
  {
    id: 'f6',
    name: 'White Daisy',
    season: 'Spring',
    price: 2.50,
    image: '/assets/white-daisy.jpg',
    size: 120,
  },
  {
    id: 'f7',
    name: 'Pink Snapdragon',
    season: 'Summer',
    price: 4.50,
    image: '/assets/pink-snapdragon.jpg',
    size: 180,
  }
];
