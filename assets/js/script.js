// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


// === Counter Animation ===
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // lower = faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / speed;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});

// === Review Carousel ===
document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll(".review-card");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  function showReview(index) {
    reviews.forEach((rev, i) => {
      rev.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  function nextReview() {
    current = (current + 1) % reviews.length;
    showReview(current);
  }

  // Auto-slide every 5 seconds
  let interval = setInterval(nextReview, 5000);

  // Click on dots manually
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      showReview(index);
      current = index;
      interval = setInterval(nextReview, 5000);
    });
  });
});




