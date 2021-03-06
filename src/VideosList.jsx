import React, { useEffect, useState } from "react";
import VideoItem from "./VideoItem";
import { getAllVideos } from "./Firestore";
import { Button, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [needUpdating, setNeedUpdating] = useState(false); // TODO: Probably a better way of doing this.

  useEffect(() => {
    getAllVideos().then((data) => {
      setVideos(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (needUpdating) {
      setLoading(true);
      getAllVideos().then((data) => {
        setVideos(data);
        setLoading(false);
        setNeedUpdating(false);
      });
    }
  }, [needUpdating]);

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

      {loading && <CircularProgress />}

      {videos.length >= 1 &&
        videos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            setNeedUpdating={setNeedUpdating}
          />
        ))}

      {!loading && videos.length === 0 && <p>Currently no videos available.</p>}
    </>
  );
};

export default VideoList;
