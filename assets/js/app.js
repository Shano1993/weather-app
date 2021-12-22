//button to search for a country or region
$('#ok').on("click", function () {
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ $('#region').val() +",&units=metric&APPID=200f15a460f2b4b6a04aabd17164ddb0";

    $.get(url, function (response) {
        $('#title').html(JSON.stringify(response.sys.country + ", " + response.name));
        $('#temp').html(JSON.stringify(response.main.temp) + "°C");
        $('#min').html(JSON.stringify(response.main.temp_min) + "°C");
        $('#max').html(JSON.stringify(response.main.temp_max) + "°C");
        $('#pressure').html(JSON.stringify(response.main.pressure) + " mbar");
        $('#wind').html(JSON.stringify(response.wind.speed) + " Km/h");
        $('#precipitation').html(JSON.stringify(response.weather[0].main));
    })

    //condition to display the result
        startTime();
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

        $('#days').html(j + " " + mT + " " + y);
        $('#hour').html(h + ":" + m + ":" + s);
        setTimeout(function () {
            startTime();
        }, 1000);
    }
})








