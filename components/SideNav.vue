<template>
    <div class="nav-container">
        <nuxt-link to="/">
            <div class="logo">😼</div>
        </nuxt-link>
        <div class="nav-items-container">
            <div class="spacer"></div>
            <NavItem v-for="item in navItems" :key="item.name" :item="item" />
            <div class="spacer"></div>
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
}
.logo {
    width: 100%;
    font-size: 140px;
    text-align: center;
}
.nav-items-container {
    height: 70%;
    /* transform: translateY(-30px); */
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}
.spacer {
    height: 50px;
}
</style>
