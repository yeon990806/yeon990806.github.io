import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const groupedData = (data: any[]) => data.reduce((acc, item) => {
  const year = item.date.split('.')[0];
  if (!acc[year]) {
    acc[year] = [];
  }
  acc[year].push(item);
  return acc;
}, {});