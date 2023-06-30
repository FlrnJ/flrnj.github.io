function startConfetti() {
    setTimeout(function () {
      confettiExplosion();
      setInterval(confettiExplosion, 30000);
    }, 1000); // Delay initial explosion by 1 second
  }
  
  function confettiExplosion() {
    const confettiContainer = document.getElementById("confetti-container");
    confettiContainer.innerHTML = ""; // Clear previous confetti, if any
  
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#FFFF00"]; // Add more colors if desired
    const confettiCount = 100; // Number of confetti particles
  
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.animationDelay = Math.random() * 2 + "s";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      confettiContainer.appendChild(confetti);
    }
  }

// Check if the device supports motion events
if (window.DeviceMotionEvent) {
  // Set the threshold for detecting motion
  const motionThreshold = 10;

  // Event listener for device motion
  window.addEventListener("devicemotion", handleDeviceMotion, false);

  // Function to handle device motion events
  function handleDeviceMotion(event) {
    // Get the acceleration values
    const accelerationX = event.accelerationIncludingGravity.x;
    const accelerationY = event.accelerationIncludingGravity.y;
    const accelerationZ = event.accelerationIncludingGravity.z;

    // Calculate the magnitude of acceleration
    const accelerationMagnitude = Math.sqrt(
      Math.pow(accelerationX, 2) +
      Math.pow(accelerationY, 2) +
      Math.pow(accelerationZ, 2)
    );

    // Check if the acceleration magnitude exceeds the threshold
    if (accelerationMagnitude > motionThreshold) {
      // Perform your desired action or animation here
      // For example, trigger confetti explosion or change background color
    }
  }
}
