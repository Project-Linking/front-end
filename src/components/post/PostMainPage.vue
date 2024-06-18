<template>
    <PostHeader />

    <PostCreatePage v-for="i in 10" :key="i" />
</template>

<script>
import PostCreatePage from './PostCreatePage.vue';
import PostHeader from './PostHeader.vue';
export default {
    components: {
        PostCreatePage,
        PostHeader,
    },
};
</script>
