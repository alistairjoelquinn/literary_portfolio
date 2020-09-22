<template>
    <div class="border-box">
        <div class="container">
            <h1>This is the PROJECTS page</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.border-box {
    border: 1px solid black;
    border-left: none;
    width: 100%;
    z-index: 2;
    background-color: white;
}
.container {
    border: 15px solid $second;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
h1 {
    font-size: 40px;
}
</style>
