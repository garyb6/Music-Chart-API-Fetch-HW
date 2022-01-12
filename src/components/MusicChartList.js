import React from "react";
import SongListItem from "./SongListItem";



const MusicChartList = ({songs, onSongClick}) => {

    const songsItems = songs.map(song => <SongListItem song={song} key={song.feed.entry.id.attributes["im:id"]} onSongClick={onSongClick}/>
    )

    const handleClick = () => {
        console.log(`clicked on ${song}`);
    }
    return(
        <>
        <ul>
        <h1>Hello Pet</h1>
        {songsItems}
        </ul>
        </>
    )
};

export default MusicChartList;