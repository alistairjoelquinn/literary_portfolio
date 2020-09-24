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
</template>

<script>
export default {
    name: 'CardServices',
    props: {
        serviceData: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped></style>
