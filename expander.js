var x = document.getElementsByTagName('ul');
for(var i=0; i<x.length; i++){
  x[i].style.height = "auto";
}

var ffff = function(){
  if (httpRequest.readyState === 4){  
    var open = true;
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div2.innerHTML = httpRequest.responseText;
    var sched = div2.getElementsByClassName('schedule')[0];
    sched.className += " step";
    sched.marginTop = "40px";
    div.appendChild(sched);
    var curric = document.getElementsByClassName('curriculum')[0];
    div.innerHTML = "<br><br>" + div.innerHTML;
    curric.appendChild(div);
  }
};

if (window.location.pathname.length > 1){
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = ffff;
  httpRequest.open('GET', 'http://learn.makersquare.com', true);
  httpRequest.send(null);
}