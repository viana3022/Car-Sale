<template>
    <section class="home" id="home">
        <div class="home-text">
            <h1>O sonho do seu novo <br><span>Carro</span> está a um click</h1>
            <p>Confira agora nosso estoque de veículos premium <br> diversas marcas e valores e garanta já o seu!</p>
            <!--Home Button-->
            <router-link to="/car-section" class="btn">Confira Agora</router-link>
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
    <!-- Parts Section -->
    <section class="parts" id="parts">
        <div class="heading">
            <span>Peças Disponíveis</span>
            <h2>Seu Carro sempre bem cuidado</h2>
            <p>Componentes 100% originais comprados direto de seus respectivos fabricantes</p>
        </div>
        <!-- Parts Container -->
        <div class="parts-container container">
            <!-- Box 1 -->
            <div class="box">
                <img src="../assets/img/partt1.jpg" alt="">
                <h3>Kit Turbo Porshe 911</h3>
                <span>R$12.000</span>
                <i class='bx bxs-star'>(7 Reviews)</i>
                <a href="#" class="btn">Compre Já</a>
                <a href="#" class="details">Veja os detalhes</a>
            </div>
            <!-- Box 2 -->
            <div class="box">
                <img src="../assets/img/partt2.webp" alt="">
                <h3>Kit Supercharged Híbrido</h3>
                <span>R$19.000</span>
                <i class='bx bxs-star'>(4 Reviews)</i>
                <a href="#" class="btn">Compre Já</a>
                <a href="#" class="details">Veja os detalhes</a>
            </div>
            <!-- Box 3 -->
            <div class="box">
                <img src="../assets/img/partt3.webp" alt="">
                <h3>Pneu 20" Michelin Pilot Sport Cup</h3>
                <span>R$16.000</span>
                <i class='bx bxs-star'>(16 Reviews)</i>
                <a href="#" class="btn">Compre Já</a>
                <a href="#" class="details">Veja os detalhes</a>
            </div>
            <!-- Box 4 -->
            <div class="box">
                <img src="../assets/img/part4.png" alt="">
                <h3>Filtro de Ar Motec</h3>
                <span>R$190.00</span>
                <i class='bx bxs-star'>(27 Reviews)</i>
                <a href="#" class="btn">Compre Já</a>
                <a href="#" class="details">Veja os detalhes</a>
            </div>
            <!-- Box 5 -->
            <div class="box">
                <img src="../assets/img/part6.png" alt="">
                <h3>Jogo 4 rodas OZ 20"</h3>
                <span>R$7.989</span>
                <i class='bx bxs-star'>(12 Reviews)</i>
                <a href="#" class="btn">Compre Já</a>
                <a href="#" class="details">Veja os detalhes</a>
            </div>
            <!-- Box 6 -->
            <div class="box">
                <img src="../assets/img/partt4.webp" alt="">
                <h3>Kit Suspensão a Ar Castor</h3>
                <span>R$9.000</span>
                <i class='bx bxs-star'>(8 Reviews)</i>
                <a href="#" class="btn">Compre Já</a>
                <a href="#" class="details">Veja os detalhes</a>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <section class="footer">
        <div class="footer-container container">
            <div class="footer-box">
                <a href="#" class="logo">Lux<span>Cars</span></a>
                <div class="social">
                    <a href="#"><i class='bx bxl-facebook' ></i></a>
                    <a href="#"><i class='bx bxl-instagram' ></i></a>
                    <a href="#"><i class='bx bxl-github' ></i></a>
                    <a href="#"><i class='bx bxl-twitter' ></i></a>
                </div>
            </div>
            <div class="footer-box">
                <h3>Page</h3>
                <a href="#">Home</a>
                <a href="#">Carros</a>
                <a href="#">Peças</a>
                <a href="#">Sobre</a>
            </div>
            <div class="footer-box">
                <h3>Legal</h3>
                <a href="#">Privacidade</a>
                <a href="#">Política de Devolução</a>
                <a href="#">Política de Cookies</a>
            </div>
            <div class="footer-box">
                <h3>Contato</h3>
                <p>Brasil</p>
                <p>USA</p>
                <p>Dubai</p>
            </div>
        </div>
    </section>
    <!-- Copyright -->
    <div class="copyright">
        <p>&#169; Lux Cars Todos os Direitos Reservados.</p>
    </div>

</template>

<script>
export default {
    name: 'PaginaInicial',
    }
</script>


<style scoped>

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

/* Parts Section */

.parts-container{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
}

.parts-container .box {
    flex: 1 1 17rem;
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #f6f6f6;
    border-radius: 0.5rem;
}

.parts-container .box img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    object-position: center;
    margin-bottom: 1rem;
}

.parts-container .box h3{
    font-size: 1.1rem;
    font-weight: 600;
}
.parts-container .box span{
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--primary-color);
}
.parts-container .box .bx{
    color: var(--primary-color);
    margin: 1.2rem 0;
}

.parts-container .box .btn {
    max-width: 140px;
}

.parts-container .box .details{
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 1.8rem;
    right: 1rem;
    font-size: 1rem;
    color: var(--text-color);
}

.parts-container .box .details:hover{
    color: var(--primary-color);
    text-decoration: underline;
}

/* Footer */

.footer{
    background: var(--text-color);
    color: #f6f6f6;
    border-top: 2px solid var(--primary-color);
}

.footer-container{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

.footer-container .logo{
    color: var(--bg-color);
    margin-bottom: 1rem;
}

.footer-container .footer-box{
    display: flex;
    flex-direction: column;
}

.social{
    display: flex;
    align-items: center;
}

.social a{
    font-size: 24px;
    color: var(--bg-color);
    margin-right: 1rem;
}

.social a:hover {
    color: var(--primary-color);
}

.footer-box h3{
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

.footer-box a{
    color: #818181;
    margin-bottom: 10px;
}

.footer-box a:hover{
    color: var(--primary-color);
}

/* copyright */

.copyright{
    padding: 20px;
    text-align: center;
    color: var(--bg-color);
    background: var(--text-color);
}

</style>


