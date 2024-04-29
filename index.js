
// @ts-nocheck
export  const pacientes= [
    {
        nome:'noemi',
        setor:'urgente',
    },

    {
        nome:'pedro',
        setor:'preferencial',
    },

    {
        nome:'leticia',
        setor:'comum',
    },
]


export function triagem(paciente) {
    const prioridades=['emergência', 'urgente', 'preferencial', 'comum']
    const prioridade=prioridades[Math.floor(Math.random()*prioridades.length)]
    paciente.prioridade=prioridade
    return paciente
}



