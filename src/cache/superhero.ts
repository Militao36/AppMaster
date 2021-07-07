import { ISuperHero } from "../interfaces"
import { api } from "../utils/api"
import { escapeRegExp } from "../utils/escapeRegExp"

class SuperHero {
    public cache: ISuperHero[] = []
    constructor() {
        this.cache = []
    }

    async init() {
        if (this.cache.length > 0)
            return

        const response = await api.get("/all.json")
        for await (const item of response.data) {

            // para pegar name e slug
            const aux = Object.values(item)
                .filter(value => typeof (value) === 'string' || typeof (value) === 'number')
                .join(" ")

            // crio uma string gigante contendo os dados de todos campos sem as keys
            // para depois disso pesquisar dentro da string
            const herosStringLong = aux + Object.values(item)
                .filter(value => typeof (value) !== 'string')
                .map(value => Object.values(value))
                .flat()
                .join(" ")

                
            this.cache.push({
                ...item,
                herosStringLong
            })
        }

        console.log(this.cache[0])
    }
}


export default new SuperHero()
