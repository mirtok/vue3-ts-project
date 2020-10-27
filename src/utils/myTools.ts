import moment from 'moment'
class myTools{
    /**
     * 格式化时间
     * @param dateStr 日期
     * @param forMatStr 格式化字符串
     */
    public static forMatDate(dateStr: Date | string,forMatStr: string =  "YYYY-MM-DD HH:mm:ss") : string{
        if(!dateStr){
            return '无效的时间'
        }
        return moment(dateStr).format(forMatStr);
    } 
}

export default myTools;
