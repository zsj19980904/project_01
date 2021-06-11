// 立即执行函数，这里面的变量都是局部变量，根据作用域，局部变量可以多次调用
//立即执行函数，执行和定义在一起，多个立即执行函数一定要加分号
//柱状图模块
(function(){
    //实例化对象，获取DOM容器
var myChart=echarts.init(document.querySelector('.bar .chart'));
//2.指定数据话对象
var option = {
    color: ['#2f89cf'],//确定颜色
    tooltip: {
        trigger: 'axis',
        axisPointer: {            
            type: 'line'        //坐标轴指示器，坐标轴触发有效 线为line 影子为'shadow
        }
    },
    //修改图表的大小
    grid:{
        left: '0%',
        right: '0%',
        top:'10px',
        bottom: '4%',
        containLabel: true //显示刻度值
    },
    //与X轴相关的信息
    xAxis:[
        {
            type: 'category',
            data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
            axisTick: {
                alignWithLabel: true
            },
            //修改刻度标(文字)的样式
            axisLabel:{
                color:"rgba(255,255,255,.6)",
                fontSize:'12'
            },
            //不显示X轴的样式
            axisLine:{
                show:false
            }
        }
    ],

    yAxis: [
        {
            type: 'value',
            axisLabel:{
                color:"rgba(255,255,255,.6)",
                fontSize:'12'
            },
            axisLabel:{
                color:"rgba(255,255,255,.6)",
                fontSize:'12'
            },
            axisLine:{
                //y轴线的样式
                lineStyle:{
                    color:"rgab(255,255,255,.5)",
                    width:2
                }
            },
            //Y轴分割线的颜色
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.1)'
                }
            }
        },
        
    ],
    //管理数据
    series: [
        {
            name: '学习单词数量',
            type: 'bar',
            barWidth: '30%',//大小
            data: [10, 20, 15,30,45 , 0, 5],
            //修改项目的类型
            itemStyle:{
                //修改柱子的圆角矩形
                barBorderRadius: 5
            }
        }
    ]
};
//3.把配置项给实例化对象
myChart.setOption(option);
//4、图标自适应
window.addEventListener("resize",function(){//通过窗口变化调用resize函数
    myChart.resize();
});
})();
//柱状图2
(function() {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    // 2. 指定配置和数据
    var option = {
      grid: {
         top: "10%",
        left: "22%",
        bottom: "10%"
        // containLabel: true
      },
      // 不显示x轴的相关信息
      xAxis: {
        show: false
      },
      yAxis: [
        {
          type: "category",
          inverse: true,
          data: ["HTML5", "CSS3", "javascript", "PHP", "VUE"],
          // 不显示y轴的线
          axisLine: {
            show: false
          },
          // 不显示刻度
          axisTick: {
            show: false
          },
          // 把刻度标签里面的文字颜色设置为白色
          axisLabel: {
            color: "#fff"
          }
        },
        {
          data: [800, 1250, 2310, 1200, 1600],
          inverse: true,
          // 不显示y轴的线
          axisLine: {
            show: false
          },
          // 不显示刻度
          axisTick: {
            show: false
          },
          // 把刻度标签里面的文字颜色设置为白色
          axisLabel: {
            color: "#fff"
          }
        }
      ],
      series: [
        {
          name: "条",
          type: "bar",
          data: [85, 85, 60, 20, 69],
          yAxisIndex: 0,
          // 修改第一组柱子的圆角
          itemStyle: {
            barBorderRadius: 20,
            // 此时的color 可以修改柱子的颜色
            color: function(params) {
              // params 传进来的是柱子对象

              // dataIndex 是当前柱子的索引号
              return myColor[params.dataIndex];
            }
          },
          // 柱子之间的距离
          barCategoryGap: 50,
          //柱子的宽度
          barWidth: 10,
          // 显示柱子内的文字
          label: {
            show: true,
            position: "inside",
            // {c} 会自动的解析为 数据  data里面的数据
            formatter: "{c}%"
          }
        },
        {
          name: "框",
          type: "bar",
          barCategoryGap: 50,
          barWidth: 15,
          yAxisIndex: 1,
          data: [100, 100, 100, 100, 100],
          itemStyle: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth:5,//显示柱状图的显示的个数
            barBorderRadius: 15
          }
        }
      ]
    };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  // 折线图
  (function() {
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [3500, 3700, 3200, 1300, 0, 2300,3000],
        [2700, 2900, 2600, 3000, 900, 3300]
      ]
    },
    {
      year: "2021", // 年份
    }
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号，因为这个是
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期天",
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "今年数据",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: "去年数据",
        type: "line",
        smooth: true,
        data: yearData[0].data[1]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
//bing
(function(){
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  option = {
    tooltip: {//提示框主键
        trigger: 'item',
    },
    series: [
        {
            name: '前端知识储备',
            type: 'pie',
            radius: '85%',
            center: ['50%', '50%'],
            data: [
                {value: 760, name: 'HTML5'},
                {value: 720, name: 'CSS3'},
                {value: 560, name: 'JAVASCRITP'},
                {value: 300, name: 'PHP'},
                {value: 450, name: 'vue'}
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

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();