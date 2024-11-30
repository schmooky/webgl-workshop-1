precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

void main() {
    vec4 textureColor = texture2D(uSampler2, vUvs);

    // Цвет свечения
    vec3 glowColor = vec3(1.0, 0.0, 0.5);

    // Порог для распознавания кромок
    float edgeThreshold = 0.005;
    bool isEdge = vUvs.x < edgeThreshold ||
                  vUvs.y < edgeThreshold ||
                  vUvs.x > 1.0 - edgeThreshold ||
                  vUvs.y > 1.0 - edgeThreshold;

    // Добавляем к свечению градиент, основанный на расстоянии от кромки
    float glow = smoothstep(0.0, edgeThreshold * 5.0, edgeThreshold - smoothstep(edgeThreshold, 0.0, distance(vUvs, vec2(0.5))));
    
    gl_FragColor = isEdge ? vec4(glow * glowColor, 1.0) : textureColor + vec4(glowColor * glow, 0.0);
}