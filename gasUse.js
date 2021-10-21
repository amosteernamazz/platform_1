$(function(){

    GetGasTable();
        })
    
    function GetGasTable(){
        var tableBody = document.getElementById("GasUseTable");
    //    setTimeout(GetTableData,5000);
        $ajax({
            method:"get",
            url:"mysql/getGasUse.php",
            success:function(result){
                result = JSON.parse(result);
                // console.log(result);
    
                var str="";
                for(var i=0;i<result.length;i++){
                    
    
                        str=str+
                        `
                        <tr>
                        <td>${result[i].A}</td>
                        <td>${result[i].B}</td>
                        <td>${result[i].C}</td>
                        <td>${result[i].D}</td>
                        <td>${result[i].E}</td>
                        <td>${result[i].F}</td>
                        <td>${result[i].G}</td>
                        </tr>
                        `;
                    
                    
                }
                tableBody.innerHTML = str;
                setInterval(function () {
                    $ajax({
                    method:"get",
                    url:"mysql/getGasUse.php",
                    success:function(result){
                        result = JSON.parse(result);
                        // console.log(result);
                        var str="";
                        for(var i=0;i<result.length;i++){
                    
    
                            str=str+
                            `
                            <tr>
                            <td>${result[i].A}</td>
                            <td>${result[i].B}</td>
                            <td>${result[i].C}</td>
                            <td>${result[i].D}</td>
                            <td>${result[i].E}</td>
                            <td>${result[i].F}</td>
                            <td>${result[i].G}</td>
                            </tr>
                            `;
                        
                        
                    }
                        tableBody.innerHTML = str;}
                    })}, 1000);
            },
            error:function(msg){
                alert(msg);
            }
        })
    
    
    }