import axios from 'axios'
let devUrl = process.env.REACT_APP_DEV_URL;
let prodUrl = process.env.REACT_APP_PROD_URL;

const baseURL = `${process.env.NODE_ENV === 'production' ? prodUrl : devUrl}/furnitures`

const service = axios.create({ withCredentials: true, baseURL })

export const createFurniture = async furnitureInfo => {
    return await service.post("/", furnitureInfo)
}

export const deleteFurniture = async furnitureId => {
    return await service.delete(`/${furnitureId}`)
}

export const getFurniture = async furnitureId => {
    return await service.get(`/${furnitureId}`)
}

export const getFurnitures = async furnitureInfo => {
    return await service.get("/")
}

export const updateFurniture = async furnitureId => {
    return await service.put(`/${furnitureId}`)
}