<script>    
import { store } from '../store';
export default {
    name: 'mainService',
    data() {
        return {
            store,
            numero : 3,
        }
    },
    methods: {
        elementOnScreen(n) {
            return store.services.slice(0, n)
        },
        cambiaNumero () {
            if (this.numero == 3) {
                this.numero = 6

            } else {
                this.numero = 3
            }
        }
    }
}
</script>
<template>
    <section id="mainService" class="box95 d-flex align-items-center justify-content-center">
        <div style="width: 60%; height: 70%">
            <span class="miniTitle prevent-select">
                <b>
                    road transport
                </b>
            </span>
            <div v-if="this.numero == 3" class="BigTitle my-3 prevent-select">
                <span style="color: white;" class="me-2">
                    <b>
                        Main
                    </b>
                </span>
                <span class="colorato" style="color:white">
                    <b>
                        Services
                    </b>
                </span>
            </div>
            <div class="row justify-content-end">
                <div v-if="this.numero == 3" class="col-9">
                    <p class="prevent-select">
                        <b>
                            Whit all of this expertise and capability come an unrivalled commitment serive. We woll work to undestand your needs in order to develop a productive, long-term partnership.
                        </b>
                    </p>
                </div>
                <div class="col-3 d-flex justify-content-end">
                    <span class="reverseButton c-pointer prevent-select" @click="cambiaNumero">
                        <span v-if="this.numero == 3">see all</span>
                        <span v-else>see less</span>
                    </span>
                </div>
            </div>
            <div class="row my-5 justify-content-between">
                <div v-for="(element, index) in elementOnScreen(this.numero)" :key="index" 
                class="col4 schedina rounded-3 mt-3 p-5">
                    <div class="row justify-content-between ">
                        <div class="round-icon col-6 ms-2">
                            <i :class="element.icon"></i>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <i class="fa-solid fa-arrow-right c-pointer"></i>
                        </div>
                    </div>
                    <div class="my-3 prevent-select">
                        <span>
                            <b>
                                {{ element.type }}
                            </b>    
                        </span>
                        <p class="my-3">
                            {{ element.desc }}
                        </p>
                    </div>
                </div>
            </div>         
        </div>
    </section>
</template>

<style lang="scss" scoped>
        @import "../style/partials/_variables";

        .box95 {
            padding: 100px;
        }
    section {
        background-color: $nero;
        p {
            font-size: 1.1rem;
            color: $grey;
        }
        .reverseButton {
            color: white;
            text-transform: uppercase;
            align-self: self-end;
        }

        
        .col4 {
                width: calc(100% / 3 - 8px)!important;
            }

        .schedina {
            background-color: $nonNero;
            min-height: 300px;

            // &:nth-child(even) {
            //     margin: 0px 20px;
            // }

            .col-6 {
                font-size: 1.5rem;
                color: $sky;
                i{
                    &:hover {
                        color: $blue;
                    }

                }
            }

            .round-icon {
                font-size: 2rem;
                color: $blue;
                background-color: $sky;
                width: 4rem;
                aspect-ratio: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }

            span {
                color: white;
                font-size: 1.5rem;
            }

        }
    }  

</style>