<script>
    export default {
        name : 'getINtouch',
        data(){
            return {
                seeMap : false
            }
        },
        methods : {
            mostraMapppa() {
                if (!this.seeMap) {
                    this.seeMap = true
                } else {
                    this.seeMap = false
                }

            }
        }
    }
</script>

<template>
    <div class="box95 position-relative" id="getinTouch">
        <div class="m-auto" style="width: 70%;">
            <div class="row" style="padding-right: 50px;">
                <div class="col-8">
                    <span class="miniTitle prevent-select">
                        <b>
                            send a message
                        </b>
                    </span>
                    <div class="BigTitle my-3 prevent-select">
                        <span>
                            <b>
                                Get in 
                            </b>
                        </span>
                        <span class="colorato ms-2 prevent-select">
                            <b>
                                Touch
                            </b>
                        </span>
                    </div>
                    <p class="prevent-select">
                        We will respond to your message soon as possible.
                    </p>
                    <div>
                        <div class="row gx-3 mt-5 prevent-select">
                            <div class="col-xl-6 col-12">
                                <input type="text" placeholder="name" >
                            </div>
                            <div class="col-xl-6 col-12">
                                <input type="email" placeholder="email">
                            </div>
                            <div class="col-xl-6 col-12 mt-3">
                                <input type="tel" placeholder="phone">
                            </div>
                            <div class="col-xl-6  col-12 mt-2">
                                <select name="cosavuoi" id="tipodiAiuto" class="mt-2" > 
                                    <option value="info">more info</option>
                                    <option value="assistance">assistance</option>
                                    <option value="tracker">tracker ID</option>
                                </select>
                            </div>
                            <div class="col-12 mt-3" >
                                <textarea name="" id="" cols="98" rows="6" placeholder="Message"></textarea>
                            </div>
                            <div class="col-2 mt-3">
                                <button class="button prevent-select" type="submit">
                                    send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 ">
                    <span class="prevent-select" >
                        <b>
                            Example Inc.
                        </b>
                    </span>
                    <p v-if="!this.seeMap" class="prevent-select" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p v-if="!this.seeMap" class="prevent-select" >
                        Ad modi, rem, mollitia molestias laudantium vero ab dolorem iste est iusto.
                    </p>
                    <div class="d-flex align-items-center c-def mt-5">
                        <div>
                            <i class="fa-solid fa-phone round-icon"></i>
                        </div>
                        <div>
                            <p class="c-pointer p-0 m-0 ms-3">
                                +1 (305) 1234-5678
                            </p>
                        </div>
                    </div>
                    <div v-if="!this.seeMap" class="d-flex align-items-center mt-4">
                        <div>
                            <a href="mailto:hello@example.com?subject = ContactUs = Message" style="text-decoration: none;">
                                <i class="fa-solid fa-envelope round-icon"></i>
                            </a>
                        </div>
                        <div class="ms-3">
                            <p class=" p-0 m-0 ms-1">
                                <a href="mailto:hello@example.com?subject = ContactUs = Message">hello@example.com</a> 
                            </p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mt-4">
                        <div>
                            <i class="fa-solid fa-location-dot round-icon"></i>
                        </div>
                        <div class="ms-3">
                            <p class=" p-0 m-0 ms-2">
                                Main Avenue, 987
                            </p>
                        </div>
                    </div>
                    <button v-if="!this.seeMap" class="reverseButton prevent-select" @click="mostraMapppa()">
                        view map
                    </button>
                    <button v-else class="reverseButton prevent-select" @click="mostraMapppa()">
                        hide map
                    </button>
                    <div v-if="this.seeMap" id="maps" class="mt-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387154.2363648882!2d-74.62154388427736!3d40.70387114129757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1662815997%3A0x77d029be67cfa72c!2sNexGen%20Networks%20Corporation!5e0!3m2!1sit!2sit!4v1684217134723!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>

<style lang="scss" scoped>
     @import "../style/partials/_variables";
     .box95 {
        background-color: white;
        padding: 100px;
     }

     .col-8 {
        p {
            color: $grey;
            font-size: 1.2rem;
        }
     }

     textarea {
            padding-top: 15px;
        }
     input,
     select {
        height: 60px;

     }

     input,
     select,
     textarea {
        width: 100%;
        border: none;
        background-color: $lightGrey;
        border-radius: 5px;
        font-size: 1.5rem;
        padding-left: 15px;
        color: $grey;
        text-transform: capitalize;
        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: $grey;
          opacity: 1;
          font-size: 1.5rem;
          text-transform: capitalize; /* Firefox */
        }

        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: $grey;
          font-size: 1.2rem;
          text-transform: capitalize;
        }

        &::-ms-input-placeholder { /* Microsoft Edge */
          color: $grey;
          font-size: 1.2rem;
          text-transform: capitalize;
        }




        option {
            color: $grey;
          font-size: 1.2rem;
          text-transform: capitalize;

        }

        
     }
     .button {
            color: white;
            text-transform: uppercase;
            border: none;
            height: 50px;
            width: 120px;
            font-size: 1.2rem;
            margin-top: 20px;
        }
    .reverseButton {
        margin-top: 50px;
        text-transform: uppercase;
        color: $blue;
        height: 50px;
        width: 180px;
        font-size: 1.2rem;
    }
    .col-4 {
        padding-left: 60px;
        span {
            font-size: 2rem;
        }
        
        p{
            font-size: 1.3rem;
            margin-top: 30px;
            color: $grey;
            display: inline-block;
  
        }
        .round-icon {
                font-size: 1.4rem;
                color: $blue;
                background-color: $sky;
                width: 2.8rem;
                aspect-ratio: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }

        .d-flex {
            p {
                font-size: 1.5rem;
                color: $blue;
                line-height: 2rem;
                a
                {
                    text-decoration: none;
                    color: $blue;
                }
            }
        }
    }


</style>