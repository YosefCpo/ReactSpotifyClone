export let initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	public_playlists: [],
	playlist_id: "",
	spotify: null,
	footer_playlist: null,
	// Remove after finish development
	// token:
	// 	"BQCYyqBepHSylsVvT_c6UAZ89D3GFaUgE_L5fONo6iX5utVbjg2T2cjLEb_p1G4fTz25BvOY0VYjM7QOPvjiuxFJiVEU56MuNe4RNpCLhnJ1z0ojBL1s9Elc0xFiayp5SYbb_R3A8hLq7W5yV4YUQZHG6Q",
};

let reducer = (state, action) => {
	switch (action.type) {
		case "set_user":
			return {
				...state,
				user: action.user,
			};

		case "set_token":
			return {
				...state,
				token: action.token,
			};

		case "set_playlists":
			return {
				...state,
				playlists: action.playlists,
			};

		case "set_public_playlists":
			return {
				...state,
				public_playlists: action.public_playlists,
			};

		case "set_followed":
			return {
				...state,
				followed: action.followed,
			};

		case "set_playlist_id":
			return {
				...state,
				playlist_id: action.playlist_id,
			};

		case "set_spotify":
			return {
				...state,
				spotify: action.spotify,
			};

		case "set_footer_playlist":
			return {
				...state,
				footer_playlist: action.footer_playlist,
			};

		default:
			return state;
	}
};

export default reducer;
