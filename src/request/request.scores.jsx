import api from "../axios/reqScores";

export const getScores = async () => {
  try {
    const response = await api.get("/scores");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
