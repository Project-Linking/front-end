<template>
    <v-container class="write-dialog">
        <v-speed-dial>
            <template v-slot:activator="{ props: activatorProps }">
                <v-fab v-bind="activatorProps" size="large" icon="mdi-pencil" @click="createPost"></v-fab>
            </template>
        </v-speed-dial>
    </v-container>
</template>

<script>
export default {
    methods: {
        createPost() {
            this.$router.push('/post/create');
        },
    },
};
</script>

<style scoped>
.write-dialog {
    position: fixed;
    left: 95vh;
    bottom: 50px;
    z-index: 100;
}
</style>
