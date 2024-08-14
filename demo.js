document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  $(document).ready(function(){
    $('.testimonial_owlCarousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        autoplay: false,   
        smartSpeed: 3000, 
        autoplayTimeout: 4000,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });
});

$(document).ready(function() {
    // Get all carousel items
    var items = $('#header-carousel .carousel-inner .carousel-item');

    // Shuffle the items array
    items.sort(function() {
        return Math.random() - 0.5;
    });

    // Remove all items from the carousel
    $('#header-carousel .carousel-inner').empty();

    // Re-append the shuffled items
    items.each(function(index, item) {
        // Set the first item as active
        if (index === 0) {
            $(item).addClass('active');
        } else {
            $(item).removeClass('active');
        }

        $('#header-carousel .carousel-inner').append(item);
    });

    // Activate the carousel
    $('#header-carousel').carousel({
        interval: 5000 // Change slides every 5 seconds
    });
});


function ToggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY > 0);
    
})

$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

// JavaScript to handle scroll-triggered flip effect
// JavaScript to handle scroll-triggered flip effect with return
document.addEventListener('scroll', function() {
    const counters = document.querySelectorAll('.counter .counter-content');
    const viewportHeight = window.innerHeight;
  
    counters.forEach(counter => {
      const counterPosition = counter.getBoundingClientRect().top;
  
      if (counterPosition < viewportHeight && counterPosition > 0) {
        // Element is in view, flip it
        counter.style.transform = 'rotateY(180deg)';
        
        // Set a timeout to flip it back after a delay
        setTimeout(() => {
          counter.style.transform = 'rotateY(0deg)';
        }, 1000); // Adjust delay as needed (1000ms = 1 second)
      }
    });
  });


  window.addEventListener('scroll', function() {
    const textElement = document.querySelector('.QmsText');
    const spans = textElement.querySelectorAll('span');
    const viewportHeight = window.innerHeight;
    const elementTop = textElement.getBoundingClientRect().top;
  
    if (elementTop < viewportHeight) {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('visible');
        }, index * 50); // Adjust the delay for each phrase
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
  const section = document.getElementById('animateSection');
  const elements = section.querySelectorAll('h5, p, .sec-icon');

  function checkScroll() {
    const sectionTop = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight) {
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate');
        }, index * 100); // Stagger the animation
      });
      // Optionally remove the event listener after animation
      window.removeEventListener('scroll', checkScroll);
    }
  }

  window.addEventListener('scroll', checkScroll);
  // Trigger the check in case the section is already in view
  checkScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const captions = document.querySelectorAll('.carousel-caption');
  
    captions.forEach(caption => {
      caption.classList.add('animate');
    });
  });
  

  
  
  
  

