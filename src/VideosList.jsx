import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Divider,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import DeleteIcon from "@material-ui/icons/Delete";

const temp = [
  {
    title: "Jingle Bells",
    description: "Jingle bells, jingle bells, jingle all the way...",
  },
  {
    title: "Amazing Grace",
    description: "Amazing grace, so sweeeeeet the sound....",
  },
];

const VideoList = () => {
  return (
    <>
      <h2 style={{ fontSize: "0.75rem", textAlign: "left" }}>ALL VIDEOS</h2>
      {temp.map((video) => (
        <List key={video.title} dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MusicNoteIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={video.title} secondary={video.description} />
            <IconButton edge='end' aria-label='edit' disabled>
              <EditIcon />
            </IconButton>
            <IconButton edge='end' aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <Divider />
        </List>
      ))}
    </>
  );
};

export default VideoList;
