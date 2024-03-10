import React, { useState, useEffect } from "react";
import LayoutMP from "../Layout/LayoutMP";
// import { Typography, IconButton } from "@mui/material";
// import { PlayArrowOutlined } from "@mui/icons-material";
// import ScheduleIcon from '@mui/icons-material/Schedule';
// import HearingIcon from '@mui/icons-material/Hearing';
// import FavoriteIcon from '@mui/icons-material/Favorite';

import "../assets/css/music-player.css";

function MusicPlayer() {
  return (
    <LayoutMP activePage={"music-player"}>
      <div className="main-container">
        <div className="grid-container">
          {/*music player  */}
          <div className="musicplayer">Music Player</div>

          {/*Right Panel  */}
          <div className="rightpanel">Right Panel</div>


          {/*Next Tracks  */}
          <div className="tracks">Tracks</div>git 
        </div>
      </div>
    </LayoutMP>
  );
}

export default MusicPlayer;
