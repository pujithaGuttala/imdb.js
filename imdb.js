let container=document.getElementById("search");


let tit=document.getElementById("title");
let dir=document.getElementById("director");
let rat=document.getElementById("imdbrating");

let xhr = new XMLHttpRequest();

let sub=document.getElementById("submit");
sub.onclick=function(){
    xhr.open("GET",`http://www.omdbapi.com/?t=${container.value}&apikey=78eebaec`)
    xhr.onloadend=handleAjaxResponse;
    xhr.send();
}

let handleAjaxResponse=function(){
   if (xhr.status === 200) {
       let response = JSON.parse(xhr.responseText);
       let title=response["Title"]
       let director=response["Director"]
       let imdbrating=response["imdbRating"]
       tit.innerHTML="TITLE:"+title
       dir.innerHTML="DIRECTOR:"+director
       rat.innerHTML="IMDBRATING:"+imdbrating
   } else {
         result[0].innerHTML = "some thing went wrong.";
   }
};


