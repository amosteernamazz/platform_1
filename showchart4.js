$(function(){
    showgasdata_4();
})
function showgasdata_4(){
        // $ajax({
        //     type:"post",//请求服务器载入数据
        //     async:false,//异步属性
        //     url:"mysql/getGasUse.php",
        //     data:{},
        //     dataType:"json",
        //     success:function(result){
        //         if (result) {
        //             for (var i = 0; i < result.length; i++) {
        //                 arr1.push(result[i].StaUse);
        //                 arr2.push(result[i].ID);
        //             }
        //         }
        //     }
        // })
 //指定配置项和数据
 var myChart= echarts.init(document.querySelector('#gasPic'));
   
 
var option;

option = {
    title: {
    //   text: 'Basic Radar Chart'
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending'],
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  };


myChart.setOption(option);
window.addEventListener('resize', function () {
  myChart.resize();
})
}
    
      
    
        
