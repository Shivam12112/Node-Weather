const input_city = document.getElementById("input_city");
const city_name = document.getElementById("city_name");
const weather = document.getElementById("weather");
const temp = document.getElementById("temp");
const currTime = document.getElementById("currTime");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind_speed");
const dataHide = document.querySelector(".middle-layer");

const submitButton = document.getElementById("submitButton");

const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = input_city.value;
  if (cityVal === "") {
    city_name.innerHTML = `<h1>Plz enter city name before search..</h1>`;
    dataHide.classList.add("data_hidden");
  } else {
    try {
      dataHide.classList.remove("data_hidden");
      const apiKey = "b152d6361602a5fe117d579ce44444f0";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      temp.innerText = `${(data?.main?.temp).toFixed(0)}°C`;
      humidity.innerHTML = `<i class="fas fa-tint fa-fw" style="color: #fff;"></i> :  ${data?.main?.humidity}%`;
      wind_speed.innerHTML = `<i class="fas fa-wind fa-fw " style="color: #fff;"></i> :  ${data?.wind?.speed} km/h`;
      weather.innerHTML = `<i class="fas fa-sun fa-fw " style="color: #fff;"></i> :  ${data?.weather[0]?.main}`;
      city_name.innerText = `${data?.name}, ${data?.sys?.country}`;
      document.getElementById(
        "icon"
      ).src = `http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`;
      let LocalDate = new Date();
      localTime = LocalDate.getTime();
      localOffset = LocalDate.getTimezoneOffset() * 60000;
      utc = localTime + localOffset;
      const dateTime = utc + 1000 * data?.timezone;
      nd = new Date(dateTime);
      let daysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let monthsList = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Aug",
        "Oct",
        "Nov",
        "Dec",
      ];
      const day = daysList[nd.getDay()];
      const date = nd.getDate();
      const month = monthsList[nd.getMonth()];
      const year = nd.getFullYear();
      let hours;
      if (nd.getHours() < 10) hours = "0" + nd.getHours();
      else hours = nd.getHours();
      let minutes;
      if (nd.getMinutes() < 10) minutes = "0" + nd.getMinutes();
      else minutes = nd.getMinutes();
      let amORpm;
      if (hours >= 12) {
        amORpm = "PM";
      } else {
        amORpm = "AM";
      }
      currTime.innerText = `${day}, ${date}-${month}-${year} | ${hours}:${minutes} ${amORpm}`;
    } catch {
      dataHide.classList.add("data_hidden");
      city_name.innerHTML = `<h1>City not found..</h1>`;
    }
  }
};
submitButton.addEventListener("click", getInfo);
