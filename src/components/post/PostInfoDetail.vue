<template>
    <div class="info-section ml-5 mb-3">
        <v-row class="d-flex align-start mb-2">
            <v-col cols="auto"><strong>모집 분야:</strong></v-col>
            <v-col>프론트엔드, 디자이너</v-col>
        </v-row>
        <v-row class="d-flex align-start mb-2">
            <v-col cols="auto"><strong>시작 예정:</strong></v-col>
            <v-col>2024.08</v-col>
        </v-row>
        <v-row class="d-flex align-start mb-2">
            <v-col cols="auto"><strong>기술 스택:</strong></v-col>
            <v-col>
                <ProgrammingIcon v-for="lang in languages" :key="lang" :language="lang" class="ma-1" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
</script>
