<template>
               <v-card
      elevation="10"
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        cover
        height="250"
        src="https://img.freepik.com/fotos-premium/logotipo-do-facebook-no-icone-do-botao-redondo-com-fundo-vazio-3d_272306-348.jpg"
      ></v-img>
  
      <v-card-item>
        <v-card-title>FACEBOOK</v-card-title>
  
    
       
      </v-card-item>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
   
  
       
        </v-row>
  
        <div class="mt-10">Lá na minha página vocês vão encontrar muitas fotos incríveis dos meus sorvetes e picolés, além de informações sobre onde encontrar meus produtos. 

Então, se vocês querem ficar por dentro das novidades e experimentar novos sabores, sigam a minha página do Facebook agora mesmo! Espero ver todos vocês por lá em breve!</div>
      </v-card-text>
  
      <v-divider class="mx-4 mb-1"></v-divider>

  
      <v-card-actions>
        <v-btn
        href="https://www.facebook.com/mariasorveteira/?locale=pt_BR"
          color="success"
          variant="text"
          @click="reserve"
        >
          Clique Aqui !
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  <script>
   export default {
    name: 'Quadros_Decorativos',
      data: () => ({
        loading: false,
        selection: 1,
      }),
  
      methods: {
        reserve () {
          this.loading = true
  
          setTimeout(() => (this.loading = false), 2000)
        },
      },
    }
  </script>
  