import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// module.exports = {
//     mode: "production", // мод билда
//     entry: path.resolve(__dirname, 'src', 'index.ts'), // универсальный способ задавания путей к файлу
//     // подключаем typescript
//     module: {
//         rules: [ // обработчики файлов, выходящих за пределы js, например: ts, jpg, css, scss и т.д.
//             {
//                 test: /\.tsx?$/, // ищет все файлы с расширением tsx
//                 use: 'ts-loader', // обработчик этих файлов
//                 exclude: /node_modules/, // исключения в поиске
//             },
//         ],
//     },
//     resolve: {
//         // указываем расширения, 
//         // которые можно не указывать при импорте тех или иных файлов 
//         // "import Component from 'src/Component"
//         extensions: ['.tsx', '.ts', '.js'], 
//     },
//     // выходные данные на билде
//     output: {
//         filename: '[name][contenthash].js', // название главного js-файла в билде
//         path: path.resolve(__dirname, 'build'), // расположение билда
//         clean: true // подчистка ненужных файлов
//     },
//     // плагины вебпака
//     plugins: [new HtmlWebpackPlugin({ 
//         template: path.resolve(__dirname, 'public', 'index.html'),
//     }), new webpack.ProgressPlugin()],
// };

const config:webpack.Configuration = {
    mode: "production", // мод билда
    entry: path.resolve(__dirname, 'src', 'index.ts'), // универсальный способ задавания путей к файлу
    // подключаем typescript
    module: {
        rules: [ // обработчики файлов, выходящих за пределы js, например: ts, jpg, css, scss и т.д.
            {
                test: /\.tsx?$/, // ищет все файлы с расширением tsx
                use: 'ts-loader', // обработчик этих файлов
                exclude: /node_modules/, // исключения в поиске
            },
        ],
    },
    resolve: {
        // указываем расширения, 
        // которые можно не указывать при импорте тех или иных файлов 
        // "import Component from 'src/Component"
        extensions: ['.tsx', '.ts', '.js'], 
    },
    // выходные данные на билде
    output: {
        filename: '[name][contenthash].js', // название главного js-файла в билде
        path: path.resolve(__dirname, 'build'), // расположение билда
        clean: true // подчистка ненужных файлов
    },
    // плагины вебпака
    plugins: [new HtmlWebpackPlugin({ 
        template: path.resolve(__dirname, 'public', 'index.html'),
    }), new webpack.ProgressPlugin()],
}

export default config;