$(function(){

    GetMavenTable();
        })
    
    function GetMavenTable(){
        var tableBody = document.getElementById("useAnalysis");
        var rank4_5 = 1;
        var rank3_4 = 0.8762;
        var rank2_3 = 0.85;
        var rank1_2 = 0.60;
    //    setTimeout(GetTableData,5000);
    id=1;
        $ajax({
            method:"get",
            url:"mysql/getMaven.php",
            success:function(result){
                result = JSON.parse(result);
    
                var str="";
                var useRank= [];
                for (var  i = 0 ; i < result.length;i ++)
                {
                    if (result[i].M > rank4_5)
                    {
                        useRank[i] = 5;
                    }
                    else if (result[i].M <rank4_5  && result[i].M >rank3_4) 
                    {
                        useRank[i] = 4;
                    }
                    else if (result[i].M <rank3_4 && result[i].M >rank2_3)
                    {
                        useRank[i] = 3;
                    }
                    else if (result[i].M < rank2_3 && result[i].M > rank1_2)
                    {
                        useRank[i] = 2;
                    }
                    else 
                    useRank[i] = 1; 
                }
                // console.log(useRank);
                for(var i=0;i<result.length;i++){
                    if (useRank[i] == "1")
                    {
    
                        str=str+
                        `
                        <tr class="tag_1">
                        <td class="tag_1">${result[i].A}</td>
                        <td class="tag_1">${result[i].F}</td>
                        <td class="tag_1">${result[i].K}</td>
                        <td class="tag_1">${result[i].L}</td>
                        <td class="tag_1">${result[i].M}</td>
                        <td class="tag_1">${useRank[i]}</td>
                        </tr>
                        `;
                    }
                    if (useRank[i] == "2")
                    {
    
                        str=str+
                        `
                        <tr class="tag_2">
                        <td class="tag_2">${result[i].A}</td>
                        <td class="tag_2">${result[i].F}</td>
                        <td class="tag_2">${result[i].K}</td>
                        <td class="tag_2">${result[i].L}</td>
                        <td class="tag_2">${result[i].M}</td>
                        <td class="tag_2">${useRank[i]}</td>
                        </tr>
                        `;
                    }
                    if (useRank[i] == "3")
                    {
    
                        str=str+
                        `
                        <tr class="tag_3">
                        <td class="tag_3">${result[i].A}</td>
                        <td class="tag_3">${result[i].F}</td>
                        <td class="tag_3">${result[i].K}</td>
                        <td class="tag_3">${result[i].L}</td>
                        <td class="tag_3">${result[i].M}</td>
                        <td class="tag_3">${useRank[i]}</td>
                        </tr>
                        `;
                    }
                    if (useRank[i] == "4")
                    {
    
                        str=str+
                        `
                        <tr class="tag_4">
                        <td class="tag_4">${result[i].A}</td>
                        <td class="tag_4">${result[i].F}</td>
                        <td class="tag_4">${result[i].K}</td>
                        <td class="tag_4">${result[i].L}</td>
                        <td class="tag_4">${result[i].M}</td>
                        <td class="tag_4">${useRank[i]}</td>
                        </tr>
                        `;
                    }
                    if (useRank[i] == "5")
                    {
    
                        str=str+
                        `
                        <tr class="tag_5">
                        <td class="tag_5">${result[i].A}</td>
                        <td class="tag_5">${result[i].F}</td>
                        <td class="tag_5">${result[i].K}</td>
                        <td class="tag_5">${result[i].L}</td>
                        <td class="tag_5">${result[i].M}</td>
                        <td class="tag_5">${useRank[i]}</td>
                        </tr>
                        `;
                    }
                    
                }
                tableBody.innerHTML = str;

                setInterval(function () {
                    $ajax({
                    method:"get",
                    url:"mysql/getMaven.php",
                    success:function(result){
                result = JSON.parse(result);
                        console.log(result);
                var str="";
                var useRank= [];
                for (var  i = 0 ; i < result.length;i ++)
                {
                    if (result[i].M > rank4_5)
                    {
                        useRank[i] = 5;
                    }
                    else if (result[i].M <rank4_5  && result[i].M >rank3_4) 
                    {
                        useRank[i] = 4;
                    }
                    else if (result[i].M <rank3_4 && result[i].M >rank2_3)
                    {
                        useRank[i] = 3;
                    }
                    else if (result[i].M < rank2_3 && result[i].M > rank1_2)
                    {
                        useRank[i] = 2;
                    }
                    else 
                    useRank[i] = 1; 
                }
                // console.log(useRank);
                for(var i=0;i<result.length;i++){
                    if (useRank[i] == "1")
                    {
    
                        str=str+
                        `
                        <tr class="tag_1">
                        <td class="tag_1">${result[i].A}</td>
                        <td class="tag_1">${result[i].F}</td>
                        <td class="tag_1">${result[i].K}</td>
                        <td class="tag_1">${result[i].L}</td>
                        <td class="tag_1">${result[i].M}</td>
                        <td class="tag_1">${useRank[i]}</td>
                        </tr>
                        `;
                    }
                    if (useRank[i] == "2")
                    {
    
                        str=str+
                        `
                        <tr class="tag_2">
                        <td class="tag_2">${result[i].A}</td>
                        <td class="tag_2">${result[i].F}</td>
                        <td class="tag_2">${result[i].K}</td>
                        <td class="tag_2">${result[i].L}</td>
                        <td class="tag_2">${result[i].M}</td>
                        <td class="tag_2">${useRank[i]}</td>
                        </tr>
                        `;
                    }
                    if (useRank[i] == "3")
                    {
    
                        str=str+
                        `
                        <tr class="tag_3">
                        <td class="tag_3">${result[i].A}</td>
                        <td class="tag_3">${result[i].F}</td>
                        <td class="tag_3">${result[i].K}</td>
                        <td class="tag_3">${result[i].L}</td>
                        <td class="tag_3">${result[i].M}</td>
                        <td class="tag_3">${useRank[i]}</td>
                        </tr>
                        `;
                    }
                    if (useRank[i] == "4")
                    {
    
                        str=str+
                        `
                        <tr class="tag_4">
                        <td class="tag_4">${result[i].A}</td>
                        <td class="tag_4">${result[i].F}</td>
                        <td class="tag_4">${result[i].K}</td>
                        <td class="tag_4">${result[i].L}</td>
                        <td class="tag_4">${result[i].M}</td>
                        <td class="tag_4">${useRank[i]}</td>
                        </tr>
                        `;
                    }
                    if (useRank[i] == "5")
                    {
    
                        str=str+
                        `
                        <tr class="tag_5">
                        <td class="tag_5">${result[i].A}</td>
                        <td class="tag_5">${result[i].F}</td>
                        <td class="tag_5">${result[i].K}</td>
                        <td class="tag_5">${result[i].L}</td>
                        <td class="tag_5">${result[i].M}</td>
                        <td class="tag_5">${useRank[i]}</td>
                        </tr>
                        `;
                    }
                    
                }
                tableBody.innerHTML = str;}
                    })}, 1000);
                
            },
            error:function(msg){
                alert(msg);
            }
        })
    
    
    }