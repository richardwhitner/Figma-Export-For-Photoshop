import JSZip from "jszip";

figma.showUI(__html__, { width: 300, height: 100 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'export-layers') {
    const nodes = figma.currentPage.selection;
    const zip = new JSZip();

    console.log(`Exporting ${nodes.length} nodes`); // Log the number of nodes being exported

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i] as FrameNode;
      const tempNode = node.clone() as FrameNode;
      tempNode.name = node.name + "_temp";

      const originalChildren = [...tempNode.children]; // Store the original children

      let layerIndex = 1;
      for (const child of originalChildren.reverse()) { // Reverse the order of the children
        if (child.visible) {
          const wrapper = figma.createFrame();
          wrapper.name = `layer_${layerIndex}`;
          wrapper.resizeWithoutConstraints(node.width, node.height); // Set the size of the wrapper to the size of the parent node
          wrapper.backgrounds = []; // Make the wrapper transparent
          wrapper.appendChild(child.clone()); // Clone the child before appending
          tempNode.appendChild(wrapper); // Append the wrapper to the tempNode
          layerIndex++;
        }
      }

      // Remove the original children from the tempNode
      for (const child of originalChildren) {
        child.remove();
      }

      console.log(`Exporting ${tempNode.children.length} children of node ${node.name}`); // Log the number of children being exported

      const exportSettings = { format: 'PNG' as 'PNG' };
      for (const child of tempNode.children) {
        const exportableNode = child as SceneNode;
        const result = await exportableNode.exportAsync(exportSettings);
        console.log(`Exporting ${node.name}/${child.name}.png`); // Log the export process
        zip.file(`${node.name}/${child.name}.png`, result);
      }

      tempNode.remove();
    }

    zip.generateAsync({ type: "base64" }).then((content: string) => {
      console.log(`Zip file generated with size ${content.length}`); // Log the size of the zip file
      figma.ui.postMessage({ type: 'zip-ready', content: content });
    });
  }
};

figma.ui.postMessage({ type: 'plugin-loaded' });
