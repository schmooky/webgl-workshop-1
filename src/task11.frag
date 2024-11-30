precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

uniform sampler2D uSecondTexture; // Вторая текстура для смешивания

void main() {
    vec4 baseColor = texture2D(uSampler2, vUvs);
    vec4 overlayColor = texture2D(uSecondTexture, vUvs);

    // Пример режима смешивания multiply
    vec3 blendedColor = baseColor.rgb * overlayColor.rgb;

    gl_FragColor = vec4(blendedColor, baseColor.a);
}
