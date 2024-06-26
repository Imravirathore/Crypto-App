'use client'

import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react'
import './index.css'
export default function MyProfileCard() {
    return (
        <>
            <Box className='profile-container'>
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
                                'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
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
                            fontSize={'2xl'} fontFamily={'body'} >
                            Ravi Rathore
                        </Heading>
                        <Text
                            textAlign={'center'}
                            color={useColorModeValue('gray.300', 'gray.400')}
                            px={0}
                            m={2}
                        >
                            Passionate frontend developer,SEO analyst. Helping businesses to boost their online visibility
                        </Text>
                        
                        <Stack mt={8} direction={'row'} spacing={4}>
                            <Button
                                flex={1}
                                fontSize={'sm'}
                                rounded={'full'}
                                _focus={{
                                    bg: 'gray.200',
                                }}>
                                Go Back
                            </Button>
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
                        </Stack>
                    </Box>

                </Center>
            </Box>
        </>

    )
}