import React, { useState, useEffect } from "react";
import LayoutMP from "../Layout/LayoutMP";
import { Typography, IconButton } from "@mui/material";
import { PlayArrowOutlined, SkipNextOutlined, SkipPreviousOutlined, Shuffle, Repeat } from "@mui/icons-material";
import "../assets/css/music-player.css";
import ScheduleIcon from '@mui/icons-material/Schedule';
import HearingIcon from '@mui/icons-material/Hearing';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Track1 from "../assets/img/playlist.jpg";
import Track2 from "../assets/img/playlist.jpg";
import Track3 from "../assets/img/playlist.jpg";

function MusicPlayer() {
  // Dummy track data for demonstration
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const nextTracks = [
    {
      number: 1,
      image: Track1,
      title: "Ave Maria",
      artist: "Japorms",
      duration: "3:45",
      listens: 1000,
      likes: 500
    },
    {
      number: 2,
      image: Track2,
      title: "Mom",
      artist: "Dad",
      duration: "4:20",
      listens: 800,
      likes: 400
    },
    {
      number: 3,
      image: Track3,
      title: "Another One Bites the what",
      artist: "Jepoy",
      duration: "4:20",
      listens: 800,
      likes: 400
    },
    {
      number: 4,
      image: Track3,
      title: "Halakanayaw",
      artist: "Kween",
      duration: "9:20",
      listens: 1800,
      likes: 400
    },
    {
      number: 5,
      image: Track3,
      title: "Who the fock",
      artist: "Lanie",
      duration: "2:20",
      listens: 8000,
      likes: 400
    },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % nextTracks.length);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + nextTracks.length) % nextTracks.length);
  };

  return (
    <LayoutMP activePage={"music-player"}>
      <div className="main-container">
        <div className="grid-container">
          {/* Music Player Box */}
          <div className="music-player-box">
            {/* Music Player */}
            <div className="player">
              <div className="song-info">
                <Typography variant="h6">{nextTracks[currentTrackIndex].title}</Typography>
                <Typography variant="subtitle1">{nextTracks[currentTrackIndex].artist}</Typography>
              </div>
              <div className="controls">
                <IconButton aria-label="previous" onClick={handlePreviousTrack}>
                  <SkipPreviousOutlined />
                </IconButton>
                <IconButton aria-label="play/pause" onClick={handlePlayPause}>
                  {isPlaying ? <PauseOutlined /> : <PlayArrowOutlined />}
                </IconButton>
                <IconButton aria-label="next" onClick={handleNextTrack}>
                  <SkipNextOutlined />
                </IconButton>
                <IconButton aria-label="shuffle">
                  <Shuffle />
                </IconButton>
                <IconButton aria-label="loop">
                  <Repeat />
                </IconButton>
              </div>
              <div className="progress-bar">
                {/* Progress bar component */}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="rightpanel">Right Panel</div>

          {/* Next Tracks */}
          <div className="next-tracks-container" style={{ maxHeight: "200px", overflowY: "auto", overflowX: "hidden" }}>
            <Typography className="next-tracks-title sticky-title" variant="h5" component="div">
              Next Tracks
            </Typography>
            {nextTracks.map((track, index) => (
              <div key={index} className="next-track">
                <div className="next-track-number">{track.number}</div>
                <img className="ntrack-image" src={track.image} alt={track.title} />
                <div className="ntrack-info">
                  <div className="ntrack-title">{track.title}</div>
                  <div className="ntrack-artist">{track.artist}</div>
                  <div className="ntrack-playtime">
                    <span className="icon">
                      <ScheduleIcon />
                    </span>
                    {track.duration}
                  </div>
                  <div className="ntrack-listens">
                    <span className="icon">
                      <HearingIcon />
                    </span>
                    {track.listens}
                  </div>
                  <div className="ntrack-likes">
                    <span className="icon">
                      <FavoriteIcon />
                    </span>
                    {track.likes}
                  </div>
                  <IconButton className="nplay-button" aria-label="play">
                    <PlayArrowOutlined />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutMP>
  );
}

export default MusicPlayer;
