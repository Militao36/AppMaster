import superhero from "../cache/superhero"
import { escapeRegExp } from "../utils/escapeRegExp"

class HerosService {
    async search(query: string) {

        if (!query || query.length < 3)
            throw new Error("400")

        const heros = superhero.cache
            .filter(value => {
                return new RegExp(escapeRegExp(query as string), 'gi').test(value.dataCSV)
            })

        if (heros.length === 0)
            throw new Error("400")

        return heros
    }

    async slug(slug: string) {
        if (!slug)
            throw new Error('204')

        const hero = superhero.cache.find(value => value.slug === slug)

        if (!hero)
            throw new Error('404')

        return hero
    }
}

export default new HerosService()