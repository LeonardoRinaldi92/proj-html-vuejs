<script>
export default {
    name: 'logoMini'
}

</script>
<template>
    <div class="d-flex align-items-center c-def prevent-select">
        <span class="startlogo">
            <b>
                nex
            </b>
        </span>
        <span style="letter-spacing: 4px;">
            <b>
                gen
            </b>
        </span>
    </div>
</template>
<style lang="scss" scoped>
    @import "../style/partials/_variables";

    .startlogo{
            padding: 8px 0px 8px 25px;
            display: inline-block;
            color: $skytext;
            background-color: $sky;
            border-radius: 50px 0px 0px 50px;
            letter-spacing: 4px;
        }
    span {
        color: white;
        text-transform: uppercase;
        font-size: 1.5rem;
    }
</style>