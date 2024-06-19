// import { dirname } from "path";
// import { createWriteStream, existsSync } from "fs";
// import https from "https";
// import fetch from "node-fetch";
// import { createDir } from "./file";

// import { DownloadResponse } from "./file.model";

// export const download = async (
//   url: string,
//   destination: string
// ): Promise<void> => {
//   const agent = new https.Agent({
//     rejectUnauthorized: false,
//   });
//   const res: DownloadResponse = await fetch(url, { agent });
//   await createDir(dirname(destination));
//   await new Promise((resolve, reject) => {
//     const fileStream = createWriteStream(destination);
//     res.body?.pipe(fileStream);
//     res.body?.on("error", (err: any) => {
//       reject(err);
//     });
//     fileStream.on("finish", () => {
//       //@ts-ignore: Resolve has to be resolved some how
//       resolve();
//     });
//   });
// };
