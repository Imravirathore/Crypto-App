import React from 'react';
import { Container, Box, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, ButtonGroup, Button, Divider, Image, SimpleGrid } from '@chakra-ui/react'
import Single from './Single';
import { useSelector, useDispatch } from "react-redux";
import { IncrementCamera, DecrementCamera } from '../app/features/counter/counterSlice'
import { RootState } from '../app/store';
import useCryptoApi from '../components/fetchData/useCryptoApi';


const Crypto: React.FC = () => {
      const countCamera = useSelector((state: RootState) => state.counter1.totalCamera);
        const dispatch = useDispatch();

    const handleCameraIncre = () => {
        dispatch(IncrementCamera());
      };

      const handleCameraDecre = () => {
        dispatch(DecrementCamera());
      };

      const { data, isLoading, error } = useCryptoApi();
      console.log('new data :',  data)
      if (isLoading) {
          return <div>Loading...</div>;
      }
      if (error) {
          return <div>Error: {error.message}</div>;
      }
   
    return (
        <>
            <Button colorScheme='blue' onClick={handleCameraIncre}>Increment</Button>
            <h2 style={{ color: '#fff' }}>{countCamera}</h2>
            <Button colorScheme='blue' onClick={handleCameraDecre}>Decrement</Button>

            {/* <Single/> */}
        </>
    )
}

export default Crypto;