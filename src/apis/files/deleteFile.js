import { transport } from "../Auth";

export const deleteFile = async (fileName) => {
    const res = await transport({
        url: "/delete_file/" + fileName,
        method: "GET",
    });
    return res.status;
};
