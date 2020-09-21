<template>
    <div class="nav-container">
        <nuxt-link to="/">
            <div class="logo">😼</div>
        </nuxt-link>
        <div class="nav-items-container">
            <div class="spacer-top"></div>
            <NavItem v-for="item in navItems" :key="item.name" :item="item" />
            <div class="spacer-bottom"></div>
        </div>
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
                    color: 'ethos',
                },
                {
                    name: 'Projects',
                    route: '/sections/projects',
                    color: 'projects',
                },
                {
                    name: 'Portfolio',
                    route: '/sections/portfolio',
                    color: 'portfolio',
                },
                {
                    name: 'Testimonials',
                    route: '/sections/testimonials',
                    color: 'testimonials',
                },
                {
                    name: 'Services',
                    route: '/sections/services',
                    color: 'services',
                },
                {
                    name: 'Contact',
                    route: '/sections/contact',
                    color: 'contact',
                },
            ],
        }
    },
    comonents: {
        NavItem,
    },
    mounted() {
        console.log('nav container is mounting')
    },
}
</script>

<style scoped>
.nav-container {
    height: 100vh;
    width: 20vw;
    background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
    border-right: none;
}
.logo {
    width: 100%;
    font-size: 140px;
    text-align: center;
    background-color: transparent;
}
.nav-items-container {
    height: 70%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}
.spacer-bottom {
    height: 50px;
}
.spacer-top {
    height: 80px;
}
</style>
