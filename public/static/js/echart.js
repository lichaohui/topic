//课程分布统计图配置
var distributed = {
  title : {
    text: '主要课程类别比重统计',
    subtext: '数据截止：2017-03-23',
    x:'center'
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top:'5%',
    data: ['前端开发','后端开发','移动开发','UI设计','运维测试']
  },
  series : [{
    name: '访问来源',
    type: 'pie',
    radius : '55%',
    center: ['50%', '60%'],
    data:[
      {value:20.00, name:'UI设计'},
	  {value:20.00, name:'前端开发'},
      {value:20.00, name:'后端开发'},
      {value:20.00, name:'移动开发'},
      {value:20.00, name:'运维测试'},
    ],
    itemStyle: {
      emphasis: {
  	    shadowBlur: 10,
		shadowOffsetX: 0,
		shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    },
  }]
};

//课程热度柱状图配置
var heat = {
  title : {
    text: '主要课程学习人数统计',
    subtext: '数据截止：2017-03-23',
    x:'center'
  },
  color: ['#3398DB'],
  tooltip : {
    trigger: 'axis',
    // 坐标轴指示器，坐标轴触发有效
    axisPointer : {
      // 默认为直线，可选为：'line' | 'shadow'
      type : 'shadow'        
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '4%',
    containLabel: true
  },
  xAxis:[
    {
      type : 'category',
      data : ['Html', 'Css', 'Javascript', 'Php', 'Ios', 'Android', 'Linux'],
       axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis:[
    {
      type : 'value'
    }
  ],
  series:[
    {
      name:'学习人数',
      type:'bar',
      barWidth: '60%',
      data:[100, 520, 2000, 3340, 3900, 3300, 2200]
    }
  ]
};

//收入走势折线图配置
var income = {
  title: {
    text: '各类软件工程师近年度收入走势',
    subtext: '数据截止：2017-03-23',
    x:'center',
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top:'10%',
    data:['UI设计','前端开发','后端开发','运维测试','移动开发']
  },
  grid: {
    top:'20%',
    left: '4%',
    right: '4%',
    bottom: '0%',
    containLabel: true
  },
  toolbox: {
    feature: {}
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2011','2012','2013','2014','2015','2016','2017']
  },
  yAxis: {
    type: 'value'
  },
  series: [
  {
    name:'UI设计',
    type:'line',
    stack: '总量',
    data:[120, 132, 101, 134, 90, 230, 210]
  },
  {
    name:'前端开发',
    type:'line',
    stack: '总量',
    data:[220, 182, 191, 234, 290, 330, 310]
  },
  {
    name:'后端开发',
    type:'line',
    stack: '总量',
    data:[150, 232, 201, 154, 190, 330, 410]
  },
  {
    name:'运维测试',
    type:'line',
    stack: '总量',
    data:[320, 332, 301, 334, 390, 330, 320]
  },
  {
    name:'移动开发',
    type:'line',
    stack: '总量',
    data:[820, 932, 901, 934, 1290, 1330, 1320]
  }]
};

//技能分析雷达图配置
var skill = {
  title: {
    text: '各类软件工程师所需技能分析',
    subtext:'数据来源：www.github.com',
    x:'center',
  },
  tooltip: {},
  legend: {
    orient: 'vertical',
    left: 'left',
    top:'6%',
    data: ['UI设计','前端开发','后端开发','移动开发','运维测试'],
  },
  radar: {
    indicator: [
      { name: '操作系统', max: 100},
      { name: '数据库', max: 100},
      { name: '算法结构', max: 100},
      { name: '逻辑思维', max: 100},
      { name: '视觉设计', max: 100},
    ],
    center: ['50%','55%'],
  },
  series: {
    type: 'radar',
    data : [
      {
        value : [50, 10, 10, 60, 90],
        name : 'UI设计',
      },
      {
        value : [70, 60, 60, 80, 80],
        name : '前端开发',
      },
      {
        value:[80,80,80,90,20],
        name:'后端开发',
      },
      {
        value:[80,60,50,60,70],
        name:'移动开发',
      },
      {
        value:[90,70,60,60,10],
        name:'运维测试d',
      }
    ],
  },
};

//年龄分布玫瑰图配置
var age = {
  title : {
    text: '软件工程师年龄分布',
    subtext: '数据截止：2017-03-24',
    x:'center'
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    x : 'center',
    y : 'top',
    top:'12%',
    data:['20岁以下','20-25岁','26-30岁','30-35岁','35岁以上']
  },
  toolbox: {
    show : true,
    feature : {
      mark : {show: true},
    }
  },
  calculable : true,
  series : [
    {
      name:'半径模式',
      type:'pie',
      radius : [20, '70%'],
      center : ['50%', '57%'],
      roseType : 'radius',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      lableLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data:[
        {value:5, name:'20岁以下'},
        {value:20, name:'20-25岁'},
        {value:20, name:'26-30岁'},
        {value:25, name:'30-35岁'},
        {value:20, name:'35岁以上'},
      ]
    },
  ]
};

function echart(elementId,option,isClear=false){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(elementId));
  /*
   * 判断isClear参数是否为true
   * 如果为true则表示要清空画布
   * 否则就是搭建画布
   */
  if(isClear){
    //清空画布
    myChart.clear();
  }else{
    //使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};

