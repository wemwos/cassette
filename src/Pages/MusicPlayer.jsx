import React, { useState, useEffect } from "react";
import LayoutMP from "../Layout/LayoutMP";
import { Typography, IconButton, LinearProgress } from "@mui/material";
import {
  PlayArrowOutlined,
  SkipNextOutlined,
  SkipPreviousOutlined,
  PauseOutlined,
  Shuffle,
  Repeat,
} from "@mui/icons-material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import HearingIcon from "@mui/icons-material/Hearing";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../assets/css/music-player.css";
import Track1 from "../assets/img/playlist.jpg";
import Track2 from "../assets/img/playlist.jpg";
import Track3 from "../assets/img/playlist.jpg";
import track1lyrics from "../assets/lyrics/track1lyrics.txt";
import track2lyrics from "../assets/lyrics/track2lyrics.txt";

function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [lyricsContent, setLyricsContent] = useState("");
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [activeButton, setActiveButton] = useState("lyrics");

  const nextTracks = [
    {
      number: 1,
      image: Track1,
      title: "Redrum",
      artist: "21",
      duration: "3:45",
      listens: 1000,
      likes: 500,
      lyrics: track1lyrics,
    },
    {
      number: 2,
      image: Track2,
      title: "Viva La Vida",
      artist: "Daddy",
      duration: "4:20",
      listens: 800,
      likes: 400,
      lyrics: track2lyrics,
    },
    {
      number: 3,
      image: Track3,
      title: "Another One Bites the what",
      artist: "Jepoy",
      duration: "4:20",
      listens: 800,
      likes: 400,
      lyrics: "Dummy lyrics for Another One Bites the what",
    },
    {
      number: 4,
      image: Track3,
      title: "Halakanayaw",
      artist: "Kween",
      duration: "9:20",
      listens: 1800,
      likes: 400,
      lyrics: "Dummy lyrics for Halakanayaw",
    },
    {
      number: 5,
      image: Track3,
      title: "Ketchup",
      artist: "Lanie",
      duration: "2:20",
      listens: 8000,
      likes: 400,
      lyrics: "Dummy lyrics for Who the fock",
    },
    {
      number: 6,
      image: Track3,
      title: "Narcissist",
      artist: "No Rome",
      duration: "3:20",
      listens: 8000,
      likes: 400,
      lyrics: "Dummy lyrics for Who the fock",
    },
    {
      number: 7,
      image: Track3,
      title: "Who the fock",
      artist: "Lanie",
      duration: "2:20",
      listens: 8000,
      likes: 400,
      lyrics: "Dummy lyrics for Who the fock",
    },
    {
      number: 8,
      image: Track3,
      title: "On some BS",
      artist: "grr",
      duration: "3:20",
      listens: 8000,
      likes: 400,
      lyrics: "Dummy lyrics for Who the fock",
    },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % nextTracks.length);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + nextTracks.length) % nextTracks.length,
    );
  };

  const handleLyricsClick = () => {
    setShowLyrics(true);
    setShowPlaylist(false);
    setActiveButton("lyrics");
  };

  const handlePlaylistClick = () => {
    setShowPlaylist(true);
    setShowLyrics(false);
    setActiveButton("playlist");
  };

  const handleTrackPlay = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    if (showLyrics) {
      fetch(nextTracks[currentTrackIndex].lyrics)
        .then((response) => response.text())
        .then((data) => setLyricsContent(data))
        .catch((error) => console.log(error));
    }
  }, [showLyrics, currentTrackIndex, nextTracks]);

  return (
    <LayoutMP activePage={"music-player"}>
      <div className="main-container">
        <div className="grid-container">
          {/*MUSIC PLAYER  */}
          <div className="music-player-box">
            <div className="player">
              <div className="song-info">
                <Typography variant="h6">
                  {nextTracks[currentTrackIndex].title}
                </Typography>
                <Typography variant="subtitle1">
                  {nextTracks[currentTrackIndex].artist}
                </Typography>
              </div>
              <div className="controls">
                <IconButton aria-label="shuffle" onClick={handleNextTrack}>
                  <Shuffle />
                </IconButton>
                <IconButton aria-label="previous" onClick={handlePreviousTrack}>
                  <SkipPreviousOutlined />
                </IconButton>
                <IconButton
                  className="play-pause-button"
                  aria-label="play/pause"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? <PauseOutlined /> : <PlayArrowOutlined />}
                </IconButton>
                <IconButton aria-label="next" onClick={handleNextTrack}>
                  <SkipNextOutlined />
                </IconButton>
                <IconButton aria-label="loop" onClick={handleNextTrack}>
                  <Repeat />
                </IconButton>
              </div>
            </div>
            <div className="progress-bar">
              <LinearProgress variant="determinate" value={50} />
            </div>
          </div>

          {/*RIGHT PANEL  */}
          <div className="rightpanel">
            <div className="buttons-container">
              <button
                className={activeButton === "lyrics" ? "active" : ""}
                onClick={handleLyricsClick}
              >
                Lyrics
              </button>
              <button
                className={activeButton === "playlist" ? "active" : ""}
                onClick={handlePlaylistClick}
              >
                Playlist
              </button>
            </div>
            {showLyrics && (
              <div className="lyrics-container">
                <Typography className="lyrics-content">
                  {lyricsContent}
                </Typography>
              </div>
            )}
            {showPlaylist && (
              <div className="playlist-container">
                {nextTracks.map((track, index) => (
                  <div
                    key={index}
                    className={`playlist-track ${
                      currentTrackIndex === index ? "playing" : ""
                    }`}
                  >
                    <div className="playlist-track-number">{track.number}</div>
                    <img
                      className="playlist-track-image"
                      src={track.image}
                      alt={track.title}
                    />
                    <div className="playlist-track-info">
                      <div className="playlist-track-title">{track.title}</div>
                      <div className="playlist-track-artist">
                        {track.artist}
                      </div>
                    </div>
                    <div
                      className="playlist-track-play-button"
                      onClick={() => handleTrackPlay(index)}
                    >
                      {isPlaying && currentTrackIndex === index ? (
                        <PauseOutlined />
                      ) : (
                        <PlayArrowOutlined />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/*NEXT TRACKS  */}
          <div className="next-tracks-container">
            <Typography
              className="next-tracks-title sticky-title"
              variant="h5"
              component="div"
            >
              Next Tracks
            </Typography>
            {nextTracks.map((track, index) => (
              <div key={index} className="next-track">
                <div className="next-track-number">{track.number}</div>
                <img
                  className="ntrack-image"
                  src={track.image}
                  alt={track.title}
                />
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
