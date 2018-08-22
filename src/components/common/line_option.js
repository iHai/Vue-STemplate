
export default {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine:{
              lineStyle:{
            color:'#fff',
            width:1
        }
        }
    },
    yAxis: {
        type: 'value',
         axisLine:{
              lineStyle:{
            color:'#fff',
            width:1
        }
    }

    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
         itemStyle: {
            // 点的颜色。
            color: '#e2b23d'
        },
        areaStyle: {}
    }]
};
