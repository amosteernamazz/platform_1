
$(function(){

    DynamicGetCphTable();
    })

    function DynamicGetCphTable()
    {

        var comprehensiveTable = document.getElementById("comprehensiveTable");
     //   alert(comprehensiveTable);
        GetCphTableData();
    
    
        function GetCphTableData(){
            setTimeout(GetCphTableData,5000);
            //setTimeout(GetEquipData,5000);
            $ajax({
                method:"get",
                url:"mysql/getEquipLoc.php",
                success:function(result){
                    result = JSON.parse(result);
        
                    var cphStr="";
                    var cph={"flowAbnormal":0,"infraredAbnormal":0,"shakeAbnormal":0,"gasAbnormal":0};
                    var cphSum=0;
                    var currentTime=GetTime();
 
                    for(var i=0;i<result.length;i++){
                        
                        if (result[i].state=="正常"){
                            //str=str+`<tr class="normalTr"><td>${result[i].id}</td><td>${result[i].location}</td><td>${result[i].state}  <img id="${result[i].id}" src="img/查看.png" onclick="ClickImg(this)"/></td></tr>`;
                        }else{
                            //str=str+`<tr class="abnormalTr"><td>${result[i].id}</td><td>${result[i].location}</td><td>${result[i].state}  <img id="${result[i].id}" src="img/查看.png" onclick="ClickImg(this)"/></td></tr>`;
                            // 计算综合预警数值

                            if(result[i].state.search("流速-压损")!=-1){cph["flowAbnormal"]+=1;}
                            if(result[i].state.search("红外")!=-1){cph["infraredAbnormal"]+=1;}
                            if(result[i].state.search("振动")!=-1){cph["shakeAbnormal"]+=1;}
                            if(result[i].state.search("用气")!=-1){cph["gasAbnormal"]+=1;}
                            cphSum+=1;
                        }
                        
                    } 
                   // tableBody.innerHTML = str;
                    cphStr=  `
                                            <tr>
                                                <td class="labe_td">总概：</td>
                                                <td colspan="3" class="sky">统计时间：${currentTime}，异常设备共${cphSum}台</td>
                                            </tr>
                                            <tr>
                                                <td class="labe_td">流速-压损异常：</td>
                                                <td class="org">${cph["flowAbnormal"]}台</td>
                                                <td class="labe_td">红外预警异常：</td>
                                                <td class="org">${cph["infraredAbnormal"]}台</td>
                                            </tr>
                                            <tr>
                                                <td class="labe_td">振动异常：</td>
                                                <td class="red">${cph["shakeAbnormal"]}台</td>
                                                <td class="labe_td">用气异常：</td>
                                                <td class="org">${cph["gasAbnormal"]}台</td>
                                            </tr>`;
                                            
                   comprehensiveTable.innerHTML=cphStr;
                    
                },
                error:function(msg){
                    alert(msg);
                }
            })
        
        
        }
    
    }

    function GetTime() {
        let dateTime
        let yy = new Date().getFullYear()
        let mm = new Date().getMonth() + 1
        let dd = new Date().getDate()
        let hh = new Date().getHours()
        let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes()
          :
          new Date().getMinutes()
        let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds()
          :
          new Date().getSeconds()
        dateTime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
        //console.log(dateTime)
        return dateTime
      }
    

    