import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

// handler function
const getHome = (req, res) => {
    return res.status(200).json({
        email: "robertzerah@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/robertGhandi/HNG12-API",
    });
};

app.get("/", getHome);

app.listen(PORT, () => {
    console.info(`✅ Server is running on port ${PORT}`);
});
