const path = require('path');
const webpack = require('webpack');

module.exports = {
    name:'gugudan',
    mode:'development',     // 실서비스 : production
    devtool:'eval',         //        : hidden-source-map

    resolve:{
        extensions:['.js','.jsx']
    },
    entry:{
        app:'./client',
    },

    module:{
        rules:[{
           test:/\.jsx/,
           loader:'babel-loader',
           options:{
               presets:[
                   ['@babel/preset-env',{                 // 구 브라우저에서도 작동을 잘할수 있도록 도와줌 , 여러개의 plugin 들의 모음
                        targets:{
                            browsers: ['>5% in KR'],    // >5 % in KR 한국에서의 점유율 5%이상인 브라우저까지만 지원 ,지원할 브라우저의 범위를 지정
                                                         // browserslist 사이트에서 확인 가능
                        },
                       debug:true,
                   }],
                   '@babel/preset-react'
               ],
           }
        }],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({debug:true}),
    ],

    output:{
        path:path.join(__dirname,"dist"),
        filename:'app.js'
    },
};