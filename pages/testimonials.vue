<template>
    <div class="border-box">
        <div class="container">
            <div class="inner-border">
                <div class="testimonial-cont">
                    <section
                        v-for="data in userData"
                        :key="data.content"
                        class="section"
                    >
                        <CardImage :card-data="data" />
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import userData from '~/assets/json-data/userData.json';

export default {
    data() {
        return {
            userData: {},
        };
    },
    mounted() {
        this.userData = userData;
    },
};
</script>

<style lang="scss" scoped>
.border-box {
    border: 1px solid black;
    border-left: none;
    width: 100%;
    z-index: 3;
    background-color: antiquewhite;
}
.container {
    border: 15px solid $fourth;
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
.testimonial-cont {
    display: flex;
    width: 80%;
}
h1 {
    font-size: 40px;
}
</style>
