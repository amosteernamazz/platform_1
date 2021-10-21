$(function(){
    showgasdata_3();
})
function showgasdata_3(){
var arr_time=[];
var  arr_supp=[];
var arr_use=[];
var arr_flo=[];
var index = -1;
var arr_timeData=[];
var arr_suppShowData=[];
var arr_useShowData=[];
var arr_floShowData=[];


        $ajax({
            type:"get",//请求服务器载入数据
            async:false,//异步属性
            url:"mysql/getMaven.php",
            data:{},
            dataType:"json",
            success:function(result){
                if (result) {
                    result = JSON.parse(result);
                    // console.log(result.length);
                   
                    // console.log(i.parseInt(string));
                    for (var i = 0; i < result.length; i++) {
                        arr_time[i] = result[i].A;
                        arr_supp[i] = result[i].H;
                        arr_use[i] = result[i].I;
                        arr_flo[i] = result[i].J;
                    }
                   for(var i = 0; i <80; i++)
                   {
                     index++;
                   arr_timeData[i] = arr_time[i];
                   arr_suppShowData[i] =arr_supp[i];
                   arr_useShowData[i] = arr_use[i];
                   arr_floShowData[i] = arr_flo[i];
                  }
                  console.log(arr_timeData);
                  // console.log(index);
                  // console.log(arr_timeData);
                    // console.log(  arr_time);
                    // // 指定配置项和数据
                    // for(var i=0;i <arr_time.length/2;i++)
                    // {
                    //   var temp=arr_time[i];
                    //   arr_time[i]=arr_time[arr_time.length-1-i];
                    //   arr_time[arr_time.length-1-i]=temp;
                      
                    // }
                    // console.log(arr_time);
                  
 var myChart= echarts.init(document.querySelector('#shakePic'));

 option = {
    
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        
        data: ['采暖供水', '采暖回水', '瞬时热流量'],
        textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "15"
          }
    },
   
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: arr_timeData,
            inverse: false,
            axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 12
                }
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.2)"
                }
              }
            
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
              },
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)"
                }
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
              }
        },
       
    ],
    series: [
        {
            name: '采暖供水',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgba(1, 191, 236)'
                }
              ])
            },
            emphasis: {
                focus: 'series'
            },
            data: arr_suppShowData
        },
        {
            name: '采暖回水',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(55, 162, 255)'
                },
                {
                  offset: 1,
                  color: 'rgba(116, 21, 219)'
                }
              ])
            },
            data: arr_useShowData
        },
        {
            name: '瞬时热流量',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(255, 191, 0)'
                },
                {
                  offset: 1,
                  color: 'rgba(224, 62, 76)'
                }
              ])
            },
            data: arr_floShowData
        }
        
    ]
};
setInterval(function () {
  $ajax({
    type:"get",//请求服务器载入数据
    async:false,//异步属性
    url:"mysql/getMaven.php",
    data:{},
    dataType:"json",
    success:function(result){
        if (result) {
            result = JSON.parse(result);
            index++;
            // console.log(result.length);
            for (var i = 0; i < result.length; i++) {
                arr_time[i] = result[i].A;
                arr_supp[i] = result[i].H;
                arr_use[i] = result[i].I;
                arr_flo[i] = result[i].J;
            }
            // console.log(index);
            // console.log(arr_time);
            arr_timeData.shift();
            arr_timeData.push(result[index].A);
            arr_suppShowData.shift();
            arr_suppShowData.push(result[index].H);
            arr_useShowData.shift();
            arr_useShowData.push(result[index].I);
            arr_floShowData.shift();
            arr_floShowData.push(result[index].J);
            // console.log(arr_timeData);
            // console.log("1233221");
          }}
        });
  myChart.setOption({
    xAxis: [
      {
          data: arr_timeData,
      }
  ],
    series: [
      {
          name: '采暖供水',
          
          data: arr_suppShowData
      },
      {
          name: '采暖回水',
         
          data: arr_useShowData
      },
      {
          name: '瞬时热流量',
         
          data: arr_floShowData
      }
      
  ]
  });
}, 1000);
myChart.setOption(option);
window.addEventListener('resize', function () {
  myChart.resize();
})
                }
            }
        })
 
}
    

    
        
