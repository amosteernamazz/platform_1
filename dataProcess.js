var dataTime = new Array();
var dataAmp = new Array();
var equipLocArr = new Array();
window.onload = function(){
    GetData();
 //   GetEquipLocData();
   

}

function GetData(){
    setTimeout(GetData,1000);
    $ajax({
        method:"get",
        url:"mysql/showData.php",
        success:function(result){
            //alert(typeof result);
            result = JSON.parse(result);
            dataTime.length = 0;
            dataAmp.length = 0;
            for(var i=0;i<result.length;i++){
                // alert(result[i].time);
                dataTime[i] = result[i].time;
                dataAmp[i] = result[i].amplitude;

            }
            //alert(dataTime);
            
        },
        error:function(msg){
            alert(msg);
        }
    })
}

