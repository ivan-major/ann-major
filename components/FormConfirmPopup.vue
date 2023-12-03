<template>
    <dialog class="form-confirm-popup">
        <div class="form-confirm-popup__icon" @click="onClose">
            <Icon iconName="close" size="medium" color="white" />
        </div>

        <div class="form-confirm-popup__content">
            <div class="form-confirm-popup__title text-h1-page">
                {{ props.message.title }}
            </div>
            <div class="form-confirm-popup__text text-h2-page">
                {{ props.message.text }}
            </div>
        </div>
    </dialog>
</template>
<script setup>
import Icon from "./Icon.vue";

const props = defineProps({
    message: Object,
});

const emit = defineEmits({
    close: null,
});

const onClose = () => {
    emit("close");
};
</script>
<style lang="scss">
.form-confirm-popup {
    position: fixed;
    width: 90%;
    // height: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    background: $color-text;
    // position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    z-index: 1000;

    &__icon {
        display: flex;
        justify-content: end;
        width: 100%;
        height: 24px;
        cursor: pointer;
    }

    &__title,
    &__text {
        color: $color-background !important;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        text-align: center;
    }
}
</style>
