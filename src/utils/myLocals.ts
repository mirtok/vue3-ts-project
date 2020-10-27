class myLocals {
    /**
     * 本地存储库 存
     * @param str key 
     * @param data value
     */
    public static setLocalStorage(str: string,data: any) :boolean{
        try{
            localStorage.setItem(str,JSON.stringify(data))
            return true
        }catch (error) {
            return false
        }
    }
    /**
     * 本地存储库 获取
     * @param str key
     */
    public static getLocalStorage(str: string) : any{
        let data: any = localStorage.getItem(str)
        if(!!data){
            data = JSON.parse(data)
        }
        return data
    }

    /**
     * 本地存储库 删除
     * @param str 
     */
    public static delLocalStorage(str: string,) : any{
        try {
            localStorage.removeItem(str)
            return true
        } catch (error) {
            return false
        }
    }
    /**
     * 本地存储库 清空
     */
    public static clearLocalStorage() : void{
        localStorage.clear()
    }
}

export default myLocals