const text = "Hello I am a Web Developer";

let i = 0;
let txt = "";
let velocity = 70;

function write() {
  if (i < text.length) {
    txt += text.charAt(i);
    document.querySelector(".texto").innerHTML = txt;
    i++;
    setTimeout(write, velocity);
  } else {
    setTimeout(deleteWords, 1000);
  }
}

function deleteWords() {
  if (i >= 0) {
    txt = text.substring(0, i);
    document.querySelector(".texto").innerHTML = txt;
    i--;
    setTimeout(deleteWords, velocity);
  } else {
    // i=0;
    setTimeout(write, 1000);
  }
}

write();
