(function () {
    'use strict';

    //Click to expand sections:
    const experienceItems = document.querySelectorAll('#experience li.experience');
    const projectItems = document.querySelectorAll('.project');

    const showAndHide = (items) => {
        items.forEach((item) => {
        const panel = item.querySelector('.hidable_info');

        item.onclick = () => {
            const opening = !item.classList.contains('active');
            
            if (opening) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.style.filter = 'blur(0px)';
                panel.style.opacity = '1';
                
            } else {
                panel.style.maxHeight = '0px';
                panel.style.filter = 'blur(3px)';
                panel.style.opacity = '0';
            }

            item.classList.toggle('active');
            };
        });
    };

    showAndHide(experienceItems);
    showAndHide(projectItems);
    


    document.querySelectorAll(".copy").forEach(copyButton => {
        copyButton.addEventListener('click', () => {
            const targetElement = document.querySelector(copyButton.dataset.copy);
            const textToCopy = targetElement.textContent.replace(/\s+/g, " ").trim();

            navigator.clipboard.writeText(textToCopy).then(() => {
                const label = copyButton.querySelector(".copy_label");
                const originalText = label.textContent;
                const copyIcon = copyButton.querySelector(".copy_icon.copy");
                const copiedIcon = copyButton.querySelector(".copy_icon.check");
                
                copyButton.disabled = true;
                label.textContent = 'Copied to clipboard';
                copyIcon.style.display = "none";
                copiedIcon.style.display = "block";

                setTimeout(() => {
                    copyButton.disabled = false;
                    label.textContent = originalText;
                    copyIcon.style.display = "block";
                    copiedIcon.style.display = "none";
                }, 1500)

            });
        });
    });


    const hamburgerMenu = document.getElementById("hamburger_menu");
    const openedMenu = document.getElementsByClassName("menu")[0];

    if (hamburgerMenu && openedMenu) {
        hamburgerMenu.addEventListener('click', () => {
            openedMenu.classList.toggle('open');
        });

        openedMenu.addEventListener('click', () => {
            openedMenu.classList.toggle('open');
        });
    }


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry);
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => {
        observer.observe(element);
    });

})();