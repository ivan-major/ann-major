<template>
    <div class="contact-item">
        <div class="contact-item__icon">
            <Icon :iconName="icon" size="medium" color="border" />
        </div>
        <div class="contact-item__info">
            <div class="contact-item__title text-p1">{{ title }}</div>
            <div class="contact-item__text text-p2">{{ text }}</div>
        </div>
    </div>
</template>
<script setup>
import Icon from "./Icon.vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});
</script>
<style lang="scss">
.contact-item {
    display: flex;
    gap: 10px;
    align-items: center;

    &__icon {
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__title {
        font-size: 16px !important ;
        font-weight: 700 !important;
        text-transform: uppercase !important;
    }

    &__text {
        font-size: 14px !important ;
        font-family: 'Poiret', sans-serif !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
    }
}
</style>
