document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Tab functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // 1. Nonaktifkan semua tombol dan konten
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 2. Aktifkan tombol yang diklik dan konten yang sesuai
            button.classList.add('active');
            const targetElement = document.getElementById(targetTab);
            if (targetElement) {
               targetElement.classList.add('active');
            } else {
                console.error("Target tab content not found:", targetTab);
            }
        });
    });

    // Project Filter functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            // Filter projects
            projectItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    // Show project
                    item.classList.remove('hidden');
                } else {
                    // Hide project
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Initially show all projects
    const initiallyActiveContent = document.querySelector('.tab-content.active');
    if (initiallyActiveContent) {
    }
});