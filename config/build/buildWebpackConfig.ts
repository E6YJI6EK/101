import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options:BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode: mode, // мод билда
        entry: paths.entry, // универсальный способ задавания путей к файлу
        // подключаем typescript
        module: {
            // обработчики файлов, выходящих за пределы js, например: ts, jpg, css, scss и т.д.
            rules: buildLoaders(),
        },
        // указываем расширения, 
        // которые можно не указывать при импорте тех или иных файлов 
        // "import Component from 'src/Component"
        resolve: buildResolvers(),
        // выходные данные на билде
        output: {
            filename: '[name][contenthash].js', // название главного js-файла в билде
            path: paths.build, // расположение билда
            clean: true // подчистка ненужных файлов
        },
        // плагины вебпака
        plugins: buildPlugins(options),
    }
}