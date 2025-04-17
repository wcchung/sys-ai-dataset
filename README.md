# 孫中山逝世100週年 AI 人工智慧歷史資料集

This is a static website for the [Sun Yat-sen 100th Anniversary Memorial](https://kmt.studio/) project by KMT Studio and Capture. The site features a collection of historical documents, calligraphy, letters, and photos related to Dr. Sun Yat-sen, presented as an open AI training dataset with blockchain verification.

## Features

- Responsive design for all device sizes
- Landing page with video background
- "Learn more" modal with historical context
- Blockchain-verified gallery with Capture Eye integration
- Dynamic content loading from Numbers Protocol API
- Support for various file types including PDFs
- Mobile-friendly navigation

## Project Structure

```
sun-yat-sen-archive/
├── index.html              # Landing 
├── main.js                 # Main JavaScript for landing page
├── styles.css              # Main stylesheet
├── gallery.html            # Gallery page with Capture eye integration (desktop)
├── gallery-mobile.html     # Mobile-specific gallery page
├── gallery.js              # JavaScript for gallery pages
├── gallery-redirect.js     # Device detection for responsive gallery
├── gallery.css             # Gallery-specific styles
├── images/                 # Image assets
│   ├── Capture_logo.webp   # Partner logos
│   ├── kmtstudio-logotype-long.png
│   └── KMT banner.mp4      # Background video
└── sample_files/           # Sample content (not used in production)
    ├── 001.jpg
    ├── 005.jpg
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
   git clone https://github.com/your-username/sun-yat-sen-archive.git
   cd sun-yat-sen-archive
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

4. GitHub will provide you with a URL where your site is published (usually in the format `https://your-username.github.io/sun-yat-sen-archive/`).

## Customization

### API Integration

The gallery uses Numbers Protocol API to fetch verified assets. To use your own assets:

1. Create an account in any [Capture Product](https://captureapp.xyz/)
2. Upload your assets or taking picture using Capture solutions
3. Update the `ACCOUNT` constant in `gallery-capture.js` with your account email

### Changing Background Video

Replace the video file (`images/KMT banner.mp4`) with your own background video. Make sure it has good contrast for readability of the text overlay.

## Credits

- Collection curated by: 中國國民黨 (KMT, Kuomintang)
- Chief Editor: 中華民國各界紀念國父百年誕辰籌備委員會
- Technical support: Capture Team
- Sponsored by: 中國國民黨黨史館

*This project is a clone of the original [Sunflower318 Numbers Protocol site](https://sunflower318.numbersprotocol.io/).

## License

This is an educational project for demonstration purposes only. All rights to the original design and content belong to their respective owners.
