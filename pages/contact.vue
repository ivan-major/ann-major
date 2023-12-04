<template>
    <section>
        <div :class="`contacts ${isFormSubmit ? 'contacts__not-active' : ''}`">
            <div class="contacts__title title">
                <h1 class="title__h1 text-h1">
                    Мої
                    <span class="title__h1 text-h1 title__blue">контакти</span>
                </h1>
                <h2 class="title__h2 text-h2">
                    <span class="title__h2 text-h2 title__blue">
                        Залишайтеся
                    </span>
                    на зв`язку
                </h2>
            </div>

            <div class="contacts__block">
                <div class="contacts__form form">
                    <div class="text-p1 form__title">Напишіть мені</div>

                    <form
                        class="form__block"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                    >
                        <div class="form__input">
                            <input
                                name="name"
                                v-model="form.name.value"
                                type="text"
                                :placeholder="form.name.placeholder"
                                @focus="placeholderRemove($event)"
                                @blur="placeholderPut($event)"
                            />
                        </div>

                        <div class="form__input">
                            <input
                                name="phone"
                                v-model="form.phone.value"
                                type="text"
                                :placeholder="form.phone.placeholder"
                                @focus="placeholderRemove($event)"
                                @blur="placeholderPut($event)"
                            />
                        </div>

                        <div class="form__input">
                            <input
                                name="email"
                                v-model="form.email.value"
                                type="text"
                                :placeholder="form.email.placeholder"
                                @focus="placeholderRemove($event)"
                                @blur="placeholderPut($event)"
                            />
                        </div>

                        <div class="form__input">
                            <textarea
                                name="message"
                                v-model="form.message.value"
                                id=""
                                cols="30"
                                rows="5"
                                :placeholder="form.message.placeholder"
                                @focus="placeholderRemove($event)"
                                @blur="placeholderPut($event)"
                            ></textarea>
                        </div>

                        <div class="form__button">
                            <button
                                class="button"
                                :disabled="isLoading"
                                @click="onSubmit($event)"
                            >
                                <div class="button__text">Надіслати</div>
                            </button>
                        </div>
                    </form>
                </div>

                <div class="contacts__container">
                    <ContactItem
                        v-for="contact in contactsData"
                        :key="contact.title"
                        :title="contact.title"
                        :text="contact.text"
                        :icon="contact.icon"
                    />
                </div>
            </div>
        </div>

        <FormConfirmPopup
            v-if="isFormSubmit"
            :message="isSuccessful ? messageSuccess : messageError"
            @close="onClose"
        />
    </section>
</template>
<script setup>
import { ref, reactive } from "vue"
import axios from "axios"
import ContactItem from "../components/ContactItem.vue"
import FormConfirmPopup from "../components/FormConfirmPopup.vue"

const contactsData = ref([
    {
        title: "Ім'я",
        text: "Анна Майор",
        icon: "avatar",
    },
    {
        title: "Місто",
        text: "Київ, Україна",
        icon: "location",
    },
    {
        title: "Телефон",
        text: "+380 99 999 99 99",
        icon: "phone",
    },
    {
        title: "Email",
        text: "anna.major.2009@gmail.com",
        icon: "emailContact",
    },
])

const messageSuccess = ref({
    title: "Дякую за звернення!",
    text: "Я зв'яжусь з вами найближчим часом.",
})

const messageError = ref({
    title: "Помилка!",
    text: "Щось пішло не так. Спробуйте ще раз.",
})

const isFormSubmit = ref(false)
const isSuccessful = ref(false)
const isLoading = ref(false)

const form = reactive({
    name: {
        value: "",
        placeholder: "Ім'я",
    },
    phone: {
        value: "",
        placeholder: "Телефон",
    },
    email: {
        value: "",
        placeholder: "Email",
    },
    message: {
        value: "",
        placeholder: "Повідомлення",
    },
})

const isInFocus = ref({
    email: false,
    name: false,
    phone: false,
})

const isValidInput = ref({
    email: true,
    name: true,
    phone: true,
})

const isValidForm = computed(() => {
    return (
        isValidInput.value.email &&
        isValidInput.value.name &&
        isValidInput.value.phone &&
        form.email.value &&
        form.name.value &&
        form.phone.value
    )
})

const placeholderRemove = (event) => {
    switch (event.target.name) {
        case "name":
            isInFocus.value.name = true
            form.name.placeholder = ""
            break
        case "phone":
            isInFocus.value.phone = true
            form.phone.placeholder = ""
            break
        case "email":
            isInFocus.value.email = true
            form.email.placeholder = ""
            break
        case "message":
            form.message.placeholder = ""
            break
    }
}

const placeholderPut = (event) => {
    switch (event.target.name) {
        case "name":
            if (form.name.value === "") {
                isInFocus.value.name = false
                form.name.placeholder = "Email"
            }

            isValidInput.value.name = nameValidator(form.name.value)
            break
        case "phone":
            if (form.phone.value === "") {
                isInFocus.value.phone = false
                form.phone.placeholder = "Телефон"
            }

            isValidInput.value.phone = phoneValidator(form.phone.value)
            break
        case "email":
            if (form.email.value === "") {
                isInFocus.value.email = false
                form.email.placeholder = "Email"
            }

            isValidInput.value.email = emailValidator(form.email.value)
            break
        case "message":
            form.message.placeholder = "Повідомлення"
            break
    }
}

const emailValidator = (value) => {
    return !value
        ? true
        : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              value
          )
}

const nameValidator = (value) => {
    return !value ? true : value.length >= 2
}

const phoneValidator = (value) => {
    return !value
        ? true
        : /^(\+380[0-9]{9})$/.test(value) || /^0[0-9]{9}$/.test(value)
}

const onSubmit = (event) => {
    event.preventDefault()

    isLoading.value = true

    const body = Object.keys(form)
        .map(
            (key) =>
                encodeURIComponent(key) +
                "=" +
                encodeURIComponent(form[key].value)
        )
        .join("&")

    axios
        .post("/", body, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((response) => {
            isFormSubmit.value = true
            isSuccessful.value = true
        })
        .catch((error) => {
            isFormSubmit.value = true
            isSuccessful.value = false
        })

    isLoading.value = false
}

const onClose = () => {
    isFormSubmit.value = false
}
</script>
<style lang="scss">
.contacts {
    // height: calc(100vh - 110px);
    padding: 0 20px;
    margin: 90px 0 0 0;

    &__not-active {
        opacity: 0.6;

        ::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }
    }

    &__title {
        // margin-bottom: 20px;
    }

    &__block {
        display: flex;
        flex-direction: column;
    }

    &__container {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        position: relative;
        border-radius: 20px;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            background-image: url("@/assets/images/main_page.jpg");
            background-size: cover;
            background-position: center;
            opacity: 0.6;
        }
    }
    // margin: 90px 0 20px;
}

.form {
    padding: 10px;
    margin-bottom: 20px;

    &__title {
        text-align: center;
        margin-bottom: 10px;
    }

    &__block {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__input {
        input,
        textarea {
            width: 100%;
            padding: 10px 20px;
            // margin: 14px;
            border-radius: 8px;
            outline: none;
            background: $main-color;
            border: none;
            color: #ffffff;
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
            text-transform: uppercase;

            &::placeholder {
                color: #ffffff;
                font-family: "Montserrat", sans-serif;
                font-size: 14px;
                text-transform: uppercase;
            }
        }
    }

    &__button {
        display: flex;
        justify-content: center;
    }
}

.button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 20px;
    border-radius: 20px;
    // outline: none;
    background: $color-text;
    border: none;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    transform: "background" 0.3s ease-in-out;

    // &::before {
    //     content: "";
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 0;
    //     height: 100%;
    //     background: $main-color;
    //     border-radius: 12px;
    //     transition: all 1s ease;
    //     z-index: 1;
    // }

    // &:hover:before {
    //     width: 100%;
    // }

    // &__text {
    //     position: absolute;
    //     z-index: 10;
    // }
}

.title {
    text-align: center;

    &__h1 {
        font-size: 24px !important;
    }

    &__h2 {
        font-size: 20px !important;
    }

    &__blue {
        color: $main-color !important;
    }
}

@include desc {
    .contacts {
        height: 100%;
        // padding: 0 120px;
        padding: 80px 120px 90px;
        margin: 0;

        &__block {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 100px;
            margin-top: 20px;
        }

        &__container {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        &__form {
            width: 100%;
        }
    }

    .title {
        &__h1 {
            font-size: 40px !important;
        }

        &__h2 {
            font-size: 34px !important;
        }
    }

    .button {
        padding: 28px;
        border-radius: 28px;
        font-size: 20px !important;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 56px;
            height: 100%;
            background: $main-color;
            border-radius: 28px;
            transition: all 1s ease;
            z-index: 1;
            opacity: 0;
        }

        &:hover:before {
            width: 100%;
            opacity: 1;
        }

        &__text {
            position: absolute;
            z-index: 10;
        }
    }
}
</style>
