precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

uniform sampler2D uNoiseTexture;
uniform float uTime;

void main() {
    vec2 noise = texture2D(uNoiseTexture, vUvs).rg;

    // Смещение пикселей на основе текстуры шума
    vec2 offsetUvs = vUvs + noise * 0.005 * sin(uTime*0.1);

    vec4 displacedColor = texture2D(uSampler2, offsetUvs);
    gl_FragColor = displacedColor;
}