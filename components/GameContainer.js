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
            <GameBtnContainer goBtnVisible={goBtnVisible} setGoBtnVisible={setGoBtnVisible}/>
        </div>
    )
}

export default GameContainer