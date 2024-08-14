document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');

    async function startCamera() {
        try {
            // Request access to the video stream (camera)
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            // Set the video element's source to the stream
            video.srcObject = stream;
        } catch (error) {
            console.error('Error accessing the camera:', error);
        }
    }

    startCamera();
});