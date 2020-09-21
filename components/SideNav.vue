<template>
    <div class="nav-container">
        <nuxt-link to="/">
            <div class="logo" @click="homeClick">😼</div>
        </nuxt-link>
        <div class="nav-items-container">
            <div class="spacer-top"></div>
            <NavItem
                v-for="item in navItems"
                :key="item.name"
                :item="item"
                :selected-item="selectedItem"
                @somethingClicked="clicked"
            />
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
            selectedItem: 'null',
            navItems: [
                {
                    name: 'Ethos',
                    route: '/sections/ethos',
                    classes: ['nav-item', 'ethos'],
                },
                {
                    name: 'Projects',
                    route: '/sections/projects',
                    classes: ['nav-item', 'projects'],
                },
                {
                    name: 'Portfolio',
                    route: '/sections/portfolio',
                    classes: ['nav-item', 'portfolio'],
                },
                {
                    name: 'Testimonials',
                    route: '/sections/testimonials',
                    classes: ['nav-item', 'testimonials'],
                },
                {
                    name: 'Services',
                    route: '/sections/services',
                    classes: ['nav-item', 'services'],
                },
                {
                    name: 'Contact',
                    route: '/sections/contact',
                    classes: ['nav-item', 'contact'],
                },
            ],
        }
    },
    comonents: {
        NavItem,
    },
    methods: {
        clicked(item) {
            this.selectedItem = item
        },
        homeClick() {
            this.selectedItem = ''
        },
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
