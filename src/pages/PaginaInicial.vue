<template>
  <div class="page-home">
    <section class="home" id="home">
      <div class="home-text reveal">
        <span class="tag">Bem-vindo à LuxCars</span>
        <h1>O sonho do seu novo <br><span>Carro</span> está a um click</h1>
        <p>Confira nosso estoque de veículos premium —<br>diversas marcas, modelos e valores.</p>
        <router-link to="/car-section" class="btn">Confira Agora</router-link>
      </div>
    </section>

    <section class="cars" id="cars">
      <div class="heading reveal">
        <span>Todas as Marcas</span>
        <h2>Temos todos os tipos de Carros Premium</h2>
        <p>Nosso estoque possui as marcas mais exclusivas do mundo — confira já!</p>
      </div>
      <div class="cars-container container">
        <router-link
          class="box reveal"
          v-for="brand in brands"
          :key="brand.name"
          :to="{ path: '/car-section', query: { marca: brand.name } }"
        >
          <img :src="brand.image" :alt="brand.name">
          <h2>{{ brand.name }}</h2>
        </router-link>
      </div>
    </section>

    <section class="about container" id="about">
      <div class="about-img reveal">
        <img src="../assets/img/about.png" alt="Frota de carros premium LuxCars">
      </div>
      <div class="about-text reveal">
        <span>Sobre Nós</span>
        <h2>Possuímos a Maior Coleção de <br>Carros Premium do Brasil</h2>
        <p>Nosso estoque conta com mais de 250 carros premium de alto padrão. Desde 2010 entregamos esportividade, luxo e exclusividade aos nossos clientes.</p>
        <div class="about-stats">
          <div class="stat">
            <strong>250+</strong>
            <small>Veículos</small>
          </div>
          <div class="stat">
            <strong>14</strong>
            <small>Anos de mercado</small>
          </div>
          <div class="stat">
            <strong>9</strong>
            <small>Marcas premium</small>
          </div>
        </div>
        <a href="#" class="btn">Saiba Mais</a>
      </div>
    </section>

    <section class="parts" id="parts">
      <div class="heading reveal">
        <span>Peças Disponíveis</span>
        <h2>Seu Carro sempre bem cuidado</h2>
        <p>Componentes 100% originais comprados diretamente dos fabricantes</p>
      </div>
      <div class="parts-container container">
        <div class="box reveal" v-for="part in parts" :key="part.name">
          <img :src="part.image" :alt="part.name">
          <h3>{{ part.name }}</h3>
          <span class="price">{{ formatPrice(part.price) }}</span>
          <div class="stars">
            <i class="bx bxs-star" v-for="n in part.rating" :key="'f' + n"></i>
            <i class="bx bxs-star empty" v-for="n in (5 - part.rating)" :key="'e' + n"></i>
            <small>({{ part.reviews }} reviews)</small>
          </div>
          <a href="#" class="btn">Compre Já</a>
          <a href="#" class="details">Veja os detalhes</a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-container container">
        <div class="footer-box">
          <a href="#" class="logo">Lux<span>Cars</span></a>
          <p class="footer-desc">Carros premium para quem vive intensamente.</p>
          <div class="social">
            <a href="#" aria-label="Facebook"><i class="bx bxl-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i class="bx bxl-instagram"></i></a>
            <a href="#" aria-label="GitHub"><i class="bx bxl-github"></i></a>
            <a href="#" aria-label="Twitter"><i class="bx bxl-twitter"></i></a>
          </div>
        </div>
        <div class="footer-box">
          <h3>Páginas</h3>
          <a @click.prevent="scrollTo('home')" href="#">Home</a>
          <a @click.prevent="scrollTo('cars')" href="#">Carros</a>
          <a @click.prevent="scrollTo('parts')" href="#">Peças</a>
          <a @click.prevent="scrollTo('about')" href="#">Sobre</a>
        </div>
        <div class="footer-box">
          <h3>Legal</h3>
          <a href="#">Privacidade</a>
          <a href="#">Política de Devolução</a>
          <a href="#">Política de Cookies</a>
        </div>
        <div class="footer-box">
          <h3>Contato</h3>
          <p><i class="bx bx-map"></i> Brasil</p>
          <p><i class="bx bx-map"></i> USA</p>
          <p><i class="bx bx-map"></i> Dubai</p>
        </div>
      </div>
    </footer>
    <div class="copyright">
      <p>© 2024 Lux Cars — Todos os Direitos Reservados.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginaInicial',
  data() {
    return {
      brands: [
        { name: 'Porsche', image: require('../assets/img/carr1.jpg') },
        { name: 'Ferrari', image: require('../assets/img/carr2.webp') },
        { name: 'Lamborghini', image: require('../assets/img/carr3.webp') },
        { name: 'McLaren', image: require('../assets/img/carr8.webp') },
        { name: 'Mercedes-Benz AMG', image: require('../assets/img/carr4.webp') },
        { name: 'BMW', image: require('../assets/img/carr5.jpeg') },
        { name: 'Audi', image: require('../assets/img/carr6.webp') },
        { name: 'Aston Martin', image: require('../assets/img/carr9.jpg') },
        { name: 'Volvo', image: require('../assets/img/carr7.webp') },
      ],
      parts: [
        { name: 'Kit Turbo Porsche 911', price: 12000, rating: 4, reviews: 7, image: require('../assets/img/partt1.jpg') },
        { name: 'Kit Supercharged Híbrido', price: 19000, rating: 4, reviews: 4, image: require('../assets/img/partt2.webp') },
        { name: 'Pneu 20" Michelin Pilot Sport Cup', price: 16000, rating: 5, reviews: 16, image: require('../assets/img/partt3.webp') },
        { name: 'Filtro de Ar Motec', price: 190, rating: 5, reviews: 27, image: require('../assets/img/part4.png') },
        { name: 'Jogo 4 Rodas OZ 20"', price: 7989, rating: 4, reviews: 12, image: require('../assets/img/part6.png') },
        { name: 'Kit Suspensão a Ar Castor', price: 9000, rating: 4, reviews: 8, image: require('../assets/img/partt4.webp') },
      ],
    };
  },
  mounted() {
    this.setupReveal();
  },
  methods: {
    setupReveal() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      this.$el.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    },
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    },
    formatPrice(price) {
      return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
  },
};
</script>

<style scoped>
section {
  padding: 5rem 0 2rem;
}

/* Reveal */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Home */
.home {
  margin: auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url(../assets/img/Background-home.png) no-repeat center / cover;
  position: relative;
}

.home::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6) 45%, rgba(0, 0, 0, 0.1));
}

.home-text {
  padding-left: 100px;
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.home-text .tag {
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 14px;
  border-radius: 2rem;
  margin-bottom: 1.2rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.home-text h1 {
  font-size: 3.2rem;
  color: #fff;
  line-height: 1.15;
  font-weight: 700;
}

.home-text span {
  color: var(--primary-color);
}

.home-text p {
  font-size: 1rem;
  font-weight: 300;
  margin: 1.2rem 0 2rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: var(--primary-color);
  color: #fff !important;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 4px;
  letter-spacing: 0.3px;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
  background: #f50029;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(217, 4, 41, 0.35);
}

/* Cars */
.heading {
  text-align: center;
}

.heading span {
  font-weight: 600;
  color: var(--primary-color);
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1.5px;
}

.heading h2 {
  font-size: 1.9rem;
  margin: 0.5rem 0 0.4rem;
}

.heading p {
  font-size: 0.93rem;
  font-weight: 300;
  color: #666;
}

.cars-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.cars-container .box {
  flex: 1 1 17rem;
  position: relative;
  height: 220px;
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;
}

.cars-container .box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.cars-container .box:hover img {
  transform: scale(1.08);
}

.cars-container .box h2 {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-weight: 500;
  font-size: 0.9rem;
  background: var(--bg-color);
  padding: 6px 14px;
  border-radius: 4px;
  transition: background 0.25s, color 0.25s;
}

.cars-container .box:hover h2 {
  background: var(--primary-color);
  color: #fff;
}

/* About */
.about {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3.5rem;
}

.about-img {
  flex: 1 1 21rem;
}

.about-text {
  flex: 1 1 21rem;
}

.about-text > span {
  font-weight: 600;
  color: var(--primary-color);
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1.5px;
}

.about-text h2 {
  font-size: 1.6rem;
  margin: 0.6rem 0 0.8rem;
}

.about-text p {
  font-size: 0.92rem;
  color: #555;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

.about-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.8rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat strong {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
}

.stat small {
  font-size: 0.8rem;
  color: #777;
  margin-top: 4px;
}

/* Parts */
.parts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.parts-container .box {
  flex: 1 1 17rem;
  position: relative;
  padding: 22px;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  border-radius: 0.75rem;
  transition: box-shadow 0.3s, transform 0.3s;
}

.parts-container .box:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.parts-container .box img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.parts-container .box h3 {
  font-size: 1rem;
  font-weight: 600;
}

.parts-container .box .price {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0.4rem 0;
}

.stars {
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 0.5rem 0 1rem;
  font-size: 0.9rem;
}

.stars .bx {
  color: var(--primary-color);
}

.stars .bx.empty {
  color: #ddd;
}

.stars small {
  color: #888;
  margin-left: 5px;
  font-size: 0.78rem;
}

.parts-container .box .btn {
  max-width: 140px;
  text-align: center;
  padding: 9px 18px;
  font-size: 0.88rem;
}

.details {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1.8rem;
  right: 1.2rem;
  font-size: 0.85rem;
  color: #666;
  transition: color 0.2s;
}

.details:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

/* Footer */
.footer {
  background: var(--text-color);
  color: #f6f6f6;
  border-top: 2px solid var(--primary-color);
  padding: 3.5rem 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.footer-container .logo {
  color: var(--bg-color);
  display: inline-block;
  margin-bottom: 0.5rem;
}

.footer-desc {
  font-size: 0.83rem;
  color: #777;
  margin: 0.4rem 0 1.2rem;
  max-width: 200px;
  line-height: 1.6;
}

.footer-container .footer-box {
  display: flex;
  flex-direction: column;
}

.social {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.social a {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #333;
  color: var(--bg-color);
  font-size: 18px;
  transition: background 0.2s, border-color 0.2s;
}

.social a:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.footer-box h3 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-box a,
.footer-box p {
  color: #777;
  margin-bottom: 0.6rem;
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
}

.footer-box a:hover {
  color: var(--primary-color);
}

.copyright {
  padding: 16px;
  text-align: center;
  color: #555;
  background: var(--text-color);
  font-size: 0.82rem;
  border-top: 1px solid #1a1a1a;
}

/* Responsive */
@media (max-width: 991px) {
  .home-text {
    padding-left: 2.5rem;
  }
  .home-text h1 {
    font-size: 2.4rem;
  }
}

@media (max-width: 727px) {
  .about {
    flex-direction: column-reverse;
  }
  .about-text {
    text-align: center;
  }
  .about-stats {
    justify-content: center;
  }
  .home-text h1 {
    font-size: 2rem;
  }
}

@media (max-width: 607px) {
  .footer-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .home-text {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .home-text h1 {
    font-size: 1.7rem;
  }
  .about-stats {
    gap: 1.2rem;
  }
}
</style>
