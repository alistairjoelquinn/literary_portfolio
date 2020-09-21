<template>
    <nuxt-link :to="item.route">
        <div class="nav-box">
            <div :class="classes">
                {{ item.name }}
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
    },
    data() {
        return {
            classes: ['nav-item', this.item.color],
        }
    },
    mounted() {
        console.log('component is mounting', this)
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
}
.nav-item {
    font-size: 1.5rem;
    color: antiquewhite;
    transition: font-size ease-in-out 0.5s;
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
</style>
