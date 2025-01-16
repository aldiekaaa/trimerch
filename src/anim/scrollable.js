// scrollable.js
export function initializeScrollable() {
    const scrollable = document.getElementById("scrollable");

    if (!scrollable) return;

    let isDragging = false;
    let startX;
    let scrollLeft;

    scrollable.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - scrollable.offsetLeft;
        scrollLeft = scrollable.scrollLeft;
    });

    scrollable.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    scrollable.addEventListener("mouseup", () => {
        isDragging = false;
    });

    scrollable.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollable.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        scrollable.scrollLeft = scrollLeft - walk;
    });
}