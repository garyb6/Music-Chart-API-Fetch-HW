import React from "react";
import MusicChartList from '../components/MusicChartList';


const MusicChart = () => {
    
    // const getMusic = () => {
    //     console.log("I am a music chart");
    //     // fetch().then(res => res.json()).then(songs => setSongs(songs))
    // }

    return (
        <>
            <h2>I am a Music Chart</h2>
            <MusicChartList/>
        </>

        )
}

export default MusicChart;