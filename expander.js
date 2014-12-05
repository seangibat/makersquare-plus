// Get the Table of Contents unordered lists and expand them.
var x = document.getElementsByTagName('ul');
for(var i=0; i<x.length; i++){
  x[i].style.height = "auto";
}

// This takes the HTML from the learn app, gets just the "schedule",
// and inserts it at the bottom of the page. It also adds the "step"
// class to appear similar to the other boxes on the page.
var responseHandler = function(){
  var div, responseHolder, curric;
  if (httpRequest.readyState === 4){  
    div = document.createElement("div");
    responseHolder = document.createElement("div");
    responseHolder.innerHTML = httpRequest.responseText;
    responseHolder = responseHolder.getElementsByClassName('schedule')[0];
    responseHolder.className += " step";
    div.appendChild(responseHolder);
    curric = document.getElementsByClassName('curriculum')[0];
    div.innerHTML = "<br><br>" + div.innerHTML;
    curric.appendChild(div);
  }
};

// This makes a get request for the MKS learn app home page.
// I test for the length of the URL pathname so that the table of contents
// won't be appended to the table of contents page itself.
if (window.location.pathname.length > 1){
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = responseHandler;
  httpRequest.open('GET', 'http://learn.makersquare.com', true);
  httpRequest.send(null);
}