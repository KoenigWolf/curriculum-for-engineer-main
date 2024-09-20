// アコーディオンメニューの動作
document.addEventListener('DOMContentLoaded', () => {
    const acc = document.getElementsByClassName('accordion');
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            // Toggle active class
            this.classList.toggle('active');

            // Toggle panel display
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    // 検索機能の動作
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = this.value.toLowerCase();
            const items = document.querySelectorAll('#curriculum-list .curriculum-item');
            items.forEach(item => {
                const title = item.querySelector('.accordion').textContent.toLowerCase();
                const description = item.querySelector('.curriculum-description').textContent.toLowerCase();
                if (title.includes(filter) || description.includes(filter)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});
