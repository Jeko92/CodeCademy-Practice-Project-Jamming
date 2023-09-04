import React, { useCallback } from "react";
import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

const Playlist = ({ playlistTracks, onRemove, onSave, onNameChange }) => {
  const handleNameChange = useCallback(
    (e) => {
      onNameChange(e.target.value);
    },
    [onNameChange]
  );
  return (
    <div className="playlist">
      <input
        type="text"
        onChange={handleNameChange}
        defaultValue={"New Playlist"}
      />
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      <button className="playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
