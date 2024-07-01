<template>
    <v-overlay :value="showOverlay" class="d-flex align-center justify-center">
        <v-card width="90%" height="90%" class="ma-auto">
            <v-row width="100%" height="100%" class="d-flex flex-nowrap ma-auto">
                <v-col cols="auto">
                    <v-card-title class="d-flex justify-start">Hello World</v-card-title>
                    <v-card-subtitle class="d-flex align-center justify-start mb-5">
                        <v-chip>유저닉네임</v-chip>
                        <v-divider vertical class="mx-2" color="info"></v-divider>
                        <span>2024.06.24</span>
                    </v-card-subtitle>
                    <!-- 자세한 정보 -->
                    <PostInfoDetailVue />
                    <!-- 자세한 정보 -->
                </v-col>
                <v-col>
                    <v-divider vertical color="info"> </v-divider>
                </v-col>
                <v-col cols="8">
                    <v-card-text class="text-body-2">
                        (간단 소개 문구) Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis dicta
                        esse molestias vero hic laudantium provident nisi eos quasi iusto alias sequi, aut aliquid
                        voluptatibus commodi! Minima, eum voluptates? (간단 소개 문구) Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Officiis facilis dicta esse molestias vero hic laudantium
                        provident nisi eos quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
                        voluptates? (간단 소개 문구) Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                        facilis dicta esse molestias vero hic laudantium provident nisi eos quasi iusto alias sequi, aut
                        aliquid voluptatibus commodi! Minima, eum voluptates? (간단 소개 문구) Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Officiis facilis dicta esse molestias vero hic laudantium
                        provident nisi eos quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
                        voluptates?
                    </v-card-text>
                    <v-row class="ml-2 mt-5">
                        <!-- 이미지 -->
                        <v-col cols="auto">
                            <v-img
                                cover
                                :width="200"
                                :height="200"
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                            ></v-img>
                        </v-col>
                        <v-col cols="auto">
                            <v-img
                                cover
                                :width="100"
                                :height="100"
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-col>
                <!-- 버튼 -->
                <v-col cols="auto" class="d-flex justify-end align-start">
                    <v-btn flat icon @click="closeDialog">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-overlay>
</template>

<script>
import PostInfoDetailVue from './PostInfoDetail.vue';

export default {
    props: {
        showOverlay: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {};
    },
    components: {
        PostInfoDetailVue,
    },
    methods: {
        closeDialog() {
            this.$emit('closeOverlay');
        },
    },
};
</script>
