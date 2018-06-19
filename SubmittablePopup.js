class SubmittablePopup extends Popup {
	
	constructor(url, data) {
		super(data);
		this.populate(url);
	}

	submitNew() {
			 fetch('api/playlist', {
			 	method: "post",
			 	contentType: 'application/json',
			 	body: JSON.stringify(this.data)
			 }).then(console.log(this.data))
			.then(response => response.json())
			.then(data => console.log(data));

	}

	edit(url, data) {
		fetch(url, {
			method: "post",
			contentType: 'application/json',
			body: JSON.stringify(data)
		 })
		.then(response => response.json())
		.then(data => console.log(data));
	}

	delete() {
		fetch('api/playlist/' + this.data, {
			method: "delete"
		})
		.then(response => response.json())
		.then(data => console.log(data));
	}

	populate (url) {
		$('.popup-content').empty();
		 fetch(url)
		.then(response => response.text())
		.then(data => {
			$('.popup-content').append(data)
		})
	}


}