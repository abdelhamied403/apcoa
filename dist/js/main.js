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
    $("#carTall p#month1").text(Object.values(res.data.data)[0] + " KG");
    $("#carTall p#month2").text(Object.values(res.data.data)[1] + " KG");
  })
  .catch((err) => console.error(err));
