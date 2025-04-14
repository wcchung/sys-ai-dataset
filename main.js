document.addEventListener('DOMContentLoaded', () => {
    // Background Image Rotation
    const backgrounds = [
        'images/001.jpg',
        'images/005.jpg',
        'images/007.jpg',
        'images/009.jpg',
        'images/011.jpg'
    ];

    let currentBg = 0;
    const landingContainer = document.querySelector('.landing-container');
    
    function changeBackground() {
        currentBg = (currentBg + 1) % backgrounds.length;
        landingContainer.style.backgroundImage = `url('${backgrounds[currentBg]}')`;
    }
    
    // Change background every 3 seconds
    setInterval(changeBackground, 3000);
    
    // Modal functionality
    const modal = document.getElementById('infoModal');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const closeBtn = document.getElementById('closeModal');
    
    learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
    
    // Close modal if clicked outside of content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
