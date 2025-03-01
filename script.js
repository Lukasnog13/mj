document.addEventListener('DOMContentLoaded', function() {
  // Tab Navigation
  const tabButtons = document.querySelectorAll('.nav-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  function setActiveTab(tabId) {
    // Hide all tabs
    tabContents.forEach(tab => {
      tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Show the selected tab
    document.getElementById(tabId).classList.add('active');
    
    // Add active class to the clicked button
    document.getElementById(tabId.replace('-tab', '-btn')).classList.add('active');
  }
  
  // Add click event to tab buttons
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.id.replace('-btn', '-tab');
      setActiveTab(tabId);
    });
  });
  
  // Photo Gallery
  const photos = [
    {
      url: "badtour.jpg",
      caption: "Michael Jackson se apresentando no palco durante a Bad World Tour, 1988."
    },
    {
      url: "moonwalk.jpg",
      caption: "O icônico moonwalk de Michael Jackson durante o especial Motown 25, 1983."
    },
    {
      url: "glove.jpg",
      caption: "Michael Jackson com sua famosa luva brilhante, era Thriller."
    },
    {
      url: "dangerous.jpg",
      caption: "Michael Jackson durante o Dangerous World Tour, 1992"
    },
    {
      url: "humanitarian.jpg",
      caption: "O trabalho humanitário de Michael Jackson com crianças ao redor do mundo."
    }
  ];
  
  let currentPhotoIndex = 0;
  const mainPhoto = document.getElementById('main-photo');
  const photoCaption = document.getElementById('photo-caption');
  const prevPhotoBtn = document.getElementById('prev-photo');
  const nextPhotoBtn = document.getElementById('next-photo');
  const thumbnailsContainer = document.getElementById('thumbnails-container');
  
  // Initialize gallery
  function initGallery() {
    // Set initial main photo
    updateMainPhoto();
    
    // Create thumbnails
    photos.forEach((photo, index) => {
      const thumbnail = document.createElement('div');
      thumbnail.className = `thumbnail ${index === currentPhotoIndex ? 'active' : ''}`;
      thumbnail.dataset.index = index;
      
      const img = document.createElement('img');
      img.src = photo.url;
      img.alt = `Thumbnail ${index + 1}`;
      img.className = 'thumbnail-img';
      
      thumbnail.appendChild(img);
      thumbnailsContainer.appendChild(thumbnail);
      
      // Add click event to thumbnail
      thumbnail.addEventListener('click', function() {
        currentPhotoIndex = parseInt(this.dataset.index);
        updateMainPhoto();
        updateThumbnails();
      });
    });
    
    // Add click events to navigation buttons
    prevPhotoBtn.addEventListener('click', prevPhoto);
    nextPhotoBtn.addEventListener('click', nextPhoto);
  }
  
  function updateMainPhoto() {
    mainPhoto.src = photos[currentPhotoIndex].url;
    mainPhoto.alt = photos[currentPhotoIndex].caption;
    photoCaption.textContent = photos[currentPhotoIndex].caption;
  }
  
  function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
      if (index === currentPhotoIndex) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }
  
  function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateMainPhoto();
    updateThumbnails();
  }
  
  function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updateMainPhoto();
    updateThumbnails();
  }
  
  // Videos
  const videos = [
    {
      id: "sOnqjkJTMaA",
      title: "Michael Jackson - Thriller (Official Video)",
      thumbnail: "https://img.youtube.com/vi/sOnqjkJTMaA/maxresdefault.jpg"
    },
    {
      id: "Zi_XLOBDo_Y",
      title: "Michael Jackson - Billie Jean (Official Video)",
      thumbnail: "https://img.youtube.com/vi/Zi_XLOBDo_Y/maxresdefault.jpg"
    },
    {
      id: "QNJL6nfu__Q",
      title: "Michael Jackson - They Don't Care About Us (Official Video)",
      thumbnail: "https://img.youtube.com/vi/QNJL6nfu__Q/maxresdefault.jpg"
    },
    {
      id: "oRdxUFDoQe0",
      title: "Michael Jackson - Beat It (Official Video)",
      thumbnail: "https://img.youtube.com/vi/oRdxUFDoQe0/maxresdefault.jpg"
    }
  ];
  
  const videosGrid = document.getElementById('videos-grid');
  
  // Initialize videos
  function initVideos() {
    videos.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card';
      
      videoCard.innerHTML = `
        <div class="video-thumbnail-container">
          <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
          <div class="video-play-button">
            <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener noreferrer" class="play-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </a>
          </div>
        </div>
        <div class="video-info">
          <h3 class="video-title">${video.title}</h3>
        </div>
      `;
      
      videosGrid.appendChild(videoCard);
    });
  }
  
  // Initialize everything
  initGallery();
  initVideos();
});