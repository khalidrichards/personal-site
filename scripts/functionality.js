function toggleProject(element) {
    const details = element.querySelector('.project-details');
    const isVisible = details.style.display === 'block';
    details.style.display = isVisible ? 'none' : 'block';
}

/** For Smooth Scrolling **/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});