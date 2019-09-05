<template>
  <div id="app">
    <Cards />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import Cards from './components/Cards.vue'

export default {
  name: 'app',
  components: {
    Cards
  }
}
</script>