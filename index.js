// Load the header HTML
fetch('header.html')
  .then(response => response.text())
  .then(html => {
    const header = document.querySelector('#header');
    header.innerHTML = html;
  });

// Load the footer HTML
fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    const footer = document.querySelector('#footer');
    footer.innerHTML = html;
  });

/*
// Create a new Intersection Observer instance
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-left-animation');
        observer.unobserve(entry.target);
      }
    });
  });
  
  // Select the section element to observe
  const section = document.querySelector('.fade-left');
  
  // Observe the section element
  observer.observe(section);
*/