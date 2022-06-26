function createNode(element){
    return document.createElement(element);
}
function append(parent, element){
    return parent.appendChild(element);
}
document.getElementById("form").addEventListener('keyup' , search);
// this function is used to create the link.This will return the link

// apikey=3bc5218489a3c360f2b878e3ab71f079
// Your private key=5a9751b288cb9601e4e9a5db9fd9dc3062fa992a
// hash=6953055b2103b0d0f0859e3fe4e55010 
// Here I am create the hash using online md5 hash calculator because when we create the hash using the crypto js it give me error.When I run Javascript in vscode console then hash code generate successfully and when I run whole HTML in browser then it give me error in browser console. And I try very much to rectify but I cannnot do. But this hash value is also same
function getURL(){
    
    var queery = document.getElementById("user-input").value;
    console.log(queery)
    if(!queery){
        window.alert("Name Cannot be Empty")
        return "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=3bc5218489a3c360f2b878e3ab71f079&hash=6953055b2103b0d0f0859e3fe4e55010"  
    }
    else{
        return `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${queery}&apikey=3bc5218489a3c360f2b878e3ab71f079&hash=6953055b2103b0d0f0859e3fe4e55010&ts=1`
    }
    
}
var template = document.getElementById("template");
//This url fetch all the api
function search(){
    var url = getURL();
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('get',url,true);
    xhrRequest.send();    
    xhrRequest.onload = function(){
        var data = JSON.parse(xhrRequest.responseText);
        display(data);  
    }
}
// this function is used to display the data
function display(data){
    var superheroList = document.getElementById("superheros-list");
    superheroList.innerHTML = "";
    var results = data.data.results;
    console.log(results);
    if(!results){
        document.getElementById("user-input").value = "";
        window.alert("No super Hero Found");
    }else{
        for(let result of results){
            var card = template.content.cloneNode(true);
            card.getElementById("name").innerHTML = 'Name : ' + result.name;
            card.getElementById("id").innerHTML = 'Id : ' +result.id ;
            card.getElementById("comics").innerHTML = 'Comics '+result.comics.available ;
            card.getElementById("more-info").addEventListener('click',function(){
                localStorage.setItem('id',result.id);
                window.location.assign('./about.html');
            });
            card.getElementById("fav").addEventListener('click',function(){
                    var index = localStorage.length;
                    var data = JSON.stringify(result);
                    localStorage.setItem(result.id,data);
                    window.location.assign('./favourites.html');
                });
            superheroList.appendChild(card);
        }
    }
}


//It is the code to go in the favourite page
document.getElementById("fav_button").addEventListener('click',()=>{
    window.location.assign('./favourites.html');
});