import React, {useEffect, useState} from "react";
import {useDataLayerValue} from "./DataLayer";
import "./Track.css";

function Track(props) {
	let [{}, dispatch] = useDataLayerValue();
	let [artists, setArtists] = useState("");
	let [date, setDate] = useState("");
	let [long, setLong] = useState(0);

	useEffect(() => {
		let artistsNameArray = [];
		props.artists.map((artist) => {
			artistsNameArray.push(artist?.name);
			let artistsNames = artistsNameArray.join(", ");
			setArtists(artistsNames);
			return artistsNameArray;
		});
	}, [props.artists]);

	useEffect(() => {
		let date = props.date.split("T")[0];
		setDate(date);
	}, [props.date]);

	useEffect(() => {
		let minutes = Math.floor(props.long / 1000 / 60);
		let seconds = Math.floor((props.long / 1000) % 60);
		let long = `${minutes}:${seconds}`;
		setLong(long);
	}, [props.long]);

	function clickHandler(e) {
		let tracks = document.querySelectorAll(".track");
		for (let i = 0; i < tracks.length; i++) {
			tracks[i].classList.remove("track-active");
			tracks[i].classList.add("track-hover");
		}
		e.currentTarget.classList.remove("track-hover");
		e.currentTarget.classList.add("track-active");
	}

	function playHandler() {
		let footer_playlist = {
			img: props.img,
			name: props.name,
			artists: artists,
			long: long,
		};
		dispatch({
			type: "set_footer_playlist",
			footer_playlist: footer_playlist,
		});
	}

	return (
		<div className={`track track-hover`} onClick={clickHandler}>
			<div className="track-main">
				<div className="track-play" onClick={playHandler}>
					<svg
						height="32"
						role="img"
						width="32"
						viewBox="0 0 24 24"
						className="track-play-svg"
					>
						<polygon
							points="21.57 12 5.98 3 5.98 21 21.57 12"
							fill="currentColor"
						></polygon>
					</svg>
				</div>
				<div className="track-image">
					<img alt="track-img" src={props.img} />
				</div>
				<div className="track-info">
					<h4 className="track-name">{props.name}</h4>
					<p className="track-artists">{artists}</p>
				</div>
			</div>
			<div className="track-sec">
				<div className="track-album">
					<p>{props.album}</p>
				</div>
				<div className="track-date">{date}</div>
				<div className="track-clock">{long}</div>
			</div>
		</div>
	);
}

export default Track;
