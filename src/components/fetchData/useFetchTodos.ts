// useFetchTodos.ts
import { useQuery } from '@tanstack/react-query';

// Define the type of each item in the data array
type CryptoApiData = {
    changePercent24Hr: string;
    explorer: string;
    id: string;
    marketCapUsd: string;
    maxSupply: string;
    name: string;
    priceUsd: number;
    rank: string;
    supply: string;
    symbol: string;
    volumeUsd24Hr: string;
    vwap24Hr: string;
    index:number
  };

const fetchTodos = async (): Promise<CryptoApiData[]> => {
    const response = await fetch('https://api.coincap.io/v2/assets');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // return data.data;

    return data.data.slice(0, 99);
}

const useFetchTodos = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    });
}

export default useFetchTodos;
