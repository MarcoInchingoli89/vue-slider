/* Descrizione:
Partendo dal markup della versione svolta in js plain (vedi allegato), rifare lo slider ma questa volta usando Vue. */

//Creiamo un oggetto con le immagini dei videogiochi e le loro descrizioni nell'options object di Vue JS

const { createApp } = Vue

createApp({
    data() {
        return {

            thumbActive: 0,
            activeSlide: 0,
            slides: [
                {
                    title: 'Marvel\'s Spiderman Miles Morale',
                    description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    image: 'img/01.webp'
                },

                {
                    title: 'Ratchet & Clank: Rift Apart',
                    description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    image: 'img/02.webp'
                },

                {
                    title: 'Fortnite',
                    description: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
                    image: 'img/03.webp'
                },

                {
                    title: 'Stray',
                    description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    image: 'img/04.webp'
                },

                {
                    title: 'Marvel\'s Avengers',
                    description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    image: 'img/05.webp'
                },
            ]
        }
    },

    methods: {
        nextSlide() {
            this.activeSlide++;
            if (this.activeSlide === this.slides.length) {
                this.activeSlide = 0;
            }
        },

        prevSlide() {
            this.activeSlide--;
            if (this.activeSlide < 0) {
                this.activeSlide = this.slides.length - 1;
            }
        },

        changeImage(index) {
            //console.log(index);
            this.activeSlide = index
          },

    }
}).mount('#app')

/* const slides = [
{
  image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
]; */