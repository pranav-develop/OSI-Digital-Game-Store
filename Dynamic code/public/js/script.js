//jshint esversion:6
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
/*------------------------settings page -----------------------------*/
function showMySettings(me){
	console.log("fnction called");
	if(me != "application-settings"){
		document.querySelector(".application-settings").classList.add("d-none");
		document.querySelector(".application-settings").classList.remove("d-block");
		document.querySelector(".settings1").classList.remove("selected");
	} else{
		document.querySelector(".application-settings").classList.add("d-block");
		document.querySelector(".settings1").classList.add("selected");
		document.querySelector(".application-settings").classList.remove("d-none");
	}	
	if(me != "diagnostics"){
		document.querySelector(".diagnostics").classList.add("d-none");
		document.querySelector(".diagnostics").classList.remove("d-block");
		document.querySelector(".settings2").classList.remove("selected");
	} else{
		document.querySelector(".diagnostics").classList.add("d-block");
		document.querySelector(".diagnostics").classList.remove("d-none");
		document.querySelector(".settings2").classList.remove("selected");
	}	
}
/*--------------toogle friends section visibility-------*/
function toggleFriendList(){
	document.querySelector(".friends-list").classList.toggle("d-none");
}
function toggleNotification(){
	document.querySelector(".notification").classList.toggle("d-none");
}
/*----------------------admin-page-----------------------------*/
function showAdminPages(name){
	let dashboard = document.querySelector(".dashboard");
	let showUsers = document.querySelector(".show-users");
	let addGame = document.querySelector(".add-games");
	let gameList = document.querySelector(".game-list");
	if(name == "dashboard"){
		dashboard.classList.remove("d-none");
		showUsers.classList.add("d-none");
		addGame.classList.add("d-none");
		gameList.classList.add("d-none");
		document.querySelector(".control-panel div.control-options:nth-child(1)").classList.add("active");
		document.querySelector(".control-panel div.control-options:nth-child(2)").classList.remove("active");
		document.querySelector(".control-panel div.control-options:nth-child(3)").classList.remove("active");
		document.querySelector(".control-panel div.control-options:nth-child(4)").classList.remove("active");
	} else if(name == "showUsers"){
		dashboard.classList.add("d-none");
		showUsers.classList.remove("d-none");
		addGame.classList.add("d-none");
		gameList.classList.add("d-none");
		document.querySelector(".control-panel div.control-options:nth-child(1)").classList.remove("active");
		document.querySelector(".control-panel div.control-options:nth-child(2)").classList.add("active");
		document.querySelector(".control-panel div.control-options:nth-child(3)").classList.remove("active");
		document.querySelector(".control-panel div.control-options:nth-child(4)").classList.remove("active");
	} else if(name == "addGames"){
		dashboard.classList.add("d-none");
		showUsers.classList.add("d-none");
		addGame.classList.remove("d-none");
		gameList.classList.add("d-none");
		document.querySelector(".control-panel div.control-options:nth-child(1)").classList.remove("active");
		document.querySelector(".control-panel div.control-options:nth-child(2)").classList.remove("active");
		document.querySelector(".control-panel div.control-options:nth-child(3)").classList.remove("active");
		document.querySelector(".control-panel div.control-options:nth-child(4)").classList.add("active");
	} else if(name == "gameList"){
		dashboard.classList.add("d-none");
		showUsers.classList.add("d-none");
		addGame.classList.add("d-none");
		gameList.classList.remove("d-none");
		document.querySelector(".control-panel div.control-options:nth-child(1)").classList.remove("active");
		document.querySelector(".control-panel div.control-options:nth-child(2)").classList.remove("active");
		document.querySelector(".control-panel div.control-options:nth-child(3)").classList.add("active");
		document.querySelector(".control-panel div.control-options:nth-child(4)").classList.remove("active");
	} 
}