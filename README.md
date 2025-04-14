# Sunflower Movement 10th Anniversary Image Archive

This is a static website clone of the [Sunflower318 Numbers Protocol site](https://sunflower318.numbersprotocol.io/), commemorating the 10th anniversary of Taiwan's Sunflower Movement. The site includes a landing page and a photo gallery with filtering capabilities.

## Features

- Responsive design for all device sizes
- Landing page with rotating background images
- "Learn more" modal with historical context
- Photo gallery with tag-based filtering
- Detailed photo view with metadata
- Mobile-friendly navigation

## Project Structure

```
sunflower-archive/
├── index.html              # Landing page
├── gallery.html           # Photo gallery page
├── styles.css             # Main stylesheet
├── gallery.css           # Gallery-specific styles
├── main.js               # Main JavaScript for landing page
├── gallery.js            # Gallery JavaScript functionality
├── images/               # Image assets
│   ├── bg1.jpg           # Background rotation images
│   ├── bg2.jpg
│   ├── bg3.jpg
│   ├── bg4.jpg
│   ├── numbers-logo.png  # Partner logos
│   └── philosophy-photography-logo.png
└── images/photos/        # Gallery photo content
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

## Setup Instructions

### Prerequisites

- Git installed on your computer
- A GitHub account
- Basic knowledge of HTML, CSS, and JavaScript (for modifications)
- Node.js and npm installed on your computer

### Local Development

1. Clone this repository:
   ```
   git clone https://github.com/your-username/sunflower-archive.git
   cd sunflower-archive
   ```

2. Install the `gh-pages` package globally:
   ```
   npm install -g gh-pages
   ```

3. Open `index.html` in your browser to view the site locally.

4. Make any desired changes to the HTML, CSS, or JavaScript files.

### Hosting on GitHub Pages

1. Build the project:
   ```
   npm run build
   ```

2. Push your repository to GitHub:
   ```
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. Go to your repository on GitHub and navigate to Settings > Pages.

4. Under "Source", select the branch you want to deploy (usually "main") and click "Save".

5. GitHub will provide you with a URL where your site is published (usually in the format `https://your-username.github.io/sunflower-archive/`).

## Customization

### Adding Real Photos

Replace the placeholder images in the `images/photos/` directory with actual photos from the Sunflower Movement. Update the photo metadata in the `gallery.js` file to match your new images.

### Changing Background Images

Replace the background images (`bg1.jpg`, `bg2.jpg`, etc.) in the `images/` directory with your own images. Make sure they are high-quality and have good contrast for readability of the text overlay.

### Adding More Photos

To add more photos to the gallery, simply add new entries to the `photos` array in `gallery.js` following the existing pattern.

## Credits

This project is a clone of the original [Sunflower318 Numbers Protocol site](https://sunflower318.numbersprotocol.io/).

Original site credits:
- Image project curated by: 哲攝 (Philosophy Photography)
- Collaborating photographers: 張良一, 吳逸驊, 黃彥傑, 鐘聖雄, 余志偉
- Technical support: Numbers Protocol
- Sponsored by: Google nDX Taiwan News Digital Innovation Project

## License

This is an educational project for demonstration purposes only. All rights to the original design and content belong to their respective owners.
