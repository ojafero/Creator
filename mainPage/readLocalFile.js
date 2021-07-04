async function downloadFile(fileName) {
    const controlContainerDiv = document.querySelector("#more-controls");
	let response = await fetch(`${fileName}.txt`);
		
	if(response.status != 200) {
		throw new Error("Error occured while downloading the file");
	}
		
	// read response stream as text
	let data = await response.text();
    return data;
}
