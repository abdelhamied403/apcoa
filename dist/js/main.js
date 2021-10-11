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

    $(".cars p#val1").text(Object.values(res.data.data)[0] + " KG");
    $(".cars p#val2").text(Object.values(res.data.data)[1] + " KG");
  })
  .catch((err) => console.error(err));
