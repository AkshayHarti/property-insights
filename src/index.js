import got from 'got'

const getProperties = async () => {
    const properties = await got
        .get('http://localhost:5000/properties/1')
        .json()
    console.log('properties', properties)
    return properties
}

getProperties()
