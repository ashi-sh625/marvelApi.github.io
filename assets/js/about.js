var resultID = localStorage.getItem('id');


fetch();

function fetch()
{
    var xhrRequest = new XMLHttpRequest();
    // now we fetch the data using id
    var url = `https://gateway.marvel.com/v1/public/characters/${resultID}?apikey=3bc5218489a3c360f2b878e3ab71f079&hash=6953055b2103b0d0f0859e3fe4e55010&ts=1`
    xhrRequest.open('get',url,true);
    xhrRequest.send();
    xhrRequest.onload = function(){
        var response = JSON.parse(xhrRequest.response);
        console.log(response);
        document.getElementById('title').innerText = " " + response.data.results[0].name;
        //adding details about clicked template
        var power = document.getElementById("power");
        var p = document.createElement('p');
        p.innerText = "Description : " + response.data.results[0].description;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Status : " + response.status;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Modified : " + response.data.results[0].modified;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Series Available : " + response.data.results[0].series.available;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Stories Available : " + response.data.results[0].stories.available;
        power.appendChild(p);
        var bio = document.getElementById("bio");
        var p = document.createElement('p');
        p.innerText = "Count : " + response.data.count; 
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Total : " + response.data.total;
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Limit : " + response.data.limit;
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Offset : " + response.data.offset;
        bio.appendChild(p);
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = p.innerText = "Code : " + response.code; 
        bio.appendChild(p);
    };
}

// code to go on other pages

document.getElementById("home").addEventListener('click',function(){
    window.location.assign('./index.html');
});

document.getElementById("fav").addEventListener('click',function(){
    window.location.assign('./favourites.html');
});