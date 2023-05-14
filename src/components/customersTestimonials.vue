<script>
import { store } from '../store';
    export default {
        name: 'customersTestimonials',
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="box90" id="testimonials">
        <div class="text-center m-auto" style="width: 80%; height: 90%;">
            <span class="miniTitle">
                <b>
                    customers testimonials
                </b>
            </span>
            <div class="BigTitle my-4">
                <span>
                    <b>
                        Trusted
                    </b>
                </span>
                <span  class="colorato ms-2">
                    <b>
                        Feedback
                    </b>
                </span>
            </div>
            <div class="m-auto" style="width: 50%;">
                <p>
                    We work intensively in search of ideals that can add up in the lives of our customers.This is what move us and we are grateful for the recognitions.
                </p>
            </div>
            <div class="d-flex m-auto my-5 text-start position-relative" style="width: 70%;">
                <div v-for="(element, index) in store.reviews" :key="index" 
                class="col-4 p-5 schedina rounded-3">
                    <img :src="element.logo" alt="">
                    <div class="my-3">
                        <p class="my-3">
                            {{ element.revs1 }}
                        </p>
                        <p class="my-2">
                            {{ element.revs2 }}
                        </p>
                    </div>
                    <i class="fa-solid fa-quote-right" style></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../style/partials/_variables";
    .box90 {
        background-color: $nero;
        padding: 100px 0px;
        .BigTitle{
        color: white;
        span {
            color: white;
        }
    }
    div {
        p {
            color: $grey;
            font-size: 1.1rem;
        }
    }

    .schedina {
            background-color: $nonNero;
            min-height: 250px;

            &:nth-child(even) {
                margin: 0px 40px;
            }
            .col-6 {
                font-size: 1.5rem;
                color: $sky
            }
            img {
                filter: brightness(0) invert(1);
                height: 25px;
            }
            span {
                color: white;
                font-size: 1.5rem;
            }
            .fa-quote-right {
                position: absolute;
                font-size: 3rem;
                margin-left: 250px;
                bottom: 20px;
                color: $grey;

            }
        }
    }

</style>