// Customize your portfolio here. Replace placeholder text, links, and cards as you grow.
const portfolioData = {
  // Update these basic details first.
  name: "HUSAK VALENTIN",
  initials: "HV",
  greeting: "hi valentin here.",
  tagline: "Cybersecurity student focused on systems, automation & SaaS.",
  age: "18",
  occupation: "Undergraduate Cybersecurity Student at ESIEA",
  location: "Ivry-sur-Seine / Paris, France",
  intro:
    "I am an undergraduate cybersecurity student at ESIEA with a strong foundation in systems programming, low-level architecture, automation, and independent software products.",
  about:
    "I work at the intersection of low-level systems, automation, and pragmatic product development. My focus is on high-performance utilities, privacy-centric computing, Windows-to-Linux migration, and building independent SaaS products from idea to deployment. I enjoy technical projects that require both architecture and execution: kernel-adjacent configuration, computer vision pipelines, hardware integration, GUI tooling, and clean front-end presentation.",
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
      company: "Systems and automation programming",
      date: "Core",
      description:
        "Comfortable building technical utilities and prototypes in C, C++, and Python, with attention to performance, maintainability, and deployment constraints.",
      skills: ["C", "C++", "Python"],
    },
    {
      role: "Systems",
      company: "Windows, Linux, and kernel-adjacent configuration",
      date: "Focus",
      description:
        "Strong interest in Windows/Linux kernel interactions, driver-level configuration, and practical migration from Windows environments to CachyOS and Arch-based systems.",
      skills: ["Windows", "Linux", "Drivers", "CachyOS", "Arch"],
    },
    {
      role: "Automation & Instrumentation",
      company: "Computer vision and AI-assisted tooling",
      date: "Applied",
      description:
        "Developing high-performance automation concepts using input emulation, computer vision, and local AI inference in controlled lab environments.",
      skills: ["OpenCV", "ONNX", "Input Emulation", "Optimization"],
    },
    {
      role: "Hardware / Firmware",
      company: "Microcontroller integration",
      date: "Hands-on",
      description:
        "Experience integrating Raspberry Pi microcontrollers for low-level peripheral, networking, and experimentation projects.",
      skills: ["Raspberry Pi", "Firmware", "Networking", "Peripherals"],
    },
    {
      role: "Application Development",
      company: "GUI tools and independent SaaS",
      date: "Product",
      description:
        "Building desktop utilities and micro-SaaS products, from GUI design and executable compilation to payment integration and architectural planning.",
      skills: ["PyQt", "Qt", "Executables", "Stripe"],
    },
  ],
  // Replace placeholder links when public repositories or demos are ready.
  projects: [
    {
      name: "Systems Instrumentation & Memory Analysis",
      description:
        "Development of high-performance tools for real-time process memory reading and synchronized overlays, utilizing kernel-mode awareness to ensure minimal footprint and maximum efficiency.",
      technologies: ["C++", "Windows Internals", "Memory Analysis", "Overlay Systems"],
      link: "",
      linkLabel: "Private project",
    },
    {
      name: "Automation Architecture",
      description:
        "Designing robust, AI-driven automation systems capable of high-fidelity environmental analysis and rapid input execution, focused on maximizing precision in complex, high-speed task environments.",
      technologies: ["Python", "OpenCV", "ONNX", "Input Systems"],
      link: "",
      linkLabel: "Private project",
    },
  ],
  notes: [
    {
      title: "Windows-to-Linux migration",
      description:
        "Documenting the practical tradeoffs of moving daily workflows toward CachyOS and Arch-based environments.",
      meta: "systems / privacy / performance",
    },
    {
      title: "Local AI for automation",
      description:
        "Testing how OpenCV and ONNX inference can make technical tools faster, more reliable, and less dependent on cloud services.",
      meta: "automation / ai inference",
    },
    {
      title: "Indie SaaS architecture",
      description:
        "Planning small utility products with payment integration, clean deployment paths, and realistic maintenance costs.",
      meta: "micro-saas / product",
    },
  ],
  // Replace these with your real contact links.
  contact: [
    { label: "Email", value: "husak.valentin@gmail.com", href: "mailto:husak.valentin@gmail.com" },
    { label: "GitHub", value: "github.com/val168", href: "https://github.com/val168" },
    { label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername" },
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
      <article class="note-item reveal">
        <div>
          <h3>${note.title}</h3>
          <p>${note.description}</p>
        </div>
        <span>${note.meta}</span>
      </article>
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
