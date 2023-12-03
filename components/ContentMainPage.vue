<template>
    <div class="content-main-page">
        <div class="content-main-page__container">
            <h1 class="text-h1">
                <span class="text-h1 text-h1__blue">Aнна</span> Майор
            </h1>
            <h2 class="text-h2 content-main-page__text">
                Я
                <VueTypewriterEffect
                    :strings="myTalents"
                    autoStart
                    loop
                    element='span'
                />
            </h2>
        </div>
        <!-- <div class="content-main-page__photo">
            <img src="@/assets/images/main_page.jpg" alt="">
        </div> -->
    </div>
    <!-- <h1>Aнна Майор</h1>
    <h2>
        Я {{ myTalent }}
        <span class="slash">|</span>
    </h2> -->
</template>

<script>
import { ref } from 'vue'
import VueTypewriterEffect from "vue-typewriter-effect"

export default {
    name: 'ContentMainPage',

    components: {
        VueTypewriterEffect,
    },

    setup() {
        const myTalents = ref(['Письменник', 'Художник' , 'Поет'])

        return {
            myTalents,
        }
    }
}
</script>

<style lang="scss">
.content-main-page {
    padding: 0 20px;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__text {
        // font-size: 30px !important;
        margin-top: 20px;
        text-align: center;
        // z-index: 4;
        // color: $main-color !important;
        span {
            font-weight: 700 !important;
            color: $main-color !important;
        }
    }


}

@include desc {
    .content-main-page {
        padding: 0 50px;
    }
}
</style>