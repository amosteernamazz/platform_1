
$(function(){
    mavenmonitorfunc();
    
})

  
function mavenmonitorfunc(){
  function reaction(choose){
    if(choose >= 0 &&choose <= 5)
    {
      if(choose==0)
      return showData_0;
      if(choose==1)
      return  showData_1;
      if(choose==2)
      return showData_2;
      if(choose==3)
      return showData_3;
      if(choose==4)
      return showData_4;
      if(choose==5)
      return showData_5;
    }
  
  }
    
var saveTime=[];
var showData_0=[];
var showData_1=[];
var showData_2=[];
var showData_3=[];
var showData_4=[];
var showData_5=[];
var showdata=[];
var barshow =['采暖供水','采暖回水','瞬时流量','燃气瞬时释放热量','水吸收热量','热占比'];
var barshowmav = ['采暖供水图','采暖回水图','瞬时流量图','燃气瞬时释放热量图','水吸收热量图','热占比图'];
var  choose = choiseChart;
// console.log(index);


// console.log(res);
// console.log(typeof res);
$ajax({
            type:"get",
            //请求服务器载入数据
            async:false,//异步属性
            // url:"mysql/getMaven.php?id="+id,
            url:"mysql/showMavenChart.php",
            data:{},
            dataType:"json",
            success:function(result){
              result = JSON.parse(result);
                    for (var i = 0; i < result.length; i++) {
                      // console.log(result);
                      saveTime[i]=result[i].A;
                      showData_0[i]=result[i].H;
                      showData_1[i]=result[i].I;
                      showData_2[i]=result[i].J;
                      showData_3[i]=result[i].K;
                      showData_4[i]=result[i].L;
                      showData_5[i]=result[i].M;

                      // console.log(showData[i]);
                      }
                    // console.log(arr_mavID.length);
                    // console.log(arr_mavtime);
                    
                    // 数据处理
                      
                    // 选择对应图表
// console.log(choose);  
showdata = reaction(choose);      
 var myChart= echarts.init(document.querySelector('#mavenmonitor_1'));


 //指定配置项和数据

 option = {
   
  color: ["#2f89cf"],

  title: {
    text: barshowmav[choose],
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
    data: [barshow[choose]],
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
    data: saveTime,
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
      color: "rgba(255,255,255, .6)",
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
        name: barshow[choose],
        type: 'line',
        color: 'white',
        data: showdata
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



    
        
