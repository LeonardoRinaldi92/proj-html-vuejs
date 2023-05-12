<script >
  import topHeader from './components/topHeader.vue';
  export default {
    name: 'App',
    components: {
      topHeader,
    }
  }

</script>

<template>
  <header class="container-fluid">
    <div class="w-75 m-auto py-3">  
      <topHeader/>
    </div>
  </header>
</template>

<style lang="scss">
  @use './style/main.scss';
  @import "./style/partials/_variables";
  header{
    background-color: $darkblue;
  }

</style>

