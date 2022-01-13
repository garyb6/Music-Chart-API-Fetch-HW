import React from "react";
import SongListItem from "./SongListItem";



const MusicChartList = ({songs}) => {

    const songsItems = songs.map((song, index) => {
        return <SongListItem songName= {song['im:name']} key={index} artist={song["im:artist"]} image={song["im:image"][0].label} rank={index} />
    });


    // const handleClick = () => {
    //     console.log(`clicked on ${songs}`);
    // }
    return(
        <>
        <ul>
        {songsItems}
        </ul>
        </>
    )
};

export default MusicChartList;