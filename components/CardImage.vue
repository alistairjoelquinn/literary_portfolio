<template>
    <div class="card cont">
        <div class="card-image">
            <figure class="image is-3by3">
                <img
                    :src="cardData.image"
                    alt="Testimonial 1"
                    class="image-large"
                />
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="cardData.image" alt="Testimonial 2" />
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ cardData.name }}</p>
                    <p class="subtitle is-6">{{ cardData.handle }}</p>
                </div>
            </div>

            <div class="content">
                {{ cardData.content }}
                <br />
                <a> {{ cardData.handle }} </a>
                <a v-for="tag in cardData.hashTags" :key="tag" href="#">
                    #{{ tag }}
                </a>
                <br />
                <time datetime="2016-1-1">{{ cardData.time }}</time>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    /* eslint-disable no-console */
    props: {
        cardData: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        console.log('this: ', this);
    },
};
</script>

<style lang="scss" scoped>
.cont {
    max-width: 20vw;
    height: 80vh;
}
.image-large {
    width: 100%;
    height: calc(width);
}
</style>
