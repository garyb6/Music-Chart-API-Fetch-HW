import React from "react";
import SongListItem from "./SongListItem";



const MusicChartList = ({songs, onSongClick}) => {

    // const songsItems = songs['feed']['entry'].map((song, index, onSongClick) => {
        // return <SongListItem song= {song['title']['label']} key={index['id']['attributes']['im:id']} onSongClick={onSongClick}/>
    // });


    const handleClick = () => {
        console.log(`clicked on ${songs}`);
    }
    return(
        <>
        <ul>
        <h1>Hello World</h1>
        {/* {songsItems} */}
        </ul>
        </>
    )
};

export default MusicChartList;