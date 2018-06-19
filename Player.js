class Player {
	constructor (playlistId, playlistName, playlistImage) {
		this.playlistId = playlistId;
		this.playlistName = playlistName;
		this.playlistImage = playlistImage;
		this.getSongs();
	}

	getSongs() {
		$.get('api/playlist/' + this.playlistId + '/songs', function(response) {
			this.songs = response.data.songs;
			this.build();
		}.bind(this));
	}

	build () {
		popup = new Popup();
		$(".player").remove();
		this.container = $('<div>', {class: "player"});
		this.container.append(
			$('<h4>', {
				text: this.playlistName, 
				class: "player-name"
			}),
			$("<div>").addClass("playlistImage active").css('background-image', 'url(' + this.playlistImage + ')'),
			$('<audio>', {
				src: this.songs[0].url, 
				'data-song_id': 0,
				controls: 'controls',
				autoplay: 'autoplay' 
			}).on('ended', this.playNext.bind(this)).on('pause', this.puseAnimation).on('play', this.resumeAnimation),
			$("<div>", {class: "songListContainer"}).append(
				$("<ul>", {class: "songList"}).append(
					$.map(this.songs, song => {
						return $("<li>", {text: song.name}).click((e) => {
							$('audio').attr('src', song.url);
							this.highlightSong(this.songs);
						})
					})
				)
			)

		)
		this.container.appendTo($('.popup-content'));
		this.highlightSong(this.songs);
		
		$('.popup-content').append(
			$("<input>", {
				type: "button",
				class: "btn waves-effect waves-light blue",
				value: "close"
			}).click(e => {
				popup.remove();
			})
		)
	}

	playNext(e) {
		var index = ++e.target.dataset.song_id;
		if (index >= this.songs.length) {return false;}

		e.target.src = this.songs[index].url;
		e.target.play();
		this.highlightSong(this.songs);
	}

	puseAnimation(e) {
		$(".active").css('animation-play-state', 'paused');
	}

	resumeAnimation(e) {
		$(".active").addClass("spinnig").css('animation-play-state', 'running');
	}

	highlightSong(songs) {
		$("ul").find("li").removeClass("strong");
		songs.forEach(song => {
			if (song.url === $("audio").attr('src')) {
				$("li:contains(" + song.name + ")").addClass("strong")
			}
		})
	}
}