export const debounce = (cb: any, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb.apply(this, args), delay);
  };
};

export const getGradient = (type: string) => {
  const gradients: { [key: string]: string } = {
    common: 'linear-gradient(90.13deg, #49DD81 0%, #22B4C6 100%)',
    epic: 'linear-gradient(90.13deg, #DD5AFE 0%, #6366F1 100%)',
    rare: 'linear-gradient(90deg, #43A6F6 0%, #5868F3 100%)',
    legendary: 'linear-gradient(90.13deg, #FE955A 0%, #F1DA63 100%)',
    mythic: 'linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)',
  };
  return gradients[type] ?? '';
};

export const formatPrice = (price: number) => {
  return price.toLocaleString('de-DE');
};
