<template>
    <v-container>
        <!-- 라디오 질문지 -->
        <p class="text-h6 d-flex align-start mb-2">라디오 질문 추가</p>
        <v-divider></v-divider>
        <!-- 라디오 질문지 -->
        <v-btn @click="addRadioQuestion" ripple="false" flat class="my-3" width="100%">
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <div v-for="(question, mainIndex) in radioMainQuestions" :key="mainIndex">
            <!-- 메인 질문지 -->
            <v-text-field
                @input="updateMainQuestion"
                v-model="question.text"
                max-width="400"
                label="텍스트 질문"
                variant="outlined"
            ></v-text-field>

            <!-- 서브 질문지 -->
            <div class="d-flex justify-start align-center mb-2">
                <span class="mr-2">선택지</span>
                <v-btn @click="addRadioSubQuestion(mainIndex)" ripple="false" variant="outlined" flat class="my-3">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </div>
            <v-divider></v-divider>

            <v-list lines="one">
                <v-list-item v-for="(subQuestion, subIndex) in question.subQuestions" :key="subIndex">
                    <div class="d-flex">
                        <v-text-field
                            max-width="300"
                            class="mr-2"
                            single-line
                            label="선택지를 작성해주세요."
                            variant="outlined"
                            v-model="subQuestion.text"
                        ></v-text-field>
                        <v-btn variant="text" @click="deleteRadioSubQuestion(mainIndex, subIndex)">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </div>
                </v-list-item>
            </v-list>

            <div class="d-flex justify-end">
                <v-btn variant="outlined" text="질문 작성 취소" color="red" @click="deleteRadioQuestion(mainIndex)" />
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            radioMainQuestions: [], // 라디오 질문을 저장할 배열
        };
    },
    methods: {
        updateMainQuestion() {
            this.$emit('update-radio-question', this.radioMainQuestions);
        },
        addRadioQuestion() {
            this.radioMainQuestions.push({ text: '', subQuestions: [] }); // 새로운 라디오 질문 추가
        },
        deleteRadioQuestion(index) {
            this.radioMainQuestions.splice(index, 1);
        },
        addRadioSubQuestion(mainIndex) {
            this.radioMainQuestions[mainIndex].subQuestions.push({ text: '' }); // 해당 라디오 질문에 서브 질문 추가
        },
        deleteRadioSubQuestion(mainIndex, subIndex) {
            this.radioMainQuestions[mainIndex].subQuestions.splice(subIndex, 1);
        },
    },
};
</script>
