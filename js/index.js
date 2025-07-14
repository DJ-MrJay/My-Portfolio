const root = document.documentElement;
const body = document.body;
const mainNav = document.querySelector("nav");
const menu = document.querySelector(".nav-links");
const menuButton = document.getElementById("menu-display");
const themeDisplay = document.getElementById("theme-display");
const themeContainer = document.querySelector(".theme-container");
const themeSelectors = document.getElementsByClassName("theme-select");

mainNav.classList.add("js-nav");

// Theme logic
const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    root.className = theme;
    setActiveSelector(theme);
    updateThemeColor();
  }
};

const setTheme = (theme) => {
  root.className = theme;
  localStorage.setItem("theme", theme);
  setActiveSelector(theme);
  updateThemeColor();
};

const setActiveSelector = (theme) => {
  [...themeSelectors].forEach((item) => item.classList.remove("active"));
  const selected = document.getElementById(`${theme}-select`);
  if (selected) selected.classList.add("active");
  hideThemeContainer();
};

const updateThemeColor = () => {
  const shade = getComputedStyle(root).getPropertyValue("--shade-100");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute("content", shade);
};

const showThemeContainer = () => {
  themeContainer.classList.add("visible");
  [...themeSelectors].forEach((item) => (item.tabIndex = 0));
};

const hideThemeContainer = () => {
  themeContainer.classList.remove("visible");
  [...themeSelectors].forEach((item) => (item.tabIndex = -1));
};

// Menu
const showMenu = () => {
  menu.classList.add("visible");
  menuButton.classList.add("active");
};

const hideMenu = () => {
  menu.classList.remove("visible");
  menuButton.classList.remove("active");
};

// Scroll detection
let previousScrollPosition = 0;
const isScrollingDown = () => {
  const current = window.scrollY;
  const down = current > previousScrollPosition;
  previousScrollPosition = current;
  return down;
};

const handleNavScroll = () => {
  if (mainNav.classList.contains("visible")) {
    if (isScrollingDown()) {
      mainNav.classList.add("scroll-down");
      mainNav.classList.remove("scroll-up");
    } else {
      mainNav.classList.add("scroll-up");
      mainNav.classList.remove("scroll-down");
    }
  } else {
    mainNav.classList.remove("scroll-up", "scroll-down");
  }
};

// Event bindings
getTheme();

themeDisplay?.addEventListener("click", () => {
  hideMenu();
  themeContainer.classList.contains("visible")
    ? hideThemeContainer()
    : showThemeContainer();
});

menuButton?.addEventListener("click", () => {
  hideThemeContainer();
  menu.classList.contains("visible") ? hideMenu() : showMenu();
});

menu?.addEventListener("click", () => {
  hideThemeContainer();
  hideMenu();
});

window.addEventListener("scroll", handleNavScroll);

// Tag list dots
const tagLists = document.getElementsByClassName("work-tags");
for (let list of tagLists) {
  const tags = list.getElementsByClassName("tag");
  for (let i = tags.length - 1; i > 0; i--) {
    const dot = document.createElement("li");
    dot.className = "tag";
    dot.innerHTML = "&#x2022;";
    list.insertBefore(dot, tags[i]);
  }
}

// Form validation
const errorMessage = (id, message) => {
  const elem = document.getElementById(id);
  if (elem) elem.innerHTML = message;
};

const capitalizeEachWord = (input) => {
  input.value = input.value.replace(/\b\w/g, (char) => char.toUpperCase());
};

const validationForm = () => {
  const { fullname, email, message } = document.form;
  let nameErr = true,
    emailErr = true,
    msgErr = true;

  if (!fullname.value.trim()) {
    errorMessage("nameError", "*Please enter your full name");
  } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(fullname.value)) {
    errorMessage("nameError", "*Please enter first and last names");
  } else {
    errorMessage("nameError", "");
    nameErr = false;
  }

  if (!email.value.trim()) {
    errorMessage("emailError", "*Please enter your email address");
  } else if (!/^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/.test(email.value)) {
    errorMessage("emailError", "*Email address MUST be in lower case.");
  } else {
    errorMessage("emailError", "");
    emailErr = false;
  }

  if (!message.value.trim()) {
    errorMessage("messageError", "*Please type a message");
  } else {
    errorMessage("messageError", "");
    msgErr = false;
  }

  return !(nameErr || emailErr || msgErr);
};

// Store form data locally
const form = document.querySelector("form");
if (form) {
  const userData = {
    name: document.getElementById("fname")?.value || "",
    email: document.getElementById("email")?.value || "",
    message: document.getElementById("msg")?.value || "",
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  form.reset();

  // Populate form if stored data exists
  const saved = localStorage.getItem("userData");
  if (saved) {
    const { name, email, message } = JSON.parse(saved);
    form.elements.fullname.value = name;
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
}

// Footer: set current year
const yearElem = document.getElementById("currentYear");
if (yearElem) yearElem.textContent = new Date().getFullYear();
