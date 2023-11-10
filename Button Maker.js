let customBtn = document.getElementById("customButton");
let applyBtn = document.getElementById("applyButton");

applyBtn.onclick = function() {
    let bgColorElement = document.getElementById("bgColorInput");
    // console.log(bgColorElement.value);
    let fontColorInput = document.getElementById("fontColorInput");
    // console.log(fontColorInput.value);
    let fontSizeElement = document.getElementById("fontSizeInput");
    // console.log(fontSizeElement.value);
    let fontWeightElement = document.getElementById("fontWeightInput");
    // console.log(fontWeightElement.value);
    let paddingElement = document.getElementById("paddingInput");
    // console.log(paddingElement.value);
    let borderElement = document.getElementById("borderRadiusInput");
    // console.log(borderElement.value);

    customBtn.style.backgroundColor = bgColorElement.value;
    customBtn.style.color = fontColorInput.value;
    customBtn.style.fontSize = fontSizeElement.value;
    customBtn.style.fontWeight = fontWeightElement.value;
    customBtn.style.padding = paddingElement.value;
    customBtn.style.borderRadius = borderElement.value;
};