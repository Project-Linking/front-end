<template>
    <v-icon :color="iconColor">{{ iconName }}</v-icon>
</template>

<script>
export default {
    props: {
        language: {
            type: String,
            required: true,
        },
    },
    computed: {
        iconName() {
            const icons = {
                Java: 'mdi-language-java',
                Spring: 'mdi-leaf',
                React: 'mdi-react',
                Next: 'mdi-next-js',
                JavaScript: 'mdi-language-javascript',
                TypeScript: 'mdi-language-typescript',
                Python: 'mdi-language-python',
                Ruby: 'mdi-language-ruby',
                PHP: 'mdi-language-php',
                CSharp: 'mdi-language-csharp',
                CPlusPlus: 'mdi-language-cpp',
                Go: 'mdi-language-go',
                Kotlin: 'mdi-language-kotlin',
                Swift: 'mdi-language-swift',
                Rust: 'mdi-language-rust',
                HTML: 'mdi-language-html5',
                CSS: 'mdi-language-css3',
                Angular: 'mdi-angular',
                Vue: 'mdi-vuejs',
                Node: 'mdi-nodejs',
                Django: 'mdi-language-python',
                Flask: 'mdi-flask',
                Laravel: 'mdi-laravel',
                Symfony: 'mdi-symfony',
                Express: 'mdi-nodejs',
                Svelte: 'mdi-svelte',
            };
            return icons[this.language] || 'mdi-code-tags'; // 기본 아이콘
        },
        iconColor() {
            const colors = {
                Java: '#007396',
                Spring: '#6DB33F',
                React: '#61DAFB',
                Next: '#000000',
                JavaScript: '#F7DF1E',
                TypeScript: '#3178C6',
                Python: '#3776AB',
                Ruby: '#CC342D',
                PHP: '#777BB4',
                CSharp: '#9C4993',
                CPlusPlus: '#00599C',
                Go: '#00ADD8',
                Kotlin: '#7F52FF',
                Swift: '#FA7343',
                Rust: '#DEA584',
                HTML: '#E34F26',
                CSS: '#1572B6',
                Angular: '#DD0031',
                Vue: '#4FC08D',
                Node: '#339933',
                Django: '#092E20',
                Flask: '#000000',
                Laravel: '#FF2D20',
                Symfony: '#000000',
                Express: '#339933',
                Svelte: '#FF3E00',
            };
            return colors[this.language] || '#000000'; // 기본 색상
        },
    },
};
</script>
