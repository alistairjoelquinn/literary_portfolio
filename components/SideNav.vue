<template>
    <div class="nav-container">
        <div class="logo">😼</div>
        <div v-for="item in navItems" :key="item.name" class="nav-item">
            {{ item.name }}
        </div>
    </div>
</template>

<script>
/* eslint-disable no-console */
export default {
    data() {
        return {
            navItems: [
                {
                    name: 'Ethos',
                    route: '/ethos',
                    color: 'blue',
                },
                {
                    name: 'Projects',
                    route: '/projects',
                    color: 'white',
                },
                {
                    name: 'Portfolio',
                    route: '/portfolio',
                    color: 'green',
                },
                {
                    name: 'Testimonials',
                    route: '/testimonials',
                    color: 'pink',
                },
                {
                    name: 'Services',
                    route: '/services',
                    color: 'orange',
                },
                {
                    name: 'Contact',
                    route: '/contact',
                    color: 'dimgrey',
                },
            ],
        }
    },
    mounted() {
        console.log(this.navItems)
    },
}
</script>

<style scoped>
.nav-container {
    height: 100vh;
    width: 20vw;
    background-color: pink;
}
.logo {
    width: 100%;
    font-size: 180px;
    text-align: center;
}
.nav-item {
    text-align: center;
    font-size: 35px;
    transform: rotate(-30deg);
    padding-bottom: 10px;
    border-top: 1px solid black;
}
</style>
