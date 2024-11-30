precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

void main() {
    vec4 textureColor = texture2D(uSampler2, vUvs);

    // Вычисляем яркость (luminance)
    float luminance = dot(textureColor.rgb, vec3(0.299, 0.587, 0.114));

    // Сравниваем яркость с порогом
    vec3 highlightColor = vec3(0.95, 0.9, 0.2);
    float threshold = 0.7;
    vec3 result = (luminance > threshold) ? highlightColor : textureColor.rgb;

    gl_FragColor = vec4(result, textureColor.a);
}