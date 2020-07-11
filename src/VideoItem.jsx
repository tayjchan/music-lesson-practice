import React, { useState } from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import DeleteButton from "./DeleteButton";

const VideoItem = ({ video, setNeedUpdating }) => {
  const [expanded, setExpanded] = useState(false);
  const description = video.description
    ? video.description
    : "No description available.";

  function handleClickDownload() {
    if (video.fileUrl) {
      window.open(video.fileUrl, "_blank");
    }
  }

  return (
    <ListItem
      divider
      selected={expanded ? true : false}
      alignItems={expanded ? "flex-start" : "center"}
    >
      <ListItemAvatar>
        <Avatar>
          <MusicNoteIcon />
        </Avatar>
      </ListItemAvatar>
      {expanded ? (
        <div>
          <p
            style={{ fontWeight: "bold" }}
            onClick={() => setExpanded(!expanded)}
          >
            {video.title}
          </p>
          <p>{description}</p>
          <IconButton aria-label='download' onClick={handleClickDownload}>
            <CloudDownloadIcon />
          </IconButton>
          <DeleteButton
            title={video.title}
            videoId={video.id}
            setNeedUpdating={setNeedUpdating}
          />
        </div>
      ) : (
        <>
          <ListItemText
            disableTypography
            primary={video.title}
            secondary={expanded ? description : null}
            onClick={() => setExpanded(!expanded)}
          />
          <DeleteButton
            title={video.title}
            videoId={video.id}
            setNeedUpdating={setNeedUpdating}
          />
        </>
      )}
    </ListItem>
  );
};

export default VideoItem;
