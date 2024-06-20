<template>
    <PostHeader />

    <PostCard v-for="i in 10" :key="i" />
</template>

<script>
import PostCard from './PostCard.vue';
import PostHeader from './PostHeader.vue';
export default {
    components: {
        PostCard,
        PostHeader,
    },
};
</script>
