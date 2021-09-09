interface Player {
    name: string,
    club?: string,
    salary: number,
    age: number,
    isHonest: boolean,
    wife?: string
}
const massy: Player = {
    name: 'L Massy',
    club: 'Brca',
    salary: 100000,
    age: 35,
    isHonest: true
}
interface Empoly extends Player {
    dessigtion: string,
    addrise: string
}
const firstEmpoly: Empoly = {
    name: 'Abul',
    salary: 50000,
    age: 25,
    isHonest: true,
    dessigtion: 'Developer',
    addrise: 'Andorkilla'
}