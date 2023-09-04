import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ tracks, onAdd, isRemoval, onRemove }) => {
  // const TrackList = (props) => {
  return (
    <div className="tracklist">
      {/* {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })} */}
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
