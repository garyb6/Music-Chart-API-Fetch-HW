import React from 'react';
import SongListItem from './SongListItem';



const SongDetail = ({song}) => {

    return(
    <>
        <h4>Song Deets</h4>
        <h5>{song.feed.entry[0]}</h5>
    </>
    )
}


export default SongDetail;