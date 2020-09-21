<template>
    <nuxt-link :to="item.route">
        <div class="nav-box">
            <div class="nav-item" :style="item.color">
                {{ item.name }}
            </div>
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
}
</script>

<style scoped>
.nav-box {
    min-width: 30vw;
    height: 3.5rem;
    border: 1px solid black;
    transform: rotate(-25deg);
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
}
.nav-item {
    font-size: 1.5rem;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    color: antiquewhite;
    box-shadow: 0.05em -0.05em 0.05em black;
    transition: font-size ease-in-out 0.5s;
}
.nav-item:hover {
    /* font-size: 3rem; */
}
</style>
