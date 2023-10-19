/**
 * Ad block detector.
 * @link https://www.detectadblock.com/
 * This file is named sailthru.js because that's a popular script name that ad blockers look for. The idea is an ad blocker will see this request and block it, thus letting us know an ad blocker is installed.
 */
( function() {
	const element = document.createElement( 'div' );
	element.id = 'adb-check'; // No significance, just a name that doesn't conflict with any other id's on the page.
	element.style.display = 'none';
	document.body.appendChild( element );
} )();
