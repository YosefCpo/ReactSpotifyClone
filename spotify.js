export let authEndPoint = "https://accounts.spotify.com/authorize";

let redirectUri = "https://spotify-clone-yosef.firebaseapp.com/";

let clientId = "d5907eb0a73645429b8390177b5eade0";

let scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
	"playlist-read-private",
	"playlist-read-collaborative",
	"user-follow-read",
];

export let getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export let loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
