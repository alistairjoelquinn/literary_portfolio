<template>
    <div class="border-box">
        <div class="container">
            <div class="inner-border">
                <div class="card-cont">
                    <CardServices
                        v-for="service in services"
                        :key="service.title"
                        :service-data="service"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import services from '~/assets/json-data/servicesData';

export default {
    data() {
        return {
            services: [],
        };
    },
    mounted() {
        this.services = services;
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
    border: 15px solid $fifth;
    min-height: 100%;
    z-index: 3;
}
.inner-border {
    height: calc(100vh - 30px);
    width: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
}
.card-cont {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
h1 {
    font-size: 40px;
}
</style>
