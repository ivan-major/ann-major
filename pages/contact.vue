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
                        netlify-honeypot="“bot-field”"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <div class="form__input">
                            <input
                                name="name"
                                v-model="form.name.value"
                                type="text"
                                :class="`${
                                    !isValidInput.name ? 'input-error' : ''
                                }`"
                                :placeholder="form.name.placeholder"
                                @focus="placeholderRemove($event)"
                                @blur="placeholderPut($event)"
                            />

                            <div v-if="!isValidInput.name" class="error">
                                Кілкьість символів має бути більше 2
                            </div>
                        </div>

                        <div class="form__input">
                            <input
                                name="phone"
                                v-model="form.phone.value"
                                type="text"
                                :class="`${
                                    !isValidInput.phone ? 'input-error' : ''
                                }`"
                                :placeholder="form.phone.placeholder"
                                @focus="placeholderRemove($event)"
                                @blur="placeholderPut($event)"
                            />

                            <div
                                v-if="!isValidInput.phone"
                                class="error"
                            >
                                Невірний формат номеру телефону (приклад:
                                0991234567)
                            </div>
                        </div>

                        <div class="form__input">
                            <input
                                name="email"
                                v-model="form.email.value"
                                type="text"
                                :class="`${
                                    !isValidInput.email ? 'input-error' : ''
                                }`"
                                :placeholder="form.email.placeholder"
                                @focus="placeholderRemove($event)"
                                @blur="placeholderPut($event)"
                            />

                            <div
                                v-if="!isValidInput.email"
                                class="error"
                            >
                                Невірний формат email (приклад: email@gmail.com)
                            </div>
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
                                :class="`button ${
                                    isValidForm
                                        ? 'button__active'
                                        : 'button__disabled'
                                }`"
                                :disabled="!isValidForm"
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

import ContactItem from "../components/ContactItem.vue"
import FormConfirmPopup from "../components/FormConfirmPopup.vue"

import { emailValidator, nameValidator, phoneValidator } from "@/helpers/formValidators.js"

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

const FORM_PLACEHOLDER = {
    NAME: "Ім'я",
    PHONE: "Телефон",
    EMAIL: "Email",
    MESSAGE: "Повідомлення",
}

const form = reactive({
    "form-name": {
        value: "contact",
    },
    name: {
        value: null,
        placeholder: FORM_PLACEHOLDER.NAME,
    },
    phone: {
        value: null,
        placeholder: FORM_PLACEHOLDER.PHONE
    },
    email: {
        value: null,
        placeholder: FORM_PLACEHOLDER.EMAIL,
    },
    message: {
        value: null,
        placeholder: FORM_PLACEHOLDER.MESSAGE,
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
                form.name.placeholder = "Im'я"
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

    $fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
    })
        .then(() => {
            isFormSubmit.value = true
            isSuccessful.value = true
        })
        .catch(() => {
            isFormSubmit.value = true
            isSuccessful.value = false
        })

    isLoading.value = false
}

const onClose = () => {
    location.reload()
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

        // &-error {
        //     border: 1px solid $form-error-color;

        //     &:focus {
        //         border: 1px solid $form-error-color;
        //     }
        // }
    }

    &__button {
        display: flex;
        justify-content: center;
    }
}

.input-error {
    // border: 2px solid $form-error-color;
    background: $form-error-color !important;

    &:focus {
        background: $form-error-color !important;
        // border: 2px solid $form-error-color;
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
    cursor: pointer;

    &__active {
        opacity: 1;
    }

    &__disabled {
        opacity: 0.7;
    }
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

.error {
    font-family: "Montserrat", sans-serif;
    color: $form-error-color;
    font-size: 12px;
    margin-top: 5px;
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
