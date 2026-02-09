// FRONTEND HASH
async function frontendHash() {
    const text = document.getElementById("input").value;

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

    document.getElementById("frontendResult").textContent = hashHex;
}


// BACKEND HASH
async function backendHash() {
    const text = document.getElementById("input").value;

    const response = await fetch("http://localhost:3000/hash", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    });

    const data = await response.json();

    document.getElementById("backendResult").textContent = data.hash;
}
