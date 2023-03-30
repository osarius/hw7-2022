var video;

window.addEventListener("load", function() {//load has something to do, not in html
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay =false
	console.log("autoplay is set to "+ video.autoplay)
	video.loop =false
	console.log("loop is set to "+ video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.querySelector("#player1")
	video.volume = 0.8;
	console.log("volume is " + video.volume)
});//listen for something specifically on play, once happens do this.
//
document.querySelector("#pause").addEventListener("click",function(){
	console.log("Pause Video");
	video = document.querySelector("#player1");
	alert(video.paused);
	console.log("It is paused? " + video.paused);
});
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slowed Video");
	video = document.querySelector("#player1")
	video.playbackRate -= 0.1 * video.playbackRate;
	console.log("Speed is " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Sped Up Video");
	video = document.querySelector("#player1")
	video.playbackRate += 0.1 * video.playbackRate;
	console.log("Speed is " + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click",function(){
	console.log("Skip Video");
	video = document.querySelector("#player1")
	video.currentTime=0;
	if(video.currentTime < video.duration){
		video.currentTime = 10+video.currentTime;
	}
	else{
		video.currentTime = 0;
	}
	console.log("Skipped Video by "+ video.currentTime);
});
document.querySelector("#mute").addEventListener("click",function(){
	this.innerHTML = "Unmute";
});
