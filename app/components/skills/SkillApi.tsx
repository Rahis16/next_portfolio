import React from "react";
import SkillList from "./SkillList";
import axios from "axios";

const SkillApi = async () => {
    const res = await axios.get("http://localhost:8000/api/skills");
    const skillData = res.data;

    return <SkillList data = {skillData}/>
  
}

export default SkillApi
