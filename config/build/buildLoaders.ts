import webpack from "webpack";

export function buildLoaders():webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/, // ищет все файлы с расширением tsx
        use: 'ts-loader', // обработчик этих файлов
        exclude: /node_modules/, // исключения в поиске
    }

    return [ 
        typescriptLoader,
    ]
}