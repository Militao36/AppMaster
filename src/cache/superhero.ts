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
            const dataCSV = Object.values(item)
                .filter(value => typeof (value) !== 'string')
                .map(value => Object.values(value))
                .flat()
                .join(" ")
                
            this.cache.push({
                ...item,
                dataCSV
            })
        }
        console.log(this.cache[0].dataCSV)
        console.log(this.cache[1].dataCSV)
    }
}


export default new SuperHero()
