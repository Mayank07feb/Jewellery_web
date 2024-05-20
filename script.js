document.addEventListener("DOMContentLoaded", function() {
    // Function to show the popup
    function showPopup() {
        document.getElementById("popup-overlay").style.display = "block";
        document.getElementById("popup-container").style.display = "block";
    }

    // Function to close the popup
    function closePopup() {
        document.getElementById("popup-overlay").style.display = "none";
        document.getElementById("popup-container").style.display = "none";
    }

    // Check if the popup should be shown based on the cookie
    var popupShown = document.cookie.replace(/(?:(?:^|.*;\s*)popupShown\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (popupShown !== "true") {
        setTimeout(showPopup, 10000); // Show the popup after 10 seconds
        document.cookie = "popupShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Set a cookie to remember that the popup has been shown
    }

    // Close the popup when Cancel button is clicked
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        closePopup();
    });

    // Toggling the form container
    const chatButton = document.getElementById('chatButton-main');
    const formContainer = document.querySelector('.support-button');

    chatButton.addEventListener('click', function() {
        formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Slick slider initialization
    $('.testimonial-slider').slick({
        slidesToShow: 3, // Display 3 testimonials in one line
        slidesToScroll: 1,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 2000, // Set autoplay speed in milliseconds (2 seconds in this case)
        arrows: true, // Show arrow navigation
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>', // Custom previous arrow
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>', // Custom next arrow
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1 // Show 1 testimonial per slide on smaller screens
                }
            }
        ]
    });

    // Function for search functionality
    function searchFunction() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
        const searchTermsToUrls = {
            "gold": "./Navbar-section/Gold_Jewelery/gold.html",
            "diamond": "./Navbar-section/Diamonds/diamond.html",
            // Add more mappings here as needed
        };
        
        if (searchTerm in searchTermsToUrls) {
            window.location.href = searchTermsToUrls[searchTerm];
        } else {
            alert("Sorry, no matching page found for your search term.");
        }
    }

    // Add event listener to search icon for search functionality
    document.querySelector('.search-icon').addEventListener('click', searchFunction);
});
