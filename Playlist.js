class Playlist {
	constructor (data) {
		this.id = data.id;
		this.name = data.name;
		this.image = data.image;
		this.container = null;
	}
	getId () {
		return this.id;
	}

	build () {
		this.container = $('<section>', {class: "playlist"}).click(this.showControls);
		$('<h3>', {
			text: this.name, 
			class: "playlist-name"
		}).appendTo(this.container)
		$("<div>").addClass("playlistImage").css('background-image', 'url(' + this.image + ')').appendTo(
			this.container
		).append(
			$('<div>', {
				class: "playlist-play-btn btn-floating aves-effect waves-light blue",
			}).append(
				$("<i>", {class: "material-icons", text: "play_arrow"})
			).click(() => this.registerPlaying()),
			$('<div>', {
				class: "playlist-edit-btn btn-floating aves-effect waves-light green",
			}).append(
				$("<i>", {class: "material-icons", text: "edit"})
			).click(() => this.edit()),
			$('<div>', {
				class: "playlist-delete-btn btn-floating aves-effect waves-light red",
			}).append(
				$("<i>", {class: "material-icons", text: "delete"})
			).click(() => this.remove())
		)
		this.container.appendTo($('main'))
		$("h3").arctext({radius: 400})
	}

	registerPlaying() {
		var player = new Player(this.id, this.name, this.image);
	}

	showControls(e) {
		$(e.target).find(".playlist-play-btn, .playlist-edit-btn, .playlist-delete-btn").toggleClass("visible");
	}

	remove() {
		popup = new SubmittablePopup('popups/delete_playlist.html', this.id)
	}

	edit() {
		 fetch('api/playlist/' + this.id + "/songs")
		.then(response => response.json())
		.then(songsInfo => {
			var info = {
				id: this.id,
				name: this.name,
				image: this.image,
				songs: songsInfo.data.songs
			}
			popup = new SubmittablePopup('popups/edit_playlist.html', info)}
		)

	}
}