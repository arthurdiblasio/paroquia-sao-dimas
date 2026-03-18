import Image from "@tiptap/extension-image";

export const ResizableImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),

      width: {
        default: "100%",
        parseHTML: (element) => element.getAttribute("width"),
        renderHTML: (attributes) => ({
          width: attributes.width,
        }),
      },

      align: {
        default: "center",
        parseHTML: (element) => element.getAttribute("data-align") || "center",
        renderHTML: (attributes) => ({
          "data-align": attributes.align,
        }),
      },
    };
  },

  addNodeView() {
    return ({ node, editor }) => {
      const container = document.createElement("div");
      container.style.display = "block";
      container.style.margin = "12px 0";

      const img = document.createElement("img");
      img.src = node.attrs.src;
      img.style.width = node.attrs.width || "100%";
      img.style.borderRadius = "8px";

      const resizer = document.createElement("div");
      resizer.style.width = "10px";
      resizer.style.height = "10px";
      resizer.style.background = "#092070";
      resizer.style.position = "absolute";
      resizer.style.right = "0";
      resizer.style.bottom = "0";
      resizer.style.cursor = "se-resize";

      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      wrapper.style.display = "inline-block";

      function applyAlign(align: string) {
        if (align === "left") container.style.textAlign = "left";
        if (align === "center") container.style.textAlign = "center";
        if (align === "right") container.style.textAlign = "right";
      }

      applyAlign(node.attrs.align);

      let startX = 0;
      let startWidth = 0;

      const onMouseMove = (event: MouseEvent) => {
        const newWidth = startWidth + (event.clientX - startX);
        img.style.width = `${newWidth}px`;
      };

      const onMouseUp = () => {
        editor
          .chain()
          .focus()
          .updateAttributes("image", {
            width: img.style.width,
          })
          .run();

        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      resizer.addEventListener("mousedown", (event) => {
        startX = event.clientX;
        startWidth = img.offsetWidth;

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });

      wrapper.appendChild(img);
      wrapper.appendChild(resizer);
      container.appendChild(wrapper);

      return {
        dom: container,
      };
    };
  },
});
