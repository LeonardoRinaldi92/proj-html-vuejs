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
                        <div class="row gx-3 mt-5">
                            <div class="col-xl-6 col-12">
                                <input type="text" placeholder="name" >
                            </div>
                            <div class="col-xl-6 col-12">
                                <input type="email" placeholder="email">
                            </div>
                            <div class="col-xl-6 col-12 mt-3">
                                <input type="tel" placeholder="phone">
                            </div>
                            <div class="col-xl-6  col-12 mt-2">
                                <select name="cosavuoi" id="tipodiAiuto" class="mt-2" > 
                                    <option value="info">more info</option>
                                    <option value="assistance">assistance</option>
                                    <option value="tracker">tracker ID</option>
                                </select>
                            </div>
                            <div class="col-12 mt-3" >
                                <textarea name="" id="" cols="98" rows="6" placeholder="Message"></textarea>
                            </div>
                            <div class="col-2 mt-3">
                                <button class="button" type="submit">
                                    send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <span>
                        <b>
                            Example Inc.
                        </b>
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p>
                        Ad modi, rem, mollitia molestias laudantium vero ab dolorem iste est iusto.
                    </p>
                    <div class="d-flex align-items-end">
                        <div>
                            <i class="fa-solid fa-phone round-icon"></i>
                        </div>
                        <div class="ms-3">
                            <p>
                                +1 (305) 1234-5678
                            </p>
                        </div>
                    </div>
                    <div class="d-flex align-items-end mt-3">
                        <div>
                            <i class="fa-solid fa-envelope round-icon"></i>
                        </div>
                        <div class="ms-3">
                            <p>
                                hello@emaple.com
                            </p>
                        </div>
                    </div>
                    <div class="d-flex align-items-end mt-3">
                        <div>
                            <i class="fa-solid fa-location-dot round-icon"></i>
                        </div>
                        <div class="ms-3">
                            <p>
                                Main Avenue, 987
                            </p>
                        </div>
                    </div>
                    <button class="reverseButton">
                        view map
                    </button>
                </div>
            </div>
        </div>   
    </div>
</template>

<style lang="scss" scoped>
     @import "../style/partials/_variables";
     .box95 {
        background-color: white;
        padding: 100px;
     }

     .col-8 {
        p {
            color: $grey;
            font-size: 1.2rem;
        }
     }

     textarea {
            padding-top: 15px;
        }
     input,
     select {
        height: 70px;

     }

     input,
     select,
     textarea {
        width: 100%;
        border: none;
        background-color: $lightGrey;
        border-radius: 5px;
        font-size: 1.5rem;
        padding-left: 15px;
        color: $grey;
        text-transform: capitalize;
        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: $grey;
          opacity: 1;
          font-size: 1.5rem;
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
     .button {
            color: white;
            text-transform: uppercase;
            border: none;
            height: 60px;
            width: 120px;
            font-size: 1.4rem;
            margin-top: 20px;
        }
    .reverseButton {
        margin-top: 50px;
        text-transform: uppercase;
        color: $blue;
        height: 60px;
        width: 180px;
        font-size: 1.4rem;
    }
    .col-4 {
        padding-left: 60px;
        span {
            font-size: 2rem;
        }
        p {
            font-size: 1.3rem;
            margin-top: 30px;
            color: $grey;
        }
        .round-icon {
                font-size: 2rem;
                color: $blue;
                background-color: $sky;
                width: 4rem;
                aspect-ratio: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }

        .d-flex {
            p {
                font-size: 1.5rem;
                color: $blue;
                line-height: 2rem;
            }
        }
    }

</style>