"use client"
import useShotlessLoser from '../hooks/useShotlessLoser'
import CountDownContainer from './CountDownContainer';
import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react';

const GameBtnContainer = ({goBtnVisible, setGoBtnVisible, players}) => {

    const {shotlessLoser, handleDrawName} = useShotlessLoser()

    const [fadeOutDrawBtn, setFadeOutDrawBtn] = useState(false);

    const handleClickToStartDraw = () => {
        //setGoBtnVisible(false)
        setFadeOutDrawBtn(true)
    }

    const handleClickOnWinner = () => {
        setGoBtnVisible(true)
        setFadeOutDrawBtn(false)
    }
    

    return (
        <div className="gameBtnContainer">
            {/* {goBtnVisible ? ( <button className={`drawBtn ${players.length === 0 ? "disabledGoButton" : ""} ${!goBtnVisible ? "fadeOutDrawBtn" : ""}`} disabled={players.length === 0} onClick={() => {handleClickToStartDraw(); handleDrawName()}}>GO</button> ) : <CountDownContainer shotlessLoser={shotlessLoser} handleClickOnWinner={handleClickOnWinner}/>} */}
            {goBtnVisible ? ( <button onTransitionEnd={()=> {setGoBtnVisible(false)}} className={`drawBtn ${players.length === 0 ? "disabledGoButton" : ""} ${fadeOutDrawBtn ? "fadeOutDrawBtn" : ""}`} disabled={players.length === 0} onClick={() => {handleClickToStartDraw(); handleDrawName()}}>GO</button> ) : <CountDownContainer shotlessLoser={shotlessLoser} handleClickOnWinner={handleClickOnWinner}/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players : state.player.players
    }
}

export default connect(mapStateToProps )(GameBtnContainer)
