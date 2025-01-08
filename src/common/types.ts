export interface IAuthor {
  name: string;
  verified: boolean;
  avatar?: string;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  type: string;
  price: number;
  unit: string;
  author: IAuthor;
}
