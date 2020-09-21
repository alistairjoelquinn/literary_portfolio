<template>
    <nuxt-link :to="item.route">
        <div
            :class="classes"
            :style="item.color"
            @mouseover="fontGrow"
            @mouseout="fontShrink"
        >
            {{ item.name }}
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        item: {
            required: true,
            type: Object,
        },
    },
    data() {
        return {
            classes: ['nav-item'],
        }
    },
    methods: {
        fontGrow() {
            this.classes = ['nav-item', 'nav-hovered']
        },
        fontShrink() {
            this.classes = ['nav-item']
        },
    },
}
</script>

<style scoped>
.nav-item {
    font-size: 2rem;
    height: 3rem;
    width: 120%;
    transform: rotate(-25deg);
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    color: antiquewhite;
    box-shadow: 0.05em -0.05em 0.05em black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: font-size ease-in-out 0.5s;
}
.nav-hovered {
    font-size: 3rem;
}
</style>
