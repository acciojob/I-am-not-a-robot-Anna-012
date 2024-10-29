//your code here
document.addEventListener("DOMContentLoaded", () =>{
	const images = document.querySelectorAll("div[class^='img']");
	const resetButton = document.getElementById("reset");
	images.forEach(image =>{
		image.addEventListener("click", ()=>{
			resetButton.style.display='block';
		})
	})
	  resetButton.addEventListener("click", () => {
        resetButton.style.display = "none";
	})
})