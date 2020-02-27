// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: ['服务', '产品'],
    currentTab: 0,
    isScroll: false,
    fuwuanli:[
      {
        name:"[深沉清洁]净透水漾管理",
        url:"http://m.qpic.cn/psb?/V14JKMah3m0Bed/i5KE40bFXPt.X9xPjVmJtUtcuyrUyev2g7vBYY6Ul7E!/b/dLYAAAAAAAAA&bo=7QK7AQAAAAARF3U!&rf=viewer_4",
        shichang:"70",
        dollar:"98.00",
        chanpin:{
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
      },
      {
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
      {
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
      },
      {
        name: "[脱毛]腋下脱毛",
        url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/8pGs*dJqyZlpsdlVu10fnJYSpQFBTGbTgBSg8YZoPEY!/b/dL4AAAAAAAAA&bo=7wKlAQAAAAADB2s!&rf=viewer_4",
        shichang: "-",
        dollar: "98.00",
        chanpin: {
          name: "腋下脱毛",
          buwei: "双侧腋下",
          shiyongchanpin:"专业美肤冰晶",
          liucheng: [
            "1、消毒",
            "2、涂抹美肤冰晶",
            "3、温和脱毛",
            "4、涂抹修护冰晶",
          ],
          url: []
        }
      },
      {
        name: "原生眉",
        url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/ec5cZfNLMzQMHi3xdwHvR.abBojMUHiNm0PQEDQlIKk!/b/dLYAAAAAAAAA&bo=IAMgAwAAAAARBzA!&rf=viewer_4",
        shichang: "-",
        dollar: "2680.00",
        chanpin: {
          name: "原生眉",
          url:[]

        }
      },
      {
        name: "[深层清洁]痘痘尊享3次",
        url: "http://m.qpic.cn/psb?/V14JKMah3m0Bed/KLdecezxyo7fy5H0q2LkgfZGz6c3iKnjKHihKYG3cXQ!/b/dFIBAAAAAAAA&bo=7gKlAQAAAAADN1o!&rf=viewer_4",
        shichang: "70",
        dollar: "268.00",
        chanpin:[ 
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
          url:[]

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
            url:[]

          }
        ]
      },
      {
        name: "招牌亮肤护理3次",
        url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/uC19vV.xAswAaUOx3bq2s6Vv0R5H.m2xtGP8ehkmrnk!/b/dL8AAAAAAAAA&bo=7AKnAQAAAAADB2o!&rf=viewer_4",
        shichang: "-",
        dollar: "368.00",
        chanpin: {
          name: "招牌亮肤护理3次",
          url:[]
        }
      },
      {
        name: "角蛋白翘睫",
        url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/ai1PJYXUDokSqOWAFc0Yv4elNjNNTYOmkvKv90yHrZU!/b/dEEBAAAAAAAA&bo=7QKmAQAAAAADB2o!&rf=viewer_4",
        shichang: "-",
        dollar: "198.00",
        chanpin: {
          name: "角蛋白翘睫",
          url: []

        }
      }
    ],
    chanpinanli:[
      {
        name:"百植萃维生素B5",
        url:[
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/DtX9mYfveOup2LkEXmdIbso7FQ2LFWdTV6P9TLzAs6c!/b/dMUAAAAAAAAA&bo=0ALAAwAAAAARFzE!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/CDAVCcOzJgwibStZdIcRdNZ.EmoM0Sa*MV592oKVIl0!/b/dDUBAAAAAAAA&bo=0ALAAwAAAAARFzE!&rf=viewer_4"
        ],
        dollar:"324",
        guanggao:"百植萃维生素B5透明质玻尿酸原液补水保湿面部精华液30ml清爽护肤"
      },
      {
        name: "百植萃白藜芦醇菁粹面膜",
        url: [
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/9JoNeI58Hi4uUCefTSuL7g139bB5crUmFa.vl6TidJY!/b/dD4BAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/Ggkenf4ITS6eBLpg*ARrwOYq3cmuAQhTkhGM*iyM03w!/b/dDcBAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/1VcjP3B0ayHYxv44WCzE0OKR02xKzGgng1hdKM8CevQ!/b/dEABAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/rGxj0bAq2uPxl2fni2RhR8DXHAYZTtmAjZW4QffKJ4o!/b/dLsAAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4"
        ],
        dollar: "166",
        guanggao: "百植萃白藜芦醇焕白亮肤补水保湿滋润抗氧菁粹面膜6片装修护肌肤"
      },
      {
        name: "百植萃修护保湿喷雾",
        url: [
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/ibmzyUdY*Sy0JGXp39EPVFCjjAigFsY73o3hm7cHUWw!/b/dLgAAAAAAAAA&bo=0ALAAwAAAAARFzE!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/6G8mCktY*gvWRLk3N3IagchPy5aovkl.iYSOurVCeN4!/b/dFMBAAAAAAAA&bo=0ALAAwAAAAARFzE!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/NlvoK88T6RsQVnvB4BUR2LjJSnbHD959**2SyH*KnXI!/b/dFQBAAAAAAAA&bo=0ALAAwAAAAARFzE!&rf=viewer_4"
        ],
        dollar: "148",
        guanggao: "百植萃舒缓修护保湿定妆喷雾150ml补水舒缓敏感温泉化妆水爽肤水"
      },
      {
        name: "百植萃复合果酸焕颜面膜",
        url: [
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/sarHPZD2TzgPi0B4Y.tNMK.5Teh9W8Uy6dI4UIlK2ds!/b/dAQBAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/3v9X.UrVFOqSkrqWA*D3J3BssTubgmdfmDzWSrT1LBM!/b/dLgAAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/Xb3mfXAltAxbvrhqU9NjvRh.lN1KxA6DXJrngNI7rSk!/b/dDMBAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/9L2Q0zFeVRkAHgZPmMe*LV2rorEhiYJI6upzCwne.po!/b/dFIBAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4"
        ],
        dollar: "394",
        guanggao: "百植萃复合果酸焕颜面膜50ml去角质水杨酸淡化痘印疏通毛孔面膜"
      },
      {
        name: "百植萃舒敏修护套装",
        url: [
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/BlceDS2ZFo.LRdw35AV1kjuJuyfnWcewmg5k2DkMqFQ!/b/dL8AAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/cR19nkXykO3T5MmhErFjlDOItPUyPbmmfYDLJnsBzEw!/b/dL4AAAAAAAAA&bo=IAMgAwAAAAARFyA!&rf=viewer_4"
        ],
        dollar: "880",
        guanggao: "百植萃舒敏修护套装舒缓乳+修护保湿喷雾+修护面膜+B5保湿精华"
      },
      {
        name: "百植萃保湿修护套装",
        url: [
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/6ISZg4uWTgM*hV9i9oyMdtA0JFvMwVVYBE*g94IWFO4!/b/dLYAAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/Y806okstG6cfgeSVs8LC0.5lXdGHBW4tXmkkbOZYMZ8!/b/dFMBAAAAAAAA&bo=IAMgAwAAAAARFyA!&rf=viewer_4"
        ],
        dollar: "719",
        guanggao: "百植萃保湿修护套装修护保湿喷雾+修护面膜+B5保湿精华"
      },
      {
        name: "百植萃保湿滋润套装",
        url: [
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/gkWD.lTHnvwhpxsHx71qD6GDVQjSeKsqyISkuNHGKc4!/b/dL8AAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/V4wyPjhcHNhmZg0mEUFtyHzEApg2oUrYtBM1O8nGSfc!/b/dLgAAAAAAAAA&bo=IAMgAwAAAAARFyA!&rf=viewer_4"
        ],
        dollar: "487",
        guanggao: "百植萃保湿滋润套装多维补水深层保湿 干燥皮肤拯救者"
      },
      {
        name: "百植萃焕肤净颜套装",
        url: [
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/yWRE1xTQwgBtGamfCMCbb4ZtO7R9Ri2*nRP1yzQceCA!/b/dMMAAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/GAVTSR9lizC5m6e3Q4rsl09xmWORT4srpWEBvuLZjng!/b/dLgAAAAAAAAA&bo=IAMgAwAAAAARFyA!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/N1qOqVv3Sf3l1Bf2XzK9lS7vFQ.8Qj.DJb*Q*RXOpZU!/b/dDUBAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4"
        ],
        dollar: "350",
        guanggao: "百植萃焕肤净颜套装收缩毛孔舒缓痘肌控油补水面部护理套装"
      },
      {
        name: "维生素CE复合修护精华",
        url: [
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/pI8dcDBOgz1wmfyKp*aB*K66rYYG6GGAAhQ55ChUr4k!/b/dMMAAAAAAAAA&bo=0ALAAwAAAAARFzE!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/Z5KUJuxRL3saDxTIWypJ8jgIT3h7McfF9AVIWiZOV.U!/b/dFYBAAAAAAAA&bo=0ALAAwAAAAARFzE!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3m0Bed/d3S2JLCaDfI7lgPVvdVAhpzzWsMU7bDrIBTwPFMGacI!/b/dL8AAAAAAAAA&bo=0ALAAwAAAAARFzE!&rf=viewer_4"
        ],
        dollar: "120",
        guanggao: "百植萃维生素CE复合修护抗氧紧致面部精华焕白亮肤10ml护肤品女"
      }
    ],
    xiang:[]
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  toxiang:function(e){
    this.setData({
      index:e.currentTarget.dataset.index,
      xiang: e.currentTarget.dataset.xiang
    })
    wx.navigateTo({
      url: '../../pages/xiang/xiang?xiang=' + encodeURIComponent(JSON.stringify(this.data.xiang))+"&index="+this.data.index,
    })
  },
  tochanpingxiang:function(e){
    this.setData({
      xiang: e.currentTarget.dataset.xiang
    })
    wx.navigateTo({
      url: '../../pages/chanpingxiang/chanpingxiang?xiang=' + encodeURIComponent(JSON.stringify(this.data.xiang)),
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})