import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateDummyData(days:number) {
     const labels = [];
    const data = [];
    let price = 100; // Starting price

    for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (days - i));
        
        // Generate random price fluctuation
        const changePercent = (Math.random() - 0.5) * 2; // Random percentage change between -1% and +1%
        price = price * (1 + changePercent / 100);
        price = Math.round(price * 100) / 100; // Round to 2 decimal places

        labels.push(date.toISOString().split('T')[0]); // Format the date as YYYY-MM-DD
        data.push(price);
    }

    return { labels, data };

  
}