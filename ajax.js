/*
    method
    url
    data
    success 数据下载成功以后执行的函数
    error 数据下载失败以后执行的函数
    */
function $ajax({method = 'get',url,data,success,error}){
    var xhr = null;
    try{
        xhr = new XMLHttpRequest();
    }catch(error){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //判断如果数据存在
    if(data){
        data = querystring(data);
    }

    if(method =="get" && data){
        url += "?"+data;
    }

    xhr.open(method,url,true);

    if(method =='get'){
        xhr.send();
    }else{
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(data);
    }

    // 等待数据响应

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status ==200){
                if(success){
                    success(xhr.responseText);
                }else{
                    if(error){
                        error("Error:"+xhr.status);
                    }
                }

            }
        }
    }

}

function querystring(obj){
    var str="";
    for(var attr in obj){
        str += attr + "=" + obj[attr] + "&";
    }
    return str.substring(0,str.length - 1);
}