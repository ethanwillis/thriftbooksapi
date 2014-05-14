var thriftbooks = require("../thriftbooksapi.js");
var thriftbooksObject = new thriftbooks();
/*
	Lists of thriftbooks functions and their corresponding
	requests that will be executed.
*/
var functionChain = new Array();
var requestChain = new Array();
	
// Set your username and password for thriftbooks.
thriftbooksObject.setAccount( "user@example.com", "password" );
	
// Create corresponding function and request chains. 
requestChain.push(thriftbooksObject.setNewAddress("john", "doe", "7504 somewhere dr."", "Memphis", "TN", "38104", "USA", "9018888888"));
functionChain.push(thriftbooksObject.addAddress);
	
thriftbooksObject.runChains(functionChain, requestChain);

