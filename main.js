document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('infoModal');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const closeBtn = document.getElementById('closeModal');
    
    learnMoreBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Video background handling
    const video = document.getElementById('background-video');
    
    // Check if browser is Arc browser (Safari-based but with differences)
    const isArc = navigator.userAgent.indexOf('Mac OS') !== -1 && 
                  navigator.userAgent.indexOf('Safari') !== -1 && 
                  document.documentElement.style.webkitAppRegion !== undefined;
    
    // Function to check if device is mobile
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // Handle video playback
    if (video) {
        // Make sure the video is visible and properly sized
        video.style.display = 'block';
        
        // Make sure video is muted for autoplay
        video.muted = true;
        
        // Set playsinline attribute for iOS
        video.setAttribute('playsinline', true);
        
        // Ensure video plays without showing play button
        let playAttempt = setInterval(() => {
            video.play()
                .then(() => {
                    clearInterval(playAttempt);
                })
                .catch(error => {
                    console.log("Auto-play was prevented:", error);
                    // Don't add play button on mobile - iOS will use the poster image instead
                    if (!isMobile()) {
                        addPlayButton();
                    }
                });
        }, 500);
        
        // Special handling for Arc browser
        if (isArc) {
            // Add a specific class for Arc browser
            document.body.classList.add('arc-browser');
            
            // Force video display
            video.style.visibility = "visible";
            video.style.opacity = "1";
        }
        
        // Mobile optimization
        if (isMobile()) {
            document.body.classList.add('mobile-device');
            
            // Handle orientation changes
            window.addEventListener('orientationchange', function() {
                setTimeout(() => {
                    adjustVideoSize();
                }, 300);
            });
            
            // Initial size adjustment
            adjustVideoSize();
        }
    }
    
    // Function to adjust video size based on device orientation and screen size
    function adjustVideoSize() {
        if (!video) return;
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const isLandscape = windowWidth > windowHeight;
        
        // Set default video dimensions
        video.style.width = '100vw';
        video.style.height = '100vh';
        
        // For portrait mode on mobile (common issue)
        if (!isLandscape && isMobile()) {
            // Make video match height and align to the right
            video.style.width = 'auto';
            video.style.height = '100vh';
            video.style.minWidth = '100%';
            
            // Right-align the video
            video.style.position = 'absolute';
            video.style.left = 'auto';
            video.style.right = '0';
            video.style.transform = 'none';
            video.style.objectPosition = 'right center';
        }
        
        // Ensure proper object-fit
        video.style.objectFit = 'cover';
    }
    
    // Function to add play button if autoplay fails (not for mobile)
    function addPlayButton() {
        if (!document.querySelector('.video-play-button')) {
            const playButton = document.createElement('button');
            playButton.innerHTML = 'Play Video';
            playButton.className = 'video-play-button';
            document.querySelector('.landing-container').appendChild(playButton);
            
            playButton.addEventListener('click', () => {
                video.play();
                playButton.style.display = 'none';
            });
        }
    }
});
