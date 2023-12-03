<template>
    <footer class="footer">
        <Icon iconName="copyright" size="medium" color="default" />
        <div class="footer__text text-h1-page">Анна Майор</div>
    </footer>
</template>

<script setup>
import Icon from "./Icon.vue";
</script>

<style lang="scss">
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    background: #ffffff;

    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;

    &__text {
        font-size: 14px !important;
    }

    .icon {
            height: 14px;
            font-size: 14px;
        }
}

@include desc {
    .footer {
        .icon {
            height: 20px;
            font-size: 20px;
        }
    }
}
</style>
