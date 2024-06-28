<template>
    <v-container>
        <!-- 텍스트 질문지 -->
        <p class="text-h6 d-flex align-start mb-2">텍스트 질문 추가</p>
        <v-divider></v-divider>
        <!-- 텍스트 질문지 -->
        <v-btn @click="addTextQuestion" ripple="false" variant="solo-filled" flat class="my-3" width="100%"
            ><v-icon>mdi-plus</v-icon></v-btn
        >
        <div class="d-flex align-center my-2" v-for="(question, index) in textQuestions" :key="index">
            <v-text-field
                @input="updateMainQuestion"
                v-model="question.text"
                label="텍스트 질문"
                variant="outlined"
            ></v-text-field>
            <v-btn class="d-flex justify-end" align-self="center" variant="text" @click="deleteTextQuestion(index)">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            textQuestions: [],
        };
    },
    methods: {
        addTextQuestion() {
            this.textQuestions.push({ text: '' }); // 새로운 텍스트 질문 추가
        },
        deleteTextQuestion(index) {
            this.textQuestions.splice(index, 1);
        },
        updateMainQuestion() {
            this.$emit('update-Text-question', this.textQuestions);
        },
    },
};
</script>
