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

const day = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();
