import React, { useCallback } from "react";
import "./Track.css";

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const addTrack = useCallback(
    (e) => {
      onAdd(track);
    },
    [onAdd, track]
  );

  const removeTrack = useCallback(
    (e) => {
      onRemove(track);
    },
    [onRemove, track]
  );

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="track-action" onClick={removeTrack}>
          -
        </button>
      );
    }

    return (
      <button className="track-action" onClick={addTrack}>
        +
      </button>
    );
  };
  return (
    <div className="track">
      <div className="track-info">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
