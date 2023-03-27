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
        src="https://sociedadeinteramericanadehipnose.com/wp-content/uploads/2018/05/WhatsApp-icon.png"
      ></v-img>
      <v-card-item>
        <v-card-title>WHATSAPP</v-card-title>
  
    
       
      </v-card-item>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
   
  
       
        </v-row>
  
        <div class="mt-10">   Se vocês querem experimentar os meus produtos ou têm alguma pergunta sobre eles, basta me enviar uma mensagem no WhatsApp!

Responderei a todas as suas perguntas em apenas alguns minutos! Então, não hesite em entrar em contato comigo se precisar de alguma ajuda ou quiser saber mais sobre o meu trabalho.

Mal posso esperar para conversar com vocês e compartilhar minha paixão pelos sorvetes e picolés artesanais! Até breve!"</div>
      </v-card-text>
  
      <v-divider class="mx-4 mb-1"></v-divider>

  
      <v-card-actions>
        <v-btn
        href="https://api.whatsapp.com/send?phone=5547999998932&text=WhatsApp"
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
  