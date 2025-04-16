document.addEventListener('DOMContentLoaded', () => {
    // Sample photo data - THIS IS PLACEHOLDER CONTENT ONLY
    const photos = [
        {
            id: 1,
            title: "[示例] 三民主義墨跡",
            description: "示例內容：孫中山先生親筆書寫之三民主義墨跡（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo1.jpg",
            tags: ["calligraphy"]
        },
        {
            id: 2,
            title: "[示例] 孫文手稿",
            description: "示例內容：孫中山先生親筆手稿（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo2.jpg",
            tags: ["calligraphy"]
        },
        {
            id: 3,
            title: "[示例] 建國方略手稿",
            description: "示例內容：孫中山先生建國方略之手稿文件（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo3.jpg",
            tags: ["documents"]
        },
        {
            id: 4,
            title: "[示例] 革命文獻",
            description: "示例內容：與革命相關之歷史文獻（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo4.jpg",
            tags: ["documents"]
        },
        {
            id: 5,
            title: "[示例] 中國國民黨成立文件",
            description: "示例內容：中國國民黨成立時期之重要文件（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo5.jpg",
            tags: ["documents"]
        },
        {
            id: 6,
            title: "[示例] 《五權憲法》墨跡",
            description: "示例內容：孫中山先生親筆撰寫之五權憲法墨跡（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo6.jpg",
            tags: ["calligraphy"]
        },
        {
            id: 7,
            title: "[示例] 同盟會誓詞",
            description: "示例內容：中國同盟會成立時之入會誓詞（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo7.jpg",
            tags: ["documents"]
        },
        {
            id: 8,
            title: "[示例] 革命文獻",
            description: "示例內容：革命相關文獻（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo8.jpg",
            tags: ["documents"]
        },
        {
            id: 9,
            title: "[示例] 國父遺囑",
            description: "示例內容：孫中山先生臨終前親筆書寫之遺囑（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo9.jpg",
            tags: ["documents"]
        },
        {
            id: 10,
            title: "[示例] 國父墨寶",
            description: "示例內容：孫中山先生親筆墨寶（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo10.jpg",
            tags: ["calligraphy"]
        },
        {
            id: 11,
            title: "[示例] 《革命方略》手稿",
            description: "示例內容：孫中山先生親筆撰寫之革命方略手稿（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo11.jpg",
            tags: ["documents"]
        },
        {
            id: 12,
            title: "[示例] 中山先生墨跡",
            description: "示例內容：孫中山先生親筆墨跡（此為示例，請替換為實際內容）",
            date: "示例日期",
            photographer: "示例來源：黨史館典藏",
            src: "images/photos/photo12.jpg",
            tags: ["calligraphy"]
        }
    ];

    const photoGrid = document.getElementById('photoGrid');
    const tagItems = document.querySelectorAll('.tag-item');
    const photoModal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const photoTitle = document.getElementById('photoTitle');
    const photoDescription = document.getElementById('photoDescription');
    const photoDate = document.getElementById('photoDate');
    const photoCredit = document.getElementById('photoCredit');
    const photoTags = document.getElementById('photoTags');
    const closePhotoModal = document.querySelector('.close-photo-modal');
    
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
            
            photoItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}">
                <div class="photo-overlay">
                    <h3 class="photo-title">${photo.title}</h3>
                    <p class="photo-date">${formatDate(photo.date)}</p>
                </div>
            `;
            
            photoItem.addEventListener('click', () => {
                openPhotoModal(photo);
            });
            
            photoGrid.appendChild(photoItem);
        });
    }
    
    // Open photo modal
    function openPhotoModal(photo) {
        modalPhoto.src = photo.src;
        photoTitle.textContent = photo.title;
        photoDescription.textContent = photo.description;
        photoDate.textContent = `日期：${formatDate(photo.date)}`;
        photoCredit.textContent = `攝影：${photo.photographer}`;
        
        // Display tags
        photoTags.innerHTML = '';
        photo.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'photo-tag';
            tagElement.textContent = getTagName(tag);
            photoTags.appendChild(tagElement);
        });
        
        photoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Close photo modal
    closePhotoModal.addEventListener('click', () => {
        photoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal if clicked outside of content
    window.addEventListener('click', (e) => {
        if (e.target === photoModal) {
            photoModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && photoModal.style.display === 'block') {
            photoModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Helper functions
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('zh-TW', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
    
    function getTagName(
        const tagNames = {
            'calligraphy': '國父墨跡',
            'documents': '革命文獻'
        };
        
        return tagNames[tag] || tag;
    }
});
