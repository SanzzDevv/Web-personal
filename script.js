// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

function checkPassword() {
  const passwordInput = document.getElementById('password').value;

  if (passwordInput) {
    // Jika password ada, tampilkan modal pop-up dengan pesan "Ops! False"
    document.getElementById("popupModal").style.display = "block";
    document.getElementById("popupModal").querySelector("h2").textContent = "Ops! False";
    document.getElementById("popupModal").querySelector("p").textContent = "Incorrect password entered.";
  } else {
    // Jika password tidak diisi, tampilkan modal dengan pesan lain
    document.getElementById("popupModal").style.display = "block";
    document.getElementById("popupModal").querySelector("h2").textContent = "Oops!";
    document.getElementById("popupModal").querySelector("p").textContent = "Please enter a password.";
  }
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("popupModal").style.display = "none";
}