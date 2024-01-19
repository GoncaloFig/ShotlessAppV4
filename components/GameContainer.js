"use client"
import React from 'react'
// import GameBtnContainer from './GameBtnContainer'
import { useState } from 'react'
import GameBtnContainer from './GameBtnContainer'

const GameContainer = () => {

    const [goBtnVisible, setGoBtnVisible] = useState(true);

    return (
        <div className="gameContainer">
            <h1 className="shotlessTitle">Shotless</h1>
            <h2 className='hidden'>Generate a random person to pay the bill</h2>

            {/* SEO PERFORM */}
            <div className='hidden' style={{display: 'none'}}>
            <h1 >Shotless</h1>
            <h1 >Who will pay the bill</h1>
            <h1 >Pick a random person to pay the bill</h1>
            <h1 >Choose a random person to pay the bill, with Shotless game</h1>
            <h1 >Draw names to pay the bill</h1>
            <h1 >This game will generate a random player from a list of player that will be responsible to pay the restaurant or coffee bill</h1>
            </div>

            <GameBtnContainer goBtnVisible={goBtnVisible} setGoBtnVisible={setGoBtnVisible}/>
        </div>
    )
}

export default GameContainer