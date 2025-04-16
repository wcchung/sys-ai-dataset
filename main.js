document.addEventListener('DOMContentLoaded', () => {
    // Video background handling
    const video = document.getElementById('background-video');
    
    // Try to ensure video plays
    try {
        // Some browsers require user interaction before playing
        // We'll try to play it anyway and catch any errors
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Autoplay started successfully
                console.log('Video playing successfully');
            }).catch(error => {
                // Autoplay was prevented
                console.log('Autoplay prevented:', error);
                // Add a visible play button as fallback
                addPlayButton(video);
            });
        }
    } catch (e) {
        console.error('Error playing video:', e);
        addPlayButton(video);
    }
    
    // Function to add a play button if autoplay is blocked
    function addPlayButton(videoElement) {
        const playButton = document.createElement('button');
        playButton.innerHTML = 'Play Video';
        playButton.className = 'video-play-button';
        playButton.addEventListener('click', () => {
            videoElement.play();
            playButton.style.display = 'none';
        });
        
        document.querySelector('.landing-container').appendChild(playButton);
    }
    
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
