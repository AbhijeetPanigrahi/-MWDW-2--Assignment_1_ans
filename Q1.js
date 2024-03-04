function updateDate() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  document.getElementById("clock").innerHTML = `${h} : ${m} : ${s}`;
}
setInterval(updateDate, "1000");
