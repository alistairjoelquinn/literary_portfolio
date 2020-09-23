<template>
    <div class="border-box">
        <div class="container-outer">
            <div class="inner-border">
                <div class="container">
                    <img
                        src="~/static/background.jpg"
                        alt="Richard Catty - Writer"
                    />
                    <div class="text-card">
                        <h1 class="title is-1 header-text banner">
                            Richard Catty
                        </h1>
                        <h3 class="subtitle is-5 header-text">
                            I only write about things which I'm passionate
                            about.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.border-box {
    border: 1px solid black;
    border-left: none;
    width: 100%;
    z-index: 3;
    // background-color: white;
}
.container-outer {
    border: 15px solid $first;
    min-height: 100%;
    z-index: 3;
}
.inner-border {
    height: 100%;
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
h1 {
    font-size: 40px;
}
.container {
    margin: 0 auto;
    height: calc(100vh - 30px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
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
