precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

void main() {
    // Sample the texture color
    vec4 textureColor = texture2D(uSampler2, vUvs);

    // Debug edge color
    vec4 edgeColor = vec4(1.0, 0.0, 1.0, 1.0); // #FF00FF

    // Threshold for edge detection
    float edgeThreshold = 0.01; // Tune this value to control the "thickness" of the edge

    // Check if the current UV position is near any edge
    bool isEdge = vUvs.x < edgeThreshold ||
        vUvs.y < edgeThreshold ||
        vUvs.x > 1.0 - edgeThreshold ||
        vUvs.y > 1.0 - edgeThreshold;

    // Combine the texture color and the edge color
    gl_FragColor = isEdge ? edgeColor : textureColor;
}