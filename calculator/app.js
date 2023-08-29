function Add() {
  let x = document.getElementById("demo").value;
  if (x == "") {
    document.getElementById("demo").value = "";
  } else if (isNaN(parseInt(x.slice(x.length - 1, x.length)))) {
    x = x.slice(0, -1);
    x = x.concat("+");
    document.getElementById("demo").value = x;
  } else {
    document.getElementById("demo").value += "+";
  }
}
function sub() {
  let x = document.getElementById("demo").value;
  if (isNaN(parseInt(x.slice(x.length - 1, x.length)))) {
    x = x.slice(0, -1);
    x = x.concat("-");
    document.getElementById("demo").value = x;
  } else {
    document.getElementById("demo").value += "-";
  }
}
function mul() {
  let x = document.getElementById("demo").value;
  if (x == "") {
    document.getElementById("demo").value = "";
  } else if (isNaN(parseInt(x.slice(x.length - 1, x.length)))) {
    x = x.slice(0, -1);
    x = x.concat("*");
    document.getElementById("demo").value = x;
  } else {
    document.getElementById("demo").value += "*";
  }
}
function div() {
  let x = document.getElementById("demo").value;
  if (x == "") {
    document.getElementById("demo").value = "";
  } else if (isNaN(parseInt(x.slice(x.length - 1, x.length)))) {
    x = x.slice(0, -1);
    x = x.concat("/");
    document.getElementById("demo").value = x;
  } else {
    document.getElementById("demo").value += "/";
  }
}
function modu() {
  let x = document.getElementById("demo").value;
  if (x == "") {
    document.getElementById("demo").value = "";
  } else if (isNaN(parseInt(x.slice(x.length - 1, x.length)))) {
    x = x.slice(0, -1);
    x = x.concat("%");
    document.getElementById("demo").value = x;
  } else {
    document.getElementById("demo").value += "%";
  }
}
function decimal() {
  let x = document.getElementById("demo").value;
  if (x.slice(x.length - 1, x.length) == ".") {
    document.getElementById("demo").value = x;
  } else {
    document.getElementById("demo").value += ".";
  }
}
function myfunction() {
  let x = document.getElementById("demo").value;
  if (x == "") {
    document.getElementById("demo").value = "";
  } else {
    demo.value = eval(x);
  }
}
