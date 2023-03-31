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
	video = document.querySelector("#player1");
	video.play();
	console.log("play is " + video.play)
	video.volume = 1;
	console.log("volume is " + video.volume)
});//listen for something specifically on play, once happens do this.
//
document.querySelector("#pause").addEventListener("click",function(){
	console.log("Pause Video");
	video = document.querySelector("#player1");
	video.pause();
	console.log("It is paused? " + video.paused);
});
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slowed Video");
	video = document.querySelector("#player1")
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Sped Up Video");
	video = document.querySelector("#player1")
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click",function(){
	console.log("Skip Video");
	video = document.querySelector("#player1")
	
	if(video.currentTime < video.duration){
		video.currentTime += 10;
	}
	else{
		video.currentTime = 0;
	}
	console.log("Skipped Video by "+ video.currentTime);
});
document.querySelector("#mute").addEventListener("click",function(){
	if(video.muted){
		video.muted = false;
		this.innerHTML = "Mute";
		console.log("Sound is "+ video.muted)
		console.log("Mute/Unmute button text is "+ this.innerHTML)
	}
	else{
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Sound is "+ video.muted)
		console.log("Mute/Unmute button text is "+ this.innerHTML)
	}
	
});

document.querySelector("#vintage").addEventListener("click",function(){
	video.classList.add("oldSchool");
	console.log("Class is "+ video.classList)
});
document.querySelector("#orig").addEventListener("click",function(){
	video.classList.remove("oldSchool");
	console.log("Class is "+ video.classList+" Original")
});

slider.addEventListener('input',function(){
	document.getElementById('player1').volume = slider.value / 100;
	document.getElementById('volume').innerHTML = slider.value +"%";
	console.log("Volume is "+ document.getElementById('volume').innerHTML);
});

	
