const OpenAI = require("openai")
const llog = require("../../utils/llog")
const fs = require("fs")
const path = require("path")


const whisper4me = async (audioFilePath) => {
    const openai = new OpenAI({apiKey: process.env.cli});
    console.log("about to convert")
    console.log(audioFilePath)
    const result = await openai.audio.transcriptions.create({
        file: fs.createReadStream(audioFilePath),
        model: "whisper-1",
      });
    console.log(JSON.stringify(result, null, 4))

}

module.exports.whisper4me = whisper4me