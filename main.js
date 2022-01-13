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
			"subtitle": "New Table",
			"dataTypes": {
				"MySQL": { //Access with: globals.screenData.tableDesigner.dataTypes["MySQL"]
					"DATE": "A date. Format: YYYY-MM-DD. The supported range is from '1000-01-01' to '9999-12-31'",
					"DATETIME": "A date and time combination. Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1000-01-01 00:00:00' to '9999-12-31 23:59:59'. Adding DEFAULT and ON UPDATE in the column definition to get automatic initialization and updating to the current date and time",
					"TIMESTAMP": "A timestamp. TIMESTAMP values are stored as the number of seconds since the Unix epoch ('1970-01-01 00:00:00' UTC). Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC. Automatic initialization and updating to the current date and time can be specified using DEFAULT CURRENT_TIMESTAMP and ON UPDATE CURRENT_TIMESTAMP in the column definition",
					"TIME": "A time. Format: hh:mm:ss. The supported range is from '-838:59:59' to '838:59:59'",
					"YEAR": "A year in four-digit format. Values allowed in four-digit format: 1901 to 2155, and 0000. MySQL 8.0 does not support year in two-digit format.",
					"CHAR": "Fixed length string that can contain letters, numbers, and special characters. A size parameter specifies the column length in characters - from 0 to 255. Default is 1",
					"VARCHAR": "Variable length string that can contain letters, numbers, and special characters. A size parameter specifies the maximum column length in characters - from 0 to 65535",
					"BINARY": "Fixed length binary byte string: sequence of bytes rather than characters. Great for storing non-traditional data such as pictures, and where there's either a set amount of bytes to store every time, or padding can be used. The size parameter specifies the column length in bytes. Default is 1",
					"VARBINARY": "Variable length binary byte string. Like BINARY, this is great for non-traditional data such as pictures, but this type works well for storing things with unpredictable or variable size. The size parameter specifies the maximum column length in bytes.",
					"TINYBLOB": "BLOB (Binary Large OBject) with up to 255 bytes of data",
					"TINYTEXT": "Holds a string with a maximum length of 255 characters",
					"TEXT": "Holds a string with a maximum length of 65,535 bytes",
					"BLOB": "BLOB (Binary Large OBject) with up to 65,535 bytes of data",
					"MEDIUMTEXT": "Holds a string with a maximum length of 16,777,215 characters",
					"MEDIUMBLOB": "BLOB (Binary Large OBject) with up to 16,777,215 bytes of data",
					"LONGTEXT": "Holds a string with a maximum length of 4,294,967,295 characters",
					"LONGBLOB": "BLOB (Binary Large OBject) with up to 4,294,967,295 bytes of data",
					"ENUM": "A string object that can have only one value, chosen from a list of possible values. You can list up to 65535 values in an ENUM list. If a value is inserted that is not in the list, a blank value will be inserted. The values are sorted in the order you enter them",
					"SET": "A string object that can have 0 or more values, chosen from a list of possible values. You can list up to 64 values in a SET list","BIT": "A bit-value type. The number of bits per value is specified in size. The size parameter can hold a value from 1 to 64. The default value for size is 1.",
					"BIT": "A bit-value type. The number of bits per value is specified in size. The size parameter can hold a value from 1 to 64. The default value for size is 1.",
					"TINYINT": "Tiny integer. Signed range from -128 to 127. Unsigned range from 0 to 255. Size parameter specifies the maximum display width (which is 255)",
					"BOOL": "Short for BOOLEAN. Zero is considered as false, nonzero values are considered as true.",
					"BOOLEAN": "Same as BOOL, just a longer way of typing it.  Zero is considered as false, nonzero values are considered as true.",
					"SMALLINT": "Small integer. Signed range from -32768 to 32767. Unsigned range from 0 to 65535. Size parameter specifies the maximum display width (which is 255)",
					"MEDIUMINT": "Medium integer. Signed range from -8388608 to 8388607. Unsigned range from 0 to 16777215. Size parameter specifies the maximum display width (which is 255)",
					"INT": "Shorthand for INTEGER. Signed range from -2147483648 to 2147483647. Unsigned range from 0 to 4294967295. Size parameter specifies the maximum display width (which is 255)",
					"INTEGER": "Integer - exactly the same as INT. Signed range from -2147483648 to 2147483647. Unsigned range from 0 to 4294967295. Size parameter specifies the maximum display width (which is 255)",
					"BIGINT": "Big integer. Signed range from -9223372036854775808 to 9223372036854775807. Unsigned range from 0 to 18446744073709551615. Size parameter specifies the maximum display width (which is 255)",
					"FLOAT": "Floating point number. MySQL uses the value of parameter p to determine whether to use FLOAT or DOUBLE for the resulting data type. If p is from 0 to 24, the data type becomes FLOAT(). If p is from 25 to 53, the data type becomes DOUBLE()",
					"DOUBLE": "A normal-size floating point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter",
					"DOUBLE PRECISION": "A floating point number that is always stored in 8 bytes. Equivalent to using FLOAT and setting the optional precision to a value that would require using 8 bytes rather than 4.",
					"DECIMAL": "An exact fixed-point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter. The maximum number for size is 65. The maximum number for d is 30. The default value for size is 10. The default value for d is 0.",
					"DEC": "Equal to DECIMAL(size,d)",
				}
			}
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
}

function genTypeChange(){
	//field1GeneralTypeSelect
	let generalType = document.getElementById("field1GeneralTypeSelect").value;
	if (generalType == "Date/Time"){
		document.getElementById("field1SpecificTypeSelect").innerHTML =  `
		<option value="DATE">DATE</option>
		<option value="DATETIME">DATETIME</option>
		<option value="TIMESTAMP">TIMESTAMP</option>
		<option value="TIME">TIME</option>
		<option value="YEAR">YEAR</option>
		`;
	} else if (generalType == "Strings/Enums/Blobs"){
		document.getElementById("field1SpecificTypeSelect").innerHTML = `
			<option value="CHAR">CHAR</option>
			<option value="VARCHAR">VARCHAR</option>
			<option value="BINARY">BINARY</option>
			<option value="VARBINARY">VARBINARY</option>
			<option value="TINYBLOB">TINYBLOB</option>
			<option value="TINYTEXT">TINYTEXT</option>
			<option value="TEXT">TEXT</option>
			<option value="BLOB">BLOB</option>
			<option value="MEDIUMTEXT">MEDIUMTEXT</option>
			<option value="MEDIUMBLOB">MEDIUMBLOB</option>
			<option value="LONGTEXT">LONGTEXT</option>
			<option value="LONGBLOB">LONGBLOB</option>
			<option value="ENUM">ENUM</option>
			<option value="SET">SET</option>
		`;
	} else if (generalType == "Numeric"){
		document.getElementById("field1SpecificTypeSelect").innerHTML = `
			<option value="BIT">BIT</option>
			<option value="TINYINT">TINYINT</option>
			<option value="BOOL">BOOL</option>
			<option value="BOOLEAN">BOOLEAN</option>
			<option value="SMALLINT">SMALLINT</option>
			<option value="MEDIUMINT">MEDIUMINT</option>
			<option value="INT">INT</option>
			<option value="INTEGER">INTEGER</option>
			<option value="BIGINT">BIGINT</option>
			<option value="FLOAT">FLOAT</option>
			<option value="DOUBLE">DOUBLE</option>
			<option value="DOUBLE PRECISION">DOUBLE PRECISION</option>
			<option value="DECIMAL">DECIMAL</option>
			<option value="DEC">DEC</option>
		`;
	} 
	let specificSelectElem = document.getElementById("field1SpecificTypeSelect");
	specificTypeChange(specificSelectElem);
}

function specificTypeChange(elChanged){
	/*	As a select for specific type changes, the description should change with it.
		descriptions are stored in globals.screenData.tableDesigner.dataTypes[flavour_of_SQL][datatype_name]
		descriptions need outputting to a p element with id's similar to: field1DatatypeDetails
			(with the "field1" prefix matching the prefix for the select being changed, and the suffix stays constant)
		eg:
			Given:
				field1SpecificTypeSelect value is changed to "DATETIME" 
				flavour of SQL being used is "MySQL"
			Then:
				document.getElementById("field1DatatypeDetails").innerText = globals.screenData.tableDesigner.dataTypes["MySQL"]["DATETIME"];
			To make that code work for:	
				any value that the select is changed to:
					we swap "DATETIME" for elChanged.value   (elChanged can be passed in via the "this" keyword)
				
				other flavours of SQL: (TODO: other SQL versions not yet supported)
					the JSON would need a node for the flavour, in globals.screenData.tableDesigner.dataTypes
					it would then need all of the datatypes that the SQL flavour has within that
					we'd also need to ask the user what SQL flavour the DB is, probably in the create DB stage
						at that choice would need to be stored inside globals.currentDbInGui
					
					
				
			
	*/
	
	document.getElementById("field1DatatypeDetails").innerText = globals.screenData.tableDesigner.dataTypes["MySQL"][elChanged.value];
}