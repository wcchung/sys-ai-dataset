# 孫中山逝世100週年 AI 人工智慧歷史資料集

This is a static website for the [Sun Yat-sen 100th Anniversary Memorial](https://kmt.studio/) project by KMT Studio and Numbers Protocol. The site features a collection of historical documents, calligraphy, letters, and photos related to Dr. Sun Yat-sen, presented as an open AI training dataset.

## Features

- Responsive design for all device sizes
- Landing page with video background
- "Learn more" modal with historical context
- Photo gallery with tag-based filtering
- Detailed photo view with metadata
- Mobile-friendly navigation

## Project Structure

```
sun-yat-sen-archive/
├── index.html              # Landing page
├── gallery.html           # Gallery page for historical documents
├── styles.css             # Main stylesheet
├── gallery.css           # Gallery-specific styles
├── main.js               # Main JavaScript for landing page
├── gallery.js            # Gallery JavaScript functionality
├── KMT banner.mp4        # Background video
├── images/               # Image assets
│   ├── numbers-logo.png  # Partner logos
│   └── kmt-studio-logo.png
└── images/photos/        # Gallery content
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

## Setup Instructions

### Prerequisites

- Git installed on your computer
- A GitHub account
- Basic knowledge of HTML, CSS, and JavaScript (for modifications)

### Local Development

1. Clone this repository:
   ```
   git clone https://github.com/your-username/sunflower-archive.git
   cd sunflower-archive
   ```

2. Open `index.html` in your browser to view the site locally.

3. Make any desired changes to the HTML, CSS, or JavaScript files.

### Hosting on GitHub Pages

1. Push your repository to GitHub:
   ```
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to your repository on GitHub and navigate to Settings > Pages.

3. Under "Source", select the branch you want to deploy (usually "main") and click "Save".

4. GitHub will provide you with a URL where your site is published (usually in the format `https://your-username.github.io/sunflower-archive/`).

## Customization

### Adding Real Photos

Replace the placeholder images in the `images/photos/` directory with actual photos from the Sunflower Movement. Update the photo metadata in the `gallery.js` file to match your new images.

### Changing Background Video

Replace the video file (`KMT banner.mp4`) in the root directory with your own MP4 video. Make sure it is high-quality and has good contrast for readability of the text overlay. For optimal performance, consider compressing the video to an appropriate size while maintaining quality.

### Adding More Photos

To add more photos to the gallery, simply add new entries to the `photos` array in `gallery.js` following the existing pattern.

## Credits

This project is a clone of the original [Sunflower318 Numbers Protocol site](https://sunflower318.numbersprotocol.io/).

Original site credits:
- Collection curated by: 中國國民黨 (KMT, Kuomintang)
- Chief Editor: 中華民國各界紀念國父百年誕辰籌備委員會
- Technical support: Numbers Protocol
- Sponsored by: 中國國民黨黨史館

## License

This is an educational project for demonstration purposes only. All rights to the original design and content belong to their respective owners.
