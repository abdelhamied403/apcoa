axios
  .get(api + "/prevcarbon.php")
  .then((res) => {
    $(".cloud p#val").text(res.data.data + " kg");
  })
  .catch((err) => console.error(err));
