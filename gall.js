document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.getElementById('image-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const closeBtn = document.getElementById('close-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');

    let currentImageIndex = 0;
    let filteredImages = []; // Stores images currently displayed in the grid

    // Array of image data
    
    const allImages = [
       
        { src: 'images/green mount.jpg', title: 'Mountain', category: 'nature' },
        { src: 'images/addis-ababa-1.jpg', title: 'Addis Ababa', category: 'city' },
        { src: 'images/Forest_web.jpg', title: 'Forest', category: 'nature' },
        { src: 'images/puppy-1.jpg', title: 'Cute Puppy', category: 'animals' },
        { src: 'images/addis-ababa-2.jpg', title: 'Addis Ababa', category: 'city' },
        { src: 'images/beauty-cat.jpg', title: 'Cat', category: 'animals' },
        { src: 'images/everest-peak.jpg', title: 'Mountain', category: 'nature' },
        { src: 'images/cat-2.jpg', title: 'Cat', category: 'animals' },
        
      
       
    ];

    // Function to display images in the grid
    function displayImages(imagesToDisplay) {
        imageGrid.innerHTML = ''; // Clear current images
        filteredImages = imagesToDisplay; // Update the global filteredImages array

        imagesToDisplay.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.dataset.index = index; // Store original index for lightbox

            galleryItem.innerHTML = `
                <img src="${image.src}" alt="${image.title}">
                <div class="overlay">
                    <span class="item-title">${image.title}</span>
                    <span class="item-category">(${image.category})</span>
                </div>
            `;
            imageGrid.appendChild(galleryItem);
        });
    }

    // Function to open the lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        const image = filteredImages[currentImageIndex];

        lightboxImg.src = image.src;
        lightboxImg.alt = image.title;
        lightboxCaption.textContent = image.title;
        updateLightboxCounter();
        lightbox.classList.add('active'); // Show the lightbox
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.classList.remove('active'); // Hide the lightbox
    }

    // Function to show next image in lightbox
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
        openLightbox(currentImageIndex);
    }

    // Function to show previous image in lightbox
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
        openLightbox(currentImageIndex);
    }

    // Function to update the image counter in lightbox
    function updateLightboxCounter() {
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${filteredImages.length}`;
    }

    // Event listener for opening lightbox (using event delegation)
    imageGrid.addEventListener('click', (e) => {
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const index = parseInt(galleryItem.dataset.index);
            openLightbox(index);
        }
    });

    // Event listeners for lightbox navigation
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    closeBtn.addEventListener('click', closeLightbox);

    // Close lightbox on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });

    // Event listeners for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const filter = button.dataset.filter;
            let imagesToFilter = [];

            if (filter === 'all') {
                imagesToFilter = allImages;
            } else {
                imagesToFilter = allImages.filter(image => image.category === filter);
            }
            displayImages(imagesToFilter);
        });
    });

    // Initial display of all images
    displayImages(allImages);
});
