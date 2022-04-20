import got from 'got'

const getProperties = async () => {
    const properties = await got.get('http://localhost:5000/properties').json()
    console.log('properties',properties)
    return properties
}

getProperties()
