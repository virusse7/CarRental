import vans from '@@/data/vans.json'

export default defineEventHandler((event) => {
    const idParam = event.context.params?.id
  
    if (!idParam) {
        throw createError({statusCode: 404, statusMessage: 'Van id not found'})
    }

    const id = Number(idParam)
    const van = vans.find((v) => v.id === id)

    if(!van) {
        throw createError({statusCode: 404, statusMessage: 'Van not found'})
    }

    return van
})