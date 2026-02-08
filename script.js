// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-navlinks]");

toggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Project filters
const chips = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");

    const filter = chip.dataset.filter;
    projects.forEach(p => {
      const tags = (p.dataset.tags || "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      p.style.display = show ? "block" : "none";
    });
  });
});

// Contact form (mailto)
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  window.location.href = `mailto:tharun.red15@gmail.com?subject=${subject}&body=${body}`;
  msg.textContent = "Opening your email app…";
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
