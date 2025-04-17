/**
 * Device detection and redirection for gallery page
 * Redirects to appropriate gallery version based on device type
 */
document.addEventListener('DOMContentLoaded', function() {
    // Don't redirect if we're already on the correct page
    const currentPath = window.location.pathname;
    const isMobile = window.innerWidth <= 767 || 
                     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Get the filename from the path
    const fileName = currentPath.split('/').pop();
    
    // Redirect if needed
    if (isMobile && fileName === 'gallery.html') {
        window.location.href = 'gallery-mobile.html' + window.location.search;
    } else if (!isMobile && fileName === 'gallery-mobile.html') {
        window.location.href = 'gallery.html' + window.location.search;
    }
});