let region = document.getElementById('region');
let button = document.getElementById('ok');

//button to search for a country or region
button.addEventListener("click", function () {
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?q="+ region.value +",&units=metric&APPID=200f15a460f2b4b6a04aabd17164ddb0";
    let temp = document.getElementById('temp');
    let min = document.getElementById('min');
    let max = document.getElementById('max');
    let pressure = document.getElementById('pressure');
    let wind = document.getElementById('wind');
    let hour = document.getElementById('hour');
    let title = document.getElementById('title');
    let precipitation = document.getElementById('precipitation');
    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestURL);
    xhr.responseType = "json";

    //condition to display the result
    xhr.onload = function () {
        if (xhr.status !== 200) {
            title.innerHTML = "Enter a valid city or country !";
            return;
        }
        title.innerHTML = " " + xhr.response.sys.country + ", " + xhr.response.name;
        temp.innerHTML = parseInt(xhr.response.main.temp) + "°C";
        min.innerHTML = "Min " + parseInt(xhr.response.main.temp_min) + "°C";
        max.innerHTML = "Max " + parseInt(xhr.response.main.temp_max) + "°C";
        pressure.innerHTML = "Pressure " + xhr.response.main.pressure + " mbar";
        wind.innerHTML = "Wind " + xhr.response.wind.speed + " km/h";
        precipitation.innerHTML = xhr.response.weather[0].main;
        startTime();

        if (xhr.response.weather[0].main === 'Clouds') {
            document.getElementById('clouds').style.display = "block";
            document.getElementById('snow').style.display = "none";
            document.getElementById('clear').style.display = "none";
        }

        if (xhr.response.weather[0].main === 'Snow') {
            document.getElementById('snow').style.display = "block";
            document.getElementById('clouds').style.display = "none";
            document.getElementById('clear').style.display = "none";
        }

        if (xhr.response.weather[0].main === 'Clear') {
            document.getElementById('clear').style.display = "block";
            document.getElementById('snow').style.display = "none";
            document.getElementById('clouds').style.display = "none";
        }
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    //function to display the current time
    function startTime() {
        let date = new Date();
        let j = date.getDay();
        let mT = date.getMonth();
        let y = date.getFullYear();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        j = checkTime(j);
        mT = checkTime(mT);
        y = checkTime(y);
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);

        document.getElementById('days').innerHTML = j + " " + mT + " " + y;
        hour.innerHTML = h + ":" + m + ":" + s;
        setTimeout(function () {
            startTime();
        }, 1000);
    }

    xhr.send();
})


vzdvzvzvz


