enum  Status {
    OFFLINE,
    ONLINE,
    DELETED
}

// console.log(Status.OFFLINE, Status[0]) //相互映射

function getResult(status:number) {
    if(status === Status.OFFLINE){
        return 'offline'
    } else if(status === Status.ONLINE) {
        return  'online'
    } else if(status === Status.DELETED) {
        return  'deleted'
    }
    return  'error'
}

const result = getResult(1)
console.log(result)
