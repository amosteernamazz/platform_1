$(function(){

GetHistoryTable();
    })

function GetHistoryTable()
{
    var tableBody_2 = document.getElementById("historyTable");

    GetHistoryTableData();


    function GetHistoryTableData()
{

    setTimeout(GetHistoryTableData,5000);

    $ajax({
        method:"get",
        url:"mysql/getHistoryInfo.php",
        success:function(result){
            result = JSON.parse(result);
            var str="";

                for (var i = 0; i < result.length; i++)
                {
                    // console.log(result);
                    if(result[i].rank =="1")
                    {
                        // console.log(result[i].EventId);
                        // console.log( typeof result[i].EventId);
                        str=str+
                        `<tr class="tag_1">
                        <td class="tag_1">${result[i].time}</td>
                        <td class="tag_1">${result[i].location}</td>
                        <td class="tag_1">${result[i].rank}</td>
                        <td class="tag_1">${result[i].detail}
                        <img id="${result[i].time}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                         </tr></td>
                        </tr>
                        `;
                    }
                     if(result[i].rank =="2")
                    {
                        // console.log("12334123");
                        str=str+
                        `<tr class="tag_2">
                        <td class="tag_2">${result[i].time}</td>
                        <td class="tag_2">${result[i].location}</td>
                        <td class="tag_2">${result[i].rank}</td>
                        <td class="tag_2">${result[i].detail}
                        <img id="${result[i].time}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                         </tr></td>
                        </tr>
                        `;
                    }
                    if (result[i].rank =="3")
                    {
                        str=str+
                        `<tr class="tag_3">
                        <td class="tag_3">${result[i].time}</td>
                        <td class="tag_3">${result[i].location}</td>
                        <td class="tag_3">${result[i].rank}</td>
                        <td class="tag_3">${result[i].detail}
                        <img id="${result[i].time}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                         </tr></td>
                        </tr>
                        `;
                    }
                    if (result[i].rank =="4")
                    {
                        str=str+
                        `<tr class="tag_4">
                        <td class="tag_4">${result[i].time}</td>
                        <td class="tag_4">${result[i].location}</td>
                        <td class="tag_4">${result[i].rank}</td>
                        <td class="tag_4">${result[i].detail}
                        <img id="${result[i].time}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                         </tr></td>
                        </tr>
                        `;
                    }
                    if (result[i].rank =="5")
                    {
                        str=str+
                        `<tr class="tag_5">
                        <td class="tag_5">${result[i].time}</td>
                        <td class="tag_5">${result[i].location}</td>
                        <td class="tag_5">${result[i].rank}</td>
                        <td class="tag_5">${result[i].detail}
                        <img id="${result[i].time}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                         </tr></td>
                        </tr>
                        `;
                    }
                }
                tableBody_2.innerHTML = str;
                setInterval(function () {
                    $ajax({
                    method:"get",
                    url:"mysql/getHistoryInfo.php",
                    success:function(result){
                        result = JSON.parse(result);
                        // console.log(result);
                        var str="";
            
                            for (var i = 0; i < result.length; i++)
                            {
                                // console.log(result);
                                if(result[i].rank =="1")
                                {
                                    // console.log(result[i].EventId);
                                    // console.log( typeof result[i].EventId);
                                    str=str+
                                    `<tr class="tag_1">
                                    <td class="tag_1">${result[i].time}</td>
                                    <td class="tag_1">${result[i].location}</td>
                                    <td class="tag_1">${result[i].rank}</td>
                                    <td class="tag_1">${result[i].detail}
                                    <img id="${result[i].time}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                                     </tr></td>
                                    </tr>
                                    `;
                                }
                                 if(result[i].rank =="2")
                                {
                                    // console.log("12334123");
                                    str=str+
                                    `<tr class="tag_2">
                                    <td class="tag_2">${result[i].time}</td>
                                    <td class="tag_2">${result[i].location}</td>
                                    <td class="tag_2">${result[i].rank}</td>
                                    <td class="tag_2">${result[i].detail}
                                    <img id="${result[i].time}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                                     </tr></td>
                                    </tr>
                                    `;
                                }
                                if (result[i].rank =="3")
                                {
                                    str=str+
                                    `<tr class="tag_3">
                                    <td class="tag_3">${result[i].time}</td>
                                    <td class="tag_3">${result[i].location}</td>
                                    <td class="tag_3">${result[i].rank}</td>
                                    <td class="tag_3">${result[i].detail}
                                    <img id="${result[i].time}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                                     </tr></td>
                                    </tr>
                                    `;
                                }
                                if (result[i].rank =="4")
                                {
                                    str=str+
                                    `<tr class="tag_4">
                                    <td class="tag_4">${result[i].time}</td>
                                    <td class="tag_4">${result[i].location}</td>
                                    <td class="tag_4">${result[i].rank}</td>
                                    <td class="tag_4">${result[i].detail}
                                    <img id="${result[i].time}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                                     </tr></td>
                                    </tr>
                                    `;
                                }
                                if (result[i].rank =="5")
                                {
                                    str=str+
                                    `<tr class="tag_5">
                                    <td class="tag_5">${result[i].time}</td>
                                    <td class="tag_5">${result[i].location}</td>
                                    <td class="tag_5">${result[i].rank}</td>
                                    <td class="tag_5">${result[i].detail}
                                    <img id="${result[i].time}" src="img/查看.png" onclick="ClickImg(this)"/></td>
                                     </tr></td>
                                    </tr>
                                    `;
                                }
                            }
                            tableBody_2.innerHTML = str;}
                    })}, 1000);
                
            },
            error:function(msg){
                alert(msg);
            }
        })
    
    
}
}

