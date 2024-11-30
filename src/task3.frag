precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

void main() {
    vec4 textureColor = texture2D(uSampler2, vUvs);

    // Применение сепия-фильтра
    vec3 sepiaColor = vec3(dot(textureColor.rgb, vec3(0.393, 0.769, 0.189)), dot(textureColor.rgb, vec3(0.349, 0.686, 0.168)), dot(textureColor.rgb, vec3(0.272, 0.534, 0.131)));

    gl_FragColor = vec4(sepiaColor, textureColor.a);
}