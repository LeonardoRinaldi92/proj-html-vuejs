import { reactive } from "vue";

export const store = reactive (
    {
        veichleType : [
            {
                img: '/images/truck-1.png',
                class: 'Light',
                desc: 'Max Weight 1200kg.'

            },
            {
                img: '/images/truck-1.png',
                class: 'Medium',
                desc: 'Max Weight 6000kg.'

            },
            {
                img: '/images/truck-1.png',
                class: 'Heavy',
                desc: 'Max Weight 24000kg.'

            },
        ],
        services: [
            {
                icon: 'fa-solid fa-truck-ramp-box',
                type: 'Technolgy',
                desc: "We are continually focused on developing technology solution adapted to our client's needed."
            },
            {
                icon: 'fa-solid fa-temperature-low',
                type: 'Reefer Cargo',
                desc: "Regular and frequent monitoring from the loaded container to final destination"

            },
            {
                icon: 'fa-solid fa-boxes-stacked',
                type: 'Dry Cargo',
                desc: "We work whit the most types of dry cargo, from valuable cargo to the most dangerous requing care."

            }
        ]
    })