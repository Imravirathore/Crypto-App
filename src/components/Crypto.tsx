import React from 'react';
import { Container, Box, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, ButtonGroup, Button, Divider, Image, SimpleGrid } from '@chakra-ui/react'
import Single from './Single';
import { useSelector, useDispatch } from "react-redux";
import { IncrementCamera, DecrementCamera } from '../app/features/counter/counterSlice'
import { RootState } from '../app/store';
import useCryptoApi from '../components/fetchData/useCryptoApi';
import { FaHeart } from "react-icons/fa";
import { useToast } from '@chakra-ui/react'
import './single.css'
import { FaCaretUp } from "react-icons/fa6";


type CryptoApiData = {
    btcPrice: string;
    change: string;
    coinrankingUrl: string;
    color: string;
    iconUrl: string;
    listedAt: number;
    marketCap: string;
    name: string;
    price: string;
    uuid: string;
    symbol: string;
    rank: number
};
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
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {/* <Button colorScheme='blue' onClick={handleCameraIncre}>Increment</Button>
            <h2 style={{ color: '#fff' }}>{countCamera}</h2>
            <Button colorScheme='blue' onClick={handleCameraDecre}>Decrement</Button> */}
            <h1>Hiii</h1>
            {/* <Single/> */}

            {
                <Box p='4'>
                    <SimpleGrid columns={[2, null, 3]} spacing='20px'>
                        {
                            data.coins.map((item: CryptoApiData, index: number) => {
                                return (
                                    <>

                                        <Box height=''>
                                            <div className="cardContainer">
                                                <div className="card">
                                                    <p className="city">{item.name}</p>
                                                    {/* <FaHeart style={{
                                                     color: wishList ? 'red' : '#fff',
                                                     position: 'absolute',
                                                     top: '10',
                                                     right: '10',
                                                     fontSize: '20px',
                                                     cursor: 'pointer'
                                                 }}
                                                     onClick={() => addWishList(item, index)}
                                                 /> */}
                                                    {/* <p className="weather">Change : -2% (Last 24 Hrs)</p> */}
                                                    <Image src={item.iconUrl} alt='Crypto Logo Images' borderRadius='full' width={50} />
                                                    <p className="temp">$ {Number(item.price).toFixed(2)}</p>
                                                    <span className="weather">Change : {item.change}
                                                        {
                                                            Number(item.change) < 0
                                                                ?
                                                                (
                                                                    <FaCaretUp style={{ color: 'red', display: 'inline', fontSize: '22px', position: 'absolute' }}
                                                                    />

                                                                )
                                                                :
                                                                (
                                                                    <FaCaretUp style={{ color: '#36ff36', display: 'inline', fontSize: '22px', position: 'absolute' }}
                                                                    />

                                                                )
                                                        }
                                                    </span>


                                                    <div className="minmaxContainer">
                                                        <div className="min">
                                                            <p className="minHeading">Market Rank</p>
                                                            <p className="minTemp">{item.rank}</p>
                                                        </div>
                                                        <div className="max">
                                                            <p className="maxHeading">Market Cap</p>
                                                            <p className="maxTemp">{'$ ' +item.marketCap}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Box>
                                    </>
                                )
                            })
                        }
                    </SimpleGrid>
                </Box>
            }
        </>
    )
}

export default Crypto;