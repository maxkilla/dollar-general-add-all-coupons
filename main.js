function runSelect(event) {
    event.preventDefault();
    addAllCoupons();
}

// This function will add all coupons
function addAllCoupons() {
    try {
        // Select all "Add deal" buttons on the page
        const addButtons = document.querySelectorAll('.deal-card__add-button');
        
        // Iterate through each button and simulate a click
        addButtons.forEach(button => button.click());

        console.log(`${addButtons.length} coupons added successfully.`);
    } catch (error) {
        console.error('Error adding coupons:', error);
    }
}

function init() {
    // Make a new button for our action.
    var newbutton = document.createElement('button');
    newbutton.name = 'add_all_coupons';
    newbutton.id = 'add_all_coupons';
    newbutton.style.cssText = 'background-color: #fff600; color: #000000; font-weight: 700; border: none; padding: 6px 10px; margin: 0 0 15px 20px; cursor: pointer;';
    newbutton.appendChild(document.createTextNode('Add All Coupons'));
    newbutton.addEventListener('click', runSelect);

    // Get the element with class 'pages'
    var pages = document.getElementsByClassName('pages')[0];
    if (pages) {
        // Insert the button before the 'pages' element
        pages.parentNode.insertBefore(newbutton, pages);
    } else {
        console.error("No element with class 'pages' found.");
    }
}

// Run the init function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    init();

    // Optional: Use MutationObserver to detect dynamic content
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                init(); // Re-run init when new nodes are added
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
