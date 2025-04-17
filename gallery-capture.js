document.addEventListener('DOMContentLoaded', () => {
    const photoGrid = document.getElementById('photoGrid');
    const tagItems = document.querySelectorAll('.tag-item');
    const API_BASE_URL = 'https://dia-backend.numbersprotocol.io/api/v3/assets/';
    const ACCOUNT = 'kmt-studio@com.tw';
    
    // Loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = '<div class="spinner"></div><p>載入中...</p>';
    
    // Display loading indicator initially
    photoGrid.innerHTML = '';
    photoGrid.appendChild(loadingIndicator);
    
    // Fetch and display all photos initially
    fetchAndDisplayPhotos('all');
    
    // Filter photos by tag
    tagItems.forEach(item => {
        item.addEventListener('click', () => {
            const tag = item.getAttribute('data-tag');
            
            // Update active tag
            tagItems.forEach(t => t.classList.remove('active'));
            item.classList.add('active');
            
            // Show loading indicator
            photoGrid.innerHTML = '';
            photoGrid.appendChild(loadingIndicator);
            
            // Fetch and display filtered photos
            fetchAndDisplayPhotos(tag);
        });
    });
    
    // Fetch photos from Numbers API based on tag
    async function fetchAndDisplayPhotos(tag) {
        try {
            let apiUrl;
            if (tag === 'all') {
                apiUrl = `${API_BASE_URL}?owner=${ACCOUNT}`;
            } else {
                const tagName = getTagQueryName(tag);
                apiUrl = `${API_BASE_URL}?tag=${tagName}&owner=${ACCOUNT}`;
            }
            
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data = await response.json();
            displayPhotos(data.results);
            
        } catch (error) {
            console.error('Error fetching photos:', error);
            photoGrid.innerHTML = `
                <div class="error-message">
                    <p>無法載入資料，請稍後再試。</p>
                    <p>Error: ${error.message}</p>
                </div>
            `;
        }
    }
    
    // Display photos in the grid
    function displayPhotos(photos) {
        photoGrid.innerHTML = '';
        
        if (!photos || photos.length === 0) {
            photoGrid.innerHTML = '<div class="no-results">沒有找到相關資料</div>';
            return;
        }
        
        photos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            
            // Create Capture Eye component
            photoItem.innerHTML = `
                <capture-eye nid="${photo.id}">
                    <media-viewer
                        width="100%"
                        src="https://ipfs-pin.numbersprotocol.io/ipfs/${photo.id}"
                        alt="${photo.headline || photo.caption || 'Photo asset'}"
                    >
                    </media-viewer>
                </capture-eye>
            `;
            
            photoGrid.appendChild(photoItem);
        });
    }
    
    // Map gallery tag to API query parameter
    function getTagQueryName(tag) {
        const tagMap = {
            'calligraphy': '國父墨跡',
            'documents': '革命文獻'
        };
        
        return tagMap[tag] || tag;
    }
    
    // Map API tag to display name
    function getTagDisplayName(tag) {
        const tagDisplayNames = {
            '國父墨跡': '國父墨跡',
            '革命文獻': '革命文獻'
        };
        
        return tagDisplayNames[tag] || tag;
    }
});