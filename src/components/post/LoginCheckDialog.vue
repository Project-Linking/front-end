<template>
    <v-dialog v-model="dialog" max-width="500">
        <v-card>
            <v-card-title class="headline">로그인이 필요한 서비스입니다.</v-card-title>
            <v-card-text> Please log in to continue. </v-card-text>
            <v-card-actions>
                <v-btn color="red" @click="closeDialog">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: true,
        };
    },
    methods: {
        closeDialog() {
            this.$emit('closeDialog');
        },
    },
};
</script>
