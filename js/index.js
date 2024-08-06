const title = document.querySelector(".title");
const video = document.querySelector("video");

window.addEventListener("keydown", function (e) {
	if (e.key === "Enter" && title.style.display === "block") {
		title.style.display = "none";
		video.style.display = "block";
		video.play();
	}
});

video.addEventListener("ended", () => {
	setTimeout(() => {
		title.style.display = "block";
		video.style.display = "none";
	}, 800);
});
