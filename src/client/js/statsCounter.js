// Main object that hold data for statistics section
const statistics = {
    users: 12000,
    countries: 70,
    trips: 40000,
    reviews: 10000
}

const statsSection = document.querySelector('.statistics');

// Function that handle the animation of the statistics
function statsCounter(statsId, targetValue) {
    const statElement = document.getElementById(statsId);
    let currentValue = parseInt(statElement.textContent);
    const increment = targetValue - currentValue;
    const incrementInterval = setInterval(() => {
        currentValue += (increment / 100);
        statElement.textContent = Math.round(currentValue);
        if (currentValue >= targetValue) {
            clearInterval(incrementInterval);
        }
    }, 100);
}

/* Using observer to ensure that the animation of the statistics
    will only start when the viewport of window is at 
    statistics section so that the user can figure it out
*/
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            Array.from(statsSection.children).forEach(item => {
                item.classList.add('visible');
            });
        }
    });
    statsCounter('stat-users', statistics.users);
    statsCounter('stat-countries', statistics.countries);
    statsCounter('stat-trips', statistics.trips);
    statsCounter('stat-reviews', statistics.reviews);
    observer.disconnect();
},{
    threshold: 0.2
});

observer.observe(statsSection);
