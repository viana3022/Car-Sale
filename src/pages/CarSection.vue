<template>
  <div class="page-catalog">
    <section class="banner" id="banner">
      <div class="banner-text">
        <span class="tag">Catálogo Completo</span>
        <h1>Encontre o <span>Carro</span> dos seus sonhos</h1>
        <p>Mais de 250 veículos premium disponíveis para você.</p>
      </div>
    </section>

    <section class="catalog">
      <div class="container">
        <div class="catalog-header">
          <div class="heading">
            <span>Nosso Estoque</span>
            <h2>Galeria de Veículos</h2>
          </div>
          <div class="filters">
            <button
              v-for="brand in filterOptions"
              :key="brand"
              :class="['filter-btn', { active: selectedBrand === brand }]"
              @click="selectedBrand = brand"
            >
              {{ brand }}
            </button>
          </div>
        </div>

        <transition-group name="grid" tag="div" class="car-grid">
          <div class="car-card" v-for="car in filteredCars" :key="car.id">
            <div class="car-img">
              <img :src="car.image" :alt="car.brand + ' ' + car.model">
              <span class="badge" :class="car.condition === 'Novo' ? 'badge-new' : ''">{{ car.condition }}</span>
            </div>
            <div class="car-info">
              <span class="brand-tag">{{ car.brand }}</span>
              <h3>{{ car.model }}</h3>
              <div class="car-meta">
                <span><i class="bx bx-calendar"></i> {{ car.year }}</span>
                <span><i class="bx bx-tachometer"></i> {{ car.km.toLocaleString('pt-BR') }} km</span>
              </div>
              <div class="car-footer">
                <strong class="price">{{ formatPrice(car.price) }}</strong>
                <router-link :to="'/car/' + car.id" class="btn-card">Ver Detalhes</router-link>
              </div>
            </div>
          </div>
        </transition-group>

        <div v-if="filteredCars.length === 0" class="no-results">
          <i class="bx bx-car"></i>
          <p>Nenhum veículo encontrado para esta marca.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import cars from '../data/cars';

export default {
  name: 'CarSection',
  data() {
    return {
      selectedBrand: 'Todos',
      cars,
    };
  },
  mounted() {
    const marca = this.$route.query.marca;
    if (marca && this.cars.some((c) => c.brand === marca)) {
      this.selectedBrand = marca;
    }
  },
  computed: {
    filterOptions() {
      return ['Todos', ...new Set(this.cars.map((c) => c.brand))];
    },
    filteredCars() {
      if (this.selectedBrand === 'Todos') return this.cars;
      return this.cars.filter((c) => c.brand === this.selectedBrand);
    },
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
  },
};
</script>

<style scoped>
/* Banner */
.banner {
  width: 100%;
  min-height: 65vh;
  display: flex;
  align-items: center;
  background: url(../assets/img/Background-home.png) no-repeat center / cover;
  position: relative;
}

.banner::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.1));
}

.banner-text {
  padding-left: 100px;
  position: relative;
  z-index: 1;
  max-width: 560px;
}

.banner-text .tag {
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

.banner-text h1 {
  font-size: 2.8rem;
  color: #fff;
  line-height: 1.2;
  font-weight: 700;
}

.banner-text span {
  color: var(--primary-color);
}

.banner-text p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
  font-weight: 300;
}

/* Catalog */
.catalog {
  padding: 4rem 0 5rem;
}

.catalog-header {
  margin-bottom: 3rem;
}

.heading {
  text-align: center;
  margin-bottom: 2rem;
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
  margin-top: 0.5rem;
}

/* Filters */
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.filter-btn {
  padding: 8px 22px;
  border: 2px solid #e0e0e0;
  background: transparent;
  border-radius: 2rem;
  font-size: 0.88rem;
  font-family: Poppins;
  font-weight: 500;
  cursor: pointer;
  color: #555;
  transition: all 0.22s ease;
}

.filter-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.filter-btn.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
}

/* Car Grid */
.car-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 2rem;
}

.car-card {
  background: #fff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.car-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.13);
}

.car-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.car-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.car-card:hover .car-img img {
  transform: scale(1.07);
}

.badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 2rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.badge.badge-new {
  background: var(--primary-color);
}

.car-info {
  padding: 1.3rem;
}

.brand-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.car-info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.2rem 0 0.8rem;
  color: var(--text-color);
}

.car-meta {
  display: flex;
  gap: 1.2rem;
  font-size: 0.83rem;
  color: #888;
  margin-bottom: 1.2rem;
}

.car-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.car-meta .bx {
  font-size: 1rem;
  color: #aaa;
}

.car-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f0f0f0;
  padding-top: 1rem;
}

.price {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-color);
}

.btn-card {
  padding: 8px 18px;
  background: var(--primary-color);
  color: #fff !important;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 4px;
  letter-spacing: 0.2px;
  transition: background 0.2s, transform 0.2s;
}

.btn-card:hover {
  background: #f50029;
  transform: translateY(-1px);
}

/* No results */
.no-results {
  text-align: center;
  color: #aaa;
  padding: 4rem;
}

.no-results .bx {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  display: block;
}

.no-results p {
  font-size: 1rem;
}

/* Grid transition */
.grid-enter-active,
.grid-leave-active {
  transition: all 0.3s ease;
}
.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Responsive */
@media (max-width: 991px) {
  .banner-text {
    padding-left: 2.5rem;
  }
  .banner-text h1 {
    font-size: 2.2rem;
  }
}

@media (max-width: 600px) {
  .banner-text {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .banner-text h1 {
    font-size: 1.8rem;
  }
  .car-grid {
    grid-template-columns: 1fr;
  }
}
</style>
