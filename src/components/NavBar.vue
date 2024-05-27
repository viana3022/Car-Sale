<template>
    <header>
        <!--Nav Container-->
            <div class="nav container">
        <!--Icone menu-->
            <i class="bx bx-menu" id="menu-icon"></i>
        <!--Logo-->
            <a href="#" class="logo">Lux<span>Cars</span></a>
        <!--Nav List-->
        <ul class="navbar">
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#cars">Carros</a></li>
            <li><a href="#parts">Peças</a></li>
            <li><a href="#about">Sobre</a></li>
        </ul>
        <!--Search Icon-->
            <i class="bx bx-search" id="search-icon"></i>
        <!--Search Box-->
            <div class="search-box container">
                <input type="search" name="" id="" placeholder="Pesquise aqui">
            </div>
    </div>
    </header>
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return{

    };
    },
    mounted() {
        this.$nextTick(() => {
            let search = document.querySelectorAll('.search-box')[0];

            document.querySelector('#search-icon').onclick = () => {
            search.classList.toggle('active');
            };
        });
}

}
</script>

<style>

@import url(../components/style/global.css);

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
        font-size: 1.2rem;
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

    .navbar a{
        color: var(--text-color);
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 500;
    }

    .navbar a:hover, 
    .navbar .active{
        color: var(--primary-color);
        border-bottom: 3px solid var(--primary-color);
    }

    #search-icon{
        font-size: 24px;
        cursor: pointer;
        color: var(--bg-color);
    }

    .search-box{
        position: absolute;
        top: 110%;
        right: 0;
        left: 0;
        background: var(--bg-color);
        box-shadow: 4px 4px 20px rgb(15 54 55 / 10%);
        border: 1px solid var(--primary-color);
        border-radius: 0.5rem;
        clip-path: circle(0% at 100% 0%);
    }

    .search-box.active{
        clip-path: circle(144% at 100% 0%);
        transition: 0.3s;
    }
    
    .search-box input{
        width: 100%;
        padding: 20px;
        border: none;
        outline: none;
        background: transparent;
        font-size: 1rem;
    }



</style>