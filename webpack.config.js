const path = require("path") //node.js的核心模块，专门用来处理文件路径。
const { mainModule } = require("process")

module.exports = {
    //入口（相对路径与绝对路径都可以）
    entry:"./src/main.js",
    //输出（必须为绝对路径）
    output:{
        //path:文件输出目录（绝对路径）
        //path.resolve 返回一个绝对路径，_dirname为当前文件所在的绝对路径，dist打包后的文件夹
        path:path.resolve(__dirname,"dist"),
        //filename:输出文件名
        filename:"main.js"
    },
    //加载器loader
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.s[ac]ss$/,
                use:["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    //插件
    plugins:[],
    //模式
    mode:"development" //开发模式
}