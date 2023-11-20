var counter = 0;
function countingClicks() {
  document.getElementById("curtida_botao").disabled = true; //Assim cada loging cadatrado fará apenas uma curtida no post da receita - "true/false"
  AdicionaCor();
}

function PercorreID(id) {
  var elements = document.querySelectorAll(id);
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("icon__selected");
  }
}

function AdicionaCor() {
  var cor = document;
  if (counter <= 20 && counter > 0) {
    PercorreID("#frango__20");
  } else if (counter <= 40) {
    PercorreID("#frango__20");
    PercorreID("#frango__40");
  } else if (counter <= 60) {
    PercorreID("#frango__20");
    PercorreID("#frango__40");
    PercorreID("#frango__60");
  } else if (counter <= 80) {
    PercorreID("#frango__20");
    PercorreID("#frango__40");
    PercorreID("#frango__60");
    PercorreID("#frango__80");
  } else if (counter <= 100) {
    PercorreID("#frango__20");
    PercorreID("#frango__40");
    PercorreID("#frango__60");
    PercorreID("#frango__80");
    PercorreID("#frango__100");
  }
}
