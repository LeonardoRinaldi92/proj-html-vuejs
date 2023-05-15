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
                    <div class="col-4 schedina"></div>
                    <div class="col-4 schedina"></div>
                    <div class="col-4 schedina"></div>
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
            padding: 0px 20px;
            border-radius: 10px;
            &:nth-child(even) {
                margin: 0px 20px;
            }

        }
    }
</style>