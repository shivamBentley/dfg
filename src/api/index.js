import { master_student, phd_student } from "../db/student";
import { personData } from "../db/person";
import CvData from '../db/CvData'

export function getAllStudents(studentType) {
    if (studentType === 'Ph.d') {
        return phd_student;
    }

    else {
        return master_student;
    }

}

export function downloadPDF(fileName) {
    fetch(`${fileName}.pdf`).then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = `${fileName}.pdf`;
            alink.click();
        })
    })
}

export function generateCsvFileAndDownload(data) {
    // const csvRows = [];
    // const headers = Object.keys(data[0]);
    // csvRows.push(headers.join(','));
    // csvRows.push('\n')

    // data.forEach((value) => {
    //     const values = Object.values(value).join(',');
    //     csvRows.push(values)
    //     csvRows.push('\n')
    // })

    // //download CSV file
    // const blob = new Blob(csvRows, { type: 'text/csv' });
    // const url = window.URL.createObjectURL(blob)
    // const a = document.createElement('a')
    // a.setAttribute('href', url)
    // a.setAttribute('download', 'Sample.csv');
    // a.click()
}