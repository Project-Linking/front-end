<template>
    <v-container>
        <QuickWriteDialog />

        <PostHeader />

        <PostCard v-for="post in posts" :key="post.id" :post="post" @click="postDetail(post.id)" />
    </v-container>
</template>

<script>
import PostCard from './PostCard.vue';
import PostHeader from './PostHeader.vue';
import QuickWriteDialog from './QuickWriteDialog.vue';
import axios from '@/api/authHttp';

export default {
    components: {
        PostCard,
        PostHeader,
        QuickWriteDialog,
    },
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        postDetail(postId) {
            console.log(postId);
        },
        async fetchPosts() {
            try {
                const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/board`);
                this.posts = response.data;
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },
    },
    mounted() {
        this.fetchPosts();
    },
};
</script>
