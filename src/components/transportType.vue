<script>
    import {store} from '../store';
    export default {
    name: 'trasportType',
    data () {
        return {
            store,
        }
        
    }
}

</script>
<template>
    <div class="box100 d-flex align-items-center justify-content-center" id="about">
        <div style="width: 60%; height: 70%;" class="d-flex">
            <div class="col-9 prevent-select">
                <span class="miniTitle">
                    <b>
                        who we are
                    </b>
                </span>
                <div class="BigTitle my-3">
                    <span class="colorato me-2">
                        <i class="fa-regular fa-gem"></i>
                        <b>
                            Excellence
                        </b>
                    </span>
                    <span>
                        <b>
                            in Trasport
                        </b>
                    </span>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem fugit tempore eum nam mollitia reiciendis incidunt veritatis.
                </p>
                <p>
                    Excepturi odit ad reiciendis repellat alias? Molestias doloribus nam voluptatum nihil. Quos, illo recusandae.
                </p>
                <div class="bordinoceleste">
                    <span>
                        <i>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem fugit tempore eum nam mollitia reiciendis incidunt veritatis.
                        </i>
                        
                    </span>
                </div>
                <p class="my-2">
                    Excepturi odit ad reiciendis repellat alias? Molestias doloribus nam voluptatum nihil. Quos, illo recusandae.
                </p>
                <ul>
                    <li>Lorem ipsum dolor</li>
                    <li>sit amet consectetur adipisicing elit</li>
                    <li>xercitationem fugit tempore</li>
                    <li>Molestias doloribus nam</li>
                    <li> Quos, illo recusandae</li>
                </ul>
            </div>
            
            <div class="col-3 prevent-select">
                <span>
                    <b>
                        Vehicle Types
                    </b>
                </span>
                <div class="w-100 d-flex flex-column sx-camioncini my-5">
                    <div v-for="(element, index) in store.veichleType" :key="index" 
                    class="col-4 d-flex align-items-center justify-content-between py-2">
                        <div style="background-color: rgba(0, 255, 255, 0.06);" class="p-2">
                            <img :src="element.img" alt="">
                        </div>
                        <div>
                            <span>
                                <b>
                                    {{ element.class }}
                                </b>
                            </span>
                            <p>
                                {{ element.desc }}
                            </p>
                        </div>        
                    </div>
                </div>
                <div class="premi">
                    <span>
                    <b>
                        Certifications
                    </b>
                    <div class="d-flex my-3"> 
                        <img src="/images/certificate.png" alt="" style="height: 130px;">
                        <img src="/images/certificate.png" alt="" style="height: 130px;">

                    </div>
                </span>


                </div>
            </div>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>
     @import "../style/partials/_variables";

    .col-9 {
        padding-right: 100px;
    }

    div{

        p,
        li,
        .bordinoceleste span{
            font-size: 1.2rem;
            color: $grey;
        }
        .bordinoceleste {
            padding: 10px 25px;
            border-left: 5px solid $sky;
        }

    }
    .col-3 {
        span {
            font-size: 1.4rem;
        }
        .col-4 {
            width: 100%;           
        }
        .sx-camioncini {
                .col-4 {
                    border-bottom: 1px solid $grey;
                }

                img {
                    height: 50px;
                }
        }
    }

</style>