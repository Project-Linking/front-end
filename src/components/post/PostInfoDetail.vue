<template>
    <v-container class="info-section mb-3">
        <v-row class="d-flex align-start">
            <v-col cols="auto"><strong>모집 분야:</strong></v-col>
            <v-col>프론트엔드, 디자이너</v-col>
        </v-row>
        <v-row class="d-flex align-start">
            <v-col cols="auto"><strong>시작 예정:</strong></v-col>
            <v-col>2024.08</v-col>
        </v-row>
        <v-row class="d-flex align-center ">
            <v-col cols="auto"><strong>기술 스택:</strong></v-col>
            <v-col >
                <ProgrammingIcon v-for="lang in languages" :key="lang" :language="lang" class="ma-1" />
            </v-col>
        </v-row>
        <v-row class="d-flex align-start">
            <v-col cols="auto"><strong>진행 방식:</strong></v-col>
            <v-col>자유</v-col>
        </v-row>
        <v-row class="d-flex align-start">
            <v-col cols="auto"><strong>예상기간:</strong></v-col>
            <v-col> 자유 </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ProgrammingIcon from '../language/ProgrammingIcon.vue';

export default {
    components: {
        ProgrammingIcon,
    },
    data() {
        return {
            languages: ['Java', 'Spring', 'React', 'HTML', 'Vue', 'Next.js', 'Go'],
        };
    },
};
</script>

<style scoped>
.info-section {
    font-size: 14px;
}
</style>
