<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">{{ serviceData.title }}</p>
        </header>
        <div class="card-content">
            <div class="content">{{ serviceData.content }}</div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Request Service</a>
            <div class="card-footer-item">
                <a href="#" class="button twitter">
                    <i class="fa fa-twitter"></i>
                </a>
            </div>
            <div class="card-footer-item">
                <a href="#" class="button facebook">
                    <i class="fa fa-facebook"></i>
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'CardServices',
    props: {
        serviceData: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.twitter {
    background-color: $first;
}
.facebook {
    background-color: $sixth;
    color: antiquewhite;
}
</style>
