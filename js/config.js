/**
 * Created by Administrator on 2015/7/8.
 */

/*这里专门摆放配置项，例如URL、出错提示等*/
(function(){

    window.BASIC_CONFIG = {
        //banner配置，{background:背景图,url:跳转链接,html:文案,btnList:按钮配置}
        bannerList:[
            {

                background:'banner1.jpg',
                url:'',
                html:' <p class="title">行业+互联网</p><p class="sub-title">方案服务商</p><p class="desc">定制软件开发服务，更懂你的需求</p>',
                btnList:[
                    {
                        html:'<a class="cm-btn btn">了解更多</a>',
                        action:function () {
                            navGo(event,'about');
                        }
                    },
                    {
                        html:'<a  class="cm-btn btn">联系我们</a>',
                        action:function () {
                            navGo(event,'contact');
                        }
                    }

                ],
            },
            {
                background:'banner2.jpg',
                url:'https://www.aliyun.com/',
                html:' <p class="title">这是大标题</p><p class="sub-title">这是副标题</p><p class="desc">这是描述</p>',
                btnList:[],
            },
        ],

        //案例配置, {type:'案例类型',name:案例名称,time:案例时间,description:案例描述,coverPath:案例封面图片链接,qrcodePath:案例二维码图片链接（非必填）,linkUrl:案例跳转链接(非必填),}
        caseList:[
            {
                type:'企业服务',
                name:'大圣点餐',
                time:'2016-06-06',
                description:'微信公众号点餐平台，完善的粉丝营销管理；',
                coverPath:'case-2-cover.png',
                qrcodePath:'case-1-qrcode.png',
                linkUrl:'',
            },
            {
                type:'金融服务',
                name:'小象金服借多宝借贷平台',
                time:'2017-12-15',
                description:'服务于小额借贷需求，提供最合适的借贷金融产品',
                coverPath:'case-3-cover.png',
                qrcodePath:'case-1-qrcode.png',
                linkUrl:'',
            },
            {
                type:'电商平台',
                name:'城批国际商城',
                time:' 2016-09-06',
                description:'诚信批发商城，以信用体系搭建新批发模式',
                coverPath:'case-1-cover.png',
                qrcodePath:'case-1-qrcode.png',
                linkUrl:'',
            }
        ]
    }
})();