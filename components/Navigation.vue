<template>
    <div class="nav">
        <div class="nav_header">
            <Logo />
            <div
                class="nav_close"
                @click="onCloseMenu"
            >
                <span class="close close_first"></span>
                <span class="close close_second"></span>
            </div>
        </div>
        <div class="container">

            <div class="nav_wrapper">
                <!-- <router-link to="/" class="logo">
                    <img src="../assets/logo.png" alt="logo" />
                </router-link> -->
                <nav class="nav_item" v-for="item in menuList">
                    <NuxtLink
                        :to="`${item.path}`"
                        :class="`link link_${item.class}`"
                        @click="onCloseMenu"
                    >
                        {{ item.name }}
                    </NuxtLink>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
import Logo from "./Logo.vue";

export default {
    name: "Navigation",

    components: {
        Logo,
    },

    emits: {
        closeMenu: null,
    },

    setup(props, { emit }) {
        const menuList = [
            {
                name: "Додому",
                path: "/",
                class: "home",
            },
            {
                name: "Дівчинка на гойдалці",
                path: "/about",
                class: "about",
            },
            {
                name: "Письменництво",
                path: "/books",
                class: "books",
            },
            {
                name: "Мистецтво",
                path: "/painting",
                class: "painting",
            },
            {
                name: "Події",
                path: "/events",
                class: "events",
            },
            {
                name: "Блог",
                path: "/blog",
                class: "blog",
            },
            {
                name: "Контакти",
                path: "/contact",
                class: "contact",
            },
        ];

        const onCloseMenu = () => {
            emit("closeMenu");
        };

        return {
            menuList,
            onCloseMenu,
        };
    },
};
</script>

<style lang="scss">
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.nav {
    background-color: $main-color;
    color: $color-background;
    height: 100vh;

    &_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }

    &_close {
        // position: absolute;
        // top: 50px;
        // right: 50px;
        padding: 10px;
        cursor: pointer;
        // opacity: 0.8;
        
        &:hover {
            .close {
                &_first {
                    transform: rotate(120deg);
                }
        
                &_second {
                    transform: rotate(45deg);
                }
            }
        }
    }

    &_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 20px;
    }

    &_item {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

}

@include desc {
    .nav {
        &_header {
            padding: 2rem;
        }

        &_wrapper {
            padding: 50px;
        }
    }
}

.close {
    height: 2px;
    width: 35px;
    background-color: #fff;
    display: block;
    margin: 4px;
    cursor: pointer;
    padding: 1px;
    border-radius: 20px;
    transition: all 0.3s ease;

    &_first {
        transform: rotate(45deg);
    }

    &_second {
        // transition: all .3s ease;
        transform: rotate(-45deg);
    }
}

@include desc {
    .close {
        height: 4px;
        width: 45px;
    }
}

.link {
    // padding: 10px;
    font-family: 'Poiret', sans-serif;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    // color: white;
    font-size: 20px;
    opacity: 1;
    // transition: all 0.4s ease;

    &:hover {
        background: none;

        &::before {
                opacity: 1;
            }
        // .link {
        //     &_about {
        //         &::before {
        //             opacity: 1;
        //         }
        //         // opacity: 1;
        //     }
        // }
    }

    &::before {
            // content: "Дівчинка на гойдалці";
            font-family: 'Montserrat', sans-serif;
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            justify-content: center;
            transform: translate(-50%, -50%);
            align-items: center;
            font-size: 30px;
            font-weight: 700;
            // font-family: monoton;
            color: rgb(255, 255, 255, 0.1);
            z-index: 1;
            pointer-events: none;
            opacity: 0;
            letter-spacing: 5px;
            transition: all 1s ease;
        }

    &_home {
        &::before {
            content: "Додому";
        }
    }
    &_about {
        &::before {
            content: "Дівчинка на гойдалці";
        }
    }

    &_books {
        &::before {
            content: "Письменництво";
        }
    }

    &_paiting {
        &::before {
            content: "Мистецтво";
        }
    }

    &_events {
        &::before {
            content: "Події";
        }
    }

    &_blog {
        &::before {
            content: "Блог";
        }
    }

    &_contact {
        &::before {
            content: "Контакти";
        }
    }
}

@include desc {
    .link {
        // padding: 10px;
        font-size: 32px;

        &::before {
            font-size: 120px;
            font-weight: 800;
            letter-spacing: 10px;
        }
    }
}
</style>
