import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        // мод билда
        mode: mode,
        // точка(и) входа
        entry: paths.entry,
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
        // делает сурс-мапы: всегда можно отследить в каком именно файле возникла ошибка
        devtool: isDev ? "inline-source-map" : undefined,
        // запускает сервер, как в реакте
        devServer: isDev ? buildDevServer(options): undefined,
    }
}