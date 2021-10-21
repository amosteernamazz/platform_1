$(function(){

    //     char1();
    //   //  char2();
    //     char3();
    //     char4();
        // DynamicGetPic(1);
        DynamicGetTable_2();
        // DynamicGetDetails();
    })
    
function DynamicGetTable_2()
{
    var tableBody = document.getElementById("equipTable_2");
   // var comprehensiveTable = document.getElementById("comprehensiveTable");
 //   alert(comprehensiveTable);
    GetTableData();


    function GetTableData(){
        setTimeout(GetTableData,5000);
        //setTimeout(GetEquipData,5000);
        $ajax({
            method:"get",
            url:"mysql/getEquipLoc.php",
            success:function(result){
                result = JSON.parse(result);
                
                var str="";

                for(var i=0;i<result.length;i++){
                    
                    if (result[i].state=="正常"){
                        // console.log(typeof result[i].state)
                        str=str+
                        `
                        <tr class="normalTr">
                        <td>${result[i].id}</td>
                        <td>${result[i].location}</td>
                        <td>${result[i].state} 
                         <img id="${result[i].id}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                         </tr>
                         `;
                    }else{
                        str=str+`<tr class="abnormalTr"><td>${result[i].id}</td><td>${result[i].location}</td><td>${result[i].state}  <img id="${result[i].id}" src="img/查看.png" onclick="ClickImg(this)"/></td></tr>`;
                    }
                    
                } 
                tableBody.innerHTML = str;


                
            },
            error:function(msg){
                alert(msg);
            }
        })
    
    
    }

}