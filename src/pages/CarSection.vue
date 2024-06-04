<template>
    <section class="banner" id="banner">
        <div class="banner-text">
            <h1>O sonho do seu novo <br><span>Carro</span> está a um click</h1>
            <p>Confira agora nosso estoque de veículos premium <br> diversas marcas e valores e garanta já o seu!</p>
        </div>
    </section>
    <section class="car-list" id="car-list">
        <h1>Galeria Carros</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae eaque quisquam tempora, nisi consectetur.</p>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.banner {
    /* max-width: 1300px; */
    margin: auto;
    width: 100%;
    min-height: 640px;
    display: flex;
    align-items: center;
    background: url(../assets/img/Design\ sem\ nome\ \(9\).png);
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center left;
}

.banner-text {
    padding-left: 100px; 
}

.banner-text h1 {
    font-size: 2.5rem;
}

.banner-text span {
    color: var(--primary-color);
}

.banner-text p {
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0.5rem 0 2rem;
}

</style>