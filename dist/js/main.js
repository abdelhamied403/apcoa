const api = "testapi";

axios
  .get(`${api}/tree`)
  .then((res) => {
    $("#tree p").text(res.data.environmental);
  })
  .catch((err) => console.error(err));

axios
  .get(`${api}/car`)
  .then((res) => {
    $("#car p").text(res.data.data);
  })
  .catch((err) => console.error(err));

axios
  .get(`${api}/carTall`)
  .then((res) => {
    $("#carTall p month1").text(Object.values(res.data.data)[0]);
    $("#carTall p month2").text(Object.values(res.data.data)[1]);
  })
  .catch((err) => console.error(err));

axios
  .get(`${api}/cloud`)
  .then((res) => {
    $("#cloud p").text(res.data.data);
  })
  .catch((err) => console.error(err));
