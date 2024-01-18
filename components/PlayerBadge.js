import React from 'react'

const PlayerBadge = (props) => {
    return (
        <button className="playerBadge">{props.value}</button>
    );
}

export default PlayerBadge