<script>
import logoMini from './logoMini.vue';
    export default {
    name: "jumboTron",
    components: { logoMini,
     }
}
</script>
<template>
    <section>
        <div class="m-auto py-4" style="width: 60%">
            <nav class="d-flex w-100 justify-content-between align-items-center flex-wrap">
                <div>
                    <logoMini/>
                </div>
                <div>
                    <span class="me-5 c-pointer prevent-select"><b>Home</b></span>
                    <span class="me-5 c-pointer prevent-select"><b>about</b></span>
                    <span class="me-5 c-pointer prevent-select"><b>services</b></span>
                    <span class="me-5 c-pointer prevent-select"><b>process</b></span>
                    <span class="me-5 c-pointer prevent-select"><b>testimonials</b></span>
                    <i class="fa-solid fa-user me-5 c-pointer"></i>
                    <span class="button c-pointer prevent-select"><b>get in touch</b></span>
                </div>
            </nav>
            <div class="w-50" style="margin-top: 20%;">
                <span class="c-def prevent-select">
                    <b>
                        logistic services
                    </b>          
                </span>
                <h1 class="c-def prevent-select">
                    <b>
                        cargo transport
                    </b>
                </h1>
                <p class="my-4 c-def prevent-select">
                    Fractional or exclusive road cargo transportation to all regions, whit small, mediuem and large vehicles.
                </p>
                <div class="d-flex align-items-center">
                    <span class="button me-5 c-pointer prevent-select">
                        get in touch
                    </span>
                    <span class="reverseButton c-pointer prevent-select">
                        read more
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import "../style/partials/_variables";

    *{
        color: white;
    }

    section{
        height: 90vh;
        width:100%;
        background-color: rgba(32, 32, 32, 0.512);
    }
    h1,span {
        text-transform: uppercase;
    }
    h1 {
        font-size: 4.5rem;
    }
    span,
    p {
        font-size: 1.1rem;

    }
    .w-50 {
        span {
            b {
                color: $skytext;
            }
            
        }

    }
</style>