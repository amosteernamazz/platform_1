$(function(){
    showgasdata_chart();
})
function showgasdata_chart(){
var rankdataset=[];
var index = -1;
var rankStatic = [0,0,0,0,0];
var temp =0;
        $ajax({
            type:"post",//请求服务器载入数据
            async:false,//异步属性
            url:"mysql/getHistoryInfo.php",
            data:{},
            dataType:"json",
            success:function(result){
                if (result) {
                  result = JSON.parse(result);
                  index++;
                    for (var i = 0; i < result.length; i++) {
                      temp++;
                      rankdataset[i]=result[i].rank;
                    }
                    // console.log(rankdataset);
                    for (i = 0 ; i < rankdataset.length; i++)
                    {
                        rankStatic[(rankdataset[i]-1)]++;
                    }
                    // console.log(rankStatic);
                    // console.log(arr1GasTime[index]);
                    // console.log(arrGasFTemp[temp-1]);
                    //指定配置项和数据
 var myChart= echarts.init(document.querySelector('#warningchart'));
//  console.log(rankStatic);
 option = {
    title: {
      text: '预警等级分类',
      top:'4%',
    //   subtext: 'Fake Data',
      left: 'center',
      textStyle:{
          fontSize:"22",
        color:"#FFFFFF"
      }
      
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top:'4%',
      left: 'left',
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "15"
      }
    },
    series: [
      {
        name: '预警等级分类',
        type: 'pie',
        radius: '50%',
        data: [
          { value: rankStatic[0], name: '预警等级1' },
          { value: rankStatic[1], name: '预警等级2' },
          { value: rankStatic[2], name: '预警等级3' },
          { value: rankStatic[3], name: '预警等级4' },
          { value: rankStatic[4], name: '预警等级5' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  setInterval(function () {
    $ajax({
      type:"get",//请求服务器载入数据
      async:false,//异步属性
      url:"mysql/getHistoryInfo.php",
      data:{},
      dataType:"json",
      success:function(result){
          if (result) {
              result = JSON.parse(result);
              index++;
              // console.log(result.length);
              for (var i = 0; i < result.length; i++) {
                rankdataset[i]=result[i].rank;
                
              }
             
            }}
          });
    // myChart.setOption({
    //   series: [
    //     {
    //       data: [
    //         {
    //           value: arrGasFTemp
    //         }
    //       ]
    //     },
    //     {
    //       data: [
    //         {
    //           value: arrGasFTemp
    //         }
    //       ]
    //     }
    //   ]
    // });
  }, 2000);
 //指定配置项和数据
//  option = {
//     series: [
//       {
//         type: 'gauge',
//         center: ['50%', '60%'],
//         startAngle: 200,
//         endAngle: -20,
//         min: 0,
//         max: 220,
//         splitNumber: 11,
//         itemStyle: {
//           color: '#FFAB91'
//         },
//         progress: {
//           show: true,
//           width: 30
//         },
//         pointer: {
//           show: false
//         },
//         axisLine: {
//           lineStyle: {
//             width: 30
//           }
//         },
//         axisTick: {
//           distance: -45,
//           splitNumber: 5,
//           lineStyle: {
//             width: 2,
//             color: '#999'
//           }
//         },
//         splitLine: {
//           distance: -52,
//           length: 14,
//           lineStyle: {
//             width: 3,
//             color: '#999'
//           }
//         },
//         axisLabel: {
//           distance: -20,
//           color: '#999',
//           fontSize: 20
//         },
//         anchor: {
//           show: false
//         },
//         title: {
//           show: false
//         },
//         detail: {
//           valueAnimation: true,
//           width: '60%',
//           lineHeight: 40,
//           borderRadius: 8,
//           offsetCenter: [0, '-15%'],
//           fontSize: 60,
//           fontWeight: 'bolder',
//           formatter: '{value} ',
//           color: 'auto'
//         },
//         data: [
//           {
//             value: arrGasFTemp
//           }
//         ]
//       },
//       {
//         type: 'gauge',
//         center: ['50%', '60%'],
//         startAngle: 200,
//         endAngle: -20,
//         min: 0,
//         max: 220,
//         itemStyle: {
//           color: '#FD7347'
//         },
//         progress: {
//           show: true,
//           width: 8
//         },
//         pointer: {
//           show: false
//         },
//         axisLine: {
//           show: false
//         },
//         axisTick: {
//           show: false
//         },
//         splitLine: {
//           show: false
//         },
//         axisLabel: {
//           show: false
//         },
//         detail: {
//           show: false
//         },
//         data: [
//           {
//             value: arrGasFTemp
//           }
//         ]
//       }
//     ]
//   };
// var temp =0;

// setInterval(function () {
//     $ajax({
//       type:"get",//请求服务器载入数据
//       async:false,//异步属性
//       url:"mysql/getGasUse.php",
//       data:{},
//       dataType:"json",
//       success:function(result){
//           if (result) {
//               result = JSON.parse(result);
//               // console.log(result.length);
//               for (var i = 0; i < result.length; i++) {
//                 //   console.log(temp);
//                       temp++;
//                       if(temp > 10)
//                       temp =1;
//                       arr1GasTime[i]=result[i].A;
//                       arrGasFTemp[i]=result[i].F;
//               }
//             //   console.log(arrGasFTemp[temp-1]);
//             }}
//           });
//     myChart.setOption({
//         series: [
//             {
//               data: [
//                 {
//                   value: arrGasFTemp
//                 }
//               ]
//             },
//             {
//               data: [
//                 {
//                   value: arrGasFTemp
//                 }
//               ]
//             }
//           ]
//     });
//   }, 1000);
myChart.setOption(option);
window.addEventListener('resize', function () {
  myChart.resize();
})
                }
            }
        })
 
}
    

    
        
