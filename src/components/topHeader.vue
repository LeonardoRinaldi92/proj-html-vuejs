<script>
    export default{
        name: 'topHeader',
    }

</script>
<template>
    <div class="d-flex w-100 justify-content-between">      
        <span style="text-transform: capitalize;">
            <i class="fa-regular fa-clock"></i>
            open hours: mon - sat 9:00-18:00
        </span>
        <div>
            <span class="me-4">
                <i class="fa-solid fa-phone"></i>
                +1 (305) 1234-5678
            </span>
            <span class="me-4">
                <i class="fa-regular fa-envelope"></i>
                hello@example.com
            </span>
            <i class="fa-brands fa-facebook-f me-4"></i>
            <i class="fa-brands fa-twitter me-4"></i>
            <i class="fa-brands fa-linkedin-in me-4"></i>
            

        </div>
    </div>
</template>
<style lang="scss" scoped>
    *{
        color: white;
        font-size: 0.9rem;

    }

</style>