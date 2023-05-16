<script>
    import logoMini from './logoMini.vue';
    import { store } from '../store';
    export default {
        name: 'footerComp',
        data() {
            return {
                store
            }

        },
        components : {
            logoMini,

        }

    }

</script>

<template>
    <div class="box60 " id="footerSotto">
        <div class="m-auto" style="width: 60%; ">
            <div class="row gx-5 justify-content-between">
                <div class="col-3">
                    <logoMini/>
                    <p class="mt-3 prevent-select">
                        A fuctional HTML template for corporate & Business.
                    </p>
                    <p class="c-def">
                        <i class="fa-solid fa-phone round-icon"></i>
                        <span>
                            +1 (305) 1234-5678
                        </span>
                    </p>
                    <p class="c-def">
                        <i class="fa-solid fa-envelope round-icon"></i>
                        <span>
                            hello@emaple.com
                        </span>
                    </p>
                    <p class="c-def">
                        <i class="fa-solid fa-location-dot round-icon"></i>
                        <span>
                            Main Avenue, 987
                        </span>
                    </p>
                    <span class="reverseButton prevent-select c-pointer">
                        <a href="#getinTouch"  @click="store.posizione = 6;$emit('cambioposizione2')">
                            GET IN TOUCH
                        </a>
                    </span>
                </div>
                <div class="col-9 d-flex prevent-select">
                    <div class="col-4 schedina">
                        <span>
                            <b>
                                About
                            </b>
                        </span>
                        <ul>
                            <li class="c-pointer">the company</li>
                            <li class="c-pointer">istitutional</li>
                            <li class="c-pointer">social & events</li>
                            <li class="c-pointer">innovation</li>
                            <li class="c-pointer">enviroments</li>
                            <li class="c-pointer">technology</li>
                        </ul>
                    </div>
                    <div class="col-4 schedina">
                        <span>
                            <b>
                                Transport
                            </b>
                        </span>
                        <ul>
                            <li class="c-pointer">industrialyzed</li>
                            <li class="c-pointer">chemicals</li>
                            <li class="c-pointer">packaged liquids</li>
                            <li class="c-pointer">pconstruction</li>
                            <li class="c-pointer">laminated wood</li>
                            <li class="c-pointer">and others</li>
                        </ul>
                    </div>
                    <div class="col-4 schedina">
                        <span>
                            <b>
                                Support
                            </b>
                        </span>
                        <ul>
                            <li class="c-pointer">responsibiluty</li>
                            <li class="c-pointer">term of use</li>
                            <li class="c-pointer">about cookies</li>
                            <li class="c-pointer">privacy policy</li>
                            <li class="c-pointer">accessibility</li>
                            <li class="c-pointer">information</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
     @import "../style/partials/_variables";
    .box60 {
        background-color: $nero;
        display: flex;
        align-items: center;
        justify-content: center;

        .col-3 {
            p {
                color: $grey;
                font-size: 1.1rem;
                span {
                    margin-left: 10px;
                }

            }

            .reverseButton {
                margin-top: 30px;
                display: inline-block;


                a {
                    text-decoration: none;
                    color: white;

                }
            }
        }
        .schedina {
            background-color: $nonNero;
            min-height: 350px;
            padding: 0px 40px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            &:nth-child(even) {
                margin: 0px 20px;
            }
            span {
                color: white;
                font-size: 1.5rem;
            }
            ul {
                display: flex;
                flex-direction: column;
                margin: 0;
                padding: 0;
                margin-top: 15px;
                    li {
                        color: $grey;
                        font-size: 1.2rem;
                        list-style-type: none;
                        display: inline-block;
                        text-transform: capitalize;
                        margin-top: 10px;
                        &:hover {
                            color: white;
                        }
                        &::before {
                        content:"\f054";
                        display:inline-block; /* no underline on hover */
                        margin-right: 5px;
                        font-family: FontAwesome;
                        font-size: 1.3rem;
                        line-height: .8em;
                        }

                        &:hover::before {
                            font-size: 1.6rem;
                        }
                    }
                }
        }
    }
</style>