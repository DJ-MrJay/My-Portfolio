const openDetails = () => {
  if (!!window.location.hash) {
    const details = document.querySelector(`${window.location.hash} details`);
    details.open = true;
  }
};

openDetails();
window.addEventListener("hashchange", openDetails);

// Set the current year
document.getElementById("currentYear").textContent = new Date().getFullYear();
