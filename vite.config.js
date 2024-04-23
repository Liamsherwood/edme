import glsl from 'vite-plugin-glsl'

export default {
    plugins: [
        glsl({
            // By default, everything is included
            include: '**/*.glsl',
            sourceMap: false,
            compress: false
        }),
    ],
}        