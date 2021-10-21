$(function(){
    showgasdata();
})




function showgasdata(){
    function gasreaction(gaschoose){
        if(gaschoose >= 0 &&gaschoose <= 5)
        {
          if(gaschoose==0)
          return gasData_0;
          if(gaschoose==1)
          return  gasData_1;
          if(gaschoose==2)
          return gasData_2;
          if(gaschoose==3)
          return gasData_3;
          if(gaschoose==4)
          return gasData_4;
          if(gaschoose==5)
          return gasData_5;
        }
      
      }

var gasTime=[];
var gasData_0=[];
var gasData_1= [];
var gasData_2= [];
var gasData_3= [];
var gasData_4= [];
var gasData_5= [];
var gasdata=[];
var gasshowbar = ['燃气温度','燃气压力','标况瞬时流量','标况累计流量','工况瞬时流量','工况累计流量'];
var gasshowima =  ['燃气温度图','燃气压力图','标况瞬时流量图','标况累计流量图','工况瞬时流量图','工况累计流量图'];
var  gaschoose = choiseChart_2;
// console.log(gaschoose);
        $ajax({
            type:"get",//请求服务器载入数据
            async:false,//异步属性
            url:"mysql/getGasUse.php",
            data:{},
            dataType:"json",
            success:function(result){
                result = JSON.parse(result);
                    for (var i = 0; i < result.length; i++) {
                        gasTime[i] = result[i].A;
                        gasData_0[i] =result[i].B;
                        gasData_1[i] =result[i].C;
                        gasData_2[i]= result[i].D;
                        gasData_3[i]= result[i].E;  
                        gasData_4[i]= result[i].F;                      
                        gasData_5[i]= result[i].G;                      
                    }
                    // console.log(gasData_1);
                    gasdata = gasreaction(gaschoose);
                    // console.log(gaschoose);
                    // console.log(gasdata);
             //指定配置项和数据
             var myChart= echarts.init(document.querySelector('#main'));
               
             option = {
                color: ["#2f89cf"],
              title: {
                  text: gasshowima[gaschoose],
                  left:'40%',
                  textStyle: {
                    color: "#FFFFFF",
                  },

              },
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  left: '80%',
                  data: [gasshowbar[gaschoose]],
                  textStyle: {
                    color: "#4c9bfd",
                  },
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              toolbox: {
                  feature: {
                      // saveAsImage: {}
                  }
              },
              xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: gasTime,
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "20"
                  },
                  axisLine: {
                    show: false
                  }
              },
              yAxis: [
                  {
                  type: 'value',
                  axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "20"
                  },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)",
                      width: 1.6
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
                }
                ],
              series: [
                  {
                      name: gasshowbar[gaschoose],
                      type: 'line',
                      color: 'white',
                      data: gasdata
                  }
                  
                 
              ]
            };
            myChart.setOption(option);
            window.addEventListener('resize', function () {
              myChart.resize();
            })
            }
        })

}
    

    
        
