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
        
        // Ensure video plays
        let playAttempt = setInterval(() => {
            video.play()
                .then(() => {
                    clearInterval(playAttempt);
                })
                .catch(error => {
                    console.log("Auto-play was prevented. Adding play button fallback.");
                    addPlayButton();
                });
        }, 500);
        
        // Special handling for Arc browser
        if (isArc) {
            // Add a specific class for Arc browser
            document.body.classList.add('arc-browser');
            
            // Try different approach for Arc
            video.setAttribute('playsinline', true);
            video.muted = true;
            video.autoplay = true;
            
            // Force video display
            video.style.visibility = "visible";
            video.style.opacity = "1";
        }
        
        // Mobile optimization
        if (isMobile()) {
            document.body.classList.add('mobile-device');
            
            // Adjust video for mobile
            video.setAttribute('playsinline', true);
            
            // Handle orientation changes
            window.addEventListener('orientationchange', function() {
                setTimeout(() => {
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                    
                    if (windowWidth > windowHeight) {
                        // Landscape
                        video.style.width = '100vw';
                        video.style.height = '100vh';
                        video.style.objectFit = 'cover';
                    } else {
                        // Portrait
                        video.style.width = '100vw';
                        video.style.height = '100vh';
                        video.style.objectFit = 'cover';
                    }
                }, 300);
            });
            
            // Initial orientation setup
            if (window.matchMedia("(orientation: landscape)").matches) {
                video.style.width = '100vw';
                video.style.height = '100vh';
                video.style.objectFit = 'cover';
            } else {
                video.style.width = '100vw';
                video.style.height = '100vh';
                video.style.objectFit = 'cover';
            }
        }
    }
    
    // Function to add play button if autoplay fails
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
