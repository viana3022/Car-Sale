<template>
    <div class="nav-container">
        <!--Icone menu-->
        <i class="bx bx-menu" id="menu-icon"></i>
        <!--Logo-->
        <a href="#" class="logo">Lux Cars</a>
        <!--Nav List-->
        <ul class="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#cars">Carros</a></li>
            <li><a href="#parts">Peças</a></li>
            <li><a href="#about">Sobre</a></li>
        </ul>
        <!--Search-->
        <i class="bx bx-search" id="search-icon"></i>
        <!--Search Box-->
        <div class="search-box">
            <input type="search" name="" id="" placeholder="Pesquise aqui">
        </div>
    </div>
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return{

        }
    }

}
</script>

<style>
    .container{
        max-width: 1068px;
        margin-left: auto;
        margin-right: auto;
    }

    header{
        display: block;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
    }

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 35px;
    }


</style>