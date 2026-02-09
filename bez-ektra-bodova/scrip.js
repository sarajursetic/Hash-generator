document.getElementById("hashForm").addEventListener("submit", async function(e) {
    e.preventDefault(); 

    const text = document.getElementById("input").value;

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

    document.getElementById("result").textContent = hashHex;
});
