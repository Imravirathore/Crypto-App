import React from 'react'
import './index.css'
import useCryptoApi from '../fetchData/useCryptoApi';
import { FaCoins } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { FaExchangeAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import moment from 'moment';


type Stats = {
    totalCoins: string;
    rank: number;
    totalExchanges:number;
    totalMarketCap:string;
    totalMarkets : number;
    total24hVolume: string
};

// Get Current Date


const NewsTicker = () => {

    // Get Current Date
    const formattedDate = moment().format('MMMM D, YYYY');


    const { data, isLoading, error } = useCryptoApi();
    // console.log('APIs DATA :', data.stats.total)


    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>
            <div className="news-container">
                <div className="title">
                    Market Update : {formattedDate}
                </div>

                <ul>
                    <li> <FaCoins /> Total Coins : {data.stats.totalCoins}</li>
                    <li><FaExchangeAlt /> Total Exchanges : {data.stats.totalExchanges}</li>
                    <li><FaCheck /> Available Platforms : {data.stats.totalMarkets}</li>
                    <li><SiCoinmarketcap />  Total Market Cap : {data.stats.totalMarketCap}</li>
                 
                </ul>
            </div>
        </>
    )
}

export default NewsTicker;