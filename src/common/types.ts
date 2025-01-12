export interface IAuthor {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: string;
}

export interface ICharacter {
  id: number;
  title: string;
  category:
    | 'Upper Body'
    | 'Lower Body'
    | 'Hat'
    | 'Shoes'
    | 'Accessory'
    | 'Legendary'
    | 'Mythic'
    | 'Epic'
    | 'Rare'
    | 'Common'
    | string;
  price: number;
  isFavorite: boolean;
  createdAt: number;
  theme: 'Dark' | 'Light' | 'Colorful' | 'Halloween' | string;
  tier: 'Basic' | 'Premium' | 'Deluxe' | string;
  imageId: number; // 1 -> 20 (integer)
  author: IAuthor;
}
