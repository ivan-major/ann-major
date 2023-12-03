<template>
    <div
        class="menubar"
        >
        <!-- @click="toggleMenu" -->
        <span class="line line_first"></span>
        <span class="line line_second"></span>
        <span class="line line_third"></span>
    </div>
</template>
<script>
export default {
    name: 'MenuBar',

    // emits: {
    //     toggleMenu: null,
    // },

    // setup(props, { emit }) {
    //     const toggleMenu = () => {
    //         emit('toggleMenu')
    //     }

    //     return {
    //         toggleMenu,
    //     }
    // }
}
</script>
<style lang="scss">
.menubar {
    // position: absolute;
    // right: 20px;
    // top: 40px;
    cursor: pointer;
    width: 50px;

    &:hover {
        .line {
            &_first::before,
            &_second::before,
            &_third::before {
                width: 100%;
            }
        }
    }
}

.line {
    position: relative;
    height: 2px;
    display: block;
    margin: 6px;

    &_first {
        &::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 50%;
            top: 0;
            right: 0;
            background-color: $color-text;
            transition: all .5s ease;
        }
    }

    &_second::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 75%;
        top: 0;
        right: 0;
        background-color: $color-text;
        transition: all .5s ease;
    }

    &_third::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        background-color: $color-text;
        transition: all .5s ease;
    }
}

@include desc {
    .menubar {
        width: 70px;
    }

    .line {
        height: 4px;
        margin: 8px;
    }
}
</style>
