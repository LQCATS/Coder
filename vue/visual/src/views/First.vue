<template>
    <div class="container">
        <div class="header">
            <div class="info">
                基础数据情况：每天8点、12点、20点更新； 预警情况、平均处置速度情况：每天7点、12点、17点更新； 处置情况和处置实时动态：实时数据
            </div>
            <div class="title">教育系统疫情防控管理驾驶舱</div>
        </div>
        <div class="content">
            <div class="leftContainer">
                <div ref="chartColumn" class="chart"></div>

            </div>
            <div class="middleContainer">
                <div ref="testmap" class="chartmap"></div>

            </div>
            <div class="rightContainer">
                <div ref="testbar" class="chart"></div>

            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';


export default {
    data() {
        return {
            chartColumn: null,
            testbar: null,
            testMap: null,
        }
    },

    mounted() {
        this.initChart();
        this.showBar();
        this.showMap();
    },
    methods: {
        showMap() {
            let result = require("@/assets/mapdata.json");
            echarts.registerMap('HUMAP', result);

            this.testMap = echarts.init(this.$refs.testmap);
            let chartOption = {
                visualMap: {
                    type: 'continuous',
                    showLabel: true,
                    left: '50',
                    min: 0,
                    inRange: {
                        color: ['#0B3B79', '#146fd7']
                    }
                },
                tooltip: {
                    show: false
                },
                geo: {
                    show: true,
                    map: 'HUMAP',
                    selectedMode: 'single',
                    zoom: result.scale || 1,
                    roam: false,
                    label: {
                        normal: {
                            show: false, // 省份名展示
                            color: '#FFF',
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#2FB5FA',
                            borderWidth: 2,
                            shadowColor: '#01273F',
                            shadowOffsetX: 0,
                            shadowOffsetY: 10
                        }
                    },

                },
                series: [
                    {
                        name: 'light',
                        zlevel: 30,
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: null,
                        symbolSize: [8, 4],
                        encode: {
                            value: 2
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke',
                            color: '#0efacc',
                            period: 9,
                            scale: 5
                        },
                        label: {
                            show: true,
                            color: '#FFF',
                            formatter: '{b}',
                            offset: [0, -12]
                        },
                        hoverAnimation: true,
                    },
                    {
                        type: 'map',
                        zlevel: 20,
                        map: 'HUMAP',
                        roam: false,
                        zoom: result.scale || 1,
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            show: false,
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#2FB5FA',
                                borderWidth: 2
                            },
                            emphasis: {
                                areaColor: '#2C7FD6',
                                label: {
                                    show: false
                                }
                            }
                        },
                        data: null,
                        selectedMode: "single", //选择模式，单选，只能选中一个地市
                        select: {//这个就是鼠标点击后，地图想要展示的配置
                            disabled: false,//可以被选中
                            itemStyle: {//相关配置项很多，可以参考echarts官网
                                areaColor: "blue"//选中
                            }
                        },
                    },
                ]
            }
            const dealWithData = (data) => {
                return data.features.map(item => {
                    return {
                        name: item.properties.name,
                        value: Math.round(Math.random() * 100),
                        centroid: item.properties.centroid,
                        adcode: item.properties.adcode,
                    }
                })
            }
            let dataValue = dealWithData(result);
            chartOption.series[1].data = dataValue;
            chartOption.series[0].data = dataValue.map(item => {
                return {
                    name: item.name,
                    value: item.centroid ? item.centroid.concat(item.value) : item.centroid,
                    itemStyle: {
                        normal: {
                            color: '#0efacc'
                        }
                    },
                    adcode: item.adcode,
                }
            })
            this.testMap.setOption(chartOption);

        },
        showBar() {
            this.testbar = echarts.init(this.$refs.testbar);

            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    textStyle: {
                        color: "rgba(129, 59, 59, 1)"
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    splitLine: {
                        show: false,
                    }

                },
                yAxis: {
                    type: 'category',
                    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        name: '2011',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                    },

                ]
            };

            option && this.testbar.setOption(option);

        },
        initChart() {
            //初始化echarts图表对象
            this.chartColumn = echarts.init(this.$refs.chartColumn);

            let option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: 'top',
                    left: 'center',
                    width: "100%",
                    textStyle: {
                        fontSize: 10
                    }
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 30,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                    }
                ]
            };

            this.chartColumn.setOption(option);
        },
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 1920px;
    height: 1080px;
    background: #012149;
    background-size: 1920px 1080px;
    display: flex;
    flex-direction: column;

    .header {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;

        .info {
            width: 300px;
            font-size: 8px;
            font-weight: 400;
            color: #FFFFFF;
            position: absolute;
            top: 0;
            left: 0;
        }

        .title {
            font-size: 25px;
            color: #fff;
        }
    }

    .content {
        display: flex;
        width: 100%;
        flex: 1;
    }
}


.leftContainer {
    width: 33%;
    height: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.chart {
    width: 100%;
    height: 200px;
}

.chartmap {
    width: 100%;
    height: 400px;
}

.middleContainer {
    width: 34%;
    height: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.rightContainer {
    width: 33%;
    height: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
</style>