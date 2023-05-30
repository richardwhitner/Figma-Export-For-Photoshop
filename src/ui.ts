

//ChatGPT 4
// Listen for the 'plugin-loaded' message from the plugin code
onmessage = (event) => {
    if (event.data.pluginMessage.type === 'plugin-loaded') {
      // The plugin code has loaded, we can now show our UI
      (document.getElementById('exportButton') as HTMLButtonElement).disabled = false;
    } else if (event.data.pluginMessage.type === 'zip-ready') {
      // The zip file is ready, we can now download it
      const link = document.createElement('a');
      link.href = 'data:application/zip;base64,' + event.data.pluginMessage.content;
      link.download = 'export.zip';
      link.click();
    }
  };
  
  (document.getElementById('exportButton') as HTMLButtonElement).addEventListener('click', () => {
    const exportPath = (document.getElementById('exportPath') as HTMLInputElement).value;
    parent.postMessage({ pluginMessage: { type: 'export-layers', exportPath: exportPath } }, '*');
  });
  
  

/*
//ChatGPT 3.5
import * as JSZip from 'jszip';

// Function to handle export button click
async function handleExportClick() {
  // Send a message to the plugin code to initiate the export
  parent.postMessage({ pluginMessage: { type: 'export' } }, '*');
}

// Function to handle messages from the plugin code
function handleMessage(event: MessageEvent) {
  const { message } = event.data.pluginMessage; // Destructure the message from event.data.pluginMessage

  if (message.type === 'exportedAsset') {
    const { name, bytes } = message.data;

    // Create a JSZip instance
    const zip = new JSZip();

    // Add the exported asset to the ZIP file
    zip.file(`${name}.png`, bytes, { base64: true });

    // Generate the ZIP file asynchronously
    zip.generateAsync({ type: 'blob' })
      .then((content) => {
        // Save the ZIP file
        const url = URL.createObjectURL(content);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'export.zip';
        link.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error generating ZIP file:', error);
      });
  } else if (message.type === 'exportResults') {
    const { results } = message;
    // Handle the export results here
    console.log('Export results:', results);
  } else if (message.type === 'error') {
    const { message: errorMessage } = message; // Rename to avoid conflict with the variable name
    // Handle the error message here
    console.error('Error:', errorMessage);
  }
}

// Add event listener for button click
const exportButton = document.getElementById('export-button');
if (exportButton) {
  exportButton.addEventListener('click', handleExportClick);
}
// Add event listener for messages from the plugin code
window.addEventListener('message', handleMessage, false);
*/



/*import * as JSZip from 'jszip'

window.onmessage = async (event) => {
  const { type, data } = event.data.pluginMessage;
  if (type === 'export') {
    const zip = new JSZip();

    for (let item of data) {
      zip.file(`${item.name}.png`, item.buffer);
    }

    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'export.zip';
    link.click();
    URL.revokeObjectURL(url);
  }
};
*/