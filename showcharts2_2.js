$(function(){
    showgasdata_2_2();
})
function showgasdata_2_2(){
var arr1GasTime_2=[], arrGasFTemp_2=[];
var temp =0;
        $ajax({
            type:"post",//请求服务器载入数据
            async:false,//异步属性
            url:"mysql/getGasUse.php",
            data:{},
            dataType:"json",
            success:function(result){
                if (result) {
                  result = JSON.parse(result);
                    for (var i = 0; i < result.length; i++) {
                      temp++;
                      arr1GasTime_2[i]=result[i].A;
                      arrGasFTemp_2[i]=result[i].D;
                    }
                    // console.log(arrGasFTemp[temp-1]);
                    //指定配置项和数据
 var myChart= echarts.init(document.querySelector('#chart2_2'));
 //指定配置项和数据
 option = {
    title: {
        left: 'center',
        text: '标况瞬时流量',
        textStyle:{
          color:"#FFFFFF"
        }
      },
    series: [
      {
        
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 220,
        splitNumber: 11,
        itemStyle: {
          color: '#FFAB91'
        },
        progress: {
          show: true,
          width: 30
        },
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 30
          }
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: '#999'
          },
          textstyle:{
            fontSize: 10,
          }
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: '#999'
          }
        },
        axisLabel: {
          distance: -20,
          color: '#999',
          fontSize: 12
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 20,
          fontWeight: 'bolder',
          formatter: '{value} ' + '\n' +'m³/h',
          color: 'auto'
        },
        data: [
          {
            value: 20
          }
        ]
      },
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 220,
        itemStyle: {
          color: '#FD7347'
        },
        progress: {
          show: true,
          width: 8
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: 20
          }
        ]
      }
    ]
  };
  setInterval(function () {
    const random = +(Math.random() * 60).toFixed(2);
    myChart.setOption({
      series: [
        {
          data: [
            {
              value: random
            }
          ]
        },
        {
          data: [
            {
              value: random
            }
          ]
        }
      ]
    });
  }, 2000);
//  option = {
//   title: {
//     left: 'center',
//     text: '标况瞬时流量',
//     textStyle: {
//       color: "#FFFFFF",
      
//     }
// },
//   series: [{
//       type: 'gauge',
//       max: 220,
//       progress: {
//           show: true,
//           width: 18
//       },
//       axisLine: {
//           lineStyle: {
//               width: 18
//           }
//       },
//       axisTick: {
//           show: false
//       },
//       splitLine: {
//           length: 15,
//           lineStyle: {
//               width: 2,
//               color: '#999'
//           }
//       },
//       axisLabel: {
//           distance: 25,
//           color: '#999',
//           fontSize: 20
//       },
//       anchor: {
//           show: true,
//           showAbove: true,
//           size: 25,
//           itemStyle: {
//               borderWidth: 10
//           }
//       },
//       title: {
//           show: false
//       },
//       detail: {
//           valueAnimation: true,
//           fontSize: 80,
//           offsetCenter: [0, '70%']
//       },
//       data: [{
//           value: arrGasFTemp_2[temp-1]
//       }]
//   }]
// };
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
//                       arr1GasTime_2[i]=result[i].A;
//                       arrGasFTemp_2[i]=result[i].D;
//               }
//             //   console.log(arrGasFTemp[temp-1]);
//             }}
//           });
//     myChart.setOption({
//       series: [
//         {
            
//             data: [{
//                 value: arrGasFTemp_2[temp-1]
//             }]
//         }
        
//     ]
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
    

    
        
