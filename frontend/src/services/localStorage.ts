interface ILocalStorageData<T> {
    name: string
    value: T
    expiry: number
}

export function setLocalStorage<Value = any>({
    expiry,
    name,
    value
    }: ILocalStorageData<Value>) {
        const now = new Date().getTime()
        const expiryTime = expiry + now
    
        localStorage.setItem(name, JSON.stringify({ value, expiry: expiryTime }))
}

export function getLocalStorage<Value = any>(name: string) {
    const now = new Date().getTime()
    const storage: ILocalStorageData<Value> = JSON.parse(String(localStorage.getItem(name)))
    if (!storage) {
        return false
    }
    if (now > storage.expiry) {
        localStorage.clear()
        return false
    }
    return storage.value
}

export default { setLocalStorage, getLocalStorage }