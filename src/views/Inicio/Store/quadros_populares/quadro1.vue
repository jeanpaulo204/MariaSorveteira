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
        src="https://vendamodaonline.com.br/wp-content/uploads/2018/09/Instagram-para-sua-empresa-ou-neg%C3%B3cio-min-1024x576.jpg"
      ></v-img>
  
      <v-card-item>
        <v-card-title>INSTAGRAM</v-card-title>
  
    
       
      </v-card-item>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
   
  
       
        </v-row>
  
        <div class="mt-10">compartilho minhas criações saborosas e coloridas que vão deixar vocês com água na boca!

Não deixem de conferir meu perfil e me seguir para ficar por dentro de todas as novidades. Lá vocês vão encontrar muitas fotos lindas dos meus sorvetes e picolés, além de informações sobre onde encontrar minhas delícias. Espero ver vocês por lá em breve!"</div>
      </v-card-text>
  
      <v-divider class="mx-4 mb-1"></v-divider>

  
      <v-card-actions>
        <v-btn
        href="https://www.instagram.com/maria.sorveteira/"
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
  