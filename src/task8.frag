precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

void main() {
    // Умножение vUvs для тайлинга текстуры (x3)
    vec2 tiledUvs = fract(vUvs * 3.0);
    vec4 textureColor = texture2D(uSampler2, tiledUvs);
    
    gl_FragColor = textureColor;
}