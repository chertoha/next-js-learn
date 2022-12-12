
export type geoType = {
    lat: string,
    lng: string,
}

export type addressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geoType,
}


export type contactType = {
    name: string,
    email: string,
    username?: string,
    address: addressType,
}

export type postType = {
    id: string | number,
    title: string,
    body: string,
}

