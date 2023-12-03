<template>
    <header
        :class="pageName === 'home' ? 'header' : `header header__background`"
    >
        <Logo />
        <MenuBar @click="onToggleMenu" />
    </header>
</template>
<script>
import Logo from "./Logo.vue";
import MenuBar from "./MenuBar.vue";

export default {
    components: {
        Logo,
        MenuBar,
    },

    props: {
        pageName: {
            type: String,
            default: null,
        },
    },

    emits: {
        toggleMenu: null,
    },

    setup(props, { emit }) {
        const onToggleMenu = () => {
            emit("toggleMenu");
        };

        return {
            onToggleMenu,
        };
    },
};
</script>
<style lang="scss">
.header {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    z-index: 100;

    &__background {
        background: #ffffff;
    }
    // height: 100%;
}

@include desc {
    .header {
        padding: 2rem;

        &__background {
            background: none;
        }
    }
}
</style>
