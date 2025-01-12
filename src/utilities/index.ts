import { authorStatuses, gradients } from '@/common';

export const debounce = (cb: any, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb.apply(this, args), delay);
  };
};

export const getCharacterImage = (imageId: number) => {
  const characters = [
    '/characters/neon-guy.png',
    '/characters/the-dj.png',
    '/characters/basketball-girl.png',
    '/characters/assassin.png',
    '/characters/mafia-england.png',
    '/characters/neon-guy.png',
    '/characters/the-dj.png',
    '/characters/basketball-girl.png',
    '/characters/assassin.png',
    '/characters/mafia-england.png',
    '/characters/neon-guy.png',
    '/characters/the-dj.png',
    '/characters/basketball-girl.png',
    '/characters/assassin.png',
    '/characters/mafia-england.png',
    '/characters/neon-guy.png',
    '/characters/the-dj.png',
    '/characters/basketball-girl.png',
    '/characters/assassin.png',
    '/characters/mafia-england.png',
    '/characters/neon-guy.png',
    '/characters/the-dj.png',
    '/characters/basketball-girl.png',
    '/characters/assassin.png',
    '/characters/mafia-england.png',
  ];

  return characters[imageId];
};

export const getGradient = (type: string) => {
  return gradients[type] ?? '';
};

export const getAuthorStatusImage = (status: string) => {
  return authorStatuses[status] ?? '';
};

export const formatPrice = (price: number) => {
  return price.toLocaleString('de-DE');
};
