
export function updateUser(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const values = Object.fromEntries(formData)
    console.log(values)
}