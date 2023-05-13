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
                <div class="col-3">
                    <logoMini/>
                </div>
                <div class="col-9 d-flex flex-wrap justify-content-between align-items-center">
                    <a href="/" class=" c-pointer prevent-select"><b>Home</b></a>
                    <a href="#about" class=" c-pointer prevent-select"><b>about</b></a>
                    <a href="#mainService" class=" c-pointer prevent-select"><b>services</b></a>
                    <a href="/" class=" c-pointer prevent-select"><b>process</b></a>
                    <a href="/" class=" c-pointer prevent-select"><b>testimonials</b></a>
                    <i class="fa-solid fa-user  c-pointer"></i>
                    <span class="button c-pointer prevent-select"><b>get in touch</b></span>
                </div>
            </nav>
            <div class="w-50" style="margin-top: 15%;">
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
        height: 100vh;
        width:100%;
        background-color: rgba(32, 32, 32, 0.512);
    }
    h1,
    a,
    span {
        text-transform: uppercase;
    }
    h1 {
        font-size: 4.5rem;
    }
    
    a,
    p,
    span {
        font-size: 1.1rem;
        text-decoration: none;
    }
    .w-50 {
        span {
            b {
                color: $skytext;
            } 
        }
    }
</style>