import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {addPlayer, removePlayer, changePlayerName, changePlayerToEdit} from '../redux'
import { v4 as uuidv4 } from 'uuid'
import { ImCross, ImArrowLeft2, ImPencil2, ImFloppyDisk  } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";

const EditPlayersContainer = (props) => {

    const [players, setPlayers] = useState(props.players)
    const [newPlayer, setNewPlayer] = useState({id: null, name: "", isEditing: false})

    const [playerNameInputEnable, setPlayerNameInputEnable] = useState(false);

    const [playerNameChanged, setPlayerNameChanged] = useState("")
    
    const isAnyPlayerEditing = props.players.some(player => player.isEditing === true)
    
    const handleAddPlayer = () => {
        if(newPlayer.name && newPlayer.name.trim() !== ""){
            const playerToAdd = {...newPlayer, id: uuidv4(), isEditing: false}
            console.log(playerToAdd)

            props.onAddPlayer(playerToAdd)
            setNewPlayer({})
            setPlayerNameInputEnable(false)
        }
    }

    const handleRemovePlayer = (playerId) => {
        //console.log(playerId)
        props.onRemovePlayer(playerId)
    }

    const handleInputNameChange = (e) => {
        if(e.target.value.length > 0 ?  setPlayerNameInputEnable(true) : setPlayerNameInputEnable(false));
        setNewPlayer({...newPlayer, name: e.target.value})
    }

    const handleChangeCurrentPlayerName = (playerId) => {
        const newName = playerNameChanged
        if(newName.trim().length > 0){
            props.onChangePlayerName(playerId, newName)
            props.onClickEditPlayer(playerId)
        }
    }

    const handleClickEditPlayer = (playerId, currentName) => {
        console.log(isAnyPlayerEditing)

        if(!isAnyPlayerEditing){
            console.log(currentName)
            setPlayerNameChanged(currentName)
            props.onClickEditPlayer(playerId)
        }
    }

    const handleLoadCurrentPlayers = players.length > 0 ? (
        players.map((player) =>
            <div className="playersInputContainer" key={player.id}>
                <input type="text" key={player.id} defaultValue={player.name} onChange={(e) => setPlayerNameChanged(e.target.value)} disabled={!player.isEditing}/>
                {/* {!isEditingPlayer && player.id !== editingPlayerId ?  */}
                {!player.isEditing ? 
                    <div className='editPlayerIconContainer'><ImPencil2 disabled className="editPlayerIcon" data-key={player.id} onClick={() => {handleClickEditPlayer(player.id, player.name)}}/></div>
                    :
                    // <ImFloppyDisk className="saveEditPlayerIcon" data-key={player.id} onClick={() => {handleChangeCurrentPlayerName(player.id)}}/>
                    <FaCheck className="saveEditPlayerIcon" data-key={player.id} onClick={() => {handleChangeCurrentPlayerName(player.id)}}/>
                }
                <ImCross className="deletePlayerIcon" data-key={player.id} onClick={() => handleRemovePlayer(player.id)}/>
            </div>
        ) 
    ) : (
    <div className="noPlayersDiv">
        <p>You need to add some players</p>
    </div>
    )


    useEffect(() => {
        setPlayers(props.players)
    },[props.players])

    return (
        <div className="playersEditContainer">
            <div className="editTitleContainer">
                <ImArrowLeft2 className="goBackFromPlayers" onClick={function(){ props.handleOpenEditPlayers()}}/>
                <h1 className="editPlayersTitle">Edit Players</h1>
            </div>
            <div className="playersEditListContainer">
                <div className="playersEditListOverflow">
                    {handleLoadCurrentPlayers}
                </div>
            </div>

            <div className="playersNewInputContainer">
                {/* <h3 className="newPlayerTitle">New Player</h3> */}
                <input type="text" maxlength="25" placeholder="New Player" value={newPlayer.name || ''} onChange={handleInputNameChange}/>
                {/* <button className={`${playerNameInputEnable ? "savePlayerBtn" : "savePlayerBtn disabledButton"}`} onClick={handleAddPlayer}>Add</button> */}

                {/* <button className={`${playerNameInputEnable ? "savePlayerBtn" : "savePlayerBtn disabledButton"}`} onClick={handleAddPlayer}>+</button> */}
                <BsFillPlusCircleFill className={`${playerNameInputEnable ? "savePlayerBtn" : "savePlayerBtn disabledButton"}`} onClick={handleAddPlayer}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players : state.player.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlayer : (value) => {
            dispatch(addPlayer(value))
        },
        onRemovePlayer : (value) => {
            dispatch(removePlayer(value))
        },
        onChangePlayerName : (valueId, valueName) => {
            dispatch(changePlayerName(valueId, valueName))
        },
        onClickEditPlayer : (valueId) => {
            dispatch(changePlayerToEdit(valueId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (EditPlayersContainer)
