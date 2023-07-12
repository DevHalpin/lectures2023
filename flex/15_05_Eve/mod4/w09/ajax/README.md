# M04W09 - AJAX

## To Do

- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a remote server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a remote server
- [x] All without refreshing the browser

### AJAX

- Asynchronous Javascript And XML
- Invented by Microsoft for Outlook Web Access as a way of replicating desktop application functionality in the browser
- web applications can send and recieve data asynchronously without a browser refresh
- AJAX was one of the main factors that led to web 2.0
- Originally retrieved data sent using 'XML', but modern apps using 'JSON' instead

### XMLHttpRequest Object

- Ajax is implemented using the XHR object
- Modern libraries (such as jQuery or axios) provide us with easy-to-use wrappers for the XHR object

### jQuery AJAX

- jQuery gives us an API for making AJAX requests

```js
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "GET",
  dataType: "json",
  success: (data) => {
    console.log("this request succeeded and here's the data", data);
  },
  error: (error) => {
    console.log("this request failed and this was the error", error);
  },
});
```

### jQuery Shorthand Methods

- jQuery has several shorthand methods so that we don't have to use the full `.ajax` method every time

```js
// make a get request to the specified endpoint
$.get("https://jsonplaceholder.typicode.com/posts");

// make a get request for JSON data
$.getJSON("https://jsonplaceholder.typicode.com/posts");

// make a post request
$.post("https://jsonplaceholder.typicode.com/posts", {
  /* form data */
});
```

### Useful Links

- [Blog post coining AJAX](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
- [Wikipedia: AJAX](<https://en.wikipedia.org/wiki/Ajax_(programming)>)
- [MDN: XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- jQuery [AJAX](http://api.jquery.com/jquery.ajax/), [getJSON](https://api.jquery.com/jquery.getjson/), and [post](https://api.jquery.com/jquery.post/) methods
