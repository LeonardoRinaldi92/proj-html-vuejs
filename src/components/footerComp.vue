<script>
    import logoMini from './logoMini.vue';
    export default {
        name: 'footerComp',
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
                    <p class="mt-3">
                        A fuctional HTML template for corporate & Business.
                    </p>
                    <p>
                        <i class="fa-solid fa-phone round-icon"></i>
                        <span>
                            +1 (305) 1234-5678
                        </span>
                    </p>
                    <p>
                        <i class="fa-solid fa-envelope round-icon"></i>
                        <span>
                            hello@emaple.com
                        </span>
                    </p>
                    <p>
                        <i class="fa-solid fa-location-dot round-icon"></i>
                        <span>
                            Main Avenue, 987
                        </span>
                    </p>
                    <span class="reverseButton">
                        GET IN TOUCH
                    </span>
                </div>
                <div class="col-9 d-flex">
                    <div class="col-4 schedina">
                        <span>
                            <b>
                                About
                            </b>
                        </span>
                        <ul>
                            <li>the company</li>
                            <li>istitutional</li>
                            <li>social & events</li>
                            <li>innovation</li>
                            <li>enviroments</li>
                            <li>technology</li>
                        </ul>
                    </div>
                    <div class="col-4 schedina">
                        <span>
                            <b>
                                Transport
                            </b>
                        </span>
                        <ul>
                            <li>industrialyzed</li>
                            <li>chemicals</li>
                            <li>packaged liquids</li>
                            <li>pconstruction</li>
                            <li>laminated wood</li>
                            <li>and others</li>
                        </ul>
                    </div>
                    <div class="col-4 schedina">
                        <span>
                            <b>
                                Support
                            </b>
                        </span>
                        <ul>
                            <li>responsibiluty</li>
                            <li>term of use</li>
                            <li>about cookies</li>
                            <li>privacy policy</li>
                            <li>accessibility</li>
                            <li>information</li>
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
                color: white;
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