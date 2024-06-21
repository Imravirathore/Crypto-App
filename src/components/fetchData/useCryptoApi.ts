// useFetchTodos.ts
import { useQuery } from '@tanstack/react-query';

  
const fetchTodos = async ()=> {

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
    const result = await response.json(); 
    // console.log('data frm api :', data.data)
    return result.data;
}

const useCryptoApi = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    });
}

export default useCryptoApi;
