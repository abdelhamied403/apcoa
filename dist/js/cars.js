axios
  .get(api + "/carbonbymonth.php")
  .then((res) => {
    const val1 = Object.values(res.data.data)[0];
    const val2 = Object.values(res.data.data)[1];
    const key1 = Object.keys(res.data.data)[0];
    const key2 = Object.keys(res.data.data)[1];

    if (val1 === val2) {
      $(".cars img#img1").attr("src", "assets/carTall.png");
      $(".cars img#img2").attr("src", "assets/carTall.png");
    } else if (val1 < val2) {
      $(".cars img#img1").attr("src", "assets/carShort.png");
      $(".cars img#img2").attr("src", "assets/carTall.png");
    } else {
      $(".cars img#img1").attr("src", "assets/carTall.png");
      $(".cars img#img2").attr("src", "assets/carShort.png");
    }

    const month1 = +key1.split("-")[1] - 1;
    const month2 = +key2.split("-")[1] - 1;

    $(".cars p#month1").text(months[month1]);
    $(".cars p#month2").text(months[month2]);
    $(".cars p#val1").text(val1 + " KG");
    $(".cars p#val2").text(val2 + " KG");
  })
  .catch((err) => console.error(err));
