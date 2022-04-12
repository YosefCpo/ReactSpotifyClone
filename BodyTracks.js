import React, {useEffect, useState} from "react";
import "./BodyTracks.css";
import Track from "./Track";
import {useDataLayerValue} from "./DataLayer";

function BodyTracks() {
	let [{spotify, playlist_id}] = useDataLayerValue();

	let [playlistTracks, setPlaylistTracks] = useState([]);

	useEffect(() => {
		if (playlist_id !== "") {
			spotify.getPlaylistTracks(playlist_id).then((playlist_tracks) => {
				setPlaylistTracks(playlist_tracks);
			});
		}
	}, [playlist_id, spotify]);

	return (
		<div className="tracks-container">
			{playlistTracks?.items?.map((track) => {
				if (playlistTracks?.items?.length > 0) {
					return (
						<Track
							key={track?.track?.id}
							img={track?.track?.album?.images[0]?.url}
							name={track?.track?.name}
							artists={track?.track?.artists}
							album={track?.track?.album?.name}
							date={track?.added_at}
							long={track?.track?.duration_ms}
						/>
					);
				}
				return track;
			})}
		</div>
	);
}

export default BodyTracks;
