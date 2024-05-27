<template>
    <section class="home" id="home">
        <div class="home-text">
            <h1>O sonho do seu novo <br><span>Carro</span> está a um click</h1>
            <p>Confira agora nosso estoque de veículos premium <br> diversas marcas e valores e garanta já o seu!</p>
            <!--Home Button-->
            <a href="#" class="btn">Confira Agora</a>
        </div>
    </section>
    <section class="cars" id="cars">
        <div class="heading">
            <span>Todas as Marcas</span>
            <h2>Nós temos todos tipos de Carros Premium</h2>
            <p>Nosso estoque possui as mais diversas marcas, modelos e tamanhos, confira já!</p>
        </div>
        <!--Cars Container-->
        <div class="cars-container container">
            <!--Box 1-->
            <div class="box">
                <img src="../assets/img/carr1.jpg" alt="">
                <h2>Porshe</h2>
            </div>
            <!--Box 2-->
            <div class="box">
                <img src="../assets/img/carr2.webp" alt="">
                <h2>Ferrari</h2>
            </div>
            <!--Box 3-->
            <div class="box">
                <img src="../assets/img/carr3.webp" alt="">
                <h2>Lamborghini</h2>
            </div>
            <!--Box 4-->
            <div class="box">
                <img src="../assets/img/carr8.webp" alt="">
                <h2>Maclaren</h2>
            </div>
            <!--Box 4-->
            <div class="box">
                <img src="../assets/img/carr4.webp" alt="">
                <h2>Merceds-Benz/AMG</h2>
            </div>
            <!--Box 5-->
            <div class="box">
                <img src="../assets/img/carr5.jpeg" alt="">
                <h2>BMW</h2>
            </div>
            <!--Box 6-->
            <div class="box">
                <img src="../assets/img/carr6.webp" alt="">
                <h2>Audi</h2>
            </div>
            <!--Box 7-->
            <div class="box">
                <img src="../assets/img/carr9.jpg" alt="">
                <h2>Aston Martin</h2>
            </div>
            <!--Box 8-->
            <div class="box">
                <img src="../assets/img/carr7.webp" alt="">
                <h2>Volvo</h2>
            </div>
        </div>
    </section>
    <section class="about container" id="about">
        <div class="about-img">
            <img src="../assets/img/about.png" alt="">
        </div>
        <div class="about-text">
            <span>Sobre Nós</span>
            <h2>Possuimos a Maior Coleção de <br> Carros Premium do Brasil</h2>
            <p>Nosso estoque atualmente conta com mais de 250 Carros Premium de alto seguimento. Sempre entregando a maior esportividade e luxo aos nossos clientes</p>
            <!--About btn-->
            <a href="#" class="btn">Saiba Mais</a>
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

/* Cars css */

.heading{
    text-align: center;
}

.heading span{
    font-weight: 500;
    color: var(--primary-color);
}

.heading p{
    font-size: 0.93rem;
    font-weight: 300;
}

.cars-container{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
}

.cars-container .box{
    flex: 1 1 17rem;
    position: relative;
    height: 200px;
    border-radius: 0.5rem;
    overflow: hidden;
}

.cars-container .box img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
}

.cars-container .box img:hover{
    transform: scale(1.1);
    transition: 0.5s;
}

.cars-container .box h2{
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    font-weight: 400;
    font-size: 1rem;
    background: var(--bg-color);
    padding: 8px;
    border-radius: 0.5rem;
}

.cars-container .box:hover h2{
    background: var(--primary-color);
    color: var(--bg-color);
}

/* About Section */

.about{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
}

.about-img {
    flex: 1 1 21rem;
}

.about-text {
    flex: 1 1 21rem;
}

.about-text span {
    font-weight: 500;
    color: var(--primary-color);
}

.about-text h2 {
    font-size: 1.2rem;
}

.about-text p {
    font-size: 0.9rem;
    margin: 0.5rem 0 1.4rem;
}


</style>


