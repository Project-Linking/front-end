<template>
    <v-container @click="onClickPost" height="100vh" class="clickable-container my-5">
        <v-row>
            <v-card class="mx-auto" width="100%" height="100%">
                <div class="d-flex justify-start ma-3 ml-5">백엔드 개발자를 구합니다</div>

                <div class="text-start content-text text-body-2 ma-2 ml-5">
                    (간단 소개 문구) Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis dicta
                    esse molestias vero hic laudantium provident nisi eos quasi iusto alias sequi, aut aliquid
                    voluptatibus commodi! Minima, eum voluptates?
                </div>

                <v-row class="d-flex align-start ma-1 ml-5">
                    <ProgrammingIcon v-for="lang in languages" :key="lang" :language="lang" class="ma-1" />
                </v-row>

                <v-divider color="info"></v-divider>

                <v-row justify="space-between" align="center" class="ma-1">
                    <v-col cols="auto">
                        <!-- 조회수 -->
                        <v-icon size="small">mdi-eye-outline</v-icon>
                        <v-chip variant="text" outlined>{{ views }}</v-chip>
                        <!-- 댓글수 -->
                        <v-icon size="small">mdi-comment-outline</v-icon>
                        <v-chip variant="text" outlined>{{ comment }}</v-chip>
                    </v-col>
                    <v-col cols="auto">
                        <!-- 즐겨찾기 -->
                        <v-btn flat size="mid" @click.stop="toogleFavorite" class="mr-4">
                            <v-icon :color="isFavorite ? 'yellow' : ''">
                                {{ isFavorite ? 'mdi-star' : 'mdi-star-outline' }}
                            </v-icon>
                        </v-btn>

                        <v-btn variant="text" color="primary" @click.stop="dialog = true"> 지원하기 </v-btn>
                        <!-- 지원하기 다이어로그 -->
                        <v-dialog persistent v-model="dialog" max-width="500">
                            <v-card max-width="400">
                                <v-card-text v-if="!loading">정말 지원하시겠습니까?</v-card-text>
                                <div v-else align="center" class="mt-9">
                                    <v-progress-circular
                                        color="primary"
                                        indeterminate="disable-shrink"
                                        size="50"
                                        width="2"
                                    ></v-progress-circular>
                                </div>

                                <template v-slot:actions>
                                    <v-btn
                                        v-if="!loading"
                                        class="ms-auto"
                                        text="Ok"
                                        @click="onSubmit"
                                        color="primary"
                                    ></v-btn>
                                    <v-btn
                                        v-if="!loading"
                                        text="Close"
                                        @click="dialog = false"
                                        color="red-accent-4"
                                    ></v-btn>
                                </template>
                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>
            </v-card>
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
            isFavorite: false,
            views: 123,
            comment: 123,
            languages: ['Java', 'Spring', 'React', 'HTML'],
            dialog: false,
            loading: false,
        };
    },
    methods: {
        toogleFavorite() {
            this.isFavorite = !this.isFavorite;
        },
        onClickPost() {
            this.$router.push('/post');
        },
        onSubmit() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.dialog = false;
            }, 3000);
        },
    },
    watch: {
        dialog(val) {
            if (!val) {
                this.loading = false; // Reset loading when dialog closes
            }
        },
    },
};
</script>

<style>
.clickable-container {
    cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능함을 시각적으로 표현 */
    transition: box-shadow 0.3s ease; /* 부드러운 호버 효과를 위한 트랜지션 */
}
.clickable-container:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 호버 시 박스 그림자 추가 */
    background-color: #f5f5f5; /* 호버 시 배경색 변경 */
}

.content-text {
    font-size: 16px; /* 내용 글자 크기 */
    overflow: hidden; /* 내용이 넘칠 경우 숨김 */
    display: -webkit-box; /* Flexbox 사용 */
    -webkit-line-clamp: 3; /* 최대 줄 수 제한 */
    -webkit-box-orient: vertical; /* 수직 정렬 */
}
.hashtag {
    background-color: #e0f7fa; /* 해시태그 배경색 */
    color: #00796b; /* 해시태그 텍스트 색 */
    border-radius: 16px; /* 해시태그 모서리 둥글게 */
    margin-right: 4px; /* 해시태그 간격 */
}
</style>
