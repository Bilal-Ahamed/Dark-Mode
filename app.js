const moonPath =
	"M15 26C15 40.3594 26 52 26 52C11.6406 52 0 40.3594 0 26C0 11.6406 11.6406 0 26 0C26 0 15 11.6406 15 26Z";
const sunPath =
	"M52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26Z";

const darkMode = document.getElementById("darkMode");

let toggle = false;

darkMode.addEventListener("click", () => {
	//WE NEED TO SET UP THE ANIME.JS
	// HERE WE SET THE TIMELINE
	const timeline = anime.timeline({
		duration: 750,
		easing: "easeOutExpo",
	});
	//ADD ELEMENT TO TIMELINE
	timeline
		.add({
			targets: ".sun",
			d: [
				{ value: toggle ? sunPath : moonPath },
				// ,{value : othor change in shape or postition}
			],
		})
		.add(
			{
				targets: "#darkMode",
				rotate: toggle ? 0 : 320,
			},
			"-=450"
		)
		.add(
			{
				targets: "section",
				backgroundColor: toggle ? "rgb(179,179,179)" : "rgb(22,22,22)",
				color: toggle ? "rgb(22,22,22)" : "rgb(179,179,179)",
			},
			"-=700"
		);

	if (!toggle) {
		toggle = true;
	} else {
		toggle = false;
	}
});
