let visitorCount = 0; 
    document.getElementById("contactForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        
        visitorCount++;
        document.getElementById("visitorCount").innerText = visitorCount;

        
        document.getElementById("contactForm").reset();

        alert("Message sent successfully!");
    });