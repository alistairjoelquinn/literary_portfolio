<template>
    <div class="border-box">
        <div class="container">
            <div class="inner-border">
                <CardServices />
                <CardServices />
                <CardServices />
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
    background-color: antiquewhite;
}
.container {
    border: 15px solid $fifth;
    min-height: 100%;
    z-index: 3;
}
.inner-border {
    height: calc(100vh - 30px);
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
}
h1 {
    font-size: 40px;
}
</style>
