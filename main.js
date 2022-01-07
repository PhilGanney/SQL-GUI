//btn.onclick = function() {}
/*by "via class" we mean by removing or adding a class called "hidden" that sets css display to none
Use in conjuction with hideViaClass(id) and a css class called "hidden".
This is a slight change in how I've done this technique on other projects - there's no "showing" class
*/
function showViaClass(id){
  document.getElementById(id).classList.remove("hidden");
}
function hideViaClass(id){
	document.getElementById(id).classList.add("hidden");
}
function toggleHiddenViaClass(id){
	if(document.getElementById(id).classList.contains("hidden")){
		document.getElementById(id).classList.remove("hidden");
	} else {
		document.getElementById(id).classList.add("hidden");
	}
}
function toggleHideIfSmallScreen(id){
	if(document.getElementById(id).classList.contains("hideIfSmallScreen")){
		document.getElementById(id).classList.remove("hideIfSmallScreen");
	} else {
		document.getElementById(id).classList.add("hideIfSmallScreen");
	}
}


function infoBtn(){
	hideViaClass("topRow");
	hideViaClass("lowRow");
	showViaClass("info");
	hideViaClass("mainSubtitle");
	showViaClass("infoSubtitle");
	showViaClass("backBtn");
	document.getElementById("backBtn").onclick = function() {closeInfo();}
	document.getElementById("backBtn").focus();
}

function closeInfo(){
	showViaClass("topRow");
	showViaClass("lowRow");
	hideViaClass("info");
	showViaClass("mainSubtitle");
	hideViaClass("infoSubtitle");
	hideViaClass("backBtn");
	document.getElementById("backBtn").onclick = function() {}
}

function newDbBtn(){
	hideViaClass("topRow");
	hideViaClass("lowRow");
	showViaClass("newDb");
	hideViaClass("mainSubtitle");
	showViaClass("newDbSubtitle");
	showViaClass("backBtn");
	document.getElementById("backBtn").onclick = function() {closeNewDb();}
	document.getElementById("backBtn").focus();
}

function closeNewDb(){
	showViaClass("topRow");
	showViaClass("lowRow");
	hideViaClass("newDb");
	showViaClass("mainSubtitle");
	hideViaClass("newDbSubtitle");
	hideViaClass("backBtn");
	document.getElementById("backBtn").onclick = function() {}
}