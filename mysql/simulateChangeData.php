<?php
    header("Content-type:text/html;charset=utf-8");
    /*
        链接数据库
    */
    //1、链接数据库
    // 第一个参数：连接数据库的IP域名
    // 第二个参数：用户名
    // 第三个参数：密码
    $link = mysql_connect("localhost","root","123456");

    //2、判断是否连接成功
    if(!$link){
        echo "链接失败";
        exit;
    }
    mysql_query("SET character_set_connection = GBK",$link);
    //3、设置字符集
    mysql_set_charset("utf8");

    //4、选择数据库
    mysql_select_db("yyy");

    //5、准备SQL语句
    // $sql = "SELECT * FROM equip";
    $i=1;
while($i<=10){
    $sql = "INSERT INTO details ( EventTime, EquipId, Location, WarningType ) VALUES ( now(), 1,\"xxxx1社区\", \"手持异物\" );";
    //6、发送SQL语句
    $res = mysql_query($sql); 
    $i=$i+1;
    sleep(5);
}
    //7、处理结果
    // $arr = array();
    // while($row = mysql_fetch_assoc($res)){
    //     array_push($arr,$row);
    // }
    
    // echo json_encode($arr);

    //8、关闭数据库
    mysql_close($link);

    

?>