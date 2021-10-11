const today = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const api = "http://dev.norandum.se";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

axios
  .get(`${api}/cars.php`)
  .then((res) => {
    $(".tree p#val").text(res.data.environmental);
  })
  .catch((err) => console.error(err));

axios
  .get(`${api}/carbon.php`)
  .then((res) => {
    $(".car p#val").text(res.data.data + " KG");
  })
  .catch((err) => console.error(err));

axios
  .get(`${api}/prevcarbon.php`)
  .then((res) => {
    $(".cloud p#val").text(res.data.data + " kg");
  })
  .catch((err) => console.error(err));

axios
  .get(`${api}/carbonbymonth.php`)
  .then((res) => {
    const val1 = Object.values(res.data.data)[0];
    const val2 = Object.values(res.data.data)[1];
    const key1 = Object.keys(res.data.data)[0];
    const key2 = Object.keys(res.data.data)[1];

    if (val1 === val2) {
      $(".cars img#img1").attr("src", "assets/carTall.svg");
      $(".cars img#img2").attr("src", "assets/carTall.svg");
    } else if (val1 < val2) {
      $(".cars img#img1").attr("src", "assets/carShort.svg");
      $(".cars img#img2").attr("src", "assets/carTall.svg");
    } else {
      $(".cars img#img1").attr("src", "assets/carTall.svg");
      $(".cars img#img2").attr("src", "assets/carShort.svg");
    }

    const month1 = +key1.split("-")[1] - 1;
    const month2 = +key2.split("-")[1] - 1;

    $(".cars p#month1").text(months[month1]);
    $(".cars p#month2").text(months[month2]);
    $(".cars p#val1").text(val1 + " KG");
    $(".cars p#val2").text(val2 + " KG");
  })
  .catch((err) => console.error(err));

const day = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();

$(".car #date").text(`${day} ${month} ${year}`);
