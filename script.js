window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [2000, 2000, 1000, 1000];

  function init() {
    box.addEventListener("click", openBox, false);
  }

  function stepClass(step) {
    merrywrap.className = 'merrywrap';
    merrywrap.className = 'merrywrap step-' + step;
  }

  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {
      reveal();
      $(".flame").animate({ "opacity": 0 }, 1000);
      $(".flame2").animate({ "opacity": 0 }, 1000);
      $(".flame3").animate({ "opacity": 0 }, 1000);
      $(".text").animate({ "top": -90, "opacity": 1 }, 1000);
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();

  function reveal() {
    document.querySelector('.merrywrap').style.backgroundColor = 'transparent';
  }
}
