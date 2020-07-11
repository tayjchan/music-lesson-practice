import React from "react";
import VideoItem from "./VideoItem";

const temp = [
  {
    title: "Jingle Bells",
    description:
      "Jingle bells, jingle bells. Jingle all the way. I'm practicing this to ready myself for Christmas.",
  },
  {
    title: "Amazing Grace",
    description: "",
  },
  {
    title: "Cruel Summer",
    description: "Probably the best song off of Taylor Swift's newest album.",
  },
  {
    title: "All Too Well",
    description: "Probably the best song of Taylor Swift, period.",
  },
  {
    title: "Red",
    description:
      "Not really my favorite Taylor Swift song if I'm being honest.",
  },
];

const VideoList = () => {
  return (
    <>
      <h2>ALL VIDEOS</h2>
      <p>
        Click on one of the titles below to view description and download video.
      </p>

      {temp.map((video) => (
        <VideoItem video={video} />
      ))}
    </>
  );
};

export default VideoList;
