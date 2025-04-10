document.addEventListener("DOMContentLoaded", () => {
    animateValue("years", 0, 20, 2000);       
    animateValue("retention", 0, 95, 2000, "%"); 
    animateValue("overs", 0, 50, 2000);       
    animateLakh("lakh", 0, 100000, 2000); // Special function for Lakh+
});

function animateValue(id, start, end, duration, suffix = "") {
    let obj = document.getElementById(id);
    let range = end - start;
    let startTime = performance.now();

    function updateCounter(time) {
        let elapsed = time - startTime;
        let progress = Math.min(elapsed / duration, 1);
        let value = Math.floor(start + range * progress);
        obj.innerText = value.toLocaleString() + suffix;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// Special animation for "Lakh" without decimals
function animateLakh(id, start, end, duration) {
    let obj = document.getElementById(id);
    let startTime = performance.now();

    function updateCounter(time) {
        let elapsed = time - startTime;
        let progress = Math.min(elapsed / duration, 1);
        let value = Math.floor(start + (end - start) * progress);
        obj.innerText = Math.floor(value / 100000) + " Lakh+";

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}
