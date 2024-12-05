precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

void main() {
    // Определяем смещение для хроматической аберрации.
    float offset = 0.005; // Это значение надо подогнать, лучше не выше 0.1

    // Получаем цвет текстуры для каждого цветового канала с различным смещением.
    float r = texture2D(uSampler2, vUvs + vec2(offset, 0.0)).r;
    float g = texture2D(uSampler2, vUvs).g;
    float b = texture2D(uSampler2, vUvs - vec2(offset, 0.0)).b;

    vec3 newColor = vec3(r, g, b);

    gl_FragColor = vec4(newColor , texture2D(uSampler2, vUvs).a);
}