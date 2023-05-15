<script>
import { store } from '../store';
export default {
    name: 'logistical',
    data() {
        return {
            store
        }
    }
}

</script>
<template>
    <div class="box80 d-flex align-items-center justify-content-center position-relative" id="procedure">
        <div class="laneGreen" id="laneGreen">

        </div>
        <div style="width:80%;" class="text-center prevent-select">
            <span class="miniTitle">
                <b>
                    how it works in practice
                </b>
            </span>
            <div class="BigTitle my-3">
                <span class="colorato me-2">
                    <b>
                        Logistical
                    </b>
                </span>
                <span>
                    <b>
                        Procedure
                    </b>
                </span>
            </div>
            <div class="w-50 m-auto">
                <p>
                    We work whit innovative methodologies to ensure that the entire delivery preocess is done from start to finish as planned
                </p>
            </div>
            <div class="row my-5 justify-content-between">
                <div  class="col-2 text-center my-4 p-2" style="z-index: 999;">
                    <div v-show="store.posizioneCard >= 0" class="number m-auto">
                        <b>
                            01
                        </b>
                    </div>
                    <p v-show="store.posizioneCard >= 0">
                        <b>
                            Collection of Informaton
                        </b>
                    </p>
                    <span v-show="store.posizioneCard >= 0">
                        Lorem ipsum dolor,sit amet consectur
                    </span>
                </div>
                <div class="col-2 text-center my-4 p-2" style="z-index: 999;">
                    <div  v-show="store.posizioneCard >= 1" class="number m-auto">
                        <b>
                            02
                        </b>
                    </div>
                    <p  v-show="store.posizioneCard >= 1">
                        <b>
                            Service invoice Sending
                        </b>
                    </p>
                    <span  v-show="store.posizioneCard >= 1">
                        Lorem ipsum dolor,sit amet consectur
                    </span>
                </div>
                <div class="col-2 text-center my-4 p-2" style="z-index: 999;">
                    <div  v-show="store.posizioneCard >= 2" class="number m-auto">
                        <b>
                            03
                        </b>
                    </div>
                    <p  v-show="store.posizioneCard >= 2">
                        <b>
                            Whitdrawal of Cargo
                        </b>
                    </p>
                    <span  v-show="store.posizioneCard >= 2">
                        Lorem ipsum dolor,sit amet consectur
                    </span>
                </div>
                <div class="col-2 text-center my-4 p-2" style="z-index: 999;">
                    <div  v-show="store.posizioneCard >= 3" class="number m-auto">
                        <b>
                            04
                        </b>
                    </div>
                    <p  v-show="store.posizioneCard >= 3">
                        <b>
                            Transport customer Order
                        </b>
                    </p>
                    <span  v-show="store.posizioneCard >= 3">
                        Lorem ipsum dolor,sit amet consectur
                    </span>
                </div>
                <div class="col-2 text-center my-4 p-2" style="z-index: 999;">
                    <div  v-show="store.posizioneCard >= 4" class="number m-auto">
                        <b>
                            05
                        </b>
                    </div>
                    <p  v-show="store.posizioneCard >= 4">
                        <b>
                            Succesful delivery
                        </b>
                    </p>
                    <span  v-show="store.posizioneCard >= 4">
                        Lorem ipsum dolor,sit amet consectur
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "../style/partials/_variables";

    .laneGreen{
        height: 5px;
        background-color: $sky;
        position: absolute;
        top: 52%;
        left: 0;
        right: 84%;
    }
    .box80 {
        background-color: $verdino;
        p {
            font-size: 1.2rem;
            color: $grey;
        }
        .number {
            font-size: 1.5rem;
            background-color: $skyFull;
            color: $blue;
            display: inline-block;
            height: 50px;
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            z-index: 99;

        }

        .col-2 {
            p {
                color: black;
                font-size: 2rem;
                letter-spacing: 1px;
                margin-top: 20px;

            }
            span {
                color:$grey;
                font-size: 1.1rem;
            }
        }
    }
</style>