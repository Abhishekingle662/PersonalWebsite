import React from 'react';
import Sketch from 'react-p5';
import './about.css';

function About() {
  let textData = "Meet Abhishek Ingle, a tech enthusiast currently pursuing a Master's in Computer Science at Indiana University, set to graduate in 2025. With a passion for enhancing databases and UI/UX designs, Abhishek has a track record of turning the ordinary into the extraordinary. Proficient in C++, Python, and C#, he navigates both front-end and back-end tools with ease. When not coding or teaching, you'll find Abhishek immersed in strategic chess matches.";
  let words;
  let baseFontSize = 16;
  let popEffectDistance = 100; // Distance from mouse to word to trigger the pop effect
  let minOpacity = 0.5; // Minimum opacity to ensure text is slightly visible
  let popSizeIncrease = 4; // Reduced maximum size increase for the pop effect for subtlety

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    words = p5.splitTokens(textData, " ,."); // Split text into words and punctuation
    p5.textFont('Georgia');
  };

  const draw = p5 => {
    p5.clear(); // Keep the background transparent

    let x = 20; // Start x position for text
    let y = 40; // Start y position for text

    words.forEach((word, index) => {
      p5.textSize(baseFontSize);
      let wordWidth = p5.textWidth(word + ' ');
      let effect = easeEffect(p5.mouseX, p5.mouseY, x + wordWidth / 2, y - baseFontSize / 2);
      let targetSize = baseFontSize + popSizeIncrease * effect;
      let alpha = 255 * (minOpacity + (1 - minOpacity) * effect); // Ensure minimum visibility

      p5.textSize(targetSize);

      // Vibrant text color with dynamic opacity
      let textColor = p5.lerpColor(p5.color(200, 150, 100, alpha), p5.color(0, 255, 0, alpha), effect);
      p5.fill(textColor); // Use vibrant colors that change with the effect

      p5.text(word, x, y);

      x += wordWidth;
      if (x > p5.width - 100) { // Check if we need to wrap text
        x = 20;
        y += baseFontSize + 20; // Move to the next line
      }
    });
  };

  // Ease effect based on distance between mouse and word center
  const easeEffect = (mx, my, wx, wy) => {
    let distance = Math.dist(mx, my, wx, wy);
    if (distance < popEffectDistance) {
      return 1 - (distance / popEffectDistance);
    }
    return 0;
  };

  return (
    <section id="about" className="about">
      <div className="single-about-txt">
        <Sketch setup={setup} draw={draw} />
        <div id='photo'> </div>
      </div>
    </section>
  );
}

export default About;
