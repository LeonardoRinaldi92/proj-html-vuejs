<script>
    import { store } from '../store';
    import Vue3autocounter from 'vue3-autocounter'
    export default {
        name: 'results',
        data() {
            return {
                store
            }
        },
        components : {
            Vue3autocounter,
        }
    }
</script>

<template>
    <div class="box60" id="results">
        <div class="text-center m-auto prevent-select" style="width: 80%;height: 90%;">
            <span class="miniTitle">
                <b>
                    what are we doing
                </b>
            </span>
            <div class="BigTitle my-4">
                <span class="colorato me-2">
                    <b>
                        Results
                    </b>
                </span>
                <span>
                    <b>
                        in Number
                    </b>
                </span>
            </div>
            <div class="row justify-content-between p-5 my-5">
                <div class="col-3 text-center">
                    <span>
                        <b>
                            <Vue3autocounter v-if="store.posizione == 4" ref="counter" :startAmount="0" :endAmount="128" :duration="3" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
                            <span v-else>128</span>
                        </b>
                    </span>
                    <p class="my-3">
                        <b>
                            Certifications
                        </b>
                    </p>
                </div>
                <div class="col-3 text-center">
                    <span>
                        <b>
                            <Vue3autocounter v-if="store.posizione == 4" ref="counter" :startAmount="0" :endAmount="230" :duration="3" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
                            <span v-else>230</span>
                        </b>
                    </span>
                    <p class="my-3">
                        <b>
                            Employers
                        </b>
                    </p>
                </div>
                <div class="col-3 text-center">
                    <span>
                        <b>
                            <Vue3autocounter v-if="store.posizione == 4" ref="counter" :startAmount="0" :endAmount="517" :duration="3" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
                            <span v-else>517</span>
                        </b>
                    </span>
                    <p class="my-3">
                        <b>
                            Customers
                        </b>
                    </p>
                </div>
                <div class="col-3 text-center">
                    <span>
                        <b>
                            <Vue3autocounter v-if="store.posizione == 4" ref="counter" :startAmount="0" :endAmount="94" :duration="3" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
                            <span v-else>94</span>
                        </b>
                    </span>
                    <p class="my-3">
                        <b>
                            Country served
                        </b>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
 @import "../style/partials/_variables";

.box60 {
    background-image: url(/images/bg-10.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px;
    .BigTitle{
        color: white;
        span {
            color: white;
        }
    }
    .col-3 {
        span {
            font-size: 3rem;
            color: $blue;
        }
        p {
            font-size: 2rem;
            color: white;
        }
    }
}

</style>