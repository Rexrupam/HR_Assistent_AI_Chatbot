import { GoogleGenAI } from "@google/genai";

export const getEmbedding = async (content) => {

    const ai = new GoogleGenAI({});

    const response = await ai.models.embedContent({
        model: 'gemini-embedding-001',
        contents: content,
    });

    return response.embeddings[0].values;
}
