precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

void main() {
    vec4 textureColor = texture2D(uSampler2, vUvs);

    // Вычисление яркости
    float gray = dot(textureColor.rgb, vec3(0.299, 0.587, 0.114));
    
    gl_FragColor = vec4(vec3(gray), textureColor.a);
}
