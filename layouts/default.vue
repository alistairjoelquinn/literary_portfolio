<template>
    <div class="main-cont">
        <SideNav />
        <Nuxt />
    </div>
</template>

<script>
import SideNav from '~/components/SideNav'

export default {
    /* eslint-disable no-console */
    components: {
        SideNav,
    },
}
</script>

<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    line-height: 1;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
.main-cont {
    display: flex;
    overflow: hidden;
}
</style>
