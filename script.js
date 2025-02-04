document.getElementById("deviceForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    
    // Gather form data
    const rooms = [
        {
            roomName: document.getElementById("roomName1").value,
            model: document.getElementById("model1").value,
            serviceProvider: document.getElementById("serviceProvider1").value,
            firmwareVersion: document.getElementById("firmwareVersion1").value,
            macAddress: document.getElementById("macAddress1").value,
            ipAddress: document.getElementById("ipAddress1").value,
            videoAppVersion: document.getElementById("videoAppVersion1").value,
        },
        {
            roomName: document.getElementById("roomName2").value,
            model: document.getElementById("model2").value,
            serviceProvider: document.getElementById("serviceProvider2").value,
            firmwareVersion: document.getElementById("firmwareVersion2").value,
            macAddress: document.getElementById("macAddress2").value,
            ipAddress: document.getElementById("ipAddress2").value,
            videoAppVersion: document.getElementById("videoAppVersion2").value,
        },
    ];

    // Save data to localStorage and redirect
    localStorage.setItem("deviceData", JSON.stringify(rooms));
    window.location.href = "output.html";
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("data.txt")
        .then((response) => response.text())
        .then((rawData) => {
            const lines = rawData.split("\n").filter((line) => line.trim() !== "");
            const rooms = [
                {
                    roomName: lines[0],
                    model: lines[1],
                    serviceProvider: lines[2],
                    firmwareVersion: lines[3],
                    macAddress: lines[6],
                    ipAddress: lines[7],
                    videoAppVersion: lines[8],
                },
                {
                    roomName: lines[9],
                    model: lines[10],
                    serviceProvider: lines[11],
                    firmwareVersion: lines[12],
                    macAddress: lines[15],
                    ipAddress: lines[16],
                    videoAppVersion: lines[17],
                },
            ];

            // Populate the form fields with the data
            if (rooms[0]) {
                document.getElementById("roomName1").value = rooms[0].roomName;
                document.getElementById("model1").value = rooms[0].model;
                document.getElementById("serviceProvider1").value = rooms[0].serviceProvider;
                document.getElementById("firmwareVersion1").value = rooms[0].firmwareVersion;
                document.getElementById("macAddress1").value = rooms[0].macAddress;
                document.getElementById("ipAddress1").value = rooms[0].ipAddress;
                document.getElementById("videoAppVersion1").value = rooms[0].videoAppVersion;
            }
            if (rooms[1]) {
                document.getElementById("roomName2").value = rooms[1].roomName;
                document.getElementById("model2").value = rooms[1].model;
                document.getElementById("serviceProvider2").value = rooms[1].serviceProvider;
                document.getElementById("firmwareVersion2").value = rooms[1].firmwareVersion;
                document.getElementById("macAddress2").value = rooms[1].macAddress;
                document.getElementById("ipAddress2").value = rooms[1].ipAddress;
                document.getElementById("videoAppVersion2").value = rooms[1].videoAppVersion;
            }
        })
        .catch((err) => console.error("Error fetching data:", err));
});

