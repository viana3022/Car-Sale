<template>
  <header :class="{ shadow: scrolled }">
    <div class="nav container">
      <i class="bx bx-menu" id="menu-icon" @click="toggleMenu"></i>
      <router-link to="/" class="logo">Lux<span>Cars</span></router-link>
      <ul class="navbar" :class="{ active: menuOpen }">
        <li><a @click.prevent="goTo('home')" href="#" :class="{ active: $route.path === '/' && activeSection === 'home' }">Home</a></li>
        <li><router-link to="/car-section" :class="{ active: $route.path === '/car-section' }" @click="menuOpen = false">Carros</router-link></li>
        <li><a @click.prevent="goTo('parts')" href="#" :class="{ active: $route.path === '/' && activeSection === 'parts' }">Peças</a></li>
        <li><a @click.prevent="goTo('about')" href="#" :class="{ active: $route.path === '/' && activeSection === 'about' }">Sobre</a></li>
      </ul>
      <i class="bx bx-search" id="search-icon" @click="toggleSearch"></i>
      <div class="search-box container" :class="{ active: searchOpen }">
        <input type="search" placeholder="Pesquise aqui" v-model="searchQuery">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuOpen: false,
      searchOpen: false,
      scrolled: false,
      searchQuery: '',
      activeSection: 'home',
      observer: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    if (this.$route.path === '/') {
      setTimeout(this.setupObserver, 150);
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    if (this.observer) this.observer.disconnect();
  },
  watch: {
    $route(to) {
      if (to.path === '/') {
        this.$nextTick(() => setTimeout(this.setupObserver, 150));
      } else {
        if (this.observer) this.observer.disconnect();
        this.activeSection = 'home';
      }
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.searchOpen = false;
    },
    toggleSearch() {
      this.searchOpen = !this.searchOpen;
      this.menuOpen = false;
    },
    onScroll() {
      this.scrolled = window.scrollY > 0;
      this.menuOpen = false;
      this.searchOpen = false;
    },
    goTo(sectionId) {
      this.menuOpen = false;
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          });
        });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    setupObserver() {
      if (this.observer) this.observer.disconnect();
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) this.activeSection = entry.target.id;
          });
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
      );
      ['home', 'cars', 'parts', 'about'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) this.observer.observe(el);
      });
    },
  },
};
</script>

<style>
@import url(../global.css);

.container {
  max-width: 1068px;
  margin-left: auto;
  margin-right: auto;
}

header {
  display: block;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

header.shadow {
  background: var(--bg-color);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

header.shadow #search-icon {
  color: var(--text-color);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 35px;
}

#menu-icon {
  font-size: 24px;
  cursor: pointer;
  color: var(--text-color);
  display: none;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
}

.logo span {
  color: var(--primary-color);
}

.navbar {
  display: flex;
  column-gap: 2rem;
}

.navbar a {
  color: var(--text-color);
  font-size: 0.95rem;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: color 0.2s;
  padding-bottom: 3px;
  border-bottom: 3px solid transparent;
}

.navbar a:hover,
.navbar a.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

#search-icon {
  font-size: 24px;
  cursor: pointer;
  color: var(--bg-color);
  transition: color 0.2s;
}

.search-box {
  position: absolute;
  top: 110%;
  right: 0;
  left: 0;
  background: var(--bg-color);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--primary-color);
  border-radius: 0.5rem;
  clip-path: circle(0% at 100% 0%);
  transition: clip-path 0.35s ease;
}

.search-box.active {
  clip-path: circle(144% at 100% 0%);
}

.search-box input {
  width: 100%;
  padding: 20px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  font-family: Poppins;
}
</style>
