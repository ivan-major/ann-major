<template>
    <section class="about">
        <div class="about__header">
            <h1 class="text-h1-page">
                Дівчинка <br v-if="!isDesctop" /><span
                    class="text-h1-page text-h1-page__blue"
                    >на гойдалці</span
                >
            </h1>
            <h2 class="text-h2-page">
                Дізнайтеся
                <span class="text-h2-page text-h2-page__blue">про мене</span>
            </h2>
        </div>

        <div class="about__container">
            <div class="about__info">
                <div class="about__title text-title">
                    Lorem
                    <strong class="text-title text-title__blue"
                        >ipsum dolor</strong
                    >
                    sit amet.
                </div>
                <div class="about__text text-p1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro labore eum reprehenderit qui enim sequi? Debitis ipsum
                    nihil commodi delectus adipisci nisi, fugit doloremque
                    ratione quibusdam nemo a quod laudantium sunt, suscipit
                    fugiat nesciunt quisquam architecto! Excepturi debitis earum
                    inventore.
                </div>
            </div>
            <div class="about__img" />
        </div>

        <div class="talants">
            <div class="talants__title text-h1-page">Мої таланти</div>
            <div class="talants__container">
                <TalantComponent
                    v-for="talant in talantsData"
                    :key="talant.title"
                    :title="talant.title"
                    :text="talant.text"
                    :icon="talant.icon"
                />
            </div>
        </div>
    </section>
</template>

<script>
import { ref, computed } from "vue";
import TalantComponent from "@/components/TalantComponent.vue";

export default {
    name: "AboutView",

    components: {
        TalantComponent,
    },

    setup() {
        const talantsData = ref([
            {
                title: "Письменник",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                icon: "writer",
            },
            {
                title: "Художник",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                icon: "painter",
            },
            {
                title: "Поет",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                icon: "poetry",
            },
        ]);

        const isDesctop = computed(() => {
            const width = window.innerWidth;

            if (width > 1200) {
                return true;
            } else {
                return false;
            }
        });

        return {
            talantsData,
            isDesctop,
        };
    },
};
</script>

<style lang="scss">
.about {
    padding: 0 20px;
    margin: 90px 0 60px;

    &__header {
        text-align: center;
    }

    &__container {
        margin-top: 10px;
        display: flex;
        flex-direction: column-reverse;
        gap: 20px;
    }

    &__img {
        width: 100%;
        height: 300px;
        background: url(@/assets/images/about.jpg) no-repeat center;
        background-size: cover;
        border-radius: 20px;
        box-shadow: inset 0 0 10px 10px rgb(39, 17, 2, 0.7);
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}

.talants {
    &__container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

    &__title {
        padding: 20px 0;
        text-align: center;
    }
}

@include desc {
    .about {
        padding: 0 120px;
        margin: 164px 0 90px;

        &__container {
            margin-top: 40px;
            flex-direction: row;
            gap: 40px;
            align-items: center;
        }

        &__info {
            width: 50%;
        }

        &__img {
            width: 50%;
            height: 500px;
        }
    }

    .talants {
        &__container {
            flex-direction: row;
            gap: 40px;
        }
    }
}
</style>
