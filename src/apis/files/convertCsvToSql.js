import { transport } from "../Auth";

const convertCsvToSql = async () => {
    const res = await transport({
        url: "/get_uploaded_files",
        method: "GET",
    });
    return res.status === 200;
};
