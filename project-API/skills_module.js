const list_skills =[
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "JavaScript - Express",
    "JavaScript - DOM",
    "JavaScript - Eventos"
]

function agregar_skill(skill){ 
    list_skills.push(skill); 
}
function obtener_list_skills(){ 
    return list_skills; 
}
function eliminar_skill(skill){
    const index = list_skills.indexOf(skill);
    if(index !== -1){
        list_skills.splice(index, 1);
    }
}
function actualizar_skill(indexSkill, newSkill){ 
    list_skills[indexSkill] = newSkill; 
}

module.exports = {
    agregar_skill,
    obtener_list_skills,
    eliminar_skill,
    actualizar_skill
}

//CRUD 
//Create - POST
//Read - GET
//Update - PUT
//Delete - DELETE
