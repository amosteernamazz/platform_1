$(function(){
    energyChart_2();
})
function energyChart_2(){
var rankdataset=[];
var rank4_5 = 1;
var rank3_4 = 0.8762;
var rank2_3 = 0.85;
var rank1_2 = 0.60;
var rankStatic = [0,0,0,0,0];
        $ajax({
            type:"post",//请求服务器载入数据
            async:false,//异步属性
            url:"mysql/getMaven.php",
            data:{},
            dataType:"json",
            success:function(result){
                if (result) {
                  result = JSON.parse(result);
                    for (var i = 0; i < result.length; i++) {
                      rankdataset[i]=result[i].M;
                      if(result[i].M >rank4_5)
                      {
                        rankStatic[4]++;
                      }
                      if(result[i].M <1 && result[i].M >rank3_4)
                      {
                        rankStatic[3]++;
                      } 
                      if(result[i].M < rank3_4 && result[i].M > rank2_3)
                      {
                        rankStatic[2]++;
                      }
                      if(result[i].M < rank2_3 && result[i].M > rank1_2)
                      {
                        rankStatic[1]++;
                      }
                      if (result[i].M <rank1_2)
                      {
                        rankStatic[0]++;
                      }
                    }
                    // console.log(rankdataset);
                    
                    //指定配置项和数据
 var myChart= echarts.init(document.querySelector('#energyChart'));
//  console.log(rankStatic);
option = {
  title: {
    text: '用能合理度图',
    top:'4%',
  //   subtext: 'Fake Data',
    left: 'center',
    textStyle:{
        fontSize:"22",
      color:"#FFFFFF"
    }
    
  },
  legend: {
    // top: 'bottom'
    
      orient: 'vertical',
      top:'4%',
      left: 'left',
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "15"
      
    },
  },
  toolbox: {
    // show: true,
    // feature: {
    //   mark: { show: true },
    //   dataView: { show: true, readOnly: false },
    //   restore: { show: true },
    //   saveAsImage: { show: true }
    // }
  },
  series: [
    {
      
      name: '用能合理度图',
      type: 'pie',
      radius: [50, 180],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: rankStatic[0], name: '合理度1级' },
        { value: rankStatic[1], name: '合理度2级' },
        { value: rankStatic[2], name: '合理度3级' },
        { value: rankStatic[3], name: '合理度4级' },
        { value: rankStatic[4], name: '合理度5级' }
        
      ]
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
              // console.log(result.length);
              for (var i = 0; i < result.length; i++) {
                rankdataset[i]=result[i].M;
                if(result[i].M >rank4_5)
                {
                  rankStatic[4]++;
                }
                if(result[i].M <1 && result[i].M >rank3_4)
                {
                  rankStatic[3]++;
                } 
                if(result[i].M < rank3_4 && result[i].M > rank2_3)
                {
                  rankStatic[2]++;
                }
                if(result[i].M < rank2_3 && result[i].M > rank1_2)
                {
                  rankStatic[1]++;
                }
                if (result[i].M <rank1_2)
                {
                  rankStatic[0]++;
                }
              }
            //  console.log(rankStatic);
            }}
          });
    myChart.setOption({
      series: [
        {
          data: [
            
              { value: rankStatic[0], name: '合理度1级' },
              { value: rankStatic[1], name: '合理度2级' },
              { value: rankStatic[2], name: '合理度3级' },
              { value: rankStatic[3], name: '合理度4级' },
              { value: rankStatic[4], name: '合理度5级' }
            
          ]
        }
        
      ]
    });
  }, 2000);
 
myChart.setOption(option);
window.addEventListener('resize', function () {
  myChart.resize();
})
                }
            }
        })
 
}
    

    
        
