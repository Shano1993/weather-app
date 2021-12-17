const requestURL = "https://api.openweathermap.org/data/2.5/weather?id=6438247&appid=d5954c9f84ba9828ba08747506755013";
let xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.responseType = "json";

xhr.onload = function () {
    if (xhr.status !== 200) {
        console.log("Erreur");
        return;
    }
    let response = xhr.response;
    console.log(response);
}

xhr.send();

