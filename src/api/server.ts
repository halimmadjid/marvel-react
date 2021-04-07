const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6IjM2NTUxZWYwYWZiNjY4NzgyYzY1MDc2Mjg3YjVhNTY0NGY1NTVmODEyMzZkZTYyMCIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE2IDIwOjUyOjEwLjU1NDM5OFwiIn0.GppF2ATtB1B9Bsqs47SL4RBj4ndN9FsVa-ocqDB5r4o' // TODO: Add API-Access-key

const heroku_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6ImUwMGJmMWM4MGM5Y2FmYzFmZTliODZhZDQxYmRhZjhmMTVjMWM4MTZiMTE1NTMyOSIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE4IDIxOjI2OjQ1LjM0OTA3NVwiIn0.6cIm0-GZk_yWQa1CixAz6E8P0W3eApHEA4-ChicdQag'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://marvel-collections-api-hm.herokuapp.com/marvel`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            }

        });
        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://marvel-collections-api-hm.herokuapp.com/marvel/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to Delete data from server')
        }
        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://marvel-collections-api-hm.herokuapp.com/marvel/${id}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'applicaton/json',
                'x-access-token':`Bearer ${heroku_token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data from server')
        }
        return await response.json()
    },
    create: async (data:any = {}) => {
        const response = await fetch(`https://marvel-collections-api-hm.herokuapp.com/marvel`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'x-access-token': `Bearer ${heroku_token}`
            }, 
            body: JSON.stringify(data)
        })
    }
}

/*
data = 
{
    name: 'DJI Mavic 20',
    model: 'DJI Mavic 20 2021',
    price: 2000
}
JSON.stringify(data) == {
    "name": "DJI Mavic 20",
    "model": "DJI Mavic 20 2021",
    "price": 2000
}
*/