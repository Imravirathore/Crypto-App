// useFetchTodos.ts
import { useQuery } from '@tanstack/react-query';

// Define the type of each item in the data array
type CryptoApiData2 = {
    status: string;
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

const fetchTodos = async (): Promise<CryptoApiData2[]> => {

    const options = {
        headers: {
            'Content-Type':'application/json',
            'x-access-token': 'coinrankingae19b29f9cddde3b99f322a8ea51b601f1fbea06d58a796c',
        },
      };

    const response = await fetch('https://api.coinranking.com/v2/coins/', options);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    // const data = await response.json();
    const { data } = await response.json(); // Assuming the API response has a 'data' field containing the array

    return data.stats;
    // return data.data;
    // console.log('data new', data)

    // return data.data.slice(0, 99);
}

const useCryptoApi = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    });
}

export default useCryptoApi;
