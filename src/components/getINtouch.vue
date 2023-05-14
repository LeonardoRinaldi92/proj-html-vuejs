<script>
    export default {
        name : 'getINtouch',
    }
</script>

<template>
    <div class="box95" id="getinTouch">
        <div class="m-auto" style="width: 70%;">
            <div class="row" style="padding-right: 50px;">
                <div class="col-8">
                    <span class="miniTitle">
                        <b>
                            send a message
                        </b>
                    </span>
                    <div class="BigTitle my-3">
                        <span>
                            <b>
                                Get in 
                            </b>
                        </span>
                        <span class="colorato ms-2">
                            <b>
                                Touch
                            </b>
                        </span>
                    </div>
                    <p>
                        We will respond to your message soon as possible.
                    </p>
                    <div>
                        <div class="row gx-2">
                            <div class="col-6">
                                <input type="text" placeholder="name" >
                            </div>
                            <div class="col-6">
                                <input type="email" placeholder="email">
                            </div>
                            <div class="col-6 mt-2">
                                <input type="tel" placeholder="phone">
                            </div>
                            <div class="col-6">
                                <select name="cosavuoi" id="" class="mt-2" > 
                                    <option value="volvo">more info</option>
                                    <option value="saab">assistance</option>
                                    <option value="mercedes">track</option>
                                    <option value="audi">ciao leo</option>
                                </select>
                            </div>

                        </div>
                    

                    </div>
                </div>
                
                <div class="col-4">

                </div>
            </div>


        </div>
        
    </div>
</template>

<style lang="scss" scoped>
     @import "../style/partials/_variables";
     .box95 {
        background-color: white;
        padding: 150px;
     }

     .col-8 {
        p {
            color: $grey;
            font-size: 1.2rem;
        }
     }

     input,
     select {
        width: 100%;
        height: 50px;
        border: none;
        background-color: $lightGrey;
        border-radius: 5px;
        font-size: 1.2rem;
        padding-left: 15px;
        color: $grey;
        text-transform: capitalize;
        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: $grey;
          opacity: 1;
          font-size: 1.2rem;
          text-transform: capitalize; /* Firefox */
        }

        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: $grey;
          font-size: 1.2rem;
          text-transform: capitalize;
        }

        &::-ms-input-placeholder { /* Microsoft Edge */
          color: $grey;
          font-size: 1.2rem;
          text-transform: capitalize;
        }

        option {
            color: $grey;
          font-size: 1.2rem;
          text-transform: capitalize;
        }
     }


</style>