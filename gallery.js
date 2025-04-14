document.addEventListener('DOMContentLoaded', () => {
    // Sample photo data - in a real implementation, this would be loaded from a JSON file or API
    const photos = [
        {
            id: 1,
            title: "立法院議場佔領第一天",
            description: "學生佔領立法院議場，抗議兩岸服貿協議黑箱作業",
            date: "2014-03-18",
            photographer: "張良一",
            src: "images/photos/photo1.jpg",
            tags: ["legislative-yuan", "protest"]
        },
        {
            id: 2,
            title: "立法院外民眾支持",
            description: "民眾在立法院外表達支持",
            date: "2014-03-19",
            photographer: "吳逸驊",
            src: "images/photos/photo2.jpg",
            tags: ["legislative-yuan", "people"]
        },
        {
            id: 3,
            title: "行政院衝突現場",
            description: "行政院抗議活動中的衝突場景",
            date: "2014-03-23",
            photographer: "黃彥傑",
            src: "images/photos/photo3.jpg",
            tags: ["executive-yuan", "protest"]
        },
        {
            id: 4,
            title: "太陽花運動領袖發言",
            description: "學生代表在議場內發表演說",
            date: "2014-03-25",
            photographer: "鐘聖雄",
            src: "images/photos/photo4.jpg",
            tags: ["legislative-yuan", "people"]
        },
        {
            id: 5,
            title: "立法院外夜間集會",
            description: "支持者在立法院外舉行燭光集會",
            date: "2014-03-28",
            photographer: "余志偉",
            src: "images/photos/photo5.jpg",
            tags: ["legislative-yuan", "protest"]
        },
        {
            id: 6,
            title: "行政院抗議",
            description: "抗議者在行政院門前集結",
            date: "2014-03-24",
            photographer: "黃彥傑",
            src: "images/photos/photo6.jpg",
            tags: ["executive-yuan", "protest"]
        },
        {
            id: 7,
            title: "議場內部討論",
            description: "學生在議場內討論接下來的行動方針",
            date: "2014-03-22",
            photographer: "張良一",
            src: "images/photos/photo7.jpg",
            tags: ["legislative-yuan", "people"]
        },
        {
            id: 8,
            title: "警民對峙",
            description: "警察與抗議民眾在行政院外對峙",
            date: "2014-03-24",
            photographer: "吳逸驊",
            src: "images/photos/photo8.jpg",
            tags: ["executive-yuan", "protest"]
        },
        {
            id: 9,
            title: "太陽花",
            description: "抗議民眾手持向日葵，成為運動象徵",
            date: "2014-03-30",
            photographer: "余志偉",
            src: "images/photos/photo9.jpg",
            tags: ["protest", "people"]
        },
        {
            id: 10,
            title: "330大遊行",
            description: "反服貿大遊行，數十萬人參與",
            date: "2014-03-30",
            photographer: "鐘聖雄",
            src: "images/photos/photo10.jpg",
            tags: ["protest"]
        },
        {
            id: 11,
            title: "議場內睡袋區",
            description: "學生在立法院議場內搭建臨時休息區",
            date: "2014-03-26",
            photographer: "張良一",
            src: "images/photos/photo11.jpg",
            tags: ["legislative-yuan"]
        },
        {
            id: 12,
            title: "撤離議場前",
            description: "學生準備撤離議場前的最後時刻",
            date: "2014-04-10",
            photographer: "余志偉",
            src: "images/photos/photo12.jpg",
            tags: ["legislative-yuan", "people"]
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
    
    function getTagName(tag) {
        const tagNames = {
            'legislative-yuan': '立法院',
            'executive-yuan': '行政院',
            'protest': '抗議現場',
            'people': '人物'
        };
        
        return tagNames[tag] || tag;
    }
});
