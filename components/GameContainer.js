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
            <GameBtnContainer goBtnVisible={goBtnVisible} setGoBtnVisible={setGoBtnVisible}/>
        </div>
    )
}

export default GameContainer