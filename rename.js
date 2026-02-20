import fs from "fs";
import path from "path";

const folderPath = "./public/images"; // your folder

// Get all image files
let files = fs.readdirSync(folderPath)
  .filter(f => f.match(/\.(jpg|jpeg|png)$/i)) // valid image extensions
  .sort(); // sort alphabetically (WhatsApp images already sorted)

let index = 1;

files.forEach(file => {
  const ext = path.extname(file);       // .jpg / .png
  const newName = `${index}${ext}`;     // 1.jpg, 2.jpg, 3.png ...
  const oldPath = path.join(folderPath, file);
  const newPath = path.join(folderPath, newName);

  fs.renameSync(oldPath, newPath);
  index++;
});

console.log("Renaming completed!");