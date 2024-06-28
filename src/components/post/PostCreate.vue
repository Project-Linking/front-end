<template>
    <v-container>
        <p class="text-h6 d-flex align-start mb-2">프로젝트 정보란</p>
        <v-divider></v-divider>

        <v-row class="mt-5">
            <v-col class="justify-center">
                <p class="d-flex align-start">프로젝트 유형</p>
                <v-select
                    v-model="projectType"
                    flat
                    width="80%"
                    placeholder="선택하세요"
                    :items="['프로젝트', '스터디']"
                    variant="solo-filled"
                ></v-select>
            </v-col>

            <v-col>
                <p class="d-flex align-start">목표 일정</p>
                <v-date-input
                    v-model="deadline"
                    locale="ko"
                    flat
                    width="80%"
                    clear-icon
                    variant="solo-filled"
                    prepend-icon=""
                ></v-date-input>
            </v-col>
        </v-row>

        <v-row class="mb-3">
            <v-col>
                <p class="d-flex align-start">기술 선택</p>
                <v-select
                    flat
                    width="80%"
                    multiple
                    placeholder="기술스택"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="solo-filled"
                ></v-select>
            </v-col>
            <v-col>
                <p class="d-flex align-start">모집 포지션</p>
                <v-select
                    flat
                    width="80%"
                    multiple
                    placeholder="포지션"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="solo-filled"
                ></v-select>
            </v-col>
        </v-row>

        <TextQuestion @update-text-question="updateTextQuestion" />

        <RadioQuestion @update-radio-question="updateRadioQuestion" />

        <p class="text-h6 d-flex align-start mb-2">프로젝트에 소개란</p>
        <v-divider></v-divider>
        <!-- 제목 -->
        <v-text-field flat v-model="title" label="제목" variant="outlined" class="my-5"></v-text-field>
        <!-- 내용  -->
        <quill-editor
            @change="onEditorChange"
            v-model="content"
            ref="quillEditor"
            :options="editorOptions"
            class="editor"
        ></quill-editor>
        <!-- 버튼 -->
        <div class="d-flex justify-end my-2">
            <v-btn flat color="primary" variant="outlined" class="mr-2" to="/post">취소</v-btn>
            <v-btn flat color="primary" @click="savePost">글 작성</v-btn>
        </div>
    </v-container>
</template>

<script>
import { QuillEditor } from 'vue-quill-editor';
import hljs from 'highlight.js';
import debounce from 'lodash/debounce';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { VDateInput } from 'vuetify/labs/VDateInput';
import RadioQuestion from './RadioQuestion.vue';
import TextQuestion from './TextQuestion.vue';

export default {
    components: {
        QuillEditor,
        VDateInput,
        RadioQuestion,
        TextQuestion,
    },
    data() {
        return {
            editorOptions: {
                placeholder: '내용을 입력해주세요.',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'], // <strong>, <em>, <u>, <s>
                        ['blockquote', 'code-block'], // <blockquote>, <pre class="ql-syntax" spellcheck="false">
                        [{ header: 1 }, { header: 2 }], // <h1>, <h2>
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        // [{ script: 'sub' }, { script: 'super' }], // <sub>, <sup>
                        [{ indent: '-1' }, { indent: '+1' }], // class제어
                        [{ direction: 'rtl' }], //class 제어
                        [{ size: ['small', false, 'large', 'huge'] }], //class 제어 - html로 되도록 확인
                        [{ header: [1, 2, 3, 4, 5, 6, false] }], // <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, normal
                        [{ font: [] }], // 글꼴 class로 제어
                        [{ color: [] }, { background: [] }], //style="color: rgb(230, 0, 0);", style="background-color: rgb(230, 0, 0);"
                        [{ align: [] }], // class
                        // ["clean"],
                        ['link', 'image', 'video'],
                    ],
                    syntax: {
                        highlight: (text) => hljs.highlightAuto(text).value,
                    },
                },
            },
            title: '',
            content: '',
            projectType: '',
            deadline: null,
            radio: false,
            radioQuestions: [
                {
                    question: '',
                    subQuestions: [],
                },
            ],
            textQuestions: [],
        };
    },
    methods: {
        onEditorChange: debounce(function (val) {
            this.content = val.html;
        }, 466),
        savePost() {
            // 날짜 파싱
            const dates = this.deadline;
            this.deadline = `${dates.getFullYear()}-${dates.getMonth() + 1}-${dates.getDate()}`;

            console.log('PeojectType:', this.projectType);
            console.log('Title:', this.title);
            console.log('Content:', this.content);
            console.log('Deadline:', this.deadline);
            console.log('TextQuestion', this.textQuestions);
        },
        updateRadioQuestion(value) {
            this.radioQuestions = value;
            this.radioQuestions.forEach((question, index) => {
                console.log(index, question.text);
            });
        },
        updateTextQuestion(value) {
            this.textQuestions = value;
        },
    },
};
</script>

<style scoped>
.editor {
    height: 300px;
}
</style>
