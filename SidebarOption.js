import React from "react";
import {useDataLayerValue} from "./DataLayer";

function SidebarOption({title, Icon, playlist_id}) {
	let [{}, dispatch] = useDataLayerValue();

	function clickHandler() {
		if (playlist_id !== undefined) {
			dispatch({
				type: "set_playlist_id",
				playlist_id: playlist_id,
			});
		}
	}

	return (
		<div className="sidebar-option" onClick={clickHandler}>
			{Icon && <Icon />}
			{Icon ? <h4>{title}</h4> : <p>{title}</p>}
		</div>
	);
}

export default SidebarOption;
