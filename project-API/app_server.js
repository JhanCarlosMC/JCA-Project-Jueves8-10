const skmod = require("./skills_module");
const express = require("express");
const app = express();
const port = 3000;

//Endpoint 
app.get("/", (req, res) =>{
    res.json({
        message: "Servidor API con peticiones sobre skills!"
    });
})

//Endpoint - Obtener todas las skills
app.get("/list_skills", (req,res) =>{
    const listSkills = skmod.obtener_list_skills();
    res.json({
        list_skills: listSkills
    });
});

//Endpoint - Obtener habilidad especifica por index
// Con parametros en la URL - Solicitar informacion especifica
app.get("/skills/:indexSkill", (req,res) =>{
    const listSkills = skmod.obtener_list_skills();
    const indexSkill = parseInt(req.params.indexSkill);
    const skill = listSkills[indexSkill];

    if(skill){
        res.status(200).json({skill_index: skill});
    }else{
        res.status(404).json({message: "Skill no encontrada"});
    }
});

//Endpoint - Obtener habilidades filtradas
// Con Query Params - Filtrar, buscar habilidades especificas
// limite y buscar
app.get("/skills", (req,res) =>{
    const listSkills = skmod.obtener_list_skills();
    let skillsFiltradas = listSkills;

    // const buscar = req.query.buscar;
    const {buscar} = req.query;
    const limite = parseInt(req.query.limite);

    if(buscar){
        skillsFiltradas = skillsFiltradas.filter(skill => skill.includes(buscar));
    }
    if(limite){
        skillsFiltradas = skillsFiltradas.slice(0,limite);
    }

    res.json({
        list_skills: skillsFiltradas
    });
});

//Endpoint - Crear skill
app.use(express.json());
app.post("/skills", (req,res) =>{
    const {skill} = req.body;
    console.log(req);
    // const newSkill = req.body.skill;

    if(!skill){
        return res.status(400).json({message:"Body vacio"})
    }

    skmod.agregar_skill(skill);
    res.status(201).json({message: "Skill agregada", 
        list_update: skmod.obtener_list_skills()});
});

app.delete("/skills/:skill", (req,res) =>{
    const skill = req.params.skill;
    skmod.eliminar_skill(skill);
    res.json({
        message: "Skill eliminada",
        list_update: skmod.obtener_list_skills()
    });
})

app.listen(port, ()=>{
    console.log(`Server is running on port localhost:${port}`);
});
