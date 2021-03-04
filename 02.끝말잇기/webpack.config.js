const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports ={
    name:'wordRelay-setting',
    mode:'development',         // 실서비스 : production
    devtool: 'eval',
    resolve:{
      extensions: ['.js','.jsx']
    },
    entry: {
        app:'./client',
    },  // 입력

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
                    '@babel/preset-react',
                ],
                plugins: [
                    "@babel/plugin-proposal-class-properties",
                    "react-refresh/babel"
                ],
            }
        }],
    },

    plugins: [
        new RefreshWebpackPlugin()
    ],

    output:{
        path:path.join(__dirname,'dist'),        // 현재폴더 이름 : __dirname
        filename:'app.js',
        publicPath :'/dist/'
    },   // 출력

    devServer:{
        publicPath :'/dist/',
        hot:true
    }
};