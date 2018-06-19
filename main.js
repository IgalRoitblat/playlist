renderMainView();

var popup = "";

$(".add-playlist-btn").click(event => {
	popup = new SubmittablePopup('popups/add_playlist.html');
});


function init(playlists) {
	$('main').empty()
	playlists.forEach(playlistObj => {
		var playlist = new Playlist(playlistObj);
		playlist.build();
	})
}

function renderMainView() {
	$('main').empty();
	 fetch('api/playlist')
	.then(response => response.json())
	.then(playlists => {
		console.log(playlists.data);
		init(playlists.data)

	$('input[type=search]').keyup(event => {
		init(
			playlists.data.filter(pl => pl.name.toLowerCase().includes($(event.target).val().toLowerCase()))
		)
	});

	})
}

function addPlaylist(data) {
	console.log(data);
	 fetch('api/playlist', {
	 	method: "post",
	 	contentType: 'application/json',
	 	body: JSON.stringify(data)
	 })
	.then(response => response.json())
	.then(data => console.log(data));
}
