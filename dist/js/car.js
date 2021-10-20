axios
  .get(api + "/carbon.php")
  .then((res) => {
    $(".car p#val").text(res.data.data + " KG");
  })
  .catch((err) => console.error(err));

$(".car #date").text(`${day} ${month} ${year}`);
