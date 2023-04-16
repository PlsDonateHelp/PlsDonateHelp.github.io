const textInput = document.getElementById("textInput");
const fontInput = document.getElementById("fontInput");
const sizeInput = document.getElementById("sizeInput");
const colorInput = document.getElementById("colorInput");
const strokeColorInput = document.getElementById("strokeColorInput");
const thicknessInput = document.getElementById("thicknessInput");
const preview = document.getElementById("preview");
const exportButton = document.getElementById("exportButton");

const updatePreview = () => {
  preview.innerHTML = textInput.value;
  preview.style.fontFamily = fontInput.value;
  preview.style.fontSize = `${sizeInput.value}px`;
  preview.style.color = colorInput.value;
  preview.style.textShadow = `${thicknessInput.value}px ${thicknessInput.value}px 0 ${strokeColorInput.value}`;
};

textInput.addEventListener("input", updatePreview);
fontInput.addEventListener("change", updatePreview);
sizeInput.addEventListener("input", updatePreview);
colorInput.addEventListener("input", updatePreview);
strokeColorInput.addEventListener("input", updatePreview);
thicknessInput.addEventListener("input", updatePreview);

exportButton.addEventListener("click", () => {
  domtoimage.toBlob(preview)
    .then(function (blob) {
      saveAs(blob, "image.png");
    });
});

updatePreview();
