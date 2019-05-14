# loader

loader用于对模块的源代码进行转换, 类似于gulp中的task, 将less和ts转换成css或者js 
loader允许你在js中import css文件

## 示例

如果你需要将ts转为js,首先安装相应的loader

```
npm install --save-dev ts-loader
```

然后在配置中对ts文件使用ts-loader

```
module.exports = {
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
}
```

## 使用loader

有三种方式使用loader
+ 配置（推荐）：在 webpack.config.js 文件中指定 loader。
+ 内联：在每个 import 语句中显式指定 loader。
+ CLI：在 shell 命令中指定它们。

## 配置

module.rules允许在webpack配置中指定多个loader

```
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { 
                    loader: 'css-loader, 
                    options: {
                        modules: true
                    }
                }
            ]
        }
    ]
}
```

## 内联

可以在import语句或任何等效于'import'方式中指定loader

```
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

## CLI

```
webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```

这会对.jade使用jade-loader .css文件使用style-loader和css-loader