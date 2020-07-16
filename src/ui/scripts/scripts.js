const docFrame = document.querySelector('#docFrame');
const srcURI = 'https://primer.style/components/'

onmessage = (event) => {
    updateiFrame(event.data.pluginMessage);    
}

function updateiFrame(string) {
    const regex = /(.*@api\/components\/)(.*)/;
    const found = string.match(regex);
    //console.log(found[2]);

    docFrame.src = srcURI + found[2];
}

function updateURL(component) {
    docFrame.src = component;
}