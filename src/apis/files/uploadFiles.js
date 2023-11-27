import axios from "axios";
import { BASE_URL } from "../../constants/constant";
import { transport } from "../Auth";
const uploadFiles = async (files) => {
    const data = new FormData();
    const fileNames = [];
    for (let file of files) {
        data.append("file", file);
        fileNames.push(file.name);
    }
    const res = await transport({
        url: "/upload_csv",
        method: "POST",
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    if (res.status === 200) {
        return fileNames;
    }
    return [];
};

export default uploadFiles;
