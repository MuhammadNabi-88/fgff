function myFunction() {
    alert("I am an alert box!");
  }

document.addEventListener("DOMContentLoaded", () => {
    // Language Change Button
    const langBtn = document.querySelector(".lang-btn");
    langBtn.addEventListener("click", () => {
        alert("Language changed!");
      });
    });


// **************************
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
  
    menuToggle.addEventListener("click", function() {
      navLinks.classList.toggle("show");
    });
  });
// **************************

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const modal = document.getElementById("faqModal");
    const modalQuestion = document.getElementById("modalQuestion");
    const modalAnswer = document.getElementById("modalAnswer");
    const closeModal = document.querySelector(".close");
  
    faqItems.forEach(item => {
      item.addEventListener("click", () => {
        // Retrieve question and answer from data attributes
        const question = item.getAttribute("data-question");
        const answer = item.getAttribute("data-answer");
        
        // Set modal content
        modalQuestion.textContent = question;
        modalAnswer.textContent = answer;
        
        // Display the modal
        modal.style.display = "block";
      });
    });
  
    // Close modal on click of close button
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside the modal content
    window.addEventListener("click", event => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  // About us to click more textAlign: 
  
  function showMore() {
    var extraText = document.getElementById("extraText");
    if (extraText.classList.contains("hidden")) {
        extraText.classList.remove("hidden");
    } else {
        extraText.classList.add("hidden");
    }
  }
    function showMore_B() {
      var extraText = document.getElementById("extraText_B");
      if (extraText.classList.contains("hidden")) {
          extraText.classList.remove("hidden");
      } else {
          extraText.classList.add("hidden");
      }
}