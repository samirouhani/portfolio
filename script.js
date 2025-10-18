(function () {
    'use strict';

    const items = document.querySelectorAll('#experience li.experience');

    items.forEach((item) => {
        const panel = item.querySelector('.hidable_info');

        item.onclick = () => {
            const opening = !item.classList.contains('active');
            
            if (opening) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            } else {
                panel.style.maxHeight = '0px';
            }

            item.classList.toggle('active');
        };
    });
})();