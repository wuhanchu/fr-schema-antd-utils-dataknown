const presets = ["@babel/preset-env", "@babel/preset-react"]

module.exports = {
    presets,
    //  支持类属性
    plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        [
            "@babel/plugin-transform-runtime",
            {
                regenerator: true
            }
        ]
    ]
}
