<script>
    export default{
        name: 'topHeader',
    }

</script>
<template>
    <div class="d-flex w-100 justify-content-between align-items-center">      
        <span style="text-transform: capitalize;" class="prevent-select">
            <i class="fa-regular fa-clock"></i>
            open hours: mon - sat 9:00-18:00
        </span>
        <div>
            <span class="me-4">
                <i class="fa-solid fa-phone"></i>
                +1 (305) 1234-5678
            </span>
            <span class="me-4">
                <i class="fa-solid fa-envelope"></i>
                hello@example.com
            </span>
            <i class="fa-brands fa-facebook-f me-4 c-pointer"></i>
            <i class="fa-brands fa-twitter me-4 c-pointer"></i>
            <i class="fa-brands fa-linkedin-in me-4 c-pointer"></i>     
        </div>
    </div>
</template>
<style lang="scss" scoped>
    *{
        color: white;
        font-size: 0.9rem;
        span {
            font-weight: 100;
        }

    }

</style>