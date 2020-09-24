<template>
    <div class="column">
        <div class="card">
            <div class="card-content">
                <h2 class="title is-4">Item Title</h2>
                <h3 class="subtitle">Subtitle</h3>
                <nuxt-link to="#">Read More</nuxt-link>
            </div>
            <footer class="card-footer">
                <div class="card-footer-item">
                    <a href="#" class="button thumb-up">
                        <i class="fa fa-thumbs-o-up"></i>
                    </a>
                </div>
                <div class="card-footer-item">
                    <a href="#" class="button thumb-down">
                        <i class="fa fa-twitter"></i>
                    </a>
                </div>
                <div class="card-footer-item">
                    <a href="#" class="button share">
                        <i class="fa fa-facebook"></i>
                    </a>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardMediaShare',
};
</script>

<style lang="scss" scoped>
.thumb-up {
    background-color: $third;
}
.thumb-down {
    background-color: $first;
}
.share {
    background-color: $sixth;
    color: antiquewhite;
}
h2 {
    margin: 0;
    text-align: left;
}
h3 {
    margin: 0;
    text-align: left;
}
</style>
