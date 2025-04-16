document.addEventListener('DOMContentLoaded', () => {
    // Video background handling
    const video = document.getElementById('background-video');
    
    // Ensure video loops properly
    video.addEventListener('ended', () => {
        video.play();
    });
    
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
