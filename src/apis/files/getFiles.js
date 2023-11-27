//import axios from "axios";
//import { BASE_URL } from "../../constants/constant";
import { transport } from "../Auth";
const getFiles = async () => {
    const res = await transport({
        url: "/get_uploaded_files",
        method: "GET",
    });
    if (res.status === 200) {
        return res.data.uploaded_files;
    }
    return [];
};

export default getFiles;
