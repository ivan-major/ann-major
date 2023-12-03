<template>
    <main>
        <div class="home-page">
            <Social />
            <ContentMainPage />
            <ContactIcons />
            <div class="home-page__photo" />
        </div>
    </main>
</template>

<script setup>
import Social from "@/components/Social.vue";
import ContactIcons from "@/components/ContactIcons.vue";
import ContentMainPage from "@/components/ContentMainPage.vue";
</script>

<style lang="scss">
.home-page {
    &__photo {
        height: 100vh;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        background-image: url("@/assets/images/main_2.jpg");
        background-size: cover;
        background-position: center;
        // filter: grayscale(1);
        opacity: 0.6;
    }
}

@include desc {
    .home-page {
        &__photo {
            width: 50%;
            opacity: 1;
            // filter: grayscale(0);
        }
    }
}
</style>
