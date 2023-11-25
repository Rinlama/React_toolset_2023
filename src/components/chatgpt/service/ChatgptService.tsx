import axios from "axios";

const GetResponse = async (prompt: string) => {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 30,
    temperature: 0.7,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_CHATGPT_KEY}`,
  };

  return axios.post("https://api.openai.com/v1/chat/completions", data, {
    headers,
  });
};

export { GetResponse };
