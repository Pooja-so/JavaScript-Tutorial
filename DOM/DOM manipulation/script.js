function sayHi() {
  document.body.children[4].src =
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg";
}

/* other
-> You can right click on any element in Elements tab in browser and store the element as global variable
*/

/* //* Notes

1) What is BOM and DOM?
-> BOM and DOM are web APIs. They are NOT a part of CORE JAVASCRIPT.
-> BOM(Browser Object Model) represents an entire browser. 
   Manipulated using "window" object
-> DOM (Document Object Model) represents an HTML page in an object model. 
   Manipulated using "document" object
* Behind the scene: DOM
-> When we write an html document, the browser has a componet called HTML parser that converts every html elemnt into object place it into DOM tree (document object is an object representation of such DOM tree)
-> document object is a property of window object.
-> window represents an entire browser and gives us properties and methods to manipulate the browser window.
* window object represents an entire browser. Every tab in a browser has its own window object.
* document object represents only single viewport.

2) using console.dir(element) for seeing element in JS object format. 
*/


//* Write following in console tab of browser:
/*
  1. Basics:
  -> document: return document showcasing our index.html page in html format.
  * typeof document is 'object'
  -> console.dir(document): returns document in JS object format.
  -> The only children of document is html. The children of html will be head, body etc.
  -> NOTE: 
    * You can right click on any element > store as global variable: It will store the element in a temp1 variable
    * typeof temp1 is 'object'
  -> object is created corresponding to every element.
  
  2. HTML parser 
  -> HTML parser does the job of converting every html element into structured representation like object and connecting children and parent.

  3. document.children
  -> Returns HTMLCollection. It is an array like object consisting of children elements
  -> NOTE:
  * HTMLCollection is not exactly an array. It is considered as array as you can access its item using index .
  * But cannot use methods like forEach(), map(), ect. on HTMLCollection.
   code: 
  a. document.children[0] : returns html
  b. document.children[0].children : returns HTMLCollection(4) [head, body, chatgpt-sidebar, chatgpt-sidebar-popups]

  4. document.childNodes
  -> Returns NodeList. It is an array like object consisting of children elements and some other elements.
  -> NOTE:
  * NodeList is not exactly an array. It is considered as array as you can access its item using index .
  * We can use forEach() but cannot use map(), filter(), reduce() etc on NodeList
  
  5. document.body
  -> Return body of the document in HTML format.
  code: 
  a. document.body 
  b. typeof document.body.children: 'object'
  c. document.body.children : HTMLCollection(8) [h1, h2, hr, p, img, ul, p, script]
  d. document.body.children[0] : <h1>​…​</h1>​ (HTML format)
  e. console.dir(document.body.children[0]): h1 (JS object format)
  * The return value of console.dir(x) is undefiend if x doesn't return anything.

  6. innerHTML : typeof is string
  -> innerHTML is an HTML element property that has two uses for web developer:
  -> Two uses:
   i. To get the internal HTML content of any HTML element as string.
   ii. To set or change the element;s innerHTML content.
  -> COde:
  a. document.body.children[0].innerHTML : '<i>Frondend Development</i>'
  b. document.body.children[0].innerHTML = "<u>JavaScript Ttorial</u>" : '<u>JavaScript Ttorial</u>'

  7. innerText
  -> The innerText property sets or returns the text content of an element or node.
  -> When you set the innerText property, all child nodes are removed abd replaced by only one new text node.
  Code:
  a.  document.body.children[0].innerText : 'Frontend Development' 
  b.  document.body.innerText = "Hello World"
      document.body.children : HTMLCollection []
      document.body.childNodes : NodeList [text]
  
  
*/
