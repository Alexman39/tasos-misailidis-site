document.addEventListener('DOMContentLoaded', function () {
    const sortSelect = document.getElementById('sort-by');
    const grid = document.getElementById('programs-grid');

    if (!sortSelect || !grid) return;

    // Direct children of grid are <a class="program-link">
    const originalItems = Array.from(grid.children);

    sortSelect.addEventListener('change', function () {
        const value = sortSelect.value;

        // Reset to original order
        if (value === 'default') {
            grid.innerHTML = '';
            originalItems.forEach(item => grid.appendChild(item));
            return;
        }

        const items = Array.from(grid.children);

        if (value === 'price-asc' || value === 'price-desc') {
            items.sort((a, b) => {
                const priceA = parseFloat(a.dataset.price);
                const priceB = parseFloat(b.dataset.price);
                return value === 'price-asc' ? priceA - priceB : priceB - priceA;
            });
        } else if (value === 'level') {
            items.sort((a, b) => {
                const levelA = (a.dataset.level || '').toLowerCase();
                const levelB = (b.dataset.level || '').toLowerCase();
                return levelA.localeCompare(levelB);
            });
        }

        grid.innerHTML = '';
        items.forEach(item => grid.appendChild(item));
    });
});
