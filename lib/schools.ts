
type School = {
    school: string,
    region: string,
    level: string,
}

import data from "./strings/schools.json";

export const getSchools = () => data.schools;

export const addSchool = (school: School) => {
    let existingSchool;
    let message; 
    data.schools.filter((item) => {
        existingSchool = item.school == school.school && item.region === item.region;
        return existingSchool;
    })
    console.log(existingSchool);
    if (existingSchool) {
        message = "school already is";
    } else {
    data.schools.push(school);
    }
    
    return data.schools
}

export const rmSchool = (name: string) => {
 data.schools = data.schools.filter((school) => school.school !== name)
}