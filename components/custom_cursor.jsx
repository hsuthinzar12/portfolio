"use client";

import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={1}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "var(--cursor-color, #fff)",
      }}
      outerStyle={{
        backgroundColor: "var(--cursor-color, #fff)",
        mixBlendMode: "exclusion",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}