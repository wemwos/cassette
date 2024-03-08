import React, { useState, useEffect } from "react";
import LayoutMP from "../Layout/LayoutMP";
import { Breadcrumbs, Typography, Card, CardContent, IconButton, Button, Row, Col } from "react-bootstrap"; // Import Row and Col from react-bootstrap
import { Link } from "react-router-dom";
import { HomeOutlined, FavoriteOutlined, PlaylistPlayOutlined, PlayArrowOutlined} from "@mui/icons-material";
import ScheduleIcon from '@mui/icons-material/Schedule';
import HearingIcon from '@mui/icons-material/Hearing';
import FavoriteIcon from '@mui/icons-material/Favorite';

import "../assets/css/music-player.css";

// Import images
import Dnel from "../assets/img/Dnel.png";
import Track1Image from "../assets/img/playlist.jpg"; 
import Track2Image from "../assets/img/playlist.jpg";
import Track3Image from "../assets/img/playlist.jpg"; // Import image for Track 3

function MusicPlayer() {
  // State for artist of the month
  const [artistOfMonth, setArtistOfMonth] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [popularTracks, setPopularTracks] = useState([]);

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
            artist: "Dnel",
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
            title: "Another Track",
            artist: "Another Artist",
            playtime: "3:30",
            listens: 1200,
            likes: 550,
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
    <LayoutMP activePage={"Music Player"}>
      <div className="container-fluid h-100 m-0 p-3 py-2 dashboard-container">
        <div className="row w-auto m-0 overflow-x-hidden overflow-y-auto">
          <div className="col p-2 m-0 mt-1 page-title d-flex align-items-center justify-content-between ">
            <h1 className="m-0">Music Player</h1>
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
              <Link color="#fffffff2" href="/">
                <HomeOutlined className="home-breedcrumbs" fontSize="small" />
              </Link>
              <Typography color="#d40000" fontSize="smaller">
                Music Player
              </Typography>
            </Breadcrumbs>
          </div>
          <div className="col-12">
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
                <div className="popular-tracks-container">
                  <Typography className="popular-tracks-title" variant="h5" component="div">
                    Popular Tracks
                  </Typography>
                  {/* Popular Tracks */}
                  <Row xs={1} md={2} lg={3}> {/* Set column layout for different screen sizes */}
                    {popularTracks.map((track, index) => (
                      <Col key={index} className="popular-track">
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
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutMP>
  );
}

export default MusicPlayer;
