var globals = {
	"mainPanelStack": ["startScreen"], //a stack for keeping track of where the back button should take the user
	"screenData": { //this is divided up by the Div name for each screen in the mainPanel, see the subtitle for the H2 text in the titlebar for each screen
		"startScreen": { //the first screen that shows when you start SQL GUI
			"subtitle": "by Phil Ganney"
		},
		"info": { //Can be arrived at from the startScreen
			"subtitle": "Info / license"
		},
		"newDbPg1": { //Can be arrived at from the startScreen
			"subtitle": "New Database"
		},
		"dbNamer": { //Can be arrived at from newDbPg1
			"subtitle": "Name your DB"
		},
		"tableDesigner": { //
			"subtitle": "New Table"
		}
		
	},
	"templates" : {
		"createDb": "CREATE DATABASE nameHere",
	},
	"currentDbInGui" : {
		"dbName": "",
		"tables": {
			
		}
	}
	
	
}

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

function swapElems(oldEl, newEl){
	console.log("swapElems(oldEl, newEl) called, oldEl = " + oldEl + ", newEl = " + newEl);
	//hide oldEl
	document.getElementById(oldEl).classList.add("hidden");
	//show newEl
	document.getElementById(newEl).classList.remove("hidden");
}

function swapSubtitle(newSubtitle){
	console.log("swapSubtitle(newSubtitle) started, newSubtitle = " + newSubtitle);
	document.getElementById("subtitle").innerHTML = newSubtitle;
	console.log("swapSubtitle(newSubtitle) finished");
}

function changeScreenForward(nextScreen){
	console.log("changeScreenForward(nextScreen) started, nextScreen = " + nextScreen);
	
	/*we want to swap the screen we're on, with the given screen
		the screen we're on will be the last item in "mainPanelStack"
		to get the last item of an array we do arrayName[arrayName.length - 1]
	*/
	let stack = globals.mainPanelStack; //"stack" exists to simplify code in this function
	swapElems(stack[stack.length - 1], nextScreen); //Actually swaps the screen we're on
	
	/*Now we want to swap the subtitle 
		- but instead of swapping which element is visible, we swap the inner html of the subtitle*/
	swapSubtitle(globals.screenData[nextScreen].subtitle); //swap the subtitle 
	
	//when we're going forward, presumably the back button will always need to show
	showViaClass("backBtn"); //show the back button now that we're not on the top screen
	document.getElementById("backBtn").focus(); //give the backBtn focus, reasons: 1) best place for keyboard users to start from since it's at the top of the view 2)focus makes it clear that they can easily go back using it 3)lets keyboard users immediatly tap enter if they made a mistake going in there or where only "exploring" - making it effortless to explore and reducing the irritation caused by making a mistake
	
	//Then we need to add to the end of the mainPanelStack
	globals.mainPanelStack.push(nextScreen);
	
	console.log("changeScreenForward(nextScreen) finished, mainPanelStack = " + globals.mainPanelStack);
}

function changeScreenBackward(){
	console.log("changeScreenBackward() started");
	/* 	To do anything in this function:
			we need the screen we're on,
				found at the end of the mainPanelStack
				stack[stack.length - 1]
			and the screen we need to go "back" to
				found just before the end of the mainPanelStack
				stack[stack.length - 2]
	*/
	let stack = globals.mainPanelStack; //"stack" exists to simplify code in this function
	
	swapElems(stack[stack.length - 1], stack[stack.length - 2]); //swap the screen we're on
	//then we need to swap the subtitle
	swapSubtitle(globals.screenData[stack[stack.length - 2]].subtitle);

	stack.pop(); //VERY IMPORTANT at least to this implementation of managing views via a stack
		
	/*If we've just returned to the homepage, we want to hide the backBtn*/
	if (stack.length == 1){
		hideViaClass("backBtn");
	}
	console.log("changeScreenBackward() finished, mainPanelStack = " + globals.mainPanelStack);

}

/**
 * Sanitize and encode all HTML in a user-submitted string
 * https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
var sanitizeHTML = function (str) {
	return str.replace(/[^\w. ]/gi, function (c) {
		return '&#' + c.charCodeAt(0) + ';';
	});
};

function addPanel() {
	//NOT FINISHED - BIT OF A TANGENT
	//modified from the example at https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
	// create a new div element
	const newDiv = document.createElement("div");

	// and give it some content
	const newContent = document.createTextNode("Hi there and greetings!");

	// add the text node to the newly created div
	newDiv.appendChild(newContent);

	// add the newly created element and its content into the DOM
	const currentDiv = document.getElementById("div1");
	document.body.insertBefore(newDiv, currentDiv);
}

function createDB(){
	/*  dbName is inputs id
	1) take in sanitized version of the users input for database name
	2) Check that value isn't empty
	3) Store it somewhere
	4) show the SQL on screen in initialShowCreateDbSQL 
		(Useful to give people a moment to check for typos, and any mistakes
			though admittedly I was originally just thinking do this in case sanitization breaks legit things. As it turns out the <code> element outputs the sanitized input with the appearance of how it looked unsanitized)
		4b) hide the original text input and the check button
	5) Displaying buttons for what next, and give them onclick functions
		5a) wrong - 
			5a1) set the text of the <code> element back to "CREATE DATABASE ..."
			5a2) show the input box again
			5a3) show the check code button again
			5a4) hide the verify buttons again
		5b) correct - changeScreenForward("tableDesigner")
	*/
	console.log("createDB() started");
	//1)
	let dbNameElem = document.getElementById("dbName");
	let dbName = sanitizeHTML(dbNameElem.value);
	
	console.log("dbName = " + dbName);
	//2)
	if (dbName == ""){
		alert("SQL GUI needs a name for the Database even if you don't use the create database code");
		console.log("alert for empty string");
		return;
	}
	//3)
	globals.currentDbInGui.dbName = dbName;
	
	//4
	document.getElementById("initialShowCreateDbSQL").innerHTML = "CREATE DATABASE " + dbName + ";";
	
	//4b
	hideViaClass("dbName");
	hideViaClass("createDbSQL");
	
	//5a
	showViaClass("createDbSqlLooksWrong");
	document.getElementById("createDbSqlLooksWrong").onclick = function() {
		//5a1 - set the text of the <code> element back to "CREATE DATABASE ..."
		document.getElementById("initialShowCreateDbSQL").innerHTML = "CREATE DATABASE ..."
		//5a2
		showViaClass("dbName");
		//5a3
		showViaClass("createDbSQL");
		//5a4
		hideViaClass("createDbSqlLooksWrong");
		hideViaClass("createDbSqlLooksCorrect");
	} 

	//5b
	showViaClass("createDbSqlLooksCorrect");
	document.getElementById("createDbSqlLooksCorrect").onclick = function() {changeScreenForward("tableDesigner");} 
			//5c  show dbCreateConfirmP1
		showViaClass("dbCreateConfirmP1");
		//5d show dbCreateConfirmP2
		showViaClass("dbCreateConfirmP2");		
		//5e set the innerText of the span checkDbName 
		document.getElementById("checkDbName").innerText = dbName;
}