precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

uniform float uTime;

void main() {
    // Добавление синусоидального искажения на основе времени
    vec2 uvModified = vUvs + 0.05 * vec2(sin(uTime + vUvs.y * 10.0), cos(uTime + vUvs.x * 10.0));
    vec4 textureColor = texture2D(uSampler2, uvModified);

    gl_FragColor = textureColor;
}
