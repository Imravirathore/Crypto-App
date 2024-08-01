import React from 'react';
import { Container, Box, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, ButtonGroup, Button, Divider, Image, SimpleGrid } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import { IncrementCamera, DecrementCamera } from '../../app/features/counter/counterSlice'
import { RootState } from '../../app/store';
import useCryptoApi from '../fetchData/useCryptoApi';
import { FaHeart } from "react-icons/fa";
import { useToast } from '@chakra-ui/react'
import './index.css'
import { FaCaretUp } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Preloader from '../Preloader/Preloader';
import Preloader2 from '../Preloader/Preloader2';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import { ExternalLinkIcon, EmailIcon } from '@chakra-ui/icons'
import AnimatedPage from '../AnimatedPage/AnimatedPage';

interface MyComponentProps {
    searchQuery: string;
}

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


const Crypto: React.FC<MyComponentProps> = ({ searchQuery }) => {
    const countCamera = useSelector((state: RootState) => state);
    const isDataAvialable = countCamera.counter1.userInfoData && countCamera.counter1.userInfoData.name

    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, isLoading, error } = useCryptoApi();
    if (isLoading) {
        return <div><Preloader2 /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }


    // Filter the list based on the search term
    const filteredCryptos = data.coins.filter((crypto: CryptoApiData) =>
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const handleClick = (cryptoInfo: CryptoApiData) => {
        navigate(`/crypto/${cryptoInfo.symbol}`, { state: { cryptoInfo } });
    }


    // Add to Wishlist

    // const addToWishList = (item:CryptoApiData)=>{
    //     console.log('item is :', item)
    // }

    return (
        <>

            <AnimatedPage>


                {
                    (isDataAvialable === null || isDataAvialable === '') ? (
                        <UserInfoModal />
                    ) : (
                        null
                    )
                }

                <Box p='4' className='fullHeight'>
                    <SimpleGrid columns={[1, null, 3]} spacing='20px'>
                        {
                            filteredCryptos.map((item: CryptoApiData, index: number) => {
                                return (
                                    <>

                                        <Box cursor="pointer" height='' onClick={() => handleClick(item)}>
                                            <div className="cardContainer">
                                                <div className="card">
                                                    <p className="city">{item.name}</p>
                                                    {/* <Link to='https://chakra-ui.com' >
                                                    Chakra Design system <ExternalLinkIcon mx='2px' />
                                                </Link> */}
                                                    {/* <Link to='/crypto' +index >

                                                    Test
                                                </Link> */}

                                                    {/* <Link to={`/cryptoInfo/${item.symbol}`}>
                                                    Test
                                                </Link> */}


                                                    <FaHeart style={{
                                                        position: 'absolute',
                                                        top: '10',
                                                        right: '10',
                                                        fontSize: '20px',
                                                        cursor: 'pointer'
                                                    }}

                                                    />
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
                                                            <p className="maxTemp">{'$ ' + item.marketCap}</p>

                                                        </div>



                                                    </div>

                                                    {/* <div>
                                                    <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid' onClick={()=>addToWishList(item)}>
                                                        Add to Wishlist
                                                    </Button>
                                                </div> */}
                                                </div>
                                            </div>
                                        </Box>
                                    </>
                                )
                            })
                        }
                    </SimpleGrid>
                <Footer />
                </Box>

            </AnimatedPage>

        </>
    )
}

export default Crypto;