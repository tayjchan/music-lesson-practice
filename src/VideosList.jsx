import React, { useEffect, useState } from "react";
import VideoItem from "./VideoItem";
import { getAllVideos } from "./Firestore";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getAllVideos().then((data) => setVideos(data));
  }, []);

  const history = useHistory();
  return (
    <>
      <Button
        className='primaryButton'
        fullWidth
        variant='contained'
        margin='normal'
        onClick={() => history.push("/new")}
      >
        ADD NEW VIDEO
      </Button>
      <h2>ALL VIDEOS</h2>
      <p>
        Click on one of the titles below to view description and download video.
      </p>

      {videos.length >= 1 ? (
        videos.map((video) => <VideoItem key={video.id} video={video} />)
      ) : (
        <p>Currently no videos available.</p>
      )}
    </>
  );
};

export default VideoList;
