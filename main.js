function LoadJson(file,callback){
  var a=new XMLHttpRequest();
  a.overrideMimeType("application/Json");
  a.open("GET",file,true);
  a.onreadystatechange=function(){
    if(a.readystate===4 && a.status="200"){
      callback(a.responseText);
    }
  }
  a.send(null);
}
LoadJson("dat.Json",function(text){
  let data=JSON.parse(text);
career(data.co);

})
var right=document.getElementById('right');
var career=document.createElement('h4');
career.textContent="career object:";
career.appendchild(document.createElemnet("HR"));
function careerobj(careerobject){
  var cop=document.createElement("p");
  cop.textContent=careerobject;
  career.appendChild(cop);
}
right.appendChild(career);

var edu=document.createElement("h4");
edu.textContent="Educational Qualifications";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);


}
