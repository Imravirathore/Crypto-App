import React, { useState } from 'react';
import { SimpleGrid, Box, Image, Button, ButtonGroup } from '@chakra-ui/react'
import './single.css'
import hh from '../assets/crypto-logos/solana.png'
import imageArr from './Images';
import useFetchTodos from './fetchData/useFetchTodos';
import { FaHeart } from "react-icons/fa";
import { useToast } from '@chakra-ui/react'

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
    index: number
};

const Single: React.FC = () => {
    const toast = useToast()
    const [wishList, setWishList] = useState(false)

    const { data, isLoading, error } = useFetchTodos();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
 
    // Add to WishList

    const addWishList = (item: CryptoApiData, index: Number) => {
        console.log('item is', item)
        setWishList(!wishList)
        wishList ?
            (
                toast({
                    title: 'Removed from WishList Succefully !',
                    description: "We've added in your Wishlist",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                })
            )
            : (

                toast({
                    title: 'Crypto Added to Wishlist Succefully !',
                    description: "We've added in your Wishlist",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
            )

    }


    return (
        <>

            {/* <Image src={imageArr[3].path} alt='Crypto Logo Images' borderRadius='full' width={50} /> */}
            <Box p='4'>
                <SimpleGrid columns={[2, null, 3]} spacing='20px'>
                    {
                        data && data.map((item, index) => {
                            return (
                                <>

                                    <Box height=''>
                                        <div className="cardContainer">
                                            <div className="card">
                                                <p className="city">{item.name}</p>
                                                <FaHeart style={{
                                                    color: wishList ? 'red' : '#fff',
                                                    position: 'absolute',
                                                    top: '10',
                                                    right: '10',
                                                    fontSize: '20px',
                                                    cursor: 'pointer'
                                                }}
                                                    onClick={() => addWishList(item, index)}
                                                />
                                                {/* <p className="weather">Change : -2% (Last 24 Hrs)</p> */}
                                                <Image src={imageArr[index].path} alt='Crypto Logo Images' borderRadius='full' width={50} />
                                                <p className="temp">$ {Number(item.priceUsd).toFixed(2)}</p>
                                                <div className="minmaxContainer">
                                                    <div className="min">
                                                        <p className="minHeading">Market Rank</p>
                                                        <p className="minTemp">{item.rank}</p>
                                                    </div>
                                                    <div className="max">
                                                        <p className="maxHeading">Total Supply</p>
                                                        <p className="maxTemp">{item.maxSupply ? Number(item.maxSupply).toLocaleString() : 'Not available'}</p>

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

        </>
    )
}

export default Single;