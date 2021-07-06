import superhero from "../cache/superhero"
import { Exeption } from "../exeptions/Exeption"
import { escapeRegExp } from "../utils/escapeRegExp"

class HerosService {
    async search(query: string) {
        if (!query || query.length < 3)
            throw new Exeption("Search must contain more than 3 characters", 400)

        const heros = superhero.cache
            .filter(value => {
                return new RegExp(escapeRegExp(query as string), 'gi').test(value.herosStringLong)
            })

        if (heros.length === 0)
            throw new Exeption("No heros found", 204)

        return heros.map(hero => {
            Reflect.deleteProperty(hero, 'herosStringLong')
            return hero
        })
    }

    async slug(slug: string) {
        if (!slug)
            throw new Exeption('Slug not empty', 204)

        const hero = superhero.cache.find(value => value.slug === slug)

        if (!hero)
            throw new Exeption('Hero not found', 404)

        Reflect.deleteProperty(hero, 'herosStringLong')
        return hero
    }
}

export default new HerosService()