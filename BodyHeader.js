import React, {useEffect, useState} from "react";
import "./BodyHeader.css";
import {useDataLayerValue} from "./DataLayer";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function BodyHeader() {
	let [{user, playlists, followed, playlist_id, spotify}] = useDataLayerValue();
	let [count, setCount] = useState([]);
	let [artistsCount, setArtistsCount] = useState(0);

	let [isPlaylist, setIsPlaylist] = useState(false);

	let [playlistImage, setPlayListImage] = useState("");

	let [playListName, setPlayListName] = useState("");

	useEffect(() => {
		let public_playlists = [];
		playlists?.items?.map((playlist) => {
			if (playlist.public) {
				public_playlists.push(playlist);
			}
			return playlist;
		});
		setCount(public_playlists.length);
	}, [playlists]);

	useEffect(() => {
		setArtistsCount(followed?.artists?.items?.length);
	}, [followed]);

	useEffect(() => {
		if (playlist_id !== "") {
			setIsPlaylist(true);
			spotify.getPlaylistCoverImage(playlist_id).then((image) => {
				setPlayListImage(image[0]?.url);
			});
			spotify.getPlaylist(playlist_id).then((playListName) => {
				setPlayListName(playListName?.name);
			});
		}
	}, [playlist_id, spotify]);

	return (
		<div className="body-header">
			<div className="logo-container">
				{isPlaylist && playlistImage !== undefined ? (
					<img
						className="playlist-img"
						alt="playlist-img"
						src={playlistImage}
					/>
				) : isPlaylist ||
				  user?.images[0]?.url === "" ||
				  user?.images[0]?.url === undefined ? (
					<div className="empty-logo">
						<PersonOutlineIcon />
					</div>
				) : (
					<img className="body-logo" alt="my-logo" src={user?.images[0]?.url} />
				)}
			</div>
			<div className="info">
				<h5 className="title">{isPlaylist ? "PLAYLIST" : "PROFILE"}</h5>
				<h2 className="user-name">
					{isPlaylist ? playListName : user?.display_name}
				</h2>
				<div className="priv-info">
					<p>{count} Public Playlists</p>
					<span></span>
					<p>{artistsCount} Following</p>
				</div>
			</div>
		</div>
	);
}

export default BodyHeader;
