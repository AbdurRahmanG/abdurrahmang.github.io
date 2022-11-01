// For Now Writing Some JavaScript Internally

const tabLinks = document.getElementsByClassName("tabLinks");
const tabContents = document.getElementsByClassName("tabContents");

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("activeLink");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("activeLink");
    document.getElementById(tabName).classList.add("activeTab");
}



// Main Manu

const mainMenu = document.getElementById("mainMenu");

function openMenu() {
    mainMenu.style.right = "0";
}

function closeMenu() {
    mainMenu.style.right = "-250px";
}


// Contact Form Submission Script 

const scriptURL =
    "https://script.google.com/macros/s/AKfycbw9tmNItMlfDCwXN0X54KXQHr8zAN15tHlZTNjhxO-XiEpLm3CcV-hLA14rfdYfuAfr/exec";
const form = document.forms["submit-to-google-sheet"];
const submitMessage = document.getElementById("submitMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            submitMessage.innerHTML =
                "Your message has been successfully sent. We will contact you very soon!";
            setTimeout(function () {
                submitMessage.innerHTML = "";
            }, 10000);
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});
