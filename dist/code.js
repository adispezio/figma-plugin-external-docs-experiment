// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many of the chose shape on screen
// This shows the HTML page in "index.html".
figma.showUI(__html__, { width: 400, height: 700 });
const node = figma.currentPage.selection[0];
sendDescription(node);
function sendDescription(nodeSelected) {
    if (nodeSelected.masterComponent) {
        figma.ui.postMessage(nodeSelected.masterComponent.description);
    }
    else {
        figma.ui.postMessage(nodeSelected.description);
    }
}
figma.on("selectionchange", () => {
    sendDescription(figma.currentPage.selection[0]);
});
