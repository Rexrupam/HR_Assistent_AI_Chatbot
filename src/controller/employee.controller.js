import { Employees } from "../model/employee.model.js"
import { getEmbedding } from "../utils/gemini.embedding.js";
import similarity from "compute-cosine-similarity";

async function computeSimilarity(embedding) {
    const findAllEmployee = await Employees.find()

     return findAllEmployee
    

}

export const search=async(req,res)=>{
try {
    
        const {keyword} = req.body;
        if(!keyword){
            return res.status(400).json({error: "Keyword is required"});
        }
    
        const keywordEmbedding = await getEmbedding(keyword);
    
        if(!keywordEmbedding) {
            return res.status(500).json({error: "Failed to get keyword embedding"});
        }
    
        const getSimilarity = await computeSimilarity(keywordEmbedding);
    
        if(getSimilarity.length === 0) {
            return res.status(404).json({message: "No employees found"});
        }
    
        return res.json(getSimilarity);
} catch (error) {
    console.error("Error occurred while searching for employees:", error);
    return res.status(500).json({error: "Internal server error"});
}

}