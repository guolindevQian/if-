//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      "https://m.qpic.cn/psb?/V14JKMah3m0Bed/6D.QDvz4Bnj5UK7TRs8SEQU7SfY.HzsyqHhAT4O99oY!/b/dDQBAAAAAAAA&bo=GgY4BAAAAAARBxA!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/7psgsz8wykxGcqrQ0LsHDpA5G.1IvV*Gw7m7THPMqAY!/b/dLgAAAAAAAAA&bo=OATqAgAAAAARF*Q!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/EZdqFnE1*AqC10xJl*4JLFH8VbdPY18aBq6G8665Eyo!/b/dL8AAAAAAAAA&bo=IAM0AgAAAAARFzU!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/G6X35lFqAUpPEDb6.QKwvqHFnspM16VBA4czLuK3OVo!/b/dMMAAAAAAAAA&bo=oAU4BAAAAAARF7k!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/tnF595PlZgGaU*LU6HZCVpa.PQYfWNJpFN3S7u0JHv4!/b/dE8BAAAAAAAA&bo=oAU4BAAAAAARF7k!&rf=viewer_4"

    ],
    indicatorDots: false,
    autoplay: true,
    interval1: 5000,
    duration: 1000,
    circular: true,
    indicator: true,
    fuwu:[
      {
        name:"焕肤管理",
        url:"../../icon/huanfu.png",
        fuwuanli:{
        name: "[深层清洁]亮肤特护管理",
          url: "http://m.qpic.cn/psb?/V14JKMah3m0Bed/XL3TviMTmq5ldxv3wWt5V6T91SqSnuRy10fp9hoCmk8!/b/dAYBAAAAAAAA&bo=7AKoAQAAAAADJ0U!&rf=viewer_4",
        shichang: "70",
        dollar: "168.00",
        chanpin: {
          name: "亮肤特护管理",
          gongxiao: "补水保湿、敏感修护、晒后修护",
          buwei: "脸部",
          fuzi: "敏感肌、混合肌、干性肌肤、油性肌肤",
          liucheng: [
            "1、皮肤专业检测",
            "2、头皮减压护理",
            "3、基础洁肤护理",
            "4、5.5中性深层净肤护理",
            "5、净化特护护理",
            "6、守护光（baby face PDT）护理",
            "7、植萃净肤深层特护护理",
            "8、植萃深层滋养护理",
            "9、皮肤防护护理",
            "10、免费DIY彩妆"
          ],
          url: []

        }
      },
      },
      
      {
        name: "明星项目",
        url: "../../icon/mingxing.png",
        fuwuanli:{
          name: "[深层清洁]痘痘尊享3次",
          url: "http://m.qpic.cn/psb?/V14JKMah3m0Bed/KLdecezxyo7fy5H0q2LkgfZGz6c3iKnjKHihKYG3cXQ!/b/dFIBAAAAAAAA&bo=7gKlAQAAAAADN1o!&rf=viewer_4",
          shichang: "70",
          dollar: "268.00",
          chanpin: [
            {
              name: "净透深层管理（1次）",
              gongxiao: "补水保湿、深层清洁",
              buwei: "脸部",
              fuzi: "干性肌肤、敏感肌、混合肌、油性肌肤、不限",
              liucheng: [
                "1、皮肤专业检测",
                "2、头皮减压护理",
                "3、基础洁肤护理",
                "4、5.5中性深层净肤护理",
                "5、baby face 净透深层氧导入护理",
                "6、净透深层滋养护理",
                "7、皮肤防护护理",
                "8、免费DIY彩妆",
              ],
              url: []

            },
            {
              name: "净肤特护管理（1次）",
              gongxiao: "补水保湿、敏感修护、晒后修护",
              buwei: "脸部",
              fuzi: "干性肌肤、敏感肌、混合肌、油性肌肤",
              liucheng: [
                "1、皮肤专业检测",
                "2、头皮减压护理",
                "3、基础洁肤护理",
                "4、5.5中性深层净肤护理",
                "5、净化特护护理",
                "6、守护光（baby face PDT）护理",
                "7、植萃净肤深层特护护理",
                "8、植萃深层滋养护理",
                "9、皮肤防护护理",
                "10、免费DIY彩妆"
              ],
              url: []

            }
          ]
        }
      },
      {
        name: "祛痘",
        url: "../../icon/qudou.png",
        fuwuanli: {
          name: "[深层清洁]T区黑头原肌管理",
          url: "http://m.qpic.cn/psb?/V14JKMah3m0Bed/h0rN*vX*NcTm6PbZXiF9fNFYaM.ohHS3Bo3VI32A68w!/b/dDEBAAAAAAAA&bo=7QKnAQAAAAADN1s!&rf=viewer_4",
          shichang: "70",
          dollar: "368.00",
          chanpin: {
            name: "T区黑头原肌管理",
            gongxiao: "黑头、补水保湿、深层清洁",
            buwei: "脸部",
            fuzi: "干性肌肤、敏感肌、混合肌、油性肌肤、不限",
            liucheng: [
              "1、皮肤专业检测",
              "2、头皮减压护理",
              "3、基础洁肤护理",
              "4、5.5中性深层净肤护理",
              "5、软化老化角质护理",
              "6、原肌老化角质护理",
              "7、植萃深层滋养护理",
              "8、皮肤防护护理",
              "9、免费DIY彩妆",
            ],
            url: []

          }
        }
      },
      {
        name: "补水管理",
        url: "../../icon/bushui.png",
        fuwuanli: {
          name: "[深沉清洁]净透水漾管理",
          url: "http://m.qpic.cn/psb?/V14JKMah3m0Bed/i5KE40bFXPt.X9xPjVmJtUtcuyrUyev2g7vBYY6Ul7E!/b/dLYAAAAAAAAA&bo=7QK7AQAAAAARF3U!&rf=viewer_4",
          shichang: "70",
          dollar: "98.00",
          chanpin: {
            name: "净透水漾管理",
            gongxiao: "补水保湿、深层清洁",
            buwei: "脸部",
            fuzi: "干性肌肤、敏感肌、混合肌、油性肌肤、不限",
            liucheng: [
              "1、皮肤专业检测",
              "2、头皮减压护理",
              "3、基础洁肤护理",
              "4、5.5中性深层净肤护理",
              "5、baby face 净透深层氧导入护理",
              "6、净透深层滋养护理",
              "7、皮肤防护护理",
              "8、免费DIY彩妆",
            ],
            url: []

          }
        }
      },
     
      {
        name: "紧急管理",
        url: "../../icon/jijiu.png",
        fuwuanli:{
          name:"过敏修复管理",
          url:"https://m.qpic.cn/psb?/V14JKMah3m0Bed/qcAhLdMFXfq9plDpaBA2mTyaSo57zDEN7PLUUeaXYJo!/b/dL8AAAAAAAAA&bo=YAPuAwAAAAARB74!&rf=viewer_4",
          shichang: "-",
          dollar:"368.00",
          chanpin: {
            name: "过敏修复管理",
            url: []

          }
        }
      },
     
      {
        name: "角蛋白翘睫",
        url: "../../icon/jiemao.png",
        fuwuanli: {
          name: "角蛋白翘睫",
          url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/ai1PJYXUDokSqOWAFc0Yv4elNjNNTYOmkvKv90yHrZU!/b/dEEBAAAAAAAA&bo=7QKmAQAAAAADB2o!&rf=viewer_4",
          shichang: "-",
          dollar: "198.00",
          chanpin: {
            name: "角蛋白翘睫",
            url: []

          }
        }
      },
      {
        name: "纹绣",
        url: "../../icon/wenxiu.png",
        fuwuanli:{
        name: "原生眉",
          url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/ec5cZfNLMzQMHi3xdwHvR.abBojMUHiNm0PQEDQlIKk!/b/dLYAAAAAAAAA&bo=IAMgAwAAAAARBzA!&rf=viewer_4",
        shichang: "-",
        dollar: "2680.00",
        chanpin: {
          name: "原生眉",
          url: []

        }
      }
      },
      {
        name: "脱毛",
        url: "../../icon/tuomao.png",
        fuwuanli: {
          name: "[脱毛]腋下脱毛",
          url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/8pGs*dJqyZlpsdlVu10fnJYSpQFBTGbTgBSg8YZoPEY!/b/dL4AAAAAAAAA&bo=7wKlAQAAAAADB2s!&rf=viewer_4",
          shichang: "-",
          dollar: "98.00",
          chanpin: {
            name: "腋下脱毛",
            buwei: "双侧腋下",
            shiyongchanpin: "专业美肤冰晶",
            liucheng: [
              "1、消毒",
              "2、涂抹美肤冰晶",
              "3、温和脱毛",
              "4、涂抹修护冰晶",
            ],
            url: []
          }
        }
      }
    ],
    fuli:[
       "http://m.qpic.cn/psb?/V14JKMah3m0Bed/D4qJaWNfNLNA7nZS7ajmjq4oC0d9uENWI6plOy4mke8!/b/dFMBAAAAAAAA&bo=DQPNAAAAAAARF.M!&rf=viewer_4",
       "http://m.qpic.cn/psb?/V14JKMah3m0Bed/U*lxM2m2wI9xVaTLsQmBE*ZoJtezRW.a5lU5Ztc4*OM!/b/dFMBAAAAAAAA&bo=DQPNAAAAAAARF.M!&rf=viewer_4"
      
    ],
    tesexiang:[
      "https://m.qpic.cn/psb?/V14JKMah3m0Bed/nNsaN3fzuYF*E.C7x3aHymr5fxGTl6Fl7oENlc.rl3g!/b/dLgAAAAAAAAA&bo=DQPNAAAAAAARB*M!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/f8OWp8B3vtVJQpE2mn.pkaiMTZklrQDUBzWSSuqS9Hs!/b/dL4AAAAAAAAA&bo=DQPNAAAAAAARF.M!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/ABxmlgPR9*PMfvoGVf4AaKP66E9yUppaufCd9iUrvYY!/b/dMUAAAAAAAAA&bo=DQPNAAAAAAARF.M!&rf=viewer_4"
    ],
    baokuan:[
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/yA.M7dgFZkzYDeYxNXYAy5rAQD1*RbucvYzWkQPIZ4U!/b/dL8AAAAAAAAA&bo=DQPNAAAAAAARF.M!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/S09MgxoTCaLURkUu6BhKY6236jRNNI98nzQ1CafAqbI!/b/dAQBAAAAAAAA&bo=DQPNAAAAAAARF.M!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/HWgaka6F7VuEWS420ND9n2mJMTkzGEaEqPDrJ1Yqmsk!/b/dL4AAAAAAAAA&bo=DQPNAAAAAAARF.M!&rf=viewer_4"
    ]
  },
  tophone:function(){
    wx.makePhoneCall({
      phoneNumber: '19936776512',
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toxiang: function (e) {
    this.setData({
      index: e.currentTarget.dataset.index,
      xiang: e.currentTarget.dataset.xiang
    })
    wx.navigateTo({
      url: '../../pages/xiangnd/xiangnd?xiang=' + encodeURIComponent(JSON.stringify(this.data.xiang)) + "&index=" + this.data.index,
    })
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgUrls;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
