const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();

app.use(cors());
app.use(express.json());

// ruta za hash
app.post("/hash", (req, res) => {
    const text = req.body.text;

    const hash = crypto
        .createHash("sha256")
        .update(text)
        .digest("hex");

    res.json({ hash });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server radi na portu " + PORT);
});
