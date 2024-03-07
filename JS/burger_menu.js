// Get the burger menu button and the menu
const burger_menu = document.querySelector('#burger_menu');
const menu = document.querySelector('#menu');

// Add event listener to the burger menu button
burger_menu.addEventListener('click', () => {
    // Toggle the 'active' class on the menu
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        burger_menu.style.display = 'none';
        
        // Listen for clicks outside the menu
        document.addEventListener('click', clickOutsideMenu);
    } else {
        closeMenu();
    }
});

// Function to close the menu
function closeMenu() {
    menu.style.display = 'none';
    burger_menu.style.display = 'block';
    document.removeEventListener('click', clickOutsideMenu);
}

// Function to check if the click occurred outside of the menu
function clickOutsideMenu(event) {
    if (!menu.contains(event.target) && event.target !== burger_menu) {
        closeMenu();
    }
}