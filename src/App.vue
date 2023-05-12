<script >
  import topHeader from './components/topHeader.vue';
  import jumboTron from './components/jumboTron.vue';
  export default {
    name: 'App',
    components: {
      topHeader,
      jumboTron,
    }
  }

</script>

<template>
  <header class="container-fluid">
    <div class="m-auto py-3" style="width: 60%;">  
      <topHeader/>
    </div>
  </header>
  <main>
    <section class="jumbo w-100">
      <jumboTron/>

    </section>

  </main>
</template>

<style lang="scss">
  @use './style/main.scss';
  @import "./style/partials/_variables";
  header{
    background-color: $darkblue;
  }
  .jumbo {
    height: 90vh;
    background-image: url(images/bg-9.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>

