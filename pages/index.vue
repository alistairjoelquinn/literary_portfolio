<template>
    <div class="container">
        <img src="~/static/background.jpg" alt="Richard Catty - Writer" />
        <div class="text-card">
            <h1 class="title is-1 header-text banner">Richard Catty</h1>
            <h3 class="subtitle is-5 header-text">
                I only write about things which I'm passionate about.
            </h3>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.container {
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    border: 15px solid white;
    z-index: 3;
}
.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}
.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}
.header-text {
    color: white;
    text-shadow: 1px 1px 2px black;
    text-align: left;
    font-weight: 500;
    /* font-family: 'Roboto', sans-serif; */
}
.text-card {
    position: absolute;
    left: 6vw;
}
img {
    height: 100%;
    width: 100%;
}
</style>
