<template>
    <div class="border-box">
        <div class="container">
            <div class="inner-border">
                <div class="testimonial-cont">
                    <section class="section">
                        <CardImage :card-data="testimonial1" />
                    </section>
                    <section class="section">
                        <CardImage :card-data="testimonial2" />
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testimonial1: {
                image: '/testimonial1.jpeg',
                name: 'Amy Walker',
                handle: '@amywalker',
                content:
                    'I read all of cattys books and think that he is the best writer ever. This one time i went to a party with him and he was the best dancer there',
                hashTags: ['cattyiscool', 'longlivepsychmusic'],
            },
            testimonial2: {
                image: '/testimonial2.jpeg',
                name: 'Eric Smith',
                handle: '@ericsmith',
                content:
                    'Catty loves trees more than anyone I know. He loves them even more than he loves marmite which is basically illegal if you grow up in the UK',
                hashTags: ['yolo', 'h8rsgonh8'],
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.border-box {
    border: 1px solid black;
    border-left: none;
    width: 100%;
    z-index: 3;
    background-color: white;
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
