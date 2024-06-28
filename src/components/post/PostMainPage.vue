<template>
    <v-container>
        <QuickWriteDialog />

        <PostHeader />

        <PostCard v-for="i in 10" :key="i" @click="postDetail" />
    </v-container>
</template>

<script>
import PostCard from './PostCard.vue';
import PostHeader from './PostHeader.vue';
import QuickWriteDialog from './QuickWriteDialog.vue';

export default {
    components: {
        PostCard,
        PostHeader,
        QuickWriteDialog,
    },
    methods: {
        postDetail(val) {
            console.log(val);
            console.log('click');
        },
    },
};
</script>
