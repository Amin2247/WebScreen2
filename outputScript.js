const urlParams = new URLSearchParams(window.location.search);
const outputContainer = document.getElementById("deviceOutput");

outputContainer.innerHTML = `
    <div class="header">Room 1</div>
    <div class="info-row"><strong>Room name:</strong> ${urlParams.get("roomName1") || "N/A"}</div>
    <div class="info-row"><strong>Model:</strong> ${urlParams.get("model1") || "N/A"}</div>
    <div class="info-row"><strong>Service provider:</strong> ${urlParams.get("serviceProvider1") || "N/A"}</div>
    <div class="info-row"><strong>Firmware version:</strong> ${urlParams.get("firmwareVersion1") || "N/A"}</div>
    <div class="info-row"><strong>MAC address:</strong> ${urlParams.get("macAddress1") || "N/A"}</div>
    <div class="info-row"><strong>IP address:</strong> ${urlParams.get("ipAddress1") || "N/A"}</div>
    <div class="info-row"><strong>Video conferencing app version:</strong> ${urlParams.get("videoAppVersion1") || "N/A"}</div>
    <div class="header">Room 2</div>
    <div class="info-row"><strong>Room name:</strong> ${urlParams.get("roomName2") || "N/A"}</div>
    <div class="info-row"><strong>Model:</strong> ${urlParams.get("model2") || "N/A"}</div>
    <div class="info-row"><strong>Service provider:</strong> ${urlParams.get("serviceProvider2") || "N/A"}</div>
    <div class="info-row"><strong>Firmware version:</strong> ${urlParams.get("firmwareVersion2") || "N/A"}</div>
    <div class="info-row"><strong>MAC address:</strong> ${urlParams.get("macAddress2") || "N/A"}</div>
    <div class="info-row"><strong>IP address:</strong> ${urlParams.get("ipAddress2") || "N/A"}</div>
    <div class="info-row"><strong>Video conferencing app version:</strong> ${urlParams.get("videoAppVersion2") || "N/A"}</div>
`;
