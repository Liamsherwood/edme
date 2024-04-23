// Attributes
attribute vec3 initialPosition;
attribute vec3 currentPosition;
attribute vec3 color;
attribute vec3 velocity;

// Varyings
varying vec3 vColor;

// Uniforms
uniform float transition;
uniform float morphTransition;
uniform float time;
uniform float uSeed;
uniform float uRandomSeed;

// Function to create a rotation matrix
mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

// Function to create curl noise color
vec3 curlNoiseColor(vec3 p, vec3 color) {
  float factor = 0.7;
  vec3 noise = gln_curl(p * factor + vec3(color + uRandomSeed));
  return noise;
}
void main() {
  // Set varying color
  vColor = color;
  // Initialize computed position and local velocity
  vec3 computedPosition;
  vec3 localVelocity = velocity;

  // Compute position based on transition
  if (transition <= 1.0) {
    computedPosition = mix(initialPosition, currentPosition + velocity * transition, transition);
    
    // Apply noise and rotation if transition is in progress
    if (transition > 0.0) {
      float scale = 0.06;
      gln_tFBMOpts opts = gln_tFBMOpts(uSeed, 4.5, 1.8, 2.0, 4.2, 1, false, true);
      vec3 noise = curlNoiseColor(computedPosition * scale + time, color);
      localVelocity += noise * 2.6;  // Adjust to control the amount of noise
      computedPosition += localVelocity * transition;
      
      // Apply rotation
      mat4 rot = rotationMatrix(vec3(0.0, 1.0, 0.0), time * 0.35);
      computedPosition = (rot * vec4(computedPosition, 1.0)).xyz;
    }
    // Apply morph transition if it is in progress
    if (morphTransition > 0.0) {
      computedPosition = mix(computedPosition, position, morphTransition);
    }
  } else {
    computedPosition = mix(currentPosition + velocity * transition, position, morphTransition);
  }
  // Compute final position and point size
  vec4 mvPosition = modelViewMatrix * vec4(computedPosition, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = 1.0 * ( 110.0 / -mvPosition.z );
}