<template>
<v-container >
  <Slider/>
  <Store/>
</v-container>

</template>

<script >
import Slider from "../Inicio/Slider/template.vue"
import Store from "../Inicio/Store/template.vue"
export default {
  name: "Menu-Inicio",

  components: {
    Slider,
    Store
  },

};
</script>
