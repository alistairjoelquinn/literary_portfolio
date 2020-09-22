<template>
    <nuxt-link :to="item.route">
        <div class="nav-box">
            <div :class="item.classes" @click="colorBar(), moveToFront()">
                {{ item.name }}
                <div v-if="currentlyClicked" class="red"></div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
/* eslint-disable no-console */
export default {
    props: {
        item: {
            required: true,
            type: Object,
        },
        selectedItem: {
            required: true,
            type: String,
        },
    },
    computed: {
        currentlyClicked() {
            return this.item.classes[1] === this.selectedItem
        },
    },
    methods: {
        colorBar() {
            this.$emit('somethingClicked', this.item.classes[1])
        },
        moveToFront() {
            this.$emit('moveToFront')
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-box {
    min-width: 30vw;
    height: 4rem;
    transform: rotate(-25deg);
    display: flex;
    align-self: center;
    border: 1px solid black;
    justify-self: center;
    position: relative;
    z-index: 2;
}
.nav-item {
    font-size: 1.5rem;
    color: antiquewhite;
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.nav-item:hover {
    -webkit-text-stroke: 0.5px white;
}
.red {
    background-color: red;
    height: 100%;
    width: 20%;
    position: absolute;
    left: 22vw;
}
.ethos {
    background-color: $first;
}
.projects {
    background-color: $second;
}
.portfolio {
    background-color: $third;
}
.testimonials {
    background-color: $fourth;
}
.services {
    background-color: $fifth;
}
.contact {
    background-color: $sixth;
}
.blue {
    background-color: blue;
    position: relative;
    z-index: 4;
}
</style>
