<template>
    <div class="talant">
        <div class="talant__img">
            <Icon
                :iconName="props.icon"
                :size="isDesctop ? 'large' : 'medium'"
                iconColor="#02404e"
                color="white"
            />
        </div>
        <div class="talant__title text-title">{{ props.title }}</div>
        <div class="talant__text text-p2">
            {{ props.text }}
        </div>
    </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
import Icon from "./Icon.vue";

const props = defineProps({
    title: String,
    text: String,
    icon: String,
});

const isDesctop = computed(() => {
    const width = window.innerWidth;

    if (width >= 1200) {
        return true;
    } else {
        return false;
    }
});
</script>
<style lang="scss">
.talant {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
    padding: 20px;
    border-radius: 20px;
    background: $color-text;
    position: relative;

    &__title,
    &__text {
        color: $color-background !important;
        z-index: 2;
    }

    &__img {
        border-radius: 20px;
        padding: 10px;
        background: $main-color;

        height: 60px;
        width: 60px;
        z-index: 2;
    }
}

@include desc {
    .talant {
        padding: 24px;
        border-radius: 24px;

        &__img {
            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 24px;
            padding: 10px;
            background: $main-color;

            height: 80px;
            width: 80px;
        }
        &::before {
            content: "";
            position: absolute;
            top: 24px;
            left: 50%;
            width: 80px;
            height: 80px;

            border-radius: 20px;
            background: $main-color;

            transform: translateX(-50%);
            // opacity: 0;

            transition: all 0.7s ease;
        }

        &:hover:before {
            width: 100%;
            height: 100%;
            transform: translateY(-24px) translateX(-50%);
        }

    }
}
</style>
