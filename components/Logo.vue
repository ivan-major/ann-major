<template>
    <div class="logo">
        <img class="logo_img" src="@/assets/images/logo.jpg" alt="Logo" />
    </div>
</template>
<style lang="scss">
.logo {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
}

@include desc {
    .logo {
        width: 100px;
        height: 100px;
    }
}
</style>
