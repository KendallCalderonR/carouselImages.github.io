
        let slide = 0;

        function switchImage(direction) {
            const images = document.querySelector('.images');
            const totalImages = document.querySelectorAll('.images img').length;

            slide += direction;

            if (slide >= totalImages) {
                slide = 0;
            } else if (slide < 0) {
                slide = totalImages - 1;
            }

            const move = -slide * 600; 
            images.style.transform = `translateX(${move}px)`;
        }
 