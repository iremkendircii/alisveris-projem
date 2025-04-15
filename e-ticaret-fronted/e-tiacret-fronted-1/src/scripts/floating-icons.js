// This file contains JavaScript functionality related to the floating icons, enhancing user interaction.

document.addEventListener('DOMContentLoaded', function() {
    const floatingIcons = document.querySelectorAll('.floating-icon');

    floatingIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            icon.classList.add('hover');
        });

        icon.addEventListener('mouseout', function() {
            icon.classList.remove('hover');
        });

        icon.addEventListener('click', function() {
            // Add functionality for icon click
            alert(`You clicked on ${icon.dataset.name}`);
        });
    });
});