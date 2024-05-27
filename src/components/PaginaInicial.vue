<template>
    <section class="home" id="home">
        <div class="home-text">
            <h1>O sonho do seu novo <br><span>Carro</span> está a um click</h1>
            <p>Confira agora nosso estoque de veículos premium <br> diversas marcas e valores e garanta já o seu!</p>
            <!--Home Button-->
            <a href="#" class="btn">Confira Agora</a>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'PaginaInicial',
        data(){
            return{
                
            }
        }
    }
</script>

<style>
section {
    padding: 4rem 0 2rem;
}

.home {
    /* max-width: 1300px; */
    margin: auto;
    width: 100%;
    min-height: 640px;
    display: flex;
    align-items: center;
    background: url(../assets/img/Background-home.png);
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center left;
}

.home-text {
    padding-left: 100px; 
}

.home-text h1 {
    font-size: 2.5rem;
}

.home-text span {
    color: var(--primary-color);
}

.home-text p {
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0.5rem 0 2rem;
}

.btn {
    padding: 10px 22px;
    background: var(--primary-color);
    color: var(--bg-color);
    font-weight: 400;
}

.btn:hover {
    background: #fd052f;
}
</style>

