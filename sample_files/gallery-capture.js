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
            
            // Determine file type and create appropriate content
            const mediaContent = createMediaContent(photo);
            
            // Create Capture Eye component
            photoItem.innerHTML = `
                <capture-eye nid="${photo.id}">
                    ${mediaContent}
                </capture-eye>
            `;
            
            photoGrid.appendChild(photoItem);
        });
    }
    
    // Create appropriate media content based on file type
    function createMediaContent(asset) {
        const fileType = asset.asset_file_mime_type || '';
        const title = asset.headline || asset.caption || 'Document asset';
        const nid = asset.id;
        
        // Check if a thumbnail is available from the API
        if (asset.asset_file_thumbnail) {
            return `
                <media-viewer
                    width="100%"
                    src="${asset.asset_file_thumbnail}"
                    alt="${title}"
                >
                </media-viewer>
            `;
        }
        
        // For image files, use IPFS gateway
        if (fileType.startsWith('image/')) {
            return `
                <media-viewer
                    width="100%"
                    src="https://ipfs-pin.numbersprotocol.io/ipfs/${nid}"
                    alt="${title}"
                >
                </media-viewer>
            `;
        }
        
        // For PDF files
        if (fileType === 'application/pdf') {
            return `
                <div class="file-preview pdf-preview">
                    <div class="file-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                            <path fill="#FF5252" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M9.5,11.5V6.5H8V11.5H9.5M12.5,11.5V6.5H11V11.5H12.5M15.5,11.5V6.5H14V11.5H15.5M9.5,17.5V12.5H8V17.5H9.5M12.5,17.5V12.5H11V17.5H12.5M15.5,17.5V12.5H14V17.5H15.5Z"/>
                        </svg>
                    </div>
                    <div class="file-info">
                        <div class="file-title">${title}</div>
                        <div class="file-type">PDF 文件</div>
                    </div>
                </div>
            `;
        }
        
        // For other document types (generic document icon)
        return `
            <div class="file-preview document-preview">
                <div class="file-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                        <path fill="#FFCA28" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"/>
                    </svg>
                </div>
                <div class="file-info">
                    <div class="file-title">${title}</div>
                    <div class="file-type">${getFileTypeDisplay(fileType)}</div>
                </div>
            </div>
        `;
    }
    
    // Helper function to display file type in a user-friendly way
    function getFileTypeDisplay(mimeType) {
        if (!mimeType) return '未知文件類型';
        
        const types = {
            'application/pdf': 'PDF 文件',
            'application/msword': 'Word 文件',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word 文件',
            'text/plain': '文本文件',
            'audio/': '音頻文件',
            'video/': '視頻文件'
        };
        
        // Check for partial matches (for audio/video types)
        for (const [key, value] of Object.entries(types)) {
            if (mimeType.includes(key)) {
                return value;
            }
        }
        
        // Return the mime type if no match
        return mimeType.split('/')[1]?.toUpperCase() || '文件';
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