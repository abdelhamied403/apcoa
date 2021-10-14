axios
  .get(`${api}/cars.php`)
  .then((res) => {
    $(".tree p#val").text(res.data.environmental);
  })
  .catch((err) => console.error(err));
