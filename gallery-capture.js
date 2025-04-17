document.addEventListener('DOMContentLoaded', () => {
    // Sample photo data - THIS IS PLACEHOLDER CONTENT ONLY
    const photos = [
        {
            id: 1,
            tags: ["calligraphy"],
            nid: "bafybeiacmqanntukgnfeqpwtckmwpkl22ixiad4fr3ev4dlj4ivu6dzjf4"
        },
        {
            id: 2,
            tags: ["calligraphy"],
            nid: "bafybeiacmqanntukgnfeqpwtckmwpkl22ixiad4fr3ev4dlj4ivu6dzjf4"
        },
        {
            id: 3,
            tags: ["documents"],
            nid: "bafybeiacmqanntukgnfeqpwtckmwpkl22ixiad4fr3ev4dlj4ivu6dzjf4"
        },
        {
            id: 4,
            tags: ["calligraphy"],
            nid: "bafybeiacmqanntukgnfeqpwtckmwpkl22ixiad4fr3ev4dlj4ivu6dzjf4"
        },
        {
            id: 5,
            tags: ["calligraphy"],
            nid: "bafybeiacmqanntukgnfeqpwtckmwpkl22ixiad4fr3ev4dlj4ivu6dzjf4"
        }
    ];

    const photoGrid = document.getElementById('photoGrid');
    const tagItems = document.querySelectorAll('.tag-item');
    
    // Display all photos initially
    displayPhotos('all');
    
    // Filter photos by tag
    tagItems.forEach(item => {
        item.addEventListener('click', () => {
            const tag = item.getAttribute('data-tag');
            
            // Update active tag
            tagItems.forEach(t => t.classList.remove('active'));
            item.classList.add('active');
            
            // Display filtered photos
            displayPhotos(tag);
        });
    });
    
    // Display photos based on selected tag
    function displayPhotos(tag) {
        photoGrid.innerHTML = '';
        
        let filteredPhotos = photos;
        if (tag !== 'all') {
            filteredPhotos = photos.filter(photo => photo.tags.includes(tag));
        }
        
        filteredPhotos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.setAttribute('data-id', photo.id);
            
            // Create Capture Eye component without photo-info section
            // Let Capture Eye handle everything
            photoItem.innerHTML = `
                <capture-eye nid="${photo.nid}">
                    <media-viewer
                        width="100%"
                        src="https://ipfs-pin.numbersprotocol.io/ipfs/${photo.nid}"
                        alt="Photo ${photo.id}"
                    >
                    </media-viewer>
                </capture-eye>
            `;
            
            photoGrid.appendChild(photoItem);
        });
    }
    
    // Helper functions
    function formatDate(dateString) {
        return dateString;
    }
    
    function getTagName(tag) {
        const tagNames = {
            'calligraphy': '國父墨跡',
            'documents': '革命文獻'
        };
        
        return tagNames[tag] || tag;
    }
});