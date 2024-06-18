<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-text-field
                    v-model="searchText"
                    placeholder="키워드로 검색해보세요!"
                    variant="solo-filled"
                    append-inner-icon="mdi-magnify"
                    hide-details
                    solo
                >
                    <template v-slot:append>
                        <v-btn color="info" @click="search">검색하기</v-btn>
                    </template>
                </v-text-field>

                <v-sheet class="py-4 px-1">
                    <v-chip-group v-model="selectedTags" selected-class="text-primary" multiple>
                        <v-chip v-for="tag in tags" :key="tag" :value="tag" :text="tag"></v-chip>
                    </v-chip-group>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        searchText: '',
        selectedTags: [],
        tags: [
            'Spring',
            'React',
            'Vue',
            'Android',
            'Vacation',
            'Food',
            'Drawers',
            'Shopping',
            'Art',
            'Tech',
            'Creative Writing',
        ],
    }),
    watch: {
        selectedTags(newTags) {
            console.log(newTags);
            this.searchText = newTags.join(' ');
        },
    },
    methods: {
        search() {
            // 검색 버튼 클릭 시 실행할 로직을 여기에 추가하세요.
            console.log('검색 버튼 클릭됨');
        },
    },
};
</script>

<style scoped>
.v-text-field {
    height: 50px;
}
.v-btn {
    height: 50px;
    margin-top: -5px; /* 버튼 높이 조정을 위한 마진 */
}
</style>
