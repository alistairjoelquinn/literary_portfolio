<template>
    <div class="nav-container">
        <div class="logo">😼</div>
        <NavItem v-for="item in navItems" :key="item.name" :item="item" />
    </div>
</template>

<script>
/* eslint-disable no-console */
import NavItem from '~/components/NavItem'

export default {
    data() {
        return {
            navItems: [
                {
                    name: 'Ethos',
                    route: '/sections/ethos',
                    color: 'background-color:blue;',
                },
                {
                    name: 'Projects',
                    route: '/sections/projects',
                    color: 'background-color:purple;',
                },
                {
                    name: 'Portfolio',
                    route: '/sections/portfolio',
                    color: 'background-color:green;',
                },
                {
                    name: 'Testimonials',
                    route: '/sections/testimonials',
                    color: 'background-color:red;',
                },
                {
                    name: 'Services',
                    route: '/sections/services',
                    color: 'background-color:orange;',
                },
                {
                    name: 'Contact',
                    route: '/sections/contact',
                    color: 'background-color:dimgrey;',
                },
            ],
        }
    },
    comonents: {
        NavItem,
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
</style>
