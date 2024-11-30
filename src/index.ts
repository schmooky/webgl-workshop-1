import {
  Application,
  Assets,
  Shader,
  Geometry,
  Mesh,
} from "pixi.js";

import vertexShader from "./base.vert?raw";

import fragmentShader from "./task12.frag?raw";

async function main() {
  // Create PixiJS application
  const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x104488,
    antialias: true,
    view: document.getElementById("pixiCanvas")! as HTMLCanvasElement,
  });


  await Assets.load("bunny.webp");
  await Assets.load("peach.webp");

  const geometry = new Geometry()
    .addAttribute(
      "aVertexPosition", // the attribute name
      [
        -100,
        -100, // bottom-left
        100,
        -100, // bottom-right
        100,
        100, // top-right
        -100,
        100, // top-left
      ],
      2 // size of each vertex (x, y)
    )
    .addAttribute(
      "aUvs", // the attribute name
      [
        0,
        0, // bottom-left
        1,
        0, // bottom-right
        1,
        1, // top-right
        0,
        1, // top-left
      ],
      2 // size of each UV (u, v)
    )
    .addIndex([0, 1, 2, 0, 2, 3]); // indices that form two triangles for a quad

  const shader = Shader.from(vertexShader, fragmentShader, {
    uSampler2: Assets.cache.get("bunny.webp"), // Ensure the asset is correctly loaded
    uTime: 0,
  });

  const triangle = new Mesh(geometry, shader);

  triangle.position.set(400, 300);
  triangle.scale.set(2);

  app.stage.addChild(triangle);

  app.ticker.add((delta: number) => {
    // triangle.rotation += 0.01;
    
    shader.uniforms.uTime += delta; // Пример передачи данных о мыши
  });

}

main();
