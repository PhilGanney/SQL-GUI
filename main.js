//btn.onclick = function() {}
/*by "via class" we mean by removing or adding a class called "hidden" that sets css display to none
Use in conjuction with hideViaClass(id) and a css class called "hidden".
This is a slight change in how I've done this technique on other projects - there's no "showing" class, will also need specific selectors written in.
*/
function showViaClass(id){
  document.getElementById(id).classList.remove("hidden");
}
function hideViaClass(id){
	document.getElementById(id).classList.add("hidden");
}