/*
//* Notes:

1) What is BOM?
-> BOM stands for Browser Object Model.
-> BOM is a web API. NOT a part of core JAVASCRIPT.
-> In order to interact with the browser, browser vendors like google for chrome, and vendors for internet explorer, mozilla firefox, etc. has provided us with an object model called BOM. Every browser has an object called window which has different properties and methods used for interacting with the browser and manipulating the browser. eg. open or close tab, move or resize the tab, access the browser history etc.
//* NOTE: Every tab has it owns window object. A browser consists of multiple tabs. Every tab has different window object.

2) what is window?
-> window is an object that represents an entire browser.
-> window is an object created by browser. useful for interacting with the browser and manipulating the browser.

3) What is anme varaible?
-> window has a variable called name whose default value is empty string ("").
*/

/*
//* Properties and Methods():
1. location
2. history
3. innerHeight
4. innerWidth
5. open()
6. close()
7. resizeBy()
8. resizeTo()
9. moveTo()
10. moveBy()
11. scrollBy()
12. scroll()
13. scrollTo()
14. print()
15. document ---- object
*/
//* All properties and methods of window object are directly accessible
// window.propertyName() or propertyName
// window.methodName() or methodName()

//* 1. location:
// It is an object can be used to get the current page address (URL) and to redirect the browser to a new page.
console.log(window.location);

//location.reload(): reloads page after every 3 seconds
// setTimeout(() => location.reload(), 3000);

//------------- Accessing the URL of the current page -----------------------
// location.href: returns the URL of the current page
// location.hostname: Returns the hostname of the current page.
// location.pathname Returns the pathname of the current page.
console.log(location.href); // http://127.0.0.1:5500/DOM/BOM/index.html
console.log(location.hostname); //'127.0.0.1'
console.log(location.port); //5500
console.log(location.pathname); // /DOM/BOM/index.html

//------------- Modifying the URL of the current page -----------------------
// location.href = "Hijackky"; // GET http://127.0.0.1:5500/DOM/BOM/Hijackky                     404 (Not Found)
// location.href = "index.html"; // Keep on changing the link

//* 2. history
//* Only thw page which has some webpage open is considered in browser's history.
/*-> When you open multiple webpages in a single tab in a browser, it creates browser history. 
Browser consists of multiple tabs. In a single tab you can open multiple webpages.
-> The history.length is the number of open webpages in a single tab.
-> In browser, there are arrow buttons <- -> (on top left corner) for moving to previous and next opened tab. The history object has method for doing the same thing. back() and forward and go.
*/
console.log(history);
/* 
history.back() -> Move to the previous opened webpage in current tab. Returns undefined if no previous page exists.
history.forward() -> Move to the next opened webpage in current tab. Returns undefined if no next page exists
history.go(n) -> n- no.of webpages backward or forward pages to go to. -n moves backward. +n moves forward
    e.g. go(-1) = history.back()  and go(1) = history.forward() 
*/

//* 3. innerHeight and innerWidth (Keep zoom 100% for getting actual height and width)
// ->  innerHeight and innerWidth includes only height and width of the viewport. Excludes height and width of browser tabs, bookmark header etc.
console.log("innerHeight: ", innerHeight);
console.log("innerWidth: ", innerWidth);

//* 4. outerHeight and outerWidth (Keep zoom 100% for getting actual height and width)
// -> The height and width of the entire browser.
// ->  outerHeight and outerWidth includes height and width of the viewport. Including height and width of browser tabs, bookmark header etc.
console.log("outerHeight: ", outerHeight);
console.log("outerWidth: ", outerWidth);

console.log("outerHeight - innerHeight: ", outerHeight - innerHeight);
console.log("outerWidth - innerWidth: ", outerWidth - innerWidth);

//* 5. open()
// opens a new tab. Returns window object of newly opened tab.
//* NOTE: Every tab has differrent window object.
/* 
synatx: open(url, name, resizable)
1. open("pagename") : opens specifies webpage in an new tab eg. 
 open("script.js") [write in browser's console.] 

2. open("script.js", "pooja") [write in browser's console.]
-> window has a variable called name whose default value is empty string ("").
-> when you will run script open("script.js", "pooja"), the name property of window will have value "pooja"
 */

//* 6. close()
/* -> Close the current tab.
-> Using close(), you can only close those tabs which were opened using open() method.
-> Manually opened tab or webpage can't be  be closed using close() method.
-> When you try to close manually opeend tab. It gives following error: 
    //* Scripts may close only the windows that were opened by them.
*/

/*------------------------------------------------------------------
    Playing with the dimension and positions of browser
------------------------------------------------------------------ */
//* 7. resizeTo() : used to resize the tab
/* Two mandatory conditions for applying resizeTo() method to a tab:
1. the tab must be opened using open() method. code:   open("script.js")
2. pass "resizable" as the third argument to the open() method code:   open("script.js", "BOM", "resizable")
-> Now you can resie the newly opened browser tab.
 */

//* 9. moveTo() : used to move the tab
//* Only resiable windows can be moved
// The position of top left corner of the browser is (0,0).
// (x,y) - x increases horizontally and y increases vertically.
//  eg. moveTo(500, 200)

//* 10. scrollBy(x,y) - used for scrolling the webpage of current tab

//* 12. scroll(x,y) - used for smooth scrolling
// scroll({top:100, left:100, behaviour:"smooth"})

//* 13. print() - used for printing the webpage. Function of printer.
