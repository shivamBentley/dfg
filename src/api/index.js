import { master_student , phd_student } from "../db/student";
import { personData } from "../db/person";
import CvData from '../db/CvData'

export function getAllStudents(studentType){
    if(studentType =='Ph.d'){
        return phd_student;
    }

    else {
        return master_student;
    }

}