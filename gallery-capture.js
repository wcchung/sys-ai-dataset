document.addEventListener('DOMContentLoaded', () => {
    // Sample photo data - THIS IS PLACEHOLDER CONTENT ONLY
    const photos = [
        {
            id: 1,
            title: "[示例] 國父墨跡",
            description: "示例內容：國父墨跡（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            tags: ["calligraphy"],
            nid: "bafybeiacmqanntukgnfeqpwtckmwpkl22ixiad4fr3ev4dlj4ivu6dzjf4"
        },
        {
            id: 2,
            title: "[示例] 孫文影像",
            description: "示例內容：孫中山先生影像（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            tags: ["calligraphy"],
            nid: "bafybeiacmqanntukgnfeqpwtckmwpkl22ixiad4fr3ev4dlj4ivu6dzjf4"
        },
        {
            id: 3,
            title: "[示例] 革命文獻",
            description: "示例內容：與革命相關之歷史文獻（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            tags: ["documents"],
            nid: "bafybeiacmqanntukgnfeqpwtckmwpkl22ixiad4fr3ev4dlj4ivu6dzjf4"
        },
        {
            id: 4,
            title: "[示例] 國父墨寶",
            description: "示例內容：孫中山先生親筆墨寶（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            tags: ["calligraphy"],
            nid: "bafybeiacmqanntukgnfeqpwtckmwpkl22ixiad4fr3ev4dlj4ivu6dzjf4"
        },
        {
            id: 5,
            title: "[示例] 中山先生墨跡",
            description: "示例內容：孫中山先生墨跡（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
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
            
            // Create Capture Eye component with the photo information
            photoItem.innerHTML = `
                <capture-eye nid="${photo.nid}">
                    <media-viewer
                        width="100%"
                        src="https://ipfs-pin.numbersprotocol.io/ipfs/${photo.nid}"
                        alt="${photo.title}"
                    >
                    </media-viewer>
                    <div class="photo-info">
                        <h3 class="photo-title">${photo.title}</h3>
                        <p class="photo-date">${formatDate(photo.date)}</p>
                        <p class="photo-description">${photo.description}</p>
                        <p class="photo-photographer">攝影：${photo.photographer}</p>
                        <div class="photo-tags">
                            ${photo.tags.map(tag => `<span class="photo-tag">${getTagName(tag)}</span>`).join('')}
                        </div>
                    </div>
                </capture-eye>
            `;
            
            photoGrid.appendChild(photoItem);
        });
    }
    
    // Helper functions
    function formatDate(dateString) {
        // For demonstration purposes, just return the string
        // In a real application, you would format the date properly
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