<script >
  import topHeader from './components/topHeader.vue';
  import jumboTron from './components/jumboTron.vue';
  import transportType from './components/transportType.vue';
  import mainService from './components/mainService.vue';
  import Logistical from './components/logistical.vue';
  import results from './components/results.vue';
  import customersTestimonials from './components/customersTestimonials.vue';
  import getINtouch from './components/getINtouch.vue';
  import footerComp from './components/footerComp.vue';

  export default {
    name: 'App',
    components: {
    topHeader,
    jumboTron,
    transportType,
    mainService,
    Logistical,
    results,
    customersTestimonials,
    getINtouch,
    footerComp,
    },
    data() {
      return {
        posizione : 0,
        arrayPoistion: [
          'home',
          'about',
          'mainService',
          'procedure',
          'results',
          'testimonials',
          'getinTouch',
          'footerSotto'
        ]
      }
    },
    
      methods: {
        letSGo(e){
          if (e.deltaY > 0) {
            console.log(this.arrayPoistion.length)
            if (this.posizione < this.arrayPoistion.length-1)  {
            console.log(this.arrayPoistion[this.posizione])
            this.posizione ++
            document.getElementById(this.arrayPoistion[this.posizione]).scrollIntoView({behavior: 'smooth'});
            }
          } else {
            if(this.posizione > 0){
              this.posizione --
              document.getElementById(this.arrayPoistion[this.posizione]).scrollIntoView({behavior: 'smooth'});
            }
          }
          // console.log('ciao')    
        }
      },
    }

</script>

<template>
  <header class="container-fluid">
    <div class="m-auto py-3" style="width: 60%;">  
      <topHeader/>
    </div>
  </header>
  <main @wheel.prevent="letSGo($event)">
    <section class="jumbo w-100">
      <jumboTron/>
    </section>
    <transportType/>
    <mainService/>
    <Logistical/>
    <results/>
    <customersTestimonials/>
    <getINtouch/>
  </main>
  <footer @wheel.prevent="letSGo">
    <footerComp/>
  </footer>
</template>

<style lang="scss">
  @use './style/main.scss';
  @import "./style/partials/_variables";
  header{
    background-color: $darkblue;
  }
  .jumbo {
    height: 100vh;
    background-image: url(images/bg-9.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }


</style>

