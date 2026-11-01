document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.textContent = "☰";
    }));
  }
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
  const backTop = document.querySelector(".back-top");
  if (backTop) {
    window.addEventListener("scroll", () => backTop.classList.toggle("visible", window.scrollY > 350));
    backTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
  }
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Website enquiry - " + data.get("service"));
      const body = encodeURIComponent(
        "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
        "\nPhone: " + (data.get("phone") || "Not provided") +
        "\nService: " + data.get("service") + "\n\nProject details:\n" + data.get("message")
      );
      const status = document.getElementById("formStatus");
      status.textContent = "Opening your email app to send the enquiry…";
      window.location.href = "mailto:sstechindiacontract@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
});