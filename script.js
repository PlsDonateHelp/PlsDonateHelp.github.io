let fontColorPicker = Pickr.create({
  el: "#fontColorPickerButton",
  theme: "nano",
  default: "#CCFFFF",
  comparison: false,
  components: {
    preview: true,
    opacity: false,
    hue: true,
    interaction: {
      input: true,
      save: true,
    },
  },
});
fontColorPicker.on("save", (color, instance) => {
  document.getElementById("colorInput").value = color.toHEXA().toString();
});

let strokeColorPicker = Pickr.create({
  el: "#strokeColorPickerButton",
  theme: "nano",
  default: "#2A0030",
  comparison: false,
  components: {
    preview: true,
    opacity: false,
    hue: true,
    interaction: {
      input: true,
      save: true,
    },
  },
});
strokeColorPicker.on("save", (color, instance) => {
  document.getElementById("strokeColorInput").value = color.toHEXA().toString();
});

let copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", function () {
  let textInput = document.getElementById("textInput").value;
  let fontInput = document.getElementById("fontInput").value;
  let sizeInput = document.getElementById("sizeInput").value;
  let colorInput = document.getElementById("colorInput").value;
  let strokeColorInput = document.getElementById("strokeColorInput").value;
  let thicknessInput = document.getElementById("thicknessInput").value;

  let code = `<div style="font-family: ${fontInput}; font-size: ${sizeInput}px; color: ${colorInput}; text-stroke: ${thicknessInput}px ${strokeColorInput}; -webkit-text-stroke: ${thicknessInput}px ${strokeColorInput};">${textInput}</div>`;
  navigator.clipboard.writeText(code);
});
