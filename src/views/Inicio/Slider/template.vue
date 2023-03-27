<template>
    <v-carousel hide-delimiters cycle show-arrows="hover">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </template>
  <script>
    export default {
      data () {
        return {
          items: [
            {
             src: 'https://i.pinimg.com/originals/0e/41/4d/0e414d9669405c7f71b210e0fcd46371.png',
            },
            {
              src: 'https://i.pinimg.com/originals/e6/05/2c/e6052c2df95d52c3c19bd90b6b8d20fa.jpg',
            },
            {
              src: 'https://i.pinimg.com/originals/67/94/22/6794221b22fc79ae1ed86b331f6bb34f.jpg',
            },
  
          ],
        }
      },
    }
  </script>
  