import React from "react";
import Sketch from "react-p5";
import './styles.css'

function Relogio() {
  let radius = 150;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(radius * 2, radius * 2).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255);
    p5.translate(radius, radius);
    p5.stroke(51);
    p5.strokeWeight(5);
    p5.noFill();
    p5.ellipse(0, 0, radius * 2 - 10, radius * 2 - 10);

    let now = new Date();
    let hr = now.getHours() % 12;
    let mn = now.getMinutes();
    let sc = now.getSeconds();

    // Ponteiros
    p5.stroke(0);
    p5.strokeWeight(7);
    let hourAngle = p5.radians((hr + mn / 60) * 30 - 90);
    p5.line(0, 0, (radius - 60) * p5.cos(hourAngle), (radius - 60) * p5.sin(hourAngle));

    p5.strokeWeight(5);
    let minAngle = p5.radians((mn + sc / 60) * 6 - 90);
    p5.line(0, 0, (radius - 40) * p5.cos(minAngle), (radius - 40) * p5.sin(minAngle));

    p5.stroke(255, 0, 0);
    p5.strokeWeight(2);
    let secAngle = p5.radians(sc * 6 - 90);
    p5.line(0, 0, (radius - 30) * p5.cos(secAngle), (radius - 30) * p5.sin(secAngle));

    // Centro
    p5.noStroke();
    p5.fill(0);
    p5.ellipse(0, 0, 10, 10);
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default Relogio;
