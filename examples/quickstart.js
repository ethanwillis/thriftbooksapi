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
requestChain.push(thriftbooksObject.accountInfoRequest);
functionChain.push(thriftbooksObject.accountInfo);
	
thriftbooksObject.runChains(functionChain, requestChain);
