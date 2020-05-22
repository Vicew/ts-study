const userInfo: any = undefined

function catchError(msg: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value
        descriptor.value = function () {
            try {
                fn();
            } catch (e) {
                console.log(msg)
            }
        }
    }
}

class TestEnd {
    @catchError('userInfo.name 不存在')
    getName(){
        return userInfo.name
    }
    // ....
}
