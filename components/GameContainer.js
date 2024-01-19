"use client"
import React from 'react'
// import GameBtnContainer from './GameBtnContainer'
import { useState } from 'react'
import GameBtnContainer from './GameBtnContainer'

export const metadata = {
    title: 'Shotless',
    description: 'Generate a random person to pay the bill',
}

const GameContainer = () => {

    const [goBtnVisible, setGoBtnVisible] = useState(true);

    return (
        <div className="gameContainer">
            <h1 className="shotlessTitle">Shotless</h1>
            <h2 className='hidden'>Generate a random person to pay the bill</h2>

            {/* SEO PERFORM */}
            <div className='hidden' style={{display: 'none'}}>
            <h2 >Who will pay the bill</h2>
            <h3 >Pick a random person to pay the bill</h3>
            <h4 >Choose a random person to pay the bill, with Shotless game</h4>
            <h5 >Draw names to pay the bill</h5>
            <h6 >This game will generate a random player from a list of player that will be responsible to pay the restaurant or coffee bill</h6>
            </div>

            <GameBtnContainer goBtnVisible={goBtnVisible} setGoBtnVisible={setGoBtnVisible}/>
        </div>
    )
}

export default GameContainer