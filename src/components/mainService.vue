<script>    
import { store } from '../store';
export default {
    name: 'mainService',
    data() {
        return {
            store
        }
    },
    methods: {
    }
}
</script>
<template>
    <section id="mainService" class="box95 d-flex align-items-center justify-content-center">
        <div style="width: 60%; height: 70%">
            <span class="miniTitle">
                <b>
                    road transport
                </b>
            </span>
            <div class="BigTitle my-3">
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
            <div class="row">
                <div class="col-9">
                    <p>
                        <b>
                            Whit all of this expertise and capability come an unrivalled commitment serive. We woll work to undestand your needs in order to develop a productive, long-term partnership.
                        </b>
                    </p>
                </div>
                <div class="col-3 d-flex justify-content-end">
                    <span class="reverseButton">
                        see all
                    </span>
                </div>
            </div>
            <div class="d-flex my-5">
                <div v-for="(element, index) in store.services" :key="index" 
                class="col-4 p-5 schedina rounded-3">
                    <div class="row justify-content-between ">
                        <div class="round-icon col-6 ms-2">
                            <i :class="element.icon"></i>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div class="my-3">
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

        .schedina {
            background-color: $nonNero;
            min-height: 300px;

            &:nth-child(even) {
                margin: 0px 20px;
            }

            .col-6 {
                font-size: 1.5rem;
                color: $sky
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