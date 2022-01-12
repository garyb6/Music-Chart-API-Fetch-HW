import React from 'react';



const SongListItem = ({song, onSongClick}) => {

    const handleClick = () => {
        onSongClick(song)
    }

    return (
        <li onClick={handleClick}>{song.title}</li>

    )
}

export default SongListItem;