"use client"
import React from 'react'
// import GameBtnContainer from './GameBtnContainer'
import { useState } from 'react'
import GameBtnContainer from './GameBtnContainer'
import titleImage from '../images/shotless.png'
import titleImageSsr from '/public/shotless.png'
import Image from 'next/image'


export const metadata = {
    title: 'Shotless',
    description: 'Generate a random person to pay the bill',
}

const GameContainer = () => {

    const [goBtnVisible, setGoBtnVisible] = useState(true);

    return (
        <>
        <div className="gameContainer">
            {/* <h1 className="shotlessTitle">Shotless</h1> */}
            {/* <div className='shotlessTitleImg'/> */}
            <div className='shotlessTitleImg'>
                <Image src={titleImageSsr} alt='Home Page' width={350} height={60} loading="eager" priority/>
                {/* <Image src="/static/media/shotless.png" alt='Home Page' width={350} height={60}/> */}
            </div>
            <GameBtnContainer goBtnVisible={goBtnVisible} setGoBtnVisible={setGoBtnVisible}/>
        </div>
        {/* SEO PERFORM */}
        <div className='hidden' style={{display: 'none'}}>
        <h1 className="shotlessTitle">Shotless</h1>
        <h2 >Who will pay the bill</h2>
        <h3 >Pick a random person to pay the bill</h3>
        <h4 >Choose a random person to pay the bill, with Shotless game</h4>
        <h5 >Draw names to pay the bill</h5>
        <h6 >This game will generate a random player from a list of player that will be responsible to pay the restaurant or coffee bill</h6>
        </div>
        </>
    )
}

export default GameContainer