import { useSelector } from 'react-redux';
import { useState } from 'react';

const useShotlessLoser = () => {

    const players = useSelector(state => state.player.players);
    const [shotlessLoser, setShotlessLoser] = useState({id: null, name: ""});

    const handleDrawName = () => {
        const randomPlayer = players[Math.floor(Math.random() * players.length)];
        setShotlessLoser(randomPlayer);
        console.log("->", randomPlayer);
    };

    return (
        {
            shotlessLoser: shotlessLoser,
            handleDrawName: handleDrawName
        }
    )
}

export default useShotlessLoser