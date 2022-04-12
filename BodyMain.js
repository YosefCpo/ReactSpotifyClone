import React, {useEffect} from "react";
import "./BodyMain.css";
import BodyTracks from "./BodyTracks";

function BodyMain() {
	return (
		<div className="body-main">
			<div className="options">
				<div className="play">
					<svg
						role="img"
						height="28"
						width="28"
						viewBox="0 0 24 24"
						className="play-svg"
					>
						<path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
					</svg>
				</div>
				<div className="dots">
					<svg
						role="img"
						height="32"
						width="32"
						viewBox="0 0 24 24"
						className="dots-svg"
					>
						<path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
					</svg>
				</div>
			</div>

			<div className="line">
				<span className="title">TITLE</span>
				<div className="sec-line">
					<span className="album">ALBUM</span>
					<span className="date">DATE ADDED</span>
					<span className="clock">
						<svg
							role="img"
							height="16"
							width="16"
							viewBox="0 0 16 16"
							className="clock-svg"
						>
							<path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path>
							<path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path>
						</svg>
					</span>
				</div>
			</div>

			<hr className="body-hr" />

			<BodyTracks />
		</div>
	);
}

export default BodyMain;
