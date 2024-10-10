class UserDto {
    id
    username
    email
    constructor(id:number,username:string,email:string) {
        this.id = id
        this.email = email
        this.username = username
    }
}

export default UserDto