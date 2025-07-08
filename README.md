# A Dynamic Image Gallery

This is a responsive and interactive image gallery built with HTML, CSS, and JavaScript. It allows users to browse a collection of images, filter them by category, and view them in a full-screen lightbox.

## Features

  * **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.
  * **Image Filtering:** Categorize and filter images (e.g., Nature, City, Animals).
  * **Lightbox View:** Click on any image to open a full-screen lightbox with navigation (next/previous) and a close button.
  * **Keyboard Navigation:** Navigate the lightbox using arrow keys (left/right) and close it with the Escape key.
  * **Dynamic Content Loading:** Images are loaded and displayed dynamically using JavaScript.

## Technologies Used

  * **HTML5:** Structure of the web page.
  * **CSS3:** Styling and responsive design.
  * **JavaScript (ES6+):** Interactive functionality, image loading, filtering, and lightbox logic.

## Setup and Usage

To run this project locally, follow these simple steps:

1.  **Clone the repository (or download the files):**
    ```bash
    git clone <https://github.com/ziall10/codealpha_task1.git>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd image-gallery
    ```
3.  **Open `gall.html` in your web browser.**

That's it\! The gallery will load, and you can start exploring the images.

## Project Structure

```
├── gall.html          # Main HTML file
├── gall.css            # Styles for the gallery
├── gall.js             # JavaScript for interactivity
└── images/             # Directory for image assets
    ├── green mount.jpg
    ├── addis-ababa-1.jpg
    ├── Forest_web.jpg
    ├── puppy-1.jpg
    ├── addis-ababa-2.jpg
    ├── beauty-cat.jpg
    ├── everest-peak.jpg
    └── cat-2.jpg
```

## Customization

  * **Adding/Removing Images:**
    Open `gall.js` and modify the `allImages` array. Each image object should have `src`, `title`, and `category` properties.
    ```javascript
    const allImages = [
        { src: 'images/your-image.jpg', title: 'Your Image Title', category: 'your-category' },
        // ... more images
    ];
    ```
  * **Adding/Modifying Categories:**
      * In `gall.html`, add or change the `data-filter` attribute on the filter buttons.
      * Ensure the `category` property in your `allImages` array (in `gall.js`) matches the `data-filter` values.
  * **Styling:**
    Modify `gall.css` to change the appearance of the gallery, buttons, lightbox, and more.

-----

