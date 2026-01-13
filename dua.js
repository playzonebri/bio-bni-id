import React, { useEffect, useRef } from "react";
import Two from "two.js";

export default function App() {
  var domElement = useRef();

  useEffect(setup, []);

  function setup() {
    var two = new Two({
      fullscreen: true,
      autostart: true
    }).appendTo(domElement.current);

    var rect = two.makeRectangle(two.width / 2, two.height / 2, 50, 50);
    two.bind("update", update);

    return unmount;

    function unmount() {
      two.unbind("update");
      two.pause();
      domElement.current.removeChild(two.renderer.domElement);
    }

    function update() {
      rect.rotation += 0.001;
    }
  }

  return <div ref={domElement} />;
}