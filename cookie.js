//写入cookie
export const set = (name,value,{maxAge,domain,path,secure} = {}) => {
    let cookieText = `${encodeURIComponent(name)} = ${encodeURIComponent(value)}`;
    if(typeof maxAge === 'number'){
        cookieText += `; max-age=${maxAge}`;
    }
    if(domain){
        cookieText += `; domain=${domain}`;
    }
    if(path){
        cookieText += `; path=${path}`;
    }
    if(secure){
        cookieText += `; secure`;
    }
    document.cookie = cookieText;　　　　
};


//通过 name 获取 cookie 的值
export const get = name => {
        name = `${encodeURIComponent(name)}`;
        const cookies = document.cookie.split('; ');//得到数组
        for(const item of cookies){
            const[cookieName,cookieValue] = item.split('=');
            if(cookieName === name){
                return decodeURIComponent(cookieValue);
            }
        }
        return;
    };
