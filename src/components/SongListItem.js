import React from 'react';



const SongListItem = ({songName, artist, rank, image}) => {
    return (
        <div className='song-item'>
            <h3>{rank + 1}</h3>
            <h3>{songName.label}</h3>
            <h4>{artist.label}</h4>
            <img src={image}></img>
        </div>
    )}

export default SongListItem