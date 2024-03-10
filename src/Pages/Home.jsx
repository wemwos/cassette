import React, { useState, useEffect } from "react";
import LayoutMP from "../Layout/LayoutMP";
import { Breadcrumbs, Typography, Card, CardContent, IconButton, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { HomeOutlined, FavoriteOutlined, PlaylistPlayOutlined, PlayArrowOutlined } from "@mui/icons-material";
import ScheduleIcon from '@mui/icons-material/Schedule';
import HearingIcon from '@mui/icons-material/Hearing';
import FavoriteIcon from '@mui/icons-material/Favorite';

import "../assets/css/home.css";

// Import images
import Dnel from "../assets/img/Dnel.png";
import Track1Image from "../assets/img/playlist.jpg";
import Track2Image from "../assets/img/playlist.jpg";
import Track3Image from "../assets/img/playlist.jpg";

import Artist1Image from "../assets/img/playlist.jpg";
import Artist2Image from "../assets/img/playlist.jpg";
import Artist3Image from "../assets/img/playlist.jpg";

function Home() {
  // State for artist of the month
  const [artistOfMonth, setArtistOfMonth] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [popularTracks, setPopularTracks] = useState([]);
  const [trendingArtists, setTrendingArtists] = useState([]);

  // Simulated data for artist of the month
  const simulatedArtistOfMonth = {
    name: "Dnel",
    listeners: 10000,
    followers: 5000,
    playlistLink: "/playlist", // Replace with actual playlist link
  };

  // Simulate fetching artist of the month data
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setArtistOfMonth(simulatedArtistOfMonth);
        // Simulated data for popular tracks
        setPopularTracks([
          {
            image: Track1Image,
            title: "Jusmeyo ",
            artist: "Jonel",
            playtime: "3:45",
            listens: 1000,
            likes: 500,
          },
          {
            image: Track2Image,
            title: "Marimar",
            artist: "Hev Abuu",
            playtime: "4:15",
            listens: 1500,
            likes: 600,
          },
          // Track 3
          {
            image: Track3Image,
            title: "Yawa",
            artist: "Sarah G",
            playtime: "3:30",
            listens: 1200,
            likes: 550,
          },
          // Add more tracks here
          {
            image: Track3Image,
            title: "New Track",
            artist: "New Artist",
            playtime: "4:00",
            listens: 800,
            likes: 400,
          },
        ]);

        // Simulated data for trending artists
        setTrendingArtists([
          {
            image: Artist1Image,
            name: "Artist 1",
            albums: 5,
          },
          {
            image: Artist2Image,
            name: "Artist 2",
            albums: 3,
          },
          {
            image: Artist3Image,
            name: "Artist 3",
            albums: 7,
          },
        ]);
      }, 1000);
    };

    fetchData();
  }, []);

  // Function to toggle like
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <LayoutMP activePage={"Home"}>
      <div className="container-fluid h-100 m-0 p-3 py-2 dashboard-container">
        <div className="row w-auto m-0 overflow-x-hidden overflow-y-auto">
          <div className="col-lg-8">
            <div className="row">
              <div className="col p-2 m-0 mt-1 page-title d-flex align-items-center justify-content-between">
                <h1 className="m-0"></h1>
              </div>
            </div>
            {artistOfMonth && (
              <div>
                <div className="artist-card-container">
                  <Card>
                    <CardContent className="card-content">
                      <div className="background-container" style={{ backgroundImage: `url(${Dnel})` }}></div>
                      <div className="content-overlay">
                        <Typography className="card-title" variant="h5" component="div">
                          Artist of the Month
                        </Typography>
                        <Typography className="card-subtitle" variant="subtitle1" component="div">
                          {artistOfMonth.name}
                        </Typography>
                        <Typography className="card-text" variant="body1" component="div">
                          Number of Listeners: {artistOfMonth.listeners}
                          <IconButton className="like-button" aria-label="like" onClick={toggleLike}>
                            {isLiked ? <FavoriteOutlined className="filled" /> : <FavoriteOutlined />}
                          </IconButton>
                        </Typography>
                        <div className="buttons-container mt-3">
                          <Button className="button-view-playlist" variant="contained" component={Link} to={artistOfMonth.playlistLink} startIcon={<PlaylistPlayOutlined />}>
                            View Playlist
                          </Button>
                          <Button className="button-follow" variant="contained">
                            Follow
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="popular-tracks-container" style={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden" }}>
                  <Typography className="popular-tracks-title sticky-title" variant="h5" component="div">
                    Popular Tracks
                  </Typography>
                  {/* Popular Tracks */}
                  {popularTracks.map((track, index) => (
                    <div className="popular-track" key={index}>
                      <div className="popular-track-number">{index + 1}</div>
                      <img className="track-image" src={track.image} alt={track.title} />
                      <div className="track-info">
                        <div className="track-title">{track.title}</div>
                        <div className="track-artist">{track.artist}</div>
                        <div className="track-playtime">
                          <span className="icon"><ScheduleIcon /></span>
                          {track.playtime}
                        </div>
                        <div className="track-listens">
                          <span className="icon"><HearingIcon /></span>
                          {track.listens}
                        </div>
                        <div className="track-likes">
                          <span className="icon"><FavoriteIcon /></span>
                          {track.likes}
                        </div>
                        <IconButton className="play-button" aria-label="play">
                          <PlayArrowOutlined />
                        </IconButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Right Panel */}
          <div className="col-lg-4">
            <div className="container mt-3">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <div className="trending-artist-container">
                        <Typography className="trending-artist-title" variant="h5" component="div">
                          Trending Artist
                        </Typography>
                        <div className="trending-artist-content">
                          {/* Map through trending artists */}
                          {trendingArtists.map((artist, index) => (
                            <div className="trending-artist" key={index}>
                              <img className="artist-image" src={artist.image} alt={artist.name} />
                              <Typography className="artist-name" variant="subtitle1" component="div">
                                {artist.name}
                              </Typography>
                              <Typography className="artist-albums" variant="body2" component="div">
                                Albums: {artist.albums}
                              </Typography>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <div className="template-box-2">
                        <h5 className="card-title">Genres</h5>
                        <div className="genre-section">
                          <Button className="genre-button">Rock</Button>
                          <Button className="genre-button">OPM</Button>
                          <Button className="genre-button">HipHop</Button>
                          <Button className="genre-button">Rap</Button>
                          <Button className="genre-button">Country</Button>
                          <Button className="genre-button">Classic</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shet */}
            </div>
          </div>
        </div>
      </div>
    </LayoutMP>
  );
}

export default Home;
