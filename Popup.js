class Popup {

	constructor (data = {}) {
		this.data = data;
		this.build();

	}

	build () {
		$(".popup").remove();
		$("body").prepend(
			$("<div>", {
				class: "popup"
			}).prepend(
				$("<div>", {
					class: "popup-content",
				})
			)
		)
	}

	remove() {
		$(".popup").remove();
	}

}