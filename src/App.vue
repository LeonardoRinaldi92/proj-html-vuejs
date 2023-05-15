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
                if (store.posizioneCard == 1) {
                  document.getElementById('laneGreen').style.right = "68%" 
                } else if (store.posizioneCard == 2) {
                  document.getElementById('laneGreen').style.right = "50%" 
                } else if (store.posizioneCard == 3) {
                  document.getElementById('laneGreen').style.right = "33%" 
                } else {
                  document.getElementById('laneGreen').style.right = "0"
                }

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
    <div class="bottomFooter">
      <div  class="m-auto d-flex justify-content-between align-items-center" style="width: 60%;">
        <span>
          Enjoy the low price.We are tracking any intention of puracy.
        </span>
        <span>
          &#64;2023 NEXGEN is Proudly Powered by 
          <span class="code">
            Codings
          </span>
        </span>

      </div>

    </div>
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
  .bottomFooter {
    background-color: black;
    width: 100%;
    .m-auto{
      height: 100px;
      span {
        color: $grey;
        .code {
          color: $blue;
        }
      }
    } 
  }


</style>

