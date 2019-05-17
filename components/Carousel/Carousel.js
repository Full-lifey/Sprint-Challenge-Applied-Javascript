class Carousel {
    constructor(item){
        this.item = item
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.images = document.querySelectorAll('.carousel img')
        this.currentIndex = 0
        this.leftButton.addEventListener('click', () => this.scrollLeft())
        this.rightButton.addEventListener('click', () => this.scrollRight())
        this.images[this.currentIndex].style.display = 'block'
        
    }
    scrollLeft(){
        this.images[this.currentIndex].style.display = 'none'
        if (this.currentIndex === 0){this.currentIndex = 3}
        else {
            this.currentIndex -= 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }

    scrollRight(){
        this.images[this.currentIndex].style.display = 'none'
        if (this.images.length-1 === this.currentIndex){this.currentIndex = 0}
        else {
            this.currentIndex += 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }
}

const carousel = document.querySelector('.carousel');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

// carouselImages.forEach(image => new Carousel(image))
const carouselInstance = new Carousel(carousel)