import {
  Application,
  Assets,
  Shader,
  Geometry,
  Mesh,
  Texture,
} from "pixi.js";

import vertexShader from "./base.vert?raw";

import fragmentShader from "./base.frag?raw";

async function main() {
  // Create PixiJS application
  const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x2f3136,
    antialias: true,
    view: document.getElementById("pixiCanvas")! as HTMLCanvasElement,
  });

  await Assets.load("bunny.webp");
  await Assets.load("peach.webp");

  const shader = Shader.from(vertexShader, fragmentShader, {
    uSampler2: Assets.cache.get("bunny.webp") as Texture, //! Пояснить
    uTime: 0,
    uMouse: [0,0]
  });

  const geometry = new Geometry()
    .addAttribute(
      "aVertexPosition", // the attribute name
      [
        -100,
        -100, // top-left
        100,
        -100, // top-right
        100,
        100, // bottom-right
        -100,
        100, // bottom-left
      ],
      2 // size of each vertex (x, y)
    )
    .addAttribute(
      "aUvs", // the attribute name
      [
        0,
        0, // top-left
        1,
        0, // top-right
        1,
        1, // bottom-right
        0,
        1, // bottom-left
      ],
      2 // size of each UV (u, v)
    )
    .addIndex([0, 1, 2, 0, 2, 3]); // indices that form two triangles for a quad

  const example = new Mesh(geometry, shader);

  example.position.set(app.renderer.width/2, app.renderer.height/2);

  app.stage.addChild(example);

  document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX / window.innerWidth;
    const mouseY = event.clientY / window.innerHeight;
    shader.uniforms.uMouse = [mouseX, mouseY]; // Пример передачи данных о мыши
});

  app.ticker.add((delta: number) => {
    shader.uniforms.uTime += delta;
  });

}

main();
