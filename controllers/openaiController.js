const dotenv = require('dotenv')
dotenv.config()

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_SECRET,
});
const openai = new OpenAIApi(configuration);


exports.summaryController = async(req, res) => {
    try {
        const {text} = req.body
        const {data} = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Summarize this \n${text}`,
            max_tokens: 500,
            temperature: 0.5,
        });
        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
         }
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: err.message
        })
    }
}
exports.paragraphController = async(req, res) => {
    try {
        const {text} = req.body
        const {data} = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write a detailed paragraph about \n${text}`,
            max_tokens: 500,
            temperature: 0.5,
        });
        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
         }
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: err.message
        })
    }
}

exports.chatbotController = async(req, res) => {
    try {
        const {text} = req.body
        const {data} = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: ` Answer question similar to how jethalal from tarak mehta show would.
            Me:'What is your name?'
            Jetha:'Jethalal Champaklal Gada'
            Me: ${text}`,
            max_tokens: 300,
            temperature: 0.7,
        });
        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
         }
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: err.message
        })
    }
}

exports.jsconverterController = async(req, res) => {
    try {
        const {text} = req.body
        const {data} = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: ` /* Convert these instruction into javascript code \n${text}`,
            max_tokens: 500,
            temperature: 0.3,
        });
        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
         }
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: err.message
        })
    }
}

exports.scifiController = async(req, res) => {
    try {
        const {text} = req.body
        const { data } = await openai.createImage({
            prompt: `generate a scifi image of ${text}`,
            n: 1,
            size: "512x512",
        });
        if (data) {
            if (data.data[0].url) {
                return res.status(200).json(data.data[0].url);
         }
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: err.message
        })
    }
}

