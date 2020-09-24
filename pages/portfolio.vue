<template>
    <div class="border-box">
        <div class="container">
            <div class="inner-border">
                <h1>Portfolio</h1>
                <section class="card-container">
                    <section class="section">
                        <CardMediaShare />
                        <CardMediaShare />
                    </section>
                    <section class="section">
                        <CardMediaShare />
                        <CardMediaShare />
                    </section>
                    <section class="section">
                        <CardMediaShare />
                        <CardMediaShare />
                    </section>
                </section>
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
    border: 15px solid $third;
    min-height: 100%;
    z-index: 3;
}
.inner-border {
    height: calc(100vh - 30px);
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.card-container {
    display: flex;
}
h1 {
    font-size: 40px;
}
</style>
