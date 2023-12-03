<template>
    <div class="social-container">
        <div class="social">
            <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="social__link"
            >
                <Icon iconName="instagram" size="medium" iconColor="#281202" />
                <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                >
                    <path
                        d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                        stroke="#281202"
                    />
                </svg> -->
            </a>

            <a
                href="https://arkush.net/"
                target="_blank"
                rel="noopener noreferrer"
                class="social__link"
            >
				<Icon iconName="book" size="medium" iconColor="#281202" color="none" />
                <!-- <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="24" height="24" fill="none" />
                    <path
                        d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                        stroke="#281202"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                        stroke="#281202"
                        stroke-linejoin="round"
                    />
                </svg> -->
            </a>
        </div>
    </div>
</template>
<script setup>
import Icon from "./Icon.vue"
</script>
<style lang="scss">
.social {
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;

    &__link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        transition: all 0.8s ease-in-out;

        &:hover {
            transform: scale(1.2);
        }
    }
}

.social-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    z-index: 100;
}

@include desc {
    .social {
        flex-direction: column;
        gap: 20px;

        &__link {
            width: 50px;
            height: 50px;
        }
    }

    .social-container {
        width: 50px;
        height: fit-content;
        bottom: none;
        top: 50%;
        right: 50px;
		transform: translateY(-50%);
    }
}
</style>
