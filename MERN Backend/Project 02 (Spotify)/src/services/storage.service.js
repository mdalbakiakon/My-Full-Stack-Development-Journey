import ImageKit, { toFile } from '@imagekit/nodejs';
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const uploadFile = async (fileBuffer, fileOriginalName) => {
  const ext = path.extname(fileOriginalName);
  const fileName = "music_" + Date.now() + ext;

  const result = await client.files.upload({
    file: await toFile(fileBuffer, fileName),
    fileName,
    folder: "spotify_clone"
  });

  return result;
};

export default uploadFile;