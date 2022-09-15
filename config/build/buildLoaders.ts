import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    // Если не используем тайпскрипт - понадобится докачать бабел лоадер
    const typescriptLoader = {
        test: /\.tsx?$/, // ищет все файлы с расширением tsx
        use: 'ts-loader', // обработчик этих файлов
        exclude: /node_modules/, // исключения в поиске
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}