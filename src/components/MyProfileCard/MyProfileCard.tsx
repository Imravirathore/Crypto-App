import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react'
import './index.css'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from '../../app/store'

import girlImage from '../../assets/crypto-logos/girl-profile.jpg'
import boyImage from '../../assets/crypto-logos/boy-profile.jpg'
import { useEffect } from 'react';
import AnimatedPage from '../AnimatedPage/AnimatedPage';


export default function MyProfileCard() {
    // Redux
    const countCamera = useSelector((state: RootState) => state);
    useEffect(() => {
        // Scroll to a specific position (e.g., 0, 500) when the component mounts
        window.scrollTo(0, 500);
    }, []);


    return (
        <>
            <AnimatedPage>

                <Box className='profile-container'>z
                    <Center className='profile-card'>
                        <Box maxW={'320px'}
                            w={'full'}
                            // bg={useColorModeValue('white', 'gray.900')}
                            // boxShadow={'2xl'}
                            rounded={'lg'}
                            p={4}
                            textAlign={'center'}>

                            <Avatar
                                size={'xl'}
                                src={
                                    countCamera.counter1.userInfoData && countCamera.counter1.userInfoData.gender === 'Male'
                                        ? boyImage
                                        : girlImage
                                }
                                mb={4}
                                pos={'relative'}
                                _after={{
                                    content: '""',
                                    w: 4,
                                    h: 4,
                                    bg: 'green.300',
                                    border: '2px solid white',
                                    rounded: 'full',
                                    pos: 'absolute',
                                    bottom: 0,
                                    right: 3
                                }}
                            />

                            <Heading
                                color='#fff'
                                textAlign={'center'}
                                fontSize={'2xl'} fontFamily={'body'}
                                textTransform={'capitalize'}

                            >
                                {
                                    countCamera.counter1.userInfoData && countCamera.counter1.userInfoData.name
                                }
                            </Heading>
                            <Text
                                textAlign={'center'}
                                color={useColorModeValue('gray.300', 'gray.400')}
                                px={0}
                                m={2}
                            >
                                {
                                    countCamera.counter1.userInfoData && countCamera.counter1.userInfoData.about
                                }

                            </Text>

                            <Stack mt={8} direction={'row'} spacing={4}>

                                <Link to='/' >
                                    <Button
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        _focus={{
                                            bg: 'gray.200',
                                        }}>
                                        Go Back

                                    </Button>
                                </Link>

                                <Link to='/wishlist' >

                                    <Button
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                        }
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        _focus={{
                                            bg: 'blue.500',
                                        }}>
                                        Wishlist
                                    </Button>
                                </Link>

                            </Stack>
                        </Box>

                    </Center>
                </Box>
            </AnimatedPage>

        </>

    )
}