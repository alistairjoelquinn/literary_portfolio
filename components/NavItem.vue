<template>
    <div class="nav-item" :style="item.color">
        {{ item.name }}
    </div>
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
.nav-item {
    text-align: center;
    font-size: 35px;
    transform: rotate(-30deg);
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    color: antiquewhite;
    box-shadow: 0.05em -0.05em 0.05em black;
}
</style>
