import dotenv from 'dotenv'
dotenv.config();
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { readFile } from 'fs/promises';

const openaiKey = process.env.OPEN_AI_API_KEY;
const sbUrl = process.env.SUPABASE_URL;
const sbKey = process.env.SUPABASE_KEY;


    try {

        const text = await readFile('scrimba-info.txt', 'utf8');
        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 500,
            chunkOverlap: 50,
        });
    
        const output = await splitter.createDocuments([text]);
    
        console.log(output);
    
    
        
    } catch (err) {
        console.log(err)
    }
