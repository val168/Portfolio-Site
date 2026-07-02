// Customize your portfolio here. Replace placeholder text, links, and cards as you grow.
const portfolioData = {
  // Update these basic details first.
  name: "HUSAK VALENTIN",
  initials: "HV",
  greeting: "hi valentin here.",
  tagline: "Cybersecurity student building low-level tools and desktop apps.",
  age: "18",
  occupation: "Undergraduate Cybersecurity Student",
  location: "Paris, France",
  intro:
    "I study cybersecurity and build small tools in C, C++, Python, and PyQt. My main interests are Windows internals, Linux, automation, and practical desktop software.",
  about:
    "I focus on practical projects that help me understand operating systems, tooling, and software design. I try to keep my projects scoped, readable, and useful.",
  skills: [
    "C",
    "C++",
    "Python",
    "Windows/Linux internals",
    "CachyOS / Arch",
    "OpenCV",
    "ONNX",
    "Raspberry Pi",
    "Qt / PyQt",
    "Stripe",
    "APIs",
  ],
  // Add, remove, or reorder technical stack cards here.
  stack: [
    {
      role: "Languages",
      company: "C, C++, and Python",
      date: "Core",
      description:
        "I use C and C++ for lower-level utilities, and Python for scripts, prototypes, and tooling.",
      skills: ["C", "C++", "Python"],
    },
    {
      role: "Operating Systems",
      company: "Windows and Linux",
      date: "Focus",
      description:
        "I am learning how Windows and Linux handle processes, files, drivers, and networking. I also use Arch-based Linux setups for my own workflow.",
      skills: ["Windows", "Linux", "Drivers", "CachyOS", "Arch"],
    },
    {
      role: "Automation",
      company: "Computer vision and local AI",
      date: "Applied",
      description:
        "I use OpenCV and ONNX for local detection, small analysis pipelines, and automation experiments.",
      skills: ["OpenCV", "ONNX", "Input Emulation", "Optimization"],
    },
    {
      role: "Hardware / Firmware",
      company: "Microcontroller integration",
      date: "Hands-on",
      description:
        "I use hardware projects mainly to learn electronics, serial communication, and basic debugging.",
      skills: ["Raspberry Pi", "Firmware", "Networking", "Peripherals"],
    },
    {
      role: "Application Development",
      company: "Desktop tools and small products",
      date: "Product",
      description:
        "I build small desktop tools with PyQt and pay attention to packaging, layout, and usability.",
      skills: ["PyQt", "Qt", "Executables", "Stripe"],
    },
  ],
  // Replace placeholder links when public repositories or demos are ready.
  projects: [
    {
      name: "ProcLens",
      description:
        "A Windows process inspection tool that shows live process data, loaded modules, memory regions, and handles using Win32 and NT APIs. The goal is to make low-level process information easier to inspect from a small user-mode tool.",
      technologies: ["C++", "Windows Internals", "Win32 API", "Memory Mapping"],
      link: "https://github.com/val168/ProcLens",
      linkLabel: "View repository",
    },
    {
      name: "TraceForge",
      description:
        "A planned desktop app for collecting and viewing activity traces from Windows and Linux. It would combine a Python parser, a PyQt timeline view, and small C/C++ helpers for process, file, and network events.",
      technologies: ["Python", "C++", "PyQt", "Windows Internals", "Linux"],
      link: "https://github.com/val168/traceforge",
      linkLabel: "View repository",
    },
  ],
  notes: [
    {
      title: "Windows-to-Linux migration",
      description:
        "Notes from moving more of my daily workflow to Arch-based Linux.",
      meta: "linux / privacy",
      href: "articles/windows-to-linux-migration.html",
    },
    {
      title: "Local AI for automation",
      description:
        "Small OpenCV and ONNX experiments that run locally instead of using an online API.",
      meta: "automation / ai inference",
      href: "articles/local-ai-for-automation.html",
    },
    {
      title: "Small software products",
      description:
        "Planning small utility products with a clear use case, simple pricing, and low maintenance.",
      meta: "saas / product",
      href: "articles/small-software-products.html",
    },
  ],
  // Replace these with your real contact links.
  contact: [
    { label: "Email", value: "husak.valentin@gmail.com", href: "mailto:husak.valentin@gmail.com" },
    { label: "GitHub", value: "github.com/val168", href: "https://github.com/val168" },
    { label: "LinkedIn", value: "linkedin.com/in/valentinhusak", href: "https://www.linkedin.com/in/valentin-husak-4112b139a/" },
  ],
};

const fields = document.querySelectorAll("[data-field]");
const stackList = document.querySelector("#stack-list");
const projectList = document.querySelector("#project-list");
const contactList = document.querySelector("#contact-list");
const skillList = document.querySelector("#skill-list");
const noteList = document.querySelector("#note-list");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const year = document.querySelector("#current-year");
const brandMark = document.querySelector(".brand-mark");

const setText = (selector, text) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = text;
  });
};

fields.forEach((field) => {
  const key = field.dataset.field;
  if (portfolioData[key]) {
    field.textContent = portfolioData[key];
  }
});

setText(".brand-mark", portfolioData.initials);
year.textContent = new Date().getFullYear();
document.title = `${portfolioData.name} | Portfolio`;

const createChips = (items) =>
  items.map((item) => `<span class="chip">${item}</span>`).join("");

skillList.innerHTML = portfolioData.skills
  .map((skill) => `<span class="skill-pill"><strong>${skill}</strong></span>`)
  .join("");

stackList.innerHTML = portfolioData.stack
  .map(
    (item) => `
      <article class="card reveal">
        <div class="card-header">
          <div>
            <h3>${item.role}</h3>
            <p class="card-meta">${item.company}</p>
          </div>
          <span class="card-date">${item.date}</span>
        </div>
        <p class="card-description">${item.description}</p>
        <div class="chip-list" aria-label="Technologies and skills">${createChips(item.skills)}</div>
      </article>
    `
  )
  .join("");

projectList.innerHTML = portfolioData.projects
  .map((project) => {
    const linkMarkup = project.link
      ? `<a class="card-link" href="${project.link}" target="_blank" rel="noreferrer">${project.linkLabel}</a>`
      : `<span class="card-link placeholder">${project.linkLabel}</span>`;

    return `
      <article class="card reveal">
        <div>
          <h3>${project.name}</h3>
          <p class="card-meta">${project.technologies.join(" / ")}</p>
        </div>
        <p class="card-description">${project.description}</p>
        <div class="chip-list" aria-label="Technologies used">${createChips(project.technologies)}</div>
        ${linkMarkup}
      </article>
    `;
  })
  .join("");

noteList.innerHTML = portfolioData.notes
  .map(
    (note) => `
      <a class="note-item reveal" href="${note.href}">
        <div>
          <h3>${note.title}</h3>
          <p>${note.description}</p>
        </div>
        <span>${note.meta}</span>
      </a>
    `
  )
  .join("");

contactList.innerHTML = portfolioData.contact
  .map(
    (item) => `
      <a class="contact-link" href="${item.href}" target="_blank" rel="noreferrer">
        <strong>${item.label}</strong>
        <span>${item.value}</span>
      </a>
    `
  )
  .join("");

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-nav a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

brandMark.setAttribute("aria-hidden", "true");
