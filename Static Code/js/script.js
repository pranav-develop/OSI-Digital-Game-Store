function add_to_wishlist1(){
	let prev = document.querySelector(".bi-heart1");
	let after = document.querySelector(".bi-heart-fill1");
	if(prev.style.display == "block")
	{
		prev.style.display = "none";
		after.style.display = "block";
	}
	else
	{
		prev.style.display = "block";
		after.style.display = "none";
	}
}
function add_to_wishlist2(){
	let prev = document.querySelector(".bi-heart2");
	let after = document.querySelector(".bi-heart-fill2");
	if(prev.style.display == "block")
	{
		prev.style.display = "none";
		after.style.display = "block";
	}
	else
	{
		prev.style.display = "block";
		after.style.display = "none";
	}
}
function add_to_wishlist3(){
	let prev = document.querySelector(".bi-heart3");
	let after = document.querySelector(".bi-heart-fill3");
	if(prev.style.display == "block")
	{
		prev.style.display = "none";
		after.style.display = "block";
	}
	else
	{
		prev.style.display = "block";
		after.style.display = "none";
	}
}
function add_to_wishlist4(){
	let prev = document.querySelector(".bi-heart4");
	let after = document.querySelector(".bi-heart-fill4");
	if(prev.style.display == "block")
	{
		prev.style.display = "none";
		after.style.display = "block";
	}
	else
	{
		prev.style.display = "block";
		after.style.display = "none";
	}
}
function add_to_wishlist5(){
	let prev = document.querySelector(".bi-heart5");
	let after = document.querySelector(".bi-heart-fill5");
	if(prev.style.display == "block")
	{
		prev.style.display = "none";
		after.style.display = "block";
	}
	else
	{
		prev.style.display = "block";
		after.style.display = "none";
	}
}
function add_to_wishlist6(){
	let prev = document.querySelector(".bi-heart6");
	let after = document.querySelector(".bi-heart-fill6");
	if(prev.style.display == "block")
	{
		prev.style.display = "none";
		after.style.display = "block";
	}
	else
	{
		prev.style.display = "block";
		after.style.display = "none";
	}
}
/*----------------------------------------------------------------------------------*/
/*-----------------home.html scripts------------------------------------------------*/
/*----------------------------------------------------------------------------------*/
function showbox1(){
	let box = document.querySelector(".news-box");
	let button = document.querySelector("#read-more-home1");
	let img = document.querySelector(".news-img");
	let desc_box = document.querySelector(".news-desc");
	let button2 = document.querySelector("#read-less-home1");
	box.style.height = "750px";
	img.style.width = "100%";
	img.style.height = "30%";
	desc_box.style.top = "30%";
	desc_box.style.height = "70%";
	button.style.display = "none";
	button2.style.display = "block";
}
function hidebox1(){
	let box = document.querySelector(".news-box");
	let button = document.querySelector("#read-more-home1");
	let img = document.querySelector(".news-img");
	let desc_box = document.querySelector(".news-desc");
	let button2 = document.querySelector("#read-less-home1");
	box.style.height = "350px";
	img.style.width = "35%";
	img.style.height = "50%";
	desc_box.style.top = "0px";
	desc_box.style.height = "100%";
	button.style.display = "block";
	button2.style.display = "none";
}
//function showbox2(){
//	let box = document.querySelector(".news-box");
//	let button = document.querySelector("#read-more-home2");
//	let img = document.querySelector(".news-img");
//	let desc_box = document.querySelector(".news-desc");
//	let button2 = document.querySelector("#read-less-home2");
//	box.style.height = "750px";
//	img.style.width = "100%";
//	img.style.height = "30%";
//	desc_box.style.top = "30%";
//	desc_box.style.height = "70%";
//	button.style.display = "none";
//	button2.style.display = "block";
//}
//function hidebox2(){
//	let box = document.querySelector(".news-box");
//	let button = document.querySelector("#read-more-home2");
//	let img = document.querySelector(".news-img");
//	let desc_box = document.querySelector(".news-desc");
//	let button2 = document.querySelector("#read-less-home2");
//	box.style.height = "350px";
//	img.style.width = "35%";
//	img.style.height = "50%";
//	desc_box.style.top = "0px";
//	desc_box.style.height = "100%";
//	button.style.display = "block";
//	button2.style.display = "none";
//}
//function showbox3(){
//	let box = document.querySelector(".news-box");
//	let button = document.querySelector("#read-more-home3");
//	let img = document.querySelector(".news-img");
//	let desc_box = document.querySelector(".news-desc");
//	let button2 = document.querySelector("#read-less-home3");
//	box.style.height = "750px";
//	img.style.width = "100%";
//	img.style.height = "30%";
//	desc_box.style.top = "30%";
//	desc_box.style.height = "70%";
//	button.style.display = "none";
//	button2.style.display = "block";
//}
//function hidebox3(){
//	let box = document.querySelector(".news-box");
//	let button = document.querySelector("#read-more-home3");
//	let img = document.querySelector(".news-img");
//	let desc_box = document.querySelector(".news-desc");
//	let button2 = document.querySelector("#read-less-home3");
//	box.style.height = "350px";
//	img.style.width = "35%";
//	img.style.height = "50%";
//	desc_box.style.top = "0px";
//	desc_box.style.height = "100%";
//	button.style.display = "block";
//	button2.style.display = "none";
//}\

function toggle_class_friend1(){
	let object = document.getElementById("friend1");
	object.classList.toggle("d-none");
}
function toggle_class_friend2(){
	let object = document.getElementById("friend2");
	object.classList.toggle("d-none");
}
function toggle_class_friend3(){
	let object = document.getElementById("friend3");
	object.classList.toggle("d-none");
}