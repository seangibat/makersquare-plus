// Get the 
var x = document.getElementsByTagName('ul');
for(var i=0; i<x.length; i++){
  x[i].style.height = "auto";
}

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

// Testing for the length so that the lesson table of contents
// won't be appended to the table of contents itself.
if (window.location.pathname.length > 1){
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = responseHandler;
  httpRequest.open('GET', 'http://learn.makersquare.com', true);
  httpRequest.send(null);
}