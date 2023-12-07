<template>
    <section>
        <div class="page-developing">Сторінка розробляється!</div>
    </section>
</template>

<style lang="scss">
.page-developing {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    color: $main-color;
    text-transform: uppercase;
    text-align: center;
}

@include desc {
    .page-developing {
        font-size: 4rem;
    }
}
</style>
