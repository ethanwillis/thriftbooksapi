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
functionChain.push(thriftbooksObject.accountInfo);
requestChain.push(thriftbooksObject.accountInfoRequest);
	
thriftbooksObject.runChains(functionChain, requestChain);
