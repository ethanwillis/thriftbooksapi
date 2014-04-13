Thriftbooks API
===============

This API is a wrapper around thriftbooks.com that allows developers to programmatically
read and update thriftbooks.com account infromation, place orders, and browse the avai-
lable selection of books. 


Quickstart
==========

**Explanation**: Create two lists to build your interaction with thriftbooks.
The first list is a function list, the second list is http request objects. 
Then pass these two lists to the runChains( ... ) function. The results will be saved
to file.

````javascript
	var thriftbooks = require("../thriftbooksapi.js");
	
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
````

Functions
==========
 Name        |                      Descriptions                               |                    Parameters                           
-------------|-----------------------------------------------------------------|---------------------------------------------------------
 setAccount  | Sets the account information to be used.                        | user, pass                                              
 accountInfo | Fetches the account's info from thriftbooks.                    | cookieJar, requestData, callbackFuncs, callbackRequests 
 addAddress  | Add's an address to the thriftbooks account.                    | cookieJar, requestData, callbackFuncs, callbackRequests 
 runChains   | Runs a series of functions with their associated http requests. | functionChain, requestChain  
 login       | Logs into the thriftbooks account.                              | requestData, callbackFuncs, callbackRequests                                       


setAccount 
-----------
[**string**] - *user* - The email address for the thriftbooks account.

[**string**] - *pass* - The password for the thriftbooks acccount.

accountInfo
-----------
[**Object**] - *cookieJar* - A JSON object that contains the cookies being used in requests.

[**Object**] - *requestData* - A JSON object that contains the requestData specific to our callback function.

[**Array**]  - *callbackFuncs* - An Array of functions that will be called, in order. This is a function chain.

[**Array**]  - *callbackRequests* - An Array of JSON objects that model HTTP Requests for mikeals/request module. Each of these callback requests corresponds to a function in callbackFuncs.

addAddress
-----------
[**Object**] - *cookieJar* - A JSON object that contains the cookies being used in requests.

[**Object**] - *requestData* - A JSON object that contains the requestData specific to our callback function.

[**Array**]  - *callbackFuncs* - An Array of functions that will be called, in order. This is a function chain.

[**Array**]  - *callbackRequests* - An Array of JSON objects that model HTTP Requests for mikeals/request module. Each of these callback requests corresponds to a function in callbackFuncs.

runChains
-----------
[**Array**]  - *callbackFuncs* - An Array of functions that will be called, in order. This is a function chain.

[**Array**]  - *callbackRequests* - An Array of JSON objects that model HTTP Requests for mikeals/request module. Each of these callback requests corresponds to a function in callbackFuncs.

login
-----------

[**Object**] - *requestData* - A JSON object that contains the requestData specific to our callback function.

[**Array**]  - *callbackFuncs* - An Array of functions that will be called, in order. This is a function chain.

[**Array**]  - *callbackRequests* - An Array of JSON objects that model HTTP Requests for mikeals/request module. Each of these callback requests corresponds to a function in callbackFuncs.

Requests
==========
   Name            |  Description 
-------------------|-------------------------------------------------------
loginRequest       | HTTP request for logging into thriftbooks.com
accountInfoRequest | HTTP request for fetching account info webpage.
addAddressRequest  | HTTP request for fetching addresses webpage.          
addToCartRequest   | HTTP request for adding an item to the shopping cart. 
