<template>
    <div class="border-box">
        <div class="nav-container">
            <nuxt-link to="/">
                <div class="logo" @click="homeClick">Logo</div>
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
    </div>
</template>

<script>
/* eslint-disable no-console */
import NavItem from '~/components/NavItem';
import navItems from '~/assets/json-data/navItems';

export default {
    components: {
        NavItem,
    },
    data() {
        return {
            selectedItem: 'ethos',
            navItems: [],
        };
    },
    mounted() {
        this.navItems = navItems;
    },
    methods: {
        clicked(item) {
            this.selectedItem = item;
        },
        homeClick() {
            this.selectedItem = 'ethos';
        },
    },
};
</script>

<style scoped>
.border-box {
    border: 1px solid black;
}
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
    /* font-size: 140px; */
    padding-top: 60px;
    font-size: 60px;
    text-align: center;
    background-color: transparent;
    color: white;
}
.nav-items-container {
    height: 70%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
}
.spacer-bottom {
    height: 50px;
}
.spacer-top {
    height: 80px;
}
</style>
