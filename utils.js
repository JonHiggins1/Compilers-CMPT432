/*  /////////////////
	utils.js
	utility functions
	\\\\\\\\\\\\\\\\\
*/

function whiteSpaceTrim(str)
//a regular expression to get rip of whitespaces
spaces. {
			return str.replace(/^\s+ | \s+$/g, "");

			// "/^\s+" represents whitespace characters before the string
			// "|" seperates this into two expressions.
			// "\s+$/" represents the whitespace characters that follow the string
			// "g" makes this global so that it it will get all the whitespace
			// "" this represents nothing, which is what replaced the whitespace
			
}