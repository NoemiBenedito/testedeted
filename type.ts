//interface é como o objeto se apresenta 
// [] está puxando tudo de uma interface já existente 



interface paciente{
    nome : string
    setor: string 
    prioridade?: "emergência" | "urgente"  | "preferencial"| "comum"

}


interface ala{
    nome:string
    fila: paciente []

}

interface consultorio{
    nome:string
    pacientes:paciente[]
    alas:ala[]
}


