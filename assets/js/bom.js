/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 

//  Location Information
var Href = document.querySelector('div > div:nth-child(2) > :first-child > span ')
var Protocol = document.querySelector('div > div:nth-child(2) > :nth-child(2) > span ')
var Host = document.querySelector('div > div:nth-child(2) > :nth-child(3) > span')
var Port = document.querySelector('div > div:nth-child(2) > :nth-child(4) > span')
var Hostname = document.querySelector('div > div:nth-child(2) > :nth-child(5) > span')

//  Browser Information
var Appname = document.querySelector('div > div:nth-child(4) > :first-child > span')
var Appversion = document.querySelector('div > div:nth-child(4) > :nth-child(2) > span')
var Platform = document.querySelector('div > div:nth-child(4) > :nth-child(3) > span')
var Language = document.querySelector('div > div:nth-child(4) > :nth-child(4) > span')
var CookieEnabled = document.querySelector('div > div:nth-child(4) > :nth-child(5) > span')


//  Screen Information

var Height = document.querySelector('div > div:nth-child(6) > :nth-child(1) > span')
var Width = document.querySelector('div > div:nth-child(6) > :nth-child(2) > span')
var PixelDepth = document.querySelector('div > div:nth-child(6) > :nth-child(3) > span')


// Browsing History Info

var Length = document.querySelector('div > div:nth-child(8) > :nth-child(1) > span')
var State = document.querySelector('div > div:nth-child(8) > :nth-child(2) > span')


// Display the BOM Information on the innerHTML of the elements



Href.innerHTML = window.location.href;
Protocol.innerHTML = window.location.protocol
Host.innerHTML = window.location.host
Port.innerHTML = window.location.port
Hostname.innerHTML = window.location.hostname


Appname.innerHTML = window.navigator.appName
Appversion.innerHTML = window.navigator.appVersion
Platform.innerHTML = window.navigator.userAgent
Language.innerHTML = window.navigator.language
CookieEnabled.innerHTML = window.navigator.cookieEnabled


Height.innerHTML = window.screen.height
Width.innerHTML = window.screen.width
PixelDepth.innerHTML = window.screen.pixelDepth

Length.innerHTML = window.history.length
State.innerHTML = window.history.state