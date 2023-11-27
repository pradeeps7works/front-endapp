import { transport } from "../Auth";

export const getAiResponse = async (prompt) => {
    const data = {
        user_input: prompt,
    };
    const res = await transport({
        url: "/convert",
        method: "POST",
        data: data,
    });
    return res;
};
