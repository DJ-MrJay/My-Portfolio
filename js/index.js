const root = document.querySelector("html");
const body = document.querySelector("body");
const mainNav = document.querySelector("nav");
const menu = document.querySelector(".nav-links");
const menuButton = document.getElementById("menu-display");
const themeDisplay = document.getElementById("theme-display");
const themeContainer = document.querySelector(".theme-container");
const themeSelectors = document.getElementsByClassName("theme-select");

mainNav.classList.add("js-nav");

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  theme && setActiveSelector(theme);
  root.className = theme;
  const shade = getComputedStyle(document.documentElement).getPropertyValue(
    "--shade-100"
  );
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", shade);
};

const setTheme = (className) => {
  var root = document.getElementsByTagName("html")[0];
  root.className = className;
  localStorage.setItem("theme", className);
  const shade = getComputedStyle(document.documentElement).getPropertyValue(
    "--shade-100"
  );
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", shade);
  setActiveSelector(className);
};

const setActiveSelector = (className) => {
  var selectedTheme = document.getElementById(`${className}-select`);
  [...themeSelectors].forEach((item) => {
    item.classList.remove("active");
  });
  selectedTheme.classList.add("active");
  hideThemeContainer();
};

const showThemeContainer = () => {
  themeContainer.classList.add("visible");
  [...themeSelectors].forEach((item) => {
    item.tabIndex = 0;
  });
};

const hideThemeContainer = () => {
  themeContainer.classList.remove("visible");
  [...themeSelectors].forEach((item) => {
    item.tabIndex = -1;
  });
};

const showMenu = () => {
  menu.classList.add("visible");
  menuButton.classList.add("active");
};

const hideMenu = () => {
  menu.classList.remove("visible");
  menuButton.classList.remove("active");
};

let previousScrollPosition = 0;

const isScrollingDown = () => {
  let scrolledPosition = window.scrollY;
  let isScrollDown;

  if (scrolledPosition > previousScrollPosition) {
    isScrollDown = true;
  } else {
    isScrollDown = false;
  }
  previousScrollPosition = scrolledPosition;
  return isScrollDown;
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
    mainNav.classList.remove("scroll-up");
    mainNav.classList.remove("scroll-down");
  }
};

getTheme();

themeDisplay.addEventListener("click", function () {
  hideMenu();
  if (themeContainer.classList.contains("visible")) {
    hideThemeContainer();
  } else {
    showThemeContainer();
  }
});

menuButton.addEventListener("click", function () {
  hideThemeContainer();
  if (menu.classList.contains("visible")) {
    hideMenu();
  } else {
    showMenu();
  }
});

menu.addEventListener("click", function () {
  hideThemeContainer();
  hideMenu();
});

window.addEventListener("scroll", () => {
  handleNavScroll();
});

// Get all elements with the class "work-tags"
const tagLists = document.getElementsByClassName("work-tags");

// Loop through each tag list
for (let j = 0; j < tagLists.length; j++) {
  const tags = tagLists[j].getElementsByClassName("tag");
  const numTags = tags.length;

  // Loop through the tags in reverse order and insert dots
  for (let i = numTags - 1; i > 0; i--) {
    const dot = document.createElement("li");
    dot.className = "tag";
    dot.innerHTML = "&#x2022;";
    tagLists[j].insertBefore(dot, tags[i]);
  }
}

// Form Validation
function errorMessage(elemId, requiredMessage) {
  document.getElementById(elemId).innerHTML = requiredMessage;
}

function capitalizeEachWord(element) {
  // Capitalize the first letter of each word in the input value
  element.value = element.value.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
  });
}

function validationForm() {
  const fullname = document.form.fullname.value;
  const email = document.form.email.value;
  const message = document.form.message.value;

  let nameError = true;
  let emailError = true;
  let messageError = true;

  if (fullname === "") {
    errorMessage("nameError", "*Please enter your full name");
  } else {
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!nameRegex.test(fullname)) {
      errorMessage("nameError", "*Please enter first and last names");
    } else {
      errorMessage("nameError", "");
      nameError = false;
    }
  }

  if (email === "") {
    errorMessage("emailError", "*Please enter your email address");
  } else {
    const emailRegex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      errorMessage("emailError", "*Email address MUST be in lower case.");
    } else {
      errorMessage("emailError", "");
      emailError = false;
    }
  }

  if (message === "") {
    errorMessage("messageError", "*Please type a message");
  } else {
    const messageRegex = /[\s\S]+/g;
    if (!messageRegex.test(message)) {
      errorMessage("messageError", "*Please type a valid message");
    } else {
      errorMessage("messageError", "");
      messageError = false;
    }
  }

  if (nameError || emailError || messageError === true) {
    return false;
  }
}

// Store Form Data Locally

const form = document.querySelector("form");
const userData = {
  name: document.getElementById("fname").value,
  email: document.getElementById("email").value,
  message: document.getElementById("msg").value,
};

localStorage.setItem("userData", JSON.stringify(userData));
form.reset();

// Retrieve Form Data
if (localStorage.getItem("userData") !== undefined) {
  const userData = JSON.parse(localStorage.getItem("userData"));

  form.elements.fullname.value = userData.name;
  form.elements.email.value = userData.email;
  form.elements.message.value = userData.message;
}

// Set the current year
document.getElementById("currentYear").textContent = new Date().getFullYear();
