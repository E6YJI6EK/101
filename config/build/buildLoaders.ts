import { resolveNaptr } from "dns";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.scss")),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }

                }
            },
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