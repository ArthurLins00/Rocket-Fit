export interface Product {
  id: number;
  category: string;
  name: string;
  image: string;
  price: number;
  description: string;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  user: string;
  comment: string;
  rating: number;
}