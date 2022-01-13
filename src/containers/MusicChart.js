import React, {useEffect, useState} from "react";
import MusicChartList from '../components/MusicChartList';
import SongDetail from "../components/SongDetail";


const MusicChart = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    
    
    // useEffect(() => {getMusic()}, []);

    const getMusic = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(songs => setSongs(songs));
    }

    // ['feed']['entry']['im:name']
    const onSongClick = (song) => {
        setSelectedSong(song)
    }

    return (
        <>
            <MusicChartList songs={songs} onSongClick={onSongClick}/>
            {selectedSong ? <SongDetail song={selectedSong}/> : null}
        </>

        )
}

export default MusicChart;