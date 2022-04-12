import React from "react";
import "./Sidebar";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import {useDataLayerValue} from "./DataLayer";

function Sidebar() {
	let [{playlists}] = useDataLayerValue();

	return (
		<div className="sidebar">
			<img
				className="sidebar-logo"
				alt="spotify-logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
			/>
			<SidebarOption title="Home" Icon={HomeIcon} />
			<SidebarOption title="Search" Icon={SearchIcon} />
			<SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
			<div className="sidebar-title">Playlists</div>
			<hr />

			{playlists?.items?.map((playlist) => (
				<SidebarOption
					key={playlist.id}
					title={playlist.name}
					playlist_id={playlist?.id}
				/>
			))}
		</div>
	);
}

export default Sidebar;
