<script >
  import { store } from './store';
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
        store,
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
            if (store.posizione < this.arrayPoistion.length-1)  {
              if (store.posizione == 3 && store.posizioneCard < 4){
                store.posizioneCard ++ 
              } else {
                console.log(this.arrayPoistion[store.posizione])
              store.posizione ++
              document.getElementById(this.arrayPoistion[store.posizione]).scrollIntoView({behavior: 'smooth'});
              }              
            }
          } else {
            if(store.posizione > 0){
              store.posizione --
              document.getElementById(this.arrayPoistion[store.posizione]).scrollIntoView({behavior: 'smooth'});
            }
          }
          // console.log('ciao')    
        }
      },
    }

</script>

<template>
  <header class="container-fluid" id="home">
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

