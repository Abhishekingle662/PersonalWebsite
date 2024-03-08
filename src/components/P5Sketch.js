//p5.js code below

import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

function sketch(p) {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.blendMode(p.ADD);
  };

  p.draw = () => {
    p.clear();
    p.ambientLight(60);
    p.directionalLight(255, 255, 255, 0.25, 0.25, -0.75);
    p.pointLight(250, 250, 250, p.mouseX - p.width / 2, p.mouseY - p.height / 2, 50);
    p.translate(0, 0, -200);

    for (let i = 0; i < 10; i++) {
      p.push();
      let hueValue = p.map(i, 0, 10, 0, 360);
      p.colorMode(p.HSB, 360, 100, 100, 100);
      let col = p.color(hueValue, 80, 100, 20);

      p.stroke(col);
      p.strokeWeight(2);
      p.noFill();

      p.rotateX(p.frameCount * 0.2 + i * (360 / 10));
      p.rotateY(p.frameCount * 0.2 + i * (360 / 10));
      p.rotateZ(p.frameCount * 0.2 + i * (360 / 10));
      p.scale(1 + i * 0.2);
      p.box(100 + i * 20);
      p.pop();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}

function P5Sketch() {
  return <ReactP5Wrapper sketch={sketch} />;
}

export default P5Sketch;
