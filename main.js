function runSelect(event) {
    event.preventDefault();

    try {
        var pods = document.getElementsByClassName('pod');

        // Click on every item.
        for (var pod of pods) {
            pod.click();
        }
    } catch (error) {
        console.error('Error clicking pods:', error);
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

    // Insert the button before pages.
    var pages = document.getElementsByClassName('pages')[0];
    if (pages) {
        pages.parentNode.insertBefore(newbutton, pages);
    } else {
        console.error('No element with class "pages" found.');
    }
}

// Run the init function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    init();

    // Optional: Use MutationObserver to detect dynamic content
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                runSelect(); // or any other function to handle dynamic content
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});

