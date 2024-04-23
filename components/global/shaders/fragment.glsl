varying vec3 vColor;
uniform float opacity;
void main() {
  float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
  if (distanceFromCenter > 0.5) {
    discard;
  }
  gl_FragColor = vec4(vColor, opacity * (1.0 - distanceFromCenter * 2.0));
}