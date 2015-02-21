/* ////////////////////
	lexer.js
	Jon higgins
	HiggelyPuffCompiler 
	\\\\\\\\\\\\\\\\\\\
*/

	function lex() {
		//Grab the raw user input source code from taImputsourceCode
		var sourceCode = documentgetElementById("taInputSourceCode").value;
		//get rid of the leading and following blank spaces
		sourceCode = trim(sourceCode);
		//gotta get rid of ll of the white spaces
		return sourceCode;

	}