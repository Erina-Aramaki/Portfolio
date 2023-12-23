const image1 = document.getElementById("image1");
const factoryJs = document.getElementById("factoryJs");
    let stat = false;

    function func1() {
      if(stat) {
        image1.classList.add('off');
        image1.classList.remove('on');
      } else {
        image1.classList.add('on');
        image1.classList.remove('off');
      }
      stat = !stat;
    }

    function func2() {
      if(stat) {
        factoryJs.classList.add('off');
        factoryJs.classList.remove('on');
      } else {
        factoryJs.classList.add('on');
        factoryJs.classList.remove('off');
      }
      stat = !stat;
    }