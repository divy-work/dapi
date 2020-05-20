// sign with my name in the bottom of the website
window.addEventListener("load", () => {
  new Sign().print(document.body);
});

class Sign {
  constructor(attr = {}) {
    attr = {
      ...attr,
      ...{
        href: "https://divy.work",
        innerText: "divy.work",
        target: "_blank",
        style: {
          fontFamily: "monospace",
          fontSize: "18px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "rgba(255,255,255,.75)",
          boxSizing: "border-box",
          display: "block",
          position: "fixed",
          padding: "16px",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
        },
      },
    };
    this.$el = this.create();
    this.$el = this.applyAttributes(this.$el, attr);
    return this;
  }

  create() {
    return document.createElement("a");
  }

  applyAttributes($a, attr) {
    $a.href = attr.href;
    $a.innerText = attr.innerText;
    $a.target = attr.target;
    Object.assign($a.style, attr.style);
    return $a;
  }

  print($container) {
    $container.appendChild(this.$el);
  }
}
