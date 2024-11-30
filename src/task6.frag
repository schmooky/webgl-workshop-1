precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

void main() {
    // Генерация градиента по Y координате
    vec3 gradientColor = mix(vec3(0.0, 0.5, 1.0), vec3(1.0, 0.5, 0.0), vUvs.y);

    // Используйте цвет градиента вместо текстуры
    gl_FragColor = vec4(gradientColor, 1.0);
}