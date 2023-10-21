export type artwork = {
  name: string;
  description: string;
  price: number;
};

export type Gallery = {
  name: string;
  description: string;
  externalUrl: string;
  image: string;

}

export type Artist = {
  firstName: string;
  lastName: string;
  imageUrl: string;
  description: string;
  url: string;
  externalUrl: {
    name: string;
    url: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
