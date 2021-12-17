let region = document.getElementById('region');
let button = document.getElementById('ok');
button.addEventListener("click", function () {
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?q="+ region.value +",&units=metric&APPID=200f15a460f2b4b6a04aabd17164ddb0";

    let temp = document.getElementById('temp');
    let min = document.getElementById('min');
    let max = document.getElementById('max');
    let pressure = document.getElementById('pressure');
    let wind = document.getElementById('wind');
    let hour = document.getElementById('hour');
    let title = document.getElementById('title');

    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestURL);
    xhr.responseType = "json";

    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.log("Erreur");
            return;
        }
        title.innerHTML = " " + xhr.response.sys.country + ", " + xhr.response.name;
        temp.innerHTML = parseInt(xhr.response.main.temp) + "°C";
        min.innerHTML = "Min " + parseInt(xhr.response.main.temp_min) + "°C";
        max.innerHTML = "Max " + parseInt(xhr.response.main.temp_max) + "°C";
        pressure.innerHTML = "Pressure " + xhr.response.main.pressure + " mbar";
        wind.innerHTML = "Wind " + xhr.response.wind.speed + " km/h";
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function startTime() {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);

        hour.innerHTML = h + ":" + m + ":" + s;
        setTimeout(function () {
            startTime();
        }, 1000);
    }

    startTime();

    xhr.send();
})





