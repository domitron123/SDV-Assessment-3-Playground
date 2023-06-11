let patients = [
    {id: 1, name: "Dom", address: "Nelson", age: "18"},
    {id: 2, name: "Zach Efron", address: "Stoke", age: "35"},
    {id: 3, name: "Casey. JR", address: "Moutere", age: "56"},
]

function displayPatients() {
    patients.forEach(patient => {
        console.log(`ID: ${patient.id}, Name: ${patient.name}, Address: ${patient.address}, Age: ${patient.age}`)
    })
}
  


function updatePatient(id, newRecord) {
    let patient = patients.find(patient => patient.id === id)
        if(patient) {
            patient.name = newRecord.name || patient.name
            patient.age = newRecord.age || patient.age
            patient.address = newRecord.address || patient.address
        }
        else {
            console.log(`Patient id ${id} not found`)
        }
}


console.log(updatePatient(2, {name: "bill", age: "17"}))
displayPatients()