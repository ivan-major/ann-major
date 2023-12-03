<template>
    <div class="contact-icons-container">
        <div class="contact-icons">
            <a href="tel:+380999999999" class="contact-icons_link">
                <Icon
                    iconName="phone"
                    size="medium"
                    iconColor="#281202"
                    color="default"
                />
                <!-- <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                        fill="#281202"
                    />
                </svg> -->
            </a>
            <!-- //TODO: add username -->
            <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-icons_link"
            >
                <Icon
                    iconName="telegram"
                    size="medium"
                    iconColor="#281202"
                    color="default"
                />
                <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                    fill="#281202"
                >
                    <path
                        d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"
                    />
                </svg> -->
            </a>

            <!-- //TODO: add mail -->
            <a
                href="mailto:mail@example.com"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-icons_link"
            >
                <Icon
                    iconName="mail"
                    size="medium"
                    iconColor="#281202"
                    color="default"
                />
                <!-- <svg
                    width="50px"
                    height="50px"
                    viewBox="0 -3.5 32 32"
                    version="1.1"
                >
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="#281202"
                        fill-rule="evenodd"
                        sketch:type="MSPage"
                    >
                        <g
                            id="Icon-Set-Filled"
                            sketch:type="MSLayerGroup"
                            transform="translate(-414.000000, -261.000000)"
                            fill="#281202"
                        >
                            <path
                                d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                                id="mail"
                                sketch:type="MSShapeGroup"
                            ></path>
                        </g>
                    </g>
                </svg> -->
            </a>
        </div>
    </div>
</template>
<script setup>
import Icon from "./Icon.vue";
</script>

<style lang="scss">
.contact-icons {
    display: none;
}

.contact-icons-container {
    display: none;
    // position: absolute;
    // bottom: 0;
    // width: 100%;
    // padding: 20px;
    // z-index: 100;
}

@include desc {
    .contact-icons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 100%;

        &_link {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            transition: all 0.8s ease-in-out;

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    .contact-icons-container {
        display: block;
        position: absolute;
        width: 50px;
        // height: 100%;
        top: 50%;
        left: 50px;
        z-index: 100;
        transform: translateY(-50%);
    }
}
</style>
