import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

function VideoItem({ video, onVideoSelect }) {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "10px",
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
          style={{ marginRight: "20px", width: "40%" }}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;