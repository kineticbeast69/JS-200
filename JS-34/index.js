const paraText = document.getElementById("para");
const icons = document.querySelectorAll(".icon");
const sizeIcons = document.querySelectorAll(".size-icon");
const weightIcons = document.querySelectorAll(".weight-icon");
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const value = icon.value;
    const paraValue = paraText.value;
    if (value === "Uppercase") {
      paraText.value = paraValue.toUpperCase();
    } else if (value === "Lowercase") {
      paraText.value = paraValue.toLowerCase();
    } else if (value === "Capitalize") {
      paraText.value = paraValue
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    } else if (value === "Toggle") {
      paraText.value = paraValue
        .split(" ")
        .map((word) => {
          return word.charAt(0).toLowerCase() + word.slice(1).toUpperCase();
        })
        .join(" ");
    } else {
      paraText.value = paraValue;
    }
  });
});

let count = 1;
sizeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let value = icon.value;
    if (value === "A+") {
      count += 0.1;
    } else {
      count -= 0.1;
    }
    paraText.style.fontSize = `${count}em`;
  });
});
let weightCount = 0;
let italicCount = 0;
let underCount = 0;
weightIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let value = icon.value;
    if (value === "Bold") {
      if (weightCount === 0) {
        paraText.style.fontWeight = "bolder";
        weightCount = 1;
      } else {
        paraText.style.fontWeight = "normal";
        weightCount = 0;
      }
    }
    if (value === "Italic") {
      if (italicCount === 0) {
        paraText.style.fontStyle = "italic";
        italicCount = 1;
      } else {
        paraText.style.fontStyle = "normal";
        italicCount = 0;
      }
    }
    if (value === "underline") {
      if (underCount === 0) {
        paraText.style.textDecoration = "underline";
        underCount = 1;
      } else {
        paraText.style.textDecoration = "none";
        underCount = 0;
      }
    }
  });
});
