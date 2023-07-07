import { defineStore } from 'pinia';
import { getMenusAPI } from '../apis/usersAPI';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        menusData: [
            {
                "path": "/",
                "name": "主页",
                "component": "MenuView",
                "icon": "none",
                "redirect": "/home",
                "children": [
                    {
                        "path": "/home",
                        "name": "系统主页",
                        "component": "HomePageView",
                        "icon": "home",
                        "meta": {
                            "closeable": false,
                            "isShow": true
                        }
                    },
                    {
                        "path": "/system",
                        "name": "系统管理",
                        "component": "PageView",
                        "icon": "appstore-o",
                        "meta": {
                            "closeable": true
                        },
                        "children": [
                            {
                                "path": "/system/user",
                                "name": "用户管理",
                                "component": "system/user/User",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/system/role",
                                "name": "角色管理",
                                "component": "system/role/Role",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/system/menu",
                                "name": "菜单管理",
                                "component": "system/menu/Menu",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/system/dict",
                                "name": "字典管理",
                                "component": "system/dict/Dict",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            }
                        ]
                    },
                    {
                        "path": "/monitor",
                        "name": "系统监控",
                        "component": "PageView",
                        "icon": "dashboard",
                        "meta": {
                            "closeable": true
                        },
                        "children": [
                            {
                                "path": "/monitor/online",
                                "name": "在线用户",
                                "component": "monitor/Online",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/monitor/systemlog",
                                "name": "系统日志",
                                "component": "monitor/SystemLog",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/monitor/redis/info",
                                "name": "Redis监控",
                                "component": "monitor/RedisInfo",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/monitor/httptrace",
                                "name": "请求追踪",
                                "component": "monitor/Httptrace",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/monitor/system",
                                "name": "系统信息",
                                "component": "EmptyPageView",
                                "meta": {
                                    "closeable": true
                                },
                                "children": [
                                    {
                                        "path": "/monitor/system/jvminfo",
                                        "name": "JVM信息",
                                        "component": "monitor/JvmInfo",
                                        "meta": {
                                            "closeable": true
                                        }
                                    },
                                    {
                                        "path": "/monitor/system/tomcatinfo",
                                        "name": "Tomcat信息",
                                        "component": "monitor/TomcatInfo",
                                        "meta": {
                                            "closeable": true
                                        }
                                    },
                                    {
                                        "path": "/monitor/system/info",
                                        "name": "服务器信息",
                                        "component": "monitor/SystemInfo",
                                        "meta": {
                                            "closeable": true
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "path": "/job",
                        "name": "任务调度",
                        "component": "PageView",
                        "icon": "clock-circle-o",
                        "meta": {
                            "closeable": true
                        },
                        "children": [
                            {
                                "path": "/job/job",
                                "name": "定时任务",
                                "component": "quartz/job/Job",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/job/log",
                                "name": "调度日志",
                                "component": "quartz/log/JobLog",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            }
                        ]
                    },
                    {
                        "path": "/serve",
                        "name": "服务项目",
                        "component": "PageView",
                        "icon": "radar-chart",
                        "meta": {
                            "closeable": true
                        },
                        "children": [
                            {
                                "path": "/serve/category",
                                "name": "类别管理",
                                "component": "serve/category/Servicetype",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/serve/shopCategory",
                                "name": "商户项目",
                                "component": "serve/shopCategory/ShopCategory",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/serve/statistics",
                                "name": "数据统计",
                                "component": "serve/statistics/Statistics",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/serve/commission",
                                "name": "抽成管理",
                                "component": "serve/commission/Commission",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            }
                        ]
                    },
                    {
                        "path": "/shop",
                        "name": "商铺管理",
                        "component": "PageView",
                        "icon": "fund",
                        "meta": {
                            "closeable": true
                        },
                        "children": [
                            {
                                "path": "/gen/apply/charge",
                                "name": "电站审核",
                                "component": "gen/shopapply/ChargeApply",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/gen/apply",
                                "name": "商铺审核",
                                "component": "gen/shopapply/ShopApply",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/gen/complain",
                                "name": "投诉管理",
                                "component": "system/complain/Complain",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/gen/shop",
                                "name": "门店管理",
                                "component": "gen/shopmanage/ShopManage",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            }
                        ]
                    },
                    {
                        "path": "/gen",
                        "name": "商品管理",
                        "component": "PageView",
                        "icon": "tags",
                        "meta": {
                            "closeable": true
                        },
                        "children": [
                            {
                                "path": "/gen/goodstype",
                                "name": "商品类型管理",
                                "component": "goodstype/Goodstype",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/gen/goods",
                                "name": "商品管理",
                                "component": "goodstype/Goods",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            }
                        ]
                    },
                    {
                        "path": "/judgement",
                        "name": "评价管理",
                        "component": "PageView",
                        "icon": "smile",
                        "meta": {
                            "closeable": true
                        },
                        "children": [
                            {
                                "path": "/gen/chargejudgement",
                                "name": "充电桩评价管理",
                                "component": "gen/judgement/chargejudgement/Chargejudgement",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/gen/servicejudgement",
                                "name": "服务评价管理",
                                "component": "gen/judgement/servicejudgement/Servicejudgement",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/gen/goodsjudgement",
                                "name": "商品评价管理",
                                "component": "gen/judgement/goodsjudgement/Goodsjudgement",
                                "meta": {
                                    "closeable": true
                                }
                            }
                        ]
                    },
                    {
                        "path": "/order",
                        "name": "订单管理",
                        "component": "PageView",
                        "icon": "bar-chart",
                        "meta": {
                            "closeable": true
                        },
                        "children": [
                            {
                                "path": "/order/ChargeOrder",
                                "name": "电桩订单",
                                "component": "system/order/ChargeOrder",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/order/ServiceOrder",
                                "name": "服务订单",
                                "component": "system/order/ServiceOrder",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/order/GoodsOrder",
                                "name": "商品订单",
                                "component": "system/order/GoodsOrder",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/order/test",
                                "name": "服务订单数据",
                                "component": "system/order/test",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/order/data",
                                "name": "数据统计",
                                "component": "system/order/data",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            }
                        ]
                    },
                    {
                        "path": "/coupon",
                        "name": "优惠券管理",
                        "component": "PageView",
                        "icon": "menu-fold",
                        "meta": {
                            "closeable": true
                        },
                        "children": [
                            {
                                "path": "/gen/coupon",
                                "name": "优惠券管理",
                                "component": "coupon/Coupon",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            }
                        ]
                    },
                    {
                        "path": "/gen/message",
                        "name": "消息管理",
                        "component": "gen/message/Message",
                        "icon": "mail",
                        "meta": {
                            "closeable": true
                        }
                    },
                    {
                        "path": "/marketingmanagement",
                        "name": "营销管理",
                        "component": "PageView",
                        "icon": "crown",
                        "meta": {
                            "closeable": true
                        },
                        "children": [
                            {
                                "path": "/gen/goodsrecommend",
                                "name": "商品推荐",
                                "component": "gen/marketingmanagement/goodsrecommend/Goodsrecommend",
                                "meta": {
                                    "closeable": true
                                }
                            },
                            {
                                "path": "/gen/ad",
                                "name": "广告管理",
                                "component": "gen/marketingmanagement/admanagement/Ad",
                                "icon": "",
                                "meta": {
                                    "closeable": true
                                }
                            }
                        ]
                    },
                    {
                        "path": "/profile",
                        "name": "个人中心",
                        "component": "personal/Profile",
                        "icon": "none",
                        "meta": {
                            "closeable": true,
                            "isShow": false
                        }
                    }
                ]
            },
            {
                "path": "*",
                "name": "404",
                "component": "error/404"
            }
        ],

    }),
    // getters: {},
    actions: {
        async getMenusAsync() {
            const res: any = await getMenusAPI('bobo');
            this.menusData = res;
        }
    }

})