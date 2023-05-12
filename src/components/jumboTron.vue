<script>
    export default {
        name: 'jumboTron'
    }
</script>
<template>
    <section>
        <div class="m-auto py-4" style="width: 60%">
            <nav class="d-flex w-100 justify-content-between">
                <div>
                    <span class="startlogo">
                        <b>
                            nex
                        </b>
                    </span>
                    <span style="margin-left: -10px;">
                        <b>
                            gen
                        </b>
                    </span>
                </div>
                <div>
                </div>
            </nav>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import "../style/partials/_variables";

    section{
        height: 90vh;
        width:100%;
        background-color: rgba(32, 32, 32, 0.512);
    }
    span {
        color: white;
        text-transform: uppercase;
        font-size: 1.3rem;
        letter-spacing: 5px;

    }
    .startlogo{
            padding: 8px 0px 8px 25px;
            display: inline-block;
            color: $skytext;
            background-color: $sky;
            border-radius: 50px 0px 0px 50px;
        }



</style>