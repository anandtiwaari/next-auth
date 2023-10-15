export var session=null
export const GetSessionToken=(token:any)=>{
    localStorage.setItem('token',token)
    return session=token
}
export const Logout=(Logout:any)=>{
    localStorage.removeItem('token')
    return session=Logout
}