import React from 'react';
import SongListItem from './SongListItem';



const SongDetail = ({song}) => {

    return(
    <>
        <h4>Song Deets</h4>
        <h5>{song.title}</h5>
    </>
    )
}


export default SongDetail;