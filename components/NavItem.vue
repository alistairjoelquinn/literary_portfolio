<template>
    <nuxt-link :to="item.route">
        <div class="nav-box">
            <div :class="item.classes" @click="colorBar(), moveToFront()">
                {{ item.name }}
                <div v-if="currentlyClicked" :class="boxClassItem"></div>
            </div>
            <div class="right-border"></div>
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
        boxClassItem() {
            return ['colourSquare', this.item.classes[1]]
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
}
.nav-item:hover {
    -webkit-text-stroke: 0.5px white;
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
.colourSquare {
    // background-color: red;
    height: 100%;
    width: 20%;
    position: absolute;
    left: 22vw;
    z-index: 4;
}
.blue {
    // background-color: blue;
    position: absolute;
}
.right-border {
    background-color: black;
    position: absolute;
    height: 100%;
    width: 1px;
    right: 12.7%;
    transform: rotate(25deg) translateY(-2.5px);
}
</style>
