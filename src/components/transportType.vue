<script>
export default {
    name: 'trasportType'
}

</script>
<template>
    <div class="box100 d-flex align-items-center justify-content-center" id="about">
        <div style="width: 60%; height: 70%;" class="d-flex">
            <div class="col-8">
                <span style="text-transform: uppercase;">
                    <b>
                        who we are
                    </b>
                </span>
                <div class="excellence my-3">
                    <span class="excellenceStyle me-2">
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
            
            <div class="col-4">
                <p>
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dolores! Eligendi, sunt quibusdam exercitationem fugiat earum aspernatur cumque illum vitae praesentium pariatur, dolor deleniti beatae quia impedit, architecto cum labore.
                </p>
            </div>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>
     @import "../style/partials/_variables";
    .box100 {
        height: 100vh;
        width: 100%;
    }
    .col-8 {
        padding-right: 100px;
        span {
            color: $blue
        }
    }

    div{
        .excellence {
            font-size: 3.5rem;
            span {
                display: inline-block;
            }
        }
        .excellenceStyle {
            color: $skyButton;
            background-color: $sky;
            padding: 0px 15px;
        }

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

</style>