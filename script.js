const inputBox = document.getElementById("inputBox");
      const outputText = document.getElementById("outputText");
      const copyButton = document.getElementById("copyButton");

      inputBox.addEventListener("input", () => {
        const text = inputBox.value.toLowerCase();
        let output = "";

        if (text === "olix is a nerd") {
          output =
            '<stroke color="#2A0030" thickness="4"><font size="90"><font color="#FF0000"><font face="LuckiestGuy">yes</font></font></font></stroke>';
        } else {
          output = `<stroke color="#2A0030" thickness="4"><font size="90"><font color="#FF0000"><font face="LuckiestGuy">${text}</font></font></font></stroke>`;
        }

        outputText.innerHTML = output;
      });

      copyButton.addEventListener("click", () => {
        const textarea = document.createElement("textarea");
        textarea.value = outputText.innerHTML;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      });

      if (inputBox.value.toLowerCase() === "olix") {
        window.location.href = "https://plsdonatehelp.github.io/olix";
      }
