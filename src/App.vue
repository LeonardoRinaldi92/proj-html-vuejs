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
  import logoMini from './components/logoMini.vue';

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
    logoMini,
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
                this.navPosition()
                

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
                this.navPosition()
                

                document.getElementById(this.arrayPoistion[store.posizione]).scrollIntoView({behavior: 'smooth'});
              }              
            }
          } else {
            if(store.posizione > 0){
              store.posizione --
              this.navPosition()
              

              document.getElementById(this.arrayPoistion[store.posizione]).scrollIntoView({behavior: 'smooth'});
            }
          }
          // console.log('ciao')    
        },

        navPosition(){
          if (store.posizione > 0){
            if (store.posizione == 7){
            document.getElementById('navbarra').style.top = "80vh"
            } else {
              document.getElementById('navbarra').style.top = "20px"
            }
          }else if (store.posizione == 0){
            document.getElementById('navbarra').style.top = "80px"
          }
        },

        addCardNumber(){
            if(store.posizioneCard < 4){
              console.log('vado')
              store.posizioneCard ++
              if (store.posizioneCard == 1) {
                    document.getElementById('laneGreen').style.right = "66%" 
                  } else if (store.posizioneCard == 2) {
                    document.getElementById('laneGreen').style.right = "50%" 
                  } else if (store.posizioneCard == 3) {
                    document.getElementById('laneGreen').style.right = "33%" 
                  } else {
                    document.getElementById('laneGreen').style.right = "0"
                  }
              } else {

                this.bloccaTutto()
              }
            },
          automaticCard(){
            setInterval(this.addCardNumber, 1000);
          },
          bloccaTutto(){
            clearInterval(this.automaticCard)
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
    <div id="navbarra">
      <nav class="d-flex w-100 justify-content-between align-items-center flex-wrap">
        <div class="col-3">
            <logoMini/>
        </div>
        <div class="col-9 d-flex flex-wrap justify-content-between align-items-center">
            <a href="/" class="c-pointer prevent-select" :class="(store.posizione == 0)? 'active':''"><b>Home</b></a>
            <a href="#about" @click="store.posizione = 1;navPosition()" class=" c-pointer prevent-select" :class="(store.posizione == 1)? 'active':''"><b>about</b></a>
            <a href="#mainService"  @click="store.posizione = 2;navPosition()" class=" c-pointer prevent-select" :class="(store.posizione == 2)? 'active':''"><b>services</b></a>
            <a href="#procedure"  @click="store.posizione = 3;navPosition();automaticCard()" class=" c-pointer prevent-select" :class="(store.posizione == 3)? 'active':''"><b>process</b></a>
            <a href="#testimonials"  @click="store.posizione = 5;navPosition()" class=" c-pointer prevent-select" :class="(store.posizione == 5)? 'active':''"><b>testimonials</b></a>
            <i class="fa-solid fa-user  c-pointer"></i>
            <a href="#getinTouch" @click="store.posizione = 6;navPosition()" class="button c-pointer prevent-select"><b>get in touch</b></a>
        </div>
      </nav>
    </div>
    <section class="jumbo w-100">
      <jumboTron @cambioposizione="navPosition()" />
    </section>
    <transportType/>
    <mainService/>
    <Logistical/>
    <results/>
    <customersTestimonials/>
    <getINtouch/>
  </main>
  <footer @wheel.prevent="letSGo">
    <footerComp @cambioposizione2="navPosition()" />
    <div class="bottomFooter prevent-select">
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

  *{
    position: relative;
  }

  .active {
    color: $blue!important;
    text-shadow: -1px 0 rgb(0, 0, 0), 0 1px black, 1px 0 black, 0 -1px black!important;
  }

  #navbarra{
    position: fixed;
    top: 80px;
    right: 20%;
    left:20%;
    z-index: 99999999999999999999999;
    text-transform: uppercase;
    a {
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
      text-shadow: -1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey;
      &:hover:not(.button) {
        color: $grey;
        text-shadow: -1px 0 rgb(0, 0, 0), 0 1px black, 1px 0 black, 0 -1px black;
      }
    }

    i {
      color: white;
      text-shadow: -1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey;
      &:hover {
        color: $grey;
        text-shadow: -1px 0 rgb(0, 0, 0), 0 1px black, 1px 0 black, 0 -1px black;
      }
    }

  }

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

