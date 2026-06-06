<template>
  <div v-if="car" class="page-details">

    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
      <div class="container breadcrumb-inner">
        <router-link to="/">Home</router-link>
        <i class="bx bx-chevron-right"></i>
        <router-link to="/car-section">Catálogo</router-link>
        <i class="bx bx-chevron-right"></i>
        <span>{{ car.brand }} {{ car.model }}</span>
      </div>
    </div>

    <!-- Main -->
    <section class="detail-main container">
      <div class="detail-image-wrap">
        <img :src="car.image" :alt="car.brand + ' ' + car.model" class="main-photo">
        <span class="badge" :class="{ 'badge-new': car.condition === 'Novo' }">{{ car.condition }}</span>
      </div>

      <div class="detail-info">
        <span class="brand-label">{{ car.brand }}</span>
        <h1>{{ car.model }}</h1>

        <div class="meta-row">
          <span><i class="bx bx-calendar"></i> {{ car.year }}</span>
          <span><i class="bx bx-tachometer"></i> {{ car.km.toLocaleString('pt-BR') }} km</span>
          <span><i class="bx bxs-gas-station"></i> {{ car.fuel }}</span>
          <span><i class="bx bx-door-open"></i> {{ car.doors }} portas</span>
        </div>

        <div class="price-block">
          <small>Preço</small>
          <strong class="price">{{ formatPrice(car.price) }}</strong>
          <small class="parcel">ou em até 48x de {{ formatPrice(Math.ceil(car.price / 48)) }}</small>
        </div>

        <div class="cta-group">
          <a href="#" class="btn-primary">
            <i class="bx bx-calendar-check"></i> Agendar Test Drive
          </a>
          <a href="#" class="btn-whatsapp">
            <i class="bx bxl-whatsapp"></i> Falar no WhatsApp
          </a>
        </div>

        <ul class="highlights">
          <li v-for="h in car.highlights" :key="h">
            <i class="bx bx-check-circle"></i> {{ h }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Description -->
    <section class="detail-desc container">
      <h2>Sobre o Veículo</h2>
      <p>{{ car.description }}</p>
    </section>

    <!-- Specs -->
    <section class="detail-specs">
      <div class="container">
        <h2>Especificações Técnicas</h2>
        <div class="specs-grid">
          <div class="spec-card" v-for="spec in specsList" :key="spec.label">
            <i :class="'bx ' + spec.icon"></i>
            <div class="spec-text">
              <small>{{ spec.label }}</small>
              <strong>{{ spec.value }}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Similar Cars -->
    <section class="similar container" v-if="similarCars.length">
      <h2>Veículos Similares</h2>
      <div class="similar-grid">
        <router-link
          class="sim-card"
          v-for="s in similarCars"
          :key="s.id"
          :to="'/car/' + s.id"
        >
          <div class="sim-img">
            <img :src="s.image" :alt="s.brand + ' ' + s.model">
          </div>
          <div class="sim-info">
            <span class="brand-label">{{ s.brand }}</span>
            <h3>{{ s.model }}</h3>
            <div class="sim-meta">
              <span>{{ s.year }}</span>
              <span>{{ s.km.toLocaleString('pt-BR') }} km</span>
            </div>
            <strong class="sim-price">{{ formatPrice(s.price) }}</strong>
          </div>
        </router-link>
      </div>
    </section>

  </div>

  <!-- Not found -->
  <div v-else class="not-found container">
    <i class="bx bx-car"></i>
    <h2>Veículo não encontrado</h2>
    <router-link to="/car-section" class="btn-back">Ver catálogo completo</router-link>
  </div>
</template>

<script>
import cars from '../data/cars';

export default {
  name: 'CarDetails',
  data() {
    return { cars };
  },
  computed: {
    car() {
      const id = parseInt(this.$route.params.id);
      return this.cars.find((c) => c.id === id) || null;
    },
    specsList() {
      if (!this.car) return [];
      return [
        { label: 'Motor', value: this.car.engine, icon: 'bx-cog' },
        { label: 'Potência', value: this.car.power, icon: 'bxs-zap' },
        { label: 'Torque', value: this.car.torque, icon: 'bx-wrench' },
        { label: 'Câmbio', value: this.car.transmission, icon: 'bx-slider-alt' },
        { label: 'Combustível', value: this.car.fuel, icon: 'bxs-gas-station' },
        { label: 'Tração', value: this.car.traction, icon: 'bx-car' },
        { label: 'Cor', value: this.car.color, icon: 'bxs-color-fill' },
        { label: 'Portas', value: this.car.doors + ' portas', icon: 'bx-door-open' },
        { label: 'Lugares', value: this.car.seats + ' lugares', icon: 'bxs-group' },
        { label: 'Quilometragem', value: this.car.km.toLocaleString('pt-BR') + ' km', icon: 'bx-tachometer' },
        { label: 'Ano', value: this.car.year, icon: 'bx-calendar' },
        { label: 'Condição', value: this.car.condition, icon: 'bxs-badge-check' },
      ];
    },
    similarCars() {
      if (!this.car) return [];
      const sameBrand = this.cars.filter((c) => c.brand === this.car.brand && c.id !== this.car.id);
      if (sameBrand.length >= 3) return sameBrand.slice(0, 3);
      const priceMargin = this.car.price * 0.6;
      const byPrice = this.cars.filter(
        (c) => c.id !== this.car.id && !sameBrand.find((s) => s.id === c.id) && Math.abs(c.price - this.car.price) < priceMargin
      );
      return [...sameBrand, ...byPrice].slice(0, 3);
    },
  },
  methods: {
    formatPrice(v) {
      return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
  },
};
</script>

<style scoped>
.page-details {
  padding-top: 80px;
}

/* Breadcrumb */
.breadcrumb-bar {
  background: #f5f5f5;
  border-bottom: 1px solid #e8e8e8;
  padding: 12px 0;
}

.breadcrumb-inner {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: #888;
}

.breadcrumb-inner a {
  color: #666;
  transition: color 0.2s;
}

.breadcrumb-inner a:hover {
  color: var(--primary-color);
}

.breadcrumb-inner span {
  color: var(--text-color);
  font-weight: 500;
}

.breadcrumb-inner .bx {
  font-size: 1rem;
  color: #bbb;
}

/* Main layout */
.detail-main {
  display: flex;
  gap: 3rem;
  padding: 3rem 0;
  align-items: flex-start;
}

.detail-image-wrap {
  flex: 0 0 58%;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background: #f0f0f0;
}

.main-photo {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}

.badge {
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  background: rgba(0,0,0,0.55);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge.badge-new {
  background: var(--primary-color);
}

/* Info panel */
.detail-info {
  flex: 1;
  padding-top: 0.5rem;
}

.brand-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.detail-info h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0.3rem 0 1rem;
  line-height: 1.2;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.meta-row span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.meta-row .bx {
  color: var(--primary-color);
  font-size: 1rem;
}

/* Price */
.price-block {
  margin-bottom: 1.8rem;
}

.price-block small {
  display: block;
  font-size: 0.78rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.price {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-color);
  line-height: 1;
}

.parcel {
  display: block;
  font-size: 0.82rem;
  color: #888;
  margin-top: 6px;
}

/* CTA */
.cta-group {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.8rem;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 12px 22px;
  background: var(--primary-color);
  color: #fff !important;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 6px;
  transition: background 0.2s, transform 0.2s;
}

.btn-primary:hover {
  background: #f50029;
  transform: translateY(-2px);
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 12px 22px;
  background: #25d366;
  color: #fff !important;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 6px;
  transition: background 0.2s, transform 0.2s;
}

.btn-whatsapp:hover {
  background: #1ebe5c;
  transform: translateY(-2px);
}

/* Highlights */
.highlights {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #f8f8f8;
  border-radius: 0.75rem;
  padding: 1.2rem 1.4rem;
  border-left: 3px solid var(--primary-color);
}

.highlights li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: #444;
}

.highlights .bx {
  color: var(--primary-color);
  font-size: 1.1rem;
  flex-shrink: 0;
}

/* Description */
.detail-desc {
  padding: 2.5rem 0;
  border-top: 1px solid #eee;
}

.detail-desc h2 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.detail-desc p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.85;
  max-width: 820px;
}

/* Specs */
.detail-specs {
  background: #0f0f0f;
  padding: 3rem 0;
}

.detail-specs h2 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2rem;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1px;
  background: #1a1a1a;
  border-radius: 0.75rem;
  overflow: hidden;
}

.spec-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.3rem 1.5rem;
  background: #161616;
  transition: background 0.2s;
}

.spec-card:hover {
  background: #1e1e1e;
}

.spec-card > .bx {
  font-size: 1.6rem;
  color: var(--primary-color);
  flex-shrink: 0;
}

.spec-text {
  display: flex;
  flex-direction: column;
}

.spec-text small {
  font-size: 0.72rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.spec-text strong {
  font-size: 0.9rem;
  color: #e0e0e0;
  margin-top: 3px;
  font-weight: 500;
}

/* Similar */
.similar {
  padding: 3.5rem 0;
}

.similar h2 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.similar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.sim-card {
  background: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s, box-shadow 0.3s;
  display: block;
}

.sim-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.sim-img {
  height: 180px;
  overflow: hidden;
}

.sim-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.sim-card:hover .sim-img img {
  transform: scale(1.06);
}

.sim-info {
  padding: 1.1rem;
}

.sim-info h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.2rem 0 0.6rem;
}

.sim-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 0.6rem;
}

.sim-price {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-color);
}

/* Not found */
.not-found {
  padding: 8rem 0;
  text-align: center;
}

.not-found .bx {
  font-size: 4rem;
  color: #ccc;
  display: block;
  margin-bottom: 1rem;
}

.not-found h2 {
  font-size: 1.4rem;
  color: #888;
  margin-bottom: 1.5rem;
}

.btn-back {
  display: inline-block;
  padding: 12px 28px;
  background: var(--primary-color);
  color: #fff !important;
  font-weight: 600;
  border-radius: 6px;
  transition: background 0.2s;
}

.btn-back:hover {
  background: #f50029;
}

/* Responsive */
@media (max-width: 900px) {
  .detail-main {
    flex-direction: column;
  }
  .detail-image-wrap {
    flex: none;
    width: 100%;
  }
  .main-photo {
    height: 300px;
  }
}

@media (max-width: 600px) {
  .detail-info h1 {
    font-size: 1.5rem;
  }
  .price {
    font-size: 1.6rem;
  }
  .cta-group {
    flex-direction: column;
  }
  .btn-primary, .btn-whatsapp {
    justify-content: center;
  }
  .specs-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
