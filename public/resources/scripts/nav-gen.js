// Data for Navbar and Sidebar items
const navItems = [
    { name: "Home", link: "/home" },
    { name: "News", link: "/news" },
    { name: "Impressum", link: "/impressum" },
    { name: "Downloads", link: "/" },
    { name: "Drone", link: "/" },
    { name: "Programming", link: "/" },
    { name: "Gaming", link: "/" },
    { name: "Contacts", link: "/" },
    { name: "About", link: "/" },
    { name: "Privacy Policy", link: "/" },
    { name: "News", link: "/" }
];

// DOM elements
const navbarList = document.querySelector('.ac-gn-list');
const sidebarList = document.querySelector('.sc-gn-list');

// Function to create list items
function createNavItem(item, classes) {
    const listItem = document.createElement('li');
    listItem.className = classes;
    const link = document.createElement('a');
    link.className = classes.replace(/item/g, 'link'); // Replace 'item' with 'link' for consistent class names
    link.href = item.link;
    link.textContent = item.name;
    listItem.appendChild(link);
    return listItem;
}

// Function to generate Navbar and Sidebar links
function generateNavItems() {
    // Get the current URL
    const currentURL = window.location.pathname;

    // Filter out the current page and limit navbar items
    const filteredNavItems = navItems.filter(item => item.link !== currentURL);
    const navbarItems = filteredNavItems.slice(0, 5);

    // Use DocumentFragment to batch DOM updates
    const navbarFragment = document.createDocumentFragment();
    const sidebarFragment = document.createDocumentFragment();

    navbarItems.forEach(item => {
        navbarFragment.appendChild(createNavItem(item, 'ac-gn-item ac-gn-item-menu'));
    });

    filteredNavItems.forEach(item => {
        sidebarFragment.appendChild(createNavItem(item, 'sc-gn-item sc-gn-item-menu'));
    });

    // Add Close Sidebar button to sidebar
    const closeSidebarItem = document.createElement('li');
    closeSidebarItem.className = 'sc-gn-item sc-gn-item-menu sc-gn-Sidebar';
    const closeSidebarLink = document.createElement('a');
    closeSidebarLink.className = 'closeButton sc-gn-link';
    closeSidebarLink.setAttribute('onclick', 'sidebarInstance.closeSidebar()');
    closeSidebarLink.href = '#';
    closeSidebarLink.textContent = '✕ Close Sidebar';
    closeSidebarItem.appendChild(closeSidebarLink);
    sidebarFragment.appendChild(closeSidebarItem);

    // Append fragments to DOM
    navbarList.appendChild(navbarFragment);
    sidebarList.appendChild(sidebarFragment);
}

// Initialize Navbar and Sidebar
generateNavItems();
