export const capitaliseFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const convertKey = (key: string): string => {
  return key.replaceAll('-', ' ');
};

export const convertCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en', { style: 'currency', currency: 'GBP' }).format(amount);
};

export const formatValue = (value: any): string => {
  switch (typeof value) {
    case 'boolean':
      return value ? 'yes' : 'no';

    case 'number': {
      return convertCurrency(value);
    }

    default: {
      if (!isNaN(Date.parse(value))) {
        const date = new Date(value);
        return date.toDateString()
      }
      return value;
    }
  }
}
