"use client"
import useShotlessLoser from '../hooks/useShotlessLoser'
import CountDownContainer from './CountDownContainer';
import React from 'react'
import { connect } from 'react-redux'

const GameBtnContainer = ({goBtnVisible, setGoBtnVisible, players}) => {

    const {shotlessLoser, handleDrawName} = useShotlessLoser()

    const handleClickToStartDraw = () => {
        console.log("entrei")
        setGoBtnVisible(false)
    }

    const handleClickOnWinner = () => {
        setGoBtnVisible(true)
    }
    

    return (
        <div className="gameBtnContainer">
            {goBtnVisible ? ( <button className={`drawBtn ${players.length === 0 ? "disabledGoButton" : ""}`} disabled={players.length === 0} onClick={() => {handleClickToStartDraw(); handleDrawName()}}>GO</button> ) : <CountDownContainer shotlessLoser={shotlessLoser} handleClickOnWinner={handleClickOnWinner}/>}
            {/* <button className="drawBtn" onClick={() => {alert("Done!")}}>GO</button> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players : state.player.players
    }
}

export default connect(mapStateToProps )(GameBtnContainer)
