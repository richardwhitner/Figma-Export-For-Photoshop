/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/

//ChatGPT 4
// Listen for the 'plugin-loaded' message from the plugin code
onmessage = (event) => {
    if (event.data.pluginMessage.type === 'plugin-loaded') {
        // The plugin code has loaded, we can now show our UI
        document.getElementById('exportButton').disabled = false;
    }
    else if (event.data.pluginMessage.type === 'zip-ready') {
        // The zip file is ready, we can now download it
        const link = document.createElement('a');
        link.href = 'data:application/zip;base64,' + event.data.pluginMessage.content;
        link.download = 'export.zip';
        link.click();
    }
};
document.getElementById('exportButton').addEventListener('click', () => {
    const exportPath = document.getElementById('exportPath').value;
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCLGlEQUFpRDtBQUMzRixDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUIsa0JBQWtCO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxVQUFVLFVBQVUsNEJBQTRCOztBQUVoRDtBQUNBLFlBQVksY0FBYzs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUFLLGdCQUFnQixjQUFjOztBQUVuRDtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJO0FBQ0osWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJO0FBQ0osWUFBWSx3QkFBd0IsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixVQUFVO0FBQzVCOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0V4cG9ydC1Gb3ItUGhvdG9zaG9wLy4vc3JjL3VpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy9DaGF0R1BUIDRcbi8vIExpc3RlbiBmb3IgdGhlICdwbHVnaW4tbG9hZGVkJyBtZXNzYWdlIGZyb20gdGhlIHBsdWdpbiBjb2RlXG5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLnR5cGUgPT09ICdwbHVnaW4tbG9hZGVkJykge1xuICAgICAgICAvLyBUaGUgcGx1Z2luIGNvZGUgaGFzIGxvYWRlZCwgd2UgY2FuIG5vdyBzaG93IG91ciBVSVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0QnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLnR5cGUgPT09ICd6aXAtcmVhZHknKSB7XG4gICAgICAgIC8vIFRoZSB6aXAgZmlsZSBpcyByZWFkeSwgd2UgY2FuIG5vdyBkb3dubG9hZCBpdFxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTphcHBsaWNhdGlvbi96aXA7YmFzZTY0LCcgKyBldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2UuY29udGVudDtcbiAgICAgICAgbGluay5kb3dubG9hZCA9ICdleHBvcnQuemlwJztcbiAgICAgICAgbGluay5jbGljaygpO1xuICAgIH1cbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZXhwb3J0UGF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnRQYXRoJykudmFsdWU7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnZXhwb3J0LWxheWVycycsIGV4cG9ydFBhdGg6IGV4cG9ydFBhdGggfSB9LCAnKicpO1xufSk7XG4vKlxuLy9DaGF0R1BUIDMuNVxuaW1wb3J0ICogYXMgSlNaaXAgZnJvbSAnanN6aXAnO1xuXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgZXhwb3J0IGJ1dHRvbiBjbGlja1xuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRXhwb3J0Q2xpY2soKSB7XG4gIC8vIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBwbHVnaW4gY29kZSB0byBpbml0aWF0ZSB0aGUgZXhwb3J0XG4gIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2V4cG9ydCcgfSB9LCAnKicpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgbWVzc2FnZXMgZnJvbSB0aGUgcGx1Z2luIGNvZGVcbmZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICBjb25zdCB7IG1lc3NhZ2UgfSA9IGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZTsgLy8gRGVzdHJ1Y3R1cmUgdGhlIG1lc3NhZ2UgZnJvbSBldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2VcblxuICBpZiAobWVzc2FnZS50eXBlID09PSAnZXhwb3J0ZWRBc3NldCcpIHtcbiAgICBjb25zdCB7IG5hbWUsIGJ5dGVzIH0gPSBtZXNzYWdlLmRhdGE7XG5cbiAgICAvLyBDcmVhdGUgYSBKU1ppcCBpbnN0YW5jZVxuICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpO1xuXG4gICAgLy8gQWRkIHRoZSBleHBvcnRlZCBhc3NldCB0byB0aGUgWklQIGZpbGVcbiAgICB6aXAuZmlsZShgJHtuYW1lfS5wbmdgLCBieXRlcywgeyBiYXNlNjQ6IHRydWUgfSk7XG5cbiAgICAvLyBHZW5lcmF0ZSB0aGUgWklQIGZpbGUgYXN5bmNocm9ub3VzbHlcbiAgICB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6ICdibG9iJyB9KVxuICAgICAgLnRoZW4oKGNvbnRlbnQpID0+IHtcbiAgICAgICAgLy8gU2F2ZSB0aGUgWklQIGZpbGVcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChjb250ZW50KTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsaW5rLmRvd25sb2FkID0gJ2V4cG9ydC56aXAnO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdlbmVyYXRpbmcgWklQIGZpbGU6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnZXhwb3J0UmVzdWx0cycpIHtcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IG1lc3NhZ2U7XG4gICAgLy8gSGFuZGxlIHRoZSBleHBvcnQgcmVzdWx0cyBoZXJlXG4gICAgY29uc29sZS5sb2coJ0V4cG9ydCByZXN1bHRzOicsIHJlc3VsdHMpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGNvbnN0IHsgbWVzc2FnZTogZXJyb3JNZXNzYWdlIH0gPSBtZXNzYWdlOyAvLyBSZW5hbWUgdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCB0aGUgdmFyaWFibGUgbmFtZVxuICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgbWVzc2FnZSBoZXJlXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3JNZXNzYWdlKTtcbiAgfVxufVxuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGJ1dHRvbiBjbGlja1xuY29uc3QgZXhwb3J0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1idXR0b24nKTtcbmlmIChleHBvcnRCdXR0b24pIHtcbiAgZXhwb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRXhwb3J0Q2xpY2spO1xufVxuLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBtZXNzYWdlcyBmcm9tIHRoZSBwbHVnaW4gY29kZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlLCBmYWxzZSk7XG4qL1xuLyppbXBvcnQgKiBhcyBKU1ppcCBmcm9tICdqc3ppcCdcblxud2luZG93Lm9ubWVzc2FnZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCB7IHR5cGUsIGRhdGEgfSA9IGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZTtcbiAgaWYgKHR5cGUgPT09ICdleHBvcnQnKSB7XG4gICAgY29uc3QgemlwID0gbmV3IEpTWmlwKCk7XG5cbiAgICBmb3IgKGxldCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgIHppcC5maWxlKGAke2l0ZW0ubmFtZX0ucG5nYCwgaXRlbS5idWZmZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6ICdibG9iJyB9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGNvbnRlbnQpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gdXJsO1xuICAgIGxpbmsuZG93bmxvYWQgPSAnZXhwb3J0LnppcCc7XG4gICAgbGluay5jbGljaygpO1xuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgfVxufTtcbiovIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9