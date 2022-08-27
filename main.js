const toggle = document.getElementById('toggle');
const nav = document.getElementById('navBar');

toggle.addEventListener('click',() => {
    nav.classList.toggle('active') 
});

// roadmap 
$(".step").click(function () {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
  });

  $(".step01").click(function () {
    $("#line-progress").css("width", "3%");
    $(".discovery").addClass("active").siblings().removeClass("active");
  });

  $(".step02").click(function () {
    $("#line-progress").css("width", "25%");
    $(".strategy").addClass("active").siblings().removeClass("active");
  });

  $(".step03").click(function () {
    $("#line-progress").css("width", "50%");
    $(".creative").addClass("active").siblings().removeClass("active");
  });

  $(".step04").click(function () {
    $("#line-progress").css("width", "75%");
    $(".production").addClass("active").siblings().removeClass("active");
  });

  $(".step05").click(function () {
    $("#line-progress").css("width", "100%");
    $(".analysis").addClass("active").siblings().removeClass("active");
  });
 const step = 100;
  const counters = document.querySelectorAll(".counter");
  async function getCount(name) {
    switch (name) {
      case "youtube":
        // make api call
        return 30000;
      case "twitter":
        return 12000;
      case "instagram":
        return 9000;
    }
  }
  function loadValue(element, value) {
    const increment = value / step;
    function updateCounter() {
      const c = +element.innerText;
      if (c < value) {
        element.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 100);
      } else {
        element.innerText = value;
      }
    }
    updateCounter();
  }
  function loadCounter() {
    Array.from(counters || []).forEach(async (counter) => {
      const name = counter.getAttribute("name");
      counter.innerHTML = 0;
      const count = await getCount(name);
      loadValue(counter, count);
    });
  }
  loadCounter();

