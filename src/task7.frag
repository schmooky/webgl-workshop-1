precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

uniform float uTime;

void main() {
    vec4 textureColor = texture2D(uSampler2, vUvs);

    // Изменение цвета кромки на основе времени
    vec3 animatedEdgeColor = vec3(sin(uTime), cos(uTime), sin(uTime * 0.005)) * 0.5 + 0.5;

    // Порог для распознавания кромок
    float edgeThreshold = 0.005;
    bool isEdge = vUvs.x < edgeThreshold ||
                  vUvs.y < edgeThreshold ||
                  vUvs.x > 1.0 - edgeThreshold ||
                  vUvs.y > 1.0 - edgeThreshold;

    // Окончательный цвет
    gl_FragColor = isEdge ? vec4(animatedEdgeColor, 1.0) : textureColor;
}