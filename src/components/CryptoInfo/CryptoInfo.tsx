import React from 'react';
import useCoinApi from '../fetchData/useCoinApi'
import { useLocation } from 'react-router-dom';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link,
  Container
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import './index.css';

const CryptoInfo = () => {
  const location = useLocation();
  const { cryptoInfo } = location.state || {};

  console.log('location', cryptoInfo)
  // const { data, isLoading, error } = useCoinApi();
  // console.log('data will be', data)

  // if (isLoading) {
  //     return <div> Loading.... </div>;
  // }
  // if (error) {
  //     return <div>Error: {error.message}</div>;
  // }


  return (
    <>
      <AnimatedPage>
        {/* <Container maxW='4xl' border='1px' borderColor='gray.200'> */}
        <TableContainer >
          <Table variant='striped' size='lg' colorScheme='gray' >
            <TableCaption>
              <Link href='https://coinranking.com/' isExternal>
                Cryptocurrency Market Data (Source: Coinranking API) <ExternalLinkIcon mx='2px' />
              </Link>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Crypto Name</Th>
                <Th>Crypto Informations</Th>
              </Tr>
            </Thead>

            <Tbody className='tableStyle'>
              <Tr>
                <Td>Crypto Name</Td>
                <Td> {cryptoInfo.name} </Td>
              </Tr>

              <Tr>
                <Td>Current Rank</Td>
                <Td> {cryptoInfo.rank} </Td>
              </Tr>

              <Tr>
                <Td>Crypto Symbol</Td>
                <Td> {cryptoInfo.symbol
                } </Td>
              </Tr>

              <Tr>
                <Td>24H Change </Td>
                <Td>  {cryptoInfo.change} </Td>
              </Tr>

              <Tr>
                <Td>Price </Td>
                <Td> $ {cryptoInfo.price} </Td>
              </Tr>

              <Tr>
                <Td>Price in BTC</Td>
                <Td> {cryptoInfo.btcPrice} </Td>
              </Tr>

              <Tr>
                <Td>24H Volume</Td>
                <Td> $ {cryptoInfo['24hVolume']} </Td>
              </Tr>

              <Tr>
                <Td>Market Cap</Td>
                <Td> $ {cryptoInfo.marketCap} </Td>
              </Tr>

              <Tr>
                <Td>Listed Date</Td>
                <Td>{new Date(cryptoInfo.listedAt * 1000).toLocaleString()}</Td>
              </Tr>



              <Tr>
                <Td>More Information</Td>
                <Td> <Link href={cryptoInfo.coinrankingUrl} isExternal>
                  Get More Data about {cryptoInfo.name} <ExternalLinkIcon mx='2px' />
                </Link> </Td>


              </Tr>

            </Tbody>

          </Table>
        </TableContainer>
        {/* </Container> */}
      </AnimatedPage>

    </>
  )
}

export default CryptoInfo