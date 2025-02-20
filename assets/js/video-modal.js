// JavaScript to handle video modal functionality
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function () {
        const videoUrl = this.getAttribute('data-video');
        const modal = document.getElementById('videoModal');
        const videoFrame = document.getElementById('videoFrame');
        
        // Set video URL and show modal
        videoFrame.src = videoUrl;
        modal.style.display = 'flex';
        modal.style.opacity = '1';
    });
});

// Close button functionality
document.querySelector('.close-btn').addEventListener('click', function () {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    // Hide modal and stop video
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        videoFrame.src = '';
    }, 500);
});

// Close modal when clicking outside the video
document.getElementById('videoModal').addEventListener('click', function (e) {
    if (e.target === this) {
        const videoFrame = document.getElementById('videoFrame');
        this.style.opacity = '0';
        setTimeout(() => {
            this.style.display = 'none';
            videoFrame.src = '';
        }, 500);
    }
});
