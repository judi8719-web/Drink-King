
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });


  // section des services scripts

  function openAnsSection(val) {
  var p = document.getElementById("para" + val);
  var svg = document.getElementById("path" + val);

  if (p.classList.contains("hidden")) {
    p.classList.remove("hidden");
    p.classList.add("block");
  } else {
    p.classList.remove("block");
    p.classList.add("hidden");
  }

  if (svg.classList.contains("hidden")) {
    svg.classList.remove("hidden");
    svg.classList.add("block");
  } else {
    svg.classList.remove("block");
    svg.classList.add("hidden");
  }
}