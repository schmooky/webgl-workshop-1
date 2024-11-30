precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

uniform vec2 uMouse;

uniform float uTime;

void main() {
    vec4 textureColor = texture2D(uSampler2, vUvs);

    // Расстояние от мыши
    float dist = distance(uMouse, vUvs);

    // Эффект волны на основе расстояния
    float wave = sin(dist * 40.0 - uTime * 10.0) * 0.1;
    
    gl_FragColor = vec4(textureColor.rgb + wave, textureColor.a);
}
