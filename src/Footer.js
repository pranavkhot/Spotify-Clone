import React from 'react'
import "./Footer.css";
import PlayerCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from  "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">
          <div className="footer_left">
            <img className="footer_albumLogo" src="data:image/jpeg;base64,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" alt="" />
            <div className="footer_songInfo">
              <h4>Yeah!</h4>
              <h4>Hell</h4>
           </div>           
           </div> 
            <div className="footer_center">
              <ShuffleIcon className="footer_green" />
              <SkipPreviousIcon className="footer_icon" />
              <PlayerCircleOutlineIcon fontSize="large" className="footer_icon" />
              <SkipNextIcon className="footer_icon" />
              <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
              <Grid container spacing={2}>
                <Grid item>
                  <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                  <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                  <Slider />
                </Grid>
              </Grid>
            </div>
        </div>
    )
}

export default Footer
