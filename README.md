Thriftbooks API
===============

This API is a wrapper around thriftbooks.com that allows developers to programmatically
read and update thriftbooks.com account infromation, place orders, and browse the avai-
lable selection of books. 


Quickstart
==========

````javascript
	var thriftbooks = Npm.require("thriftbooks-api");
	
	/*
		Lists of thriftbooks functions and their corresponding
		requests that will be executed.
	*/
	var functionChain = new Array();
	var requestChain = new Array();
	
	/*
		Setup basic variables 
	*/
	
