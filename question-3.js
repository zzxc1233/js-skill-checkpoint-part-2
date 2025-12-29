// เริ่มเขียนโค้ดตรงนี้
let getFirstUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data; 
}

async function Jsonplaceholder() {
    try {
        let getUsers = await getFirstUsers()
        // console.log(getUsers);
        let result = getUsers.filter((name) => name.name.length > 17)
        .map(name => name.name)
        console.log(result)
    } catch (error) {
        
    }
}


Jsonplaceholder()