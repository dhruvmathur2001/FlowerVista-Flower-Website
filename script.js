
    const reviewBox = document.querySelector('.review-box');
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');

    leftButton.addEventListener('click', () => {
        reviewBox.scrollBy({
            left: -reviewBox.clientWidth,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', () => {
        reviewBox.scrollBy({
            left: reviewBox.clientWidth,
            behavior: 'smooth'
        });
    });

