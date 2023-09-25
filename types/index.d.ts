export type artwork = {
  name: string;
  description: string;
  price: number;
};

export type Artist = {
  firstName: string;
  lastName: string;
  image_url: string;
  description_1: string;
  description_2: string;
  artwork: Artwork;
  url: string;
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
