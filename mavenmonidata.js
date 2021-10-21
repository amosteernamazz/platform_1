$(function(){

    GetMavenTable();
        })
    
    function GetMavenTable(){
        var tableBody = document.getElementById("mavenmoniTable");
    //    setTimeout(GetTableData,5000);
    id=1;
        $ajax({
            method:"get",
            url:"mysql/getMaven.php",
            success:function(result){
                result = JSON.parse(result);
                console.log(result);
                var str="";
                for (var  i = 0 ; i < result.length;i ++)
                {
                    
                    str=str+
                    `
                    <tr>
                    <td>${result[i].A}</td>
                    <td>${result[i].H}</td>
                    <td>${result[i].I}</td>
                    <td>${result[i].J}</td>
                    <td>${result[i].K}</td>
                    <td>${result[i].L}</td>
                    <td>${result[i].M}</td>
                    </tr>
                    `;
                }
                tableBody.innerHTML = str;
    
            
                setInterval(function () {
                    $ajax({
                    method:"get",
                    url:"mysql/getMaven.php",
                    success:function(result){
                        result = JSON.parse(result);
                        var str="";
                        for (var  i = 0 ; i < result.length;i ++)
                        {
                            
                            str=str+
                            `
                            <tr>
                            <td>${result[i].A}</td>
                            <td>${result[i].H}</td>
                            <td>${result[i].I}</td>
                            <td>${result[i].J}</td>
                            <td>${result[i].K}</td>
                            <td>${result[i].L}</td>
                            <td>${result[i].M}</td>
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