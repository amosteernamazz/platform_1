
var flagTimeOut;
$(function(){
    initMap();
})
//地图界面高度设置





//加载地图
function initMap(){
// 百度地图API功能
    var map = new BMap.Map("map_div");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915),11);  // 初始化地图,设置中心点坐标和地图级别

    // 加入平移缩放控件
    // map.addControl(new BMap.NavigationControl());
    
    // 加入比例尺
    map.addControl(new BMap.ScaleControl());   

    //设置地图样式
    //添加地图类型控件
    var size1 = new BMap.Size(10, 50);
    map.addControl(new BMap.MapTypeControl({
        offset: size1,
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP,

        ]}));
    var mapStyle={  style : "midnight" }  
    map.setMapStyle(mapStyle);
       
    
    // 随机向地图添加25个标注
    // var bounds = map.getBounds();
    // var sw = bounds.getSouthWest();
    // var ne = bounds.getNorthEast();
    // var lngSpan = Math.abs(sw.lng - ne.lng);
    // var latSpan = Math.abs(ne.lat - sw.lat);
    // for (var i = 0; i < 25; i ++) {
    //     var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
    //     addMarker(point);
    //     alert("经度："+(sw.lng + lngSpan * (Math.random() * 0.7))+"纬度："+(ne.lat - latSpan * (Math.random() * 0.7)));
    // };

    // 获取设备数据
    GetEquipData();

    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    //设备地图颜色
    




//加载城市控件
    var size = new BMap.Size(10, 50);
    map.addControl(new BMap.CityListControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        offset: size,

    }));
    var points = [{"lng":0,"lat":0,"count":0},{},{}];
    var points =[
        {"lng":116.418261,"lat":39.921984,"count":50},
        {"lng":116.423332,"lat":39.916532,"count":51},
        {"lng":116.419787,"lat":39.930658,"count":15},
        {"lng":116.418455,"lat":39.920921,"count":40},
        {"lng":116.418843,"lat":39.915516,"count":100},
        {"lng":116.42546,"lat":39.918503,"count":6},
        {"lng":116.423289,"lat":39.919989,"count":18},
        {"lng":116.418162,"lat":39.915051,"count":80},
        {"lng":116.422039,"lat":39.91782,"count":11},
        {"lng":116.41387,"lat":39.917253,"count":7},
        {"lng":116.41773,"lat":39.919426,"count":42},
        {"lng":116.421107,"lat":39.916445,"count":4},
        {"lng":116.417521,"lat":39.917943,"count":27},
        {"lng":116.419812,"lat":39.920836,"count":23},
        {"lng":116.420682,"lat":39.91463,"count":60},
        {"lng":116.415424,"lat":39.924675,"count":8},
        {"lng":116.419242,"lat":39.914509,"count":15},
        {"lng":116.422766,"lat":39.921408,"count":25},
        {"lng":116.421674,"lat":39.924396,"count":21},
        {"lng":116.427268,"lat":39.92267,"count":1},
        {"lng":116.417721,"lat":39.920034,"count":51},
        {"lng":116.412456,"lat":39.92667,"count":7},
        {"lng":116.420432,"lat":39.919114,"count":11},
        {"lng":116.425013,"lat":39.921611,"count":35},
        {"lng":116.418733,"lat":39.931037,"count":22},
        {"lng":116.419336,"lat":39.931134,"count":4},
        {"lng":116.413557,"lat":39.923254,"count":5},
        {"lng":116.418367,"lat":39.92943,"count":3},
        {"lng":116.424312,"lat":39.919621,"count":100},
        {"lng":116.423874,"lat":39.919447,"count":87},
        {"lng":116.424225,"lat":39.923091,"count":32},
        {"lng":116.417801,"lat":39.921854,"count":44},
        {"lng":116.417129,"lat":39.928227,"count":21},
        {"lng":116.426426,"lat":39.922286,"count":80},
        {"lng":116.421597,"lat":39.91948,"count":32},
        {"lng":116.423895,"lat":39.920787,"count":26},
        {"lng":116.423563,"lat":39.921197,"count":17},
        {"lng":116.417982,"lat":39.922547,"count":17},
        {"lng":116.426126,"lat":39.921938,"count":25},
        {"lng":116.42326,"lat":39.915782,"count":100},
        {"lng":116.419239,"lat":39.916759,"count":39},
        {"lng":116.417185,"lat":39.929123,"count":11},
        {"lng":116.417237,"lat":39.927518,"count":9},
        {"lng":116.417784,"lat":39.915754,"count":47},
        {"lng":116.420193,"lat":39.917061,"count":52},
        {"lng":116.422735,"lat":39.915619,"count":100},
        {"lng":116.418495,"lat":39.915958,"count":46},
        {"lng":116.416292,"lat":39.931166,"count":9},
        {"lng":116.419916,"lat":39.924055,"count":8},
        {"lng":116.42189,"lat":39.921308,"count":11},
        {"lng":116.413765,"lat":39.929376,"count":3},
        {"lng":116.418232,"lat":39.920348,"count":50},
        {"lng":116.417554,"lat":39.930511,"count":15},
        {"lng":116.418568,"lat":39.918161,"count":23},
        {"lng":116.413461,"lat":39.926306,"count":3},
        {"lng":116.42232,"lat":39.92161,"count":13},
        {"lng":116.4174,"lat":39.928616,"count":6},
        {"lng":116.424679,"lat":39.915499,"count":21},
        {"lng":116.42171,"lat":39.915738,"count":29},
        {"lng":116.417836,"lat":39.916998,"count":99},
        {"lng":116.420755,"lat":39.928001,"count":10},
        {"lng":116.414077,"lat":39.930655,"count":14},
        {"lng":116.426092,"lat":39.922995,"count":16},
        {"lng":116.41535,"lat":39.931054,"count":15},
        {"lng":116.413022,"lat":39.921895,"count":13},
        {"lng":116.415551,"lat":39.913373,"count":17},
        {"lng":116.421191,"lat":39.926572,"count":1},
        {"lng":116.419612,"lat":39.917119,"count":9},
        {"lng":116.418237,"lat":39.921337,"count":54},
        {"lng":116.423776,"lat":39.921919,"count":26},
        {"lng":116.417694,"lat":39.92536,"count":17},
        {"lng":116.415377,"lat":39.914137,"count":19},
        {"lng":116.417434,"lat":39.914394,"count":43},
        {"lng":116.42588,"lat":39.922622,"count":27},
        {"lng":116.418345,"lat":39.919467,"count":8},
        {"lng":116.426883,"lat":39.917171,"count":3},
        {"lng":116.423877,"lat":39.916659,"count":34},
        {"lng":116.415712,"lat":39.915613,"count":14},
        {"lng":116.419869,"lat":39.931416,"count":12},
        {"lng":116.416956,"lat":39.925377,"count":11},
        {"lng":116.42066,"lat":39.925017,"count":38},
        {"lng":116.416244,"lat":39.920215,"count":91},
        {"lng":116.41929,"lat":39.915908,"count":54},
        {"lng":116.422116,"lat":39.919658,"count":21},
        {"lng":116.4183,"lat":39.925015,"count":15},
        {"lng":116.421969,"lat":39.913527,"count":3},
        {"lng":116.422936,"lat":39.921854,"count":24},
        {"lng":116.41905,"lat":39.929217,"count":12},
        {"lng":116.424579,"lat":39.914987,"count":57},
        {"lng":116.42076,"lat":39.915251,"count":70},
        {"lng":116.425867,"lat":39.918989,"count":8}];
    var index_points = 0;
    // 编写自定义函数,创建标注
    function addMarker(data){
        var count_normal=50;
        var count_unnormal= 100;
        // console.log(data);
        // var point = new BMap.Point(parseFloat(data.latitude),parseFloat(data.longitude));
        points[index_points].lng = Number(data.longitude) ;
        points[index_points].lat = Number(data.latitude);
        if (data.state =="正常")
        {
            points[index_points].count = Number(count_normal);
        }
        else
        {
            points[index_points].count = Number(count_unnormal);
        }
        index_points++;
        // console.log(points);
        // console.log(typeof  points[0].lng);
        
        //     console.log(points);
            // console.log(  points[0].lng);
            // console.log(typeof points[0].lng);
            // console.log(typeof points[0].lat);
            // console.log(typeof points[0].count);
        if (!isSupportCanvas()) {
            alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
        }
        // points.push(element);
        // console.log(points);
        // console.log(point);
        // points.push(point);
        // var id = data.id;
        // console.log(id);
        // var state = data.state;
        // if (state == "正常"){

        //     var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {   
        //         // 指定定位位置。  
        //         // 当标注显示在地图上时，其所指向的地理位置距离图标左上   
        //         // 角各偏移10像素和25像素。您可以看到在本例中该位置即是  
        //         // 图标中央下端的尖角位置。   
        //         anchor: new BMap.Size(10, 25),   
        //         // 设置图片偏移。  
        //         // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您  
        //         // 需要指定大图的偏移位置，此做法与css sprites技术类似。   
        //         imageOffset: new BMap.Size(0, 0 -10* 25)   // 设置图片偏移   
        //     });     
        
        //     var marker = new BMap.Marker(point, {icon: myIcon});
        //     marker.setTitle(id); //这里设置maker的title (鼠标放到marker点上,会出现它的title,所以我这里把name,放到title里)
        //     map.addOverlay(marker);
        // }else{
        //     var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {   
        //         // 指定定位位置。  
        //         // 当标注显示在地图上时，其所指向的地理位置距离图标左上   
        //         // 角各偏移10像素和25像素。您可以看到在本例中该位置即是  
        //         // 图标中央下端的尖角位置。   
        //         anchor: new BMap.Size(10, 25),   
        //         // 设置图片偏移。  
        //         // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您  
        //         // 需要指定大图的偏移位置，此做法与css sprites技术类似。   
        //         imageOffset: new BMap.Size(0, 0 -11* 25)   // 设置图片偏移   
        //     });     
        //     var marker = new BMap.Marker(point, {icon: myIcon});
        //     marker.setTitle(id); //这里设置maker的title (鼠标放到marker点上,会出现它的title,所以我这里把name,放到title里)
        //     map.addOverlay(marker);

        // }
        heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
        map.addOverlay(heatmapOverlay);
        heatmapOverlay.setDataSet({data:points,max:100});
        heatmapOverlay.show();
        // setGradient();
    //     function setGradient(){
    //         /*格式如下所示:
    //        {
    //              0:'rgb(102, 255, 0)',
    //              .5:'rgb(255, 170, 0)',
    //              1:'rgb(255, 0, 0)'
    //        }*/
    //         var gradient = {};
    //         var colors = document.querySelectorAll("input[type='color']");
    //         colors = [].slice.call(colors,0);
    //         colors.forEach(function(ele){
    //            gradient[ele.getAttribute("data-key")] = ele.value; 
    //         });
    //        heatmapOverlay.setOptions({"gradient":gradient});
    //    }
       //判断浏览区是否支持canvas
       function isSupportCanvas(){
           var elem = document.createElement('canvas');
           return !!(elem.getContext && elem.getContext('2d'));
       }
        // // 为标注添加事件监听
        // marker.addEventListener("click",function(){
        //     console.log(marker.getTitle());
        //     clearTimeout(flagTimeOut);
        //     DynamicGetPic(marker.getTitle());
        // });
    }



    function GetEquipData(){
        // setTimeout(GetEquipData,5000);
        //setTimeout(GetEquipData,5000);
        $ajax({
            method:"get",
            url:"mysql/getEquipLoc.php",
            success:function(result){
                
                result = JSON.parse(result);

                
                for(var i=0;i<result.length;i++){
                    addMarker(result[i],map);
                } 
                // dataTime.length = 0;
                // dataAmp.length = 0;
                // for(var i=0;i<result.length;i++){
                //     // alert(result[i].time);
                //     dataTime[i] = result[i].time;
                //     dataAmp[i] = result[i].amplitude;

                // }
                //alert(dataTime);
                
            },
            error:function(msg){
                alert(msg);
            }
        })
    }



}
