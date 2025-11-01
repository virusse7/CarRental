import cars from '@@/data/cars.json'

export default defineEventHandler((event) => {
    const idParam = event.context.params?.id
    if (!idParam) {
        throw createError({statusCode: 404, statusMessage: 'Car id not found'})
    }

    const id = Number(idParam)
    const car = cars.find((c) => c.id === id)

    if (!car) {
        throw createError({statusCode: 404, statusMessage: 'Car not Found'})
    }
    return car
})