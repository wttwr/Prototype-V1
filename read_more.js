document.getElementById('interactive-feature').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        this.textContent = "Read less..."; // change the text to "Read less..."
    } else {
        moreContent.style.display = "none";
        this.textContent = "Read more...";
    }
});
