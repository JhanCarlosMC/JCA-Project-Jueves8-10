const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const MONGO_URL = "mongodb+srv://jcmc_userAdmin:efp9hQv6GOAEzTpI@clusterjc2025.mjrlhdf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJC2025"

mongoose.connect(MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Modelo Skill
const Skill = mongoose.model("Skill", {
    name: {type: String, require: true},
    level: {type: String, default: "beginner"}
});

app.post("/skill", async (req, res) => {

    try{
        const nuevaSkill = new Skill(req.body); //body = { name: "JS", level: "advanced"}
        console.log(req.body);
        await nuevaSkill.save();
        res.status(201).json(nuevaSkill);
    }catch(err){
        res.status(400).json({error: err.message});
    }
})

app.get("/skills", async (req, res) => {
    const listSkills = await Skill.find();
    res.status(200).json(listSkills);
})

app.get("/skill/:id", async (req, res) => {
    const skill = await Skill.findById(req.params.id);

    if(!skill){
        return res.status(404).json({error: "Skill not found"});
    }

    res.status(200).json(skill);
})

app.delete("/skill/:id", async (req, res) => {
    const skillEliminada = await Skill.findByIdAndDelete(req.params.id);
    
    if(!skillEliminada){
        return res.status(404).json({error: "Skill not found"});
    }

    res.status(200).json(skillEliminada);
})

app.put("/skill/:id", async (req, res) => {
    const skillActualizada = await Skill.findByIdAndUpdate(req.params.id, req.body);
    
    if(!skillActualizada){
        return res.status(404).json({error: "Skill not found"});
    }

    res.status(200).json(skillActualizada);
})