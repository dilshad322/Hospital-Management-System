// import multer from "multer";

// const storage = multer.diskStorage({
//     filename: function (req, file, callback) {
//         callback(null, file.originalname)
//     }
// });

// const upload = multer({ storage: storage })

// export default upload

import multer from "multer";
import path from "node:path";
import fs from "node:fs";

const uploadDir = path.resolve("uploads");

fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, uploadDir);
    },

    filename: function (req, file, callback) {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        callback(null, uniqueName);
    }
});

const upload = multer({ storage });

export default upload;