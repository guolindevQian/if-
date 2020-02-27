// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/er*En0gg1PfDPhHEI.hcg4*TpMjCrZfQML44Ff3fsFw!/b/dLYAAAAAAAAA&bo=9gU4BAAAAAARF.8!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/G6X35lFqAUpPEDb6.QKwvqHFnspM16VBA4czLuK3OVo!/b/dMMAAAAAAAAA&bo=oAU4BAAAAAARF7k!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/.RmiEeUpGi2lxS20syO5JTSe90QBAQOxZ.IO4JPjcwU!/b/dLgAAAAAAAAA&bo=oAU4BAAAAAARF7k!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3m0Bed/qDEDLfZbu2YTZIPRzindUqoNCmbZIw4M1BOYYN0nQKs!/b/dAgBAAAAAAAA&bo=oAX8AwAAAAARF3o!&rf=viewer_4",
      "https://m.qpic.cn/psb?/V14JKMah3m0Bed/wcm1PJcTWP6G4G9grfoNHoP3.mcqgQ1a4kdoLz2LC70!/b/dL4AAAAAAAAA&bo=oAU4BAAAAAARB6k!&rf=viewer_4"

    ], 
    indicatorDots: false,
    autoplay: true,
    interval1: 5000,
    duration: 1000,
    circular: true,
    indicator: true,
    renyuan: [
      {
        url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/UkpxxyZA.L3GY*IyRtaU5cmCXtQ1U4rzXKKtPX*9*oo!/b/dL8AAAAAAAAA&bo=vAK8AgAAAAARBzA!&rf=viewer_4",
        name: "Emma",
        zhiwei: "技术院长",
        congye: "11",
        shanchang: "各类皮肤问题"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/AVAuWIRH*eTwZLwXaeuPBnDSEzxP36gG589ukFLBkgY!/b/dFQBAAAAAAAA&bo=vAK8AgAAAAARBzA!&rf=viewer_4",
        name: "鑫月",
        zhiwei: "店长",
        congye: "2",
        zuopin: [{
          url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/2VDd*lkRGAf19XhDip4WBforOBXT8gv7*WL9XF4qDvw!/b/dFMBAAAAAAAA&bo=WAJYAgAAAAARBzA!&rf=viewer_4",
          name: "角蛋白翘睫",
        }]
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah3m0Bed/LTL02Tz5zjmc8qQXoQC43N0iYO86zoqyat2eohcjqBw!/b/dL4AAAAAAAAA&bo=vAK8AgAAAAARFyA!&rf=viewer_4",
        name: "媛媛",
        zhiwei: "皮肤管理师",
        congye: "2",
        zuopin: [{
          url: "http://m.qpic.cn/psb?/V14JKMah3m0Bed/CqpxTuwWZkISMUCIImNdffCwwzpgCKiMR6AIqgUGqRU!/b/dL8AAAAAAAAA&bo=WAJYAgAAAAARFyA!&rf=viewer_4",
          name: "角蛋白翘睫",
        }]
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah3m0Bed/6Pr6BMlEv1iUUodzdpSADbQRsQwY4PNnMfETR0vgcLg!/b/dLYAAAAAAAAA&bo=vAK8AgAAAAARFyA!&rf=viewer_4",
        name: "雯雯",
        zhiwei: "皮肤管理师",
        congye: "6",
        zuopin: [{
          url: "http://m.qpic.cn/psb?/V14JKMah3m0Bed/6RUwsQW1UpKGx093rWy6ylPHhlbkEe1Yq07qQNapuk0!/b/dLgAAAAAAAAA&bo=WAJYAgAAAAARFyA!&rf=viewer_4",
          name: "角蛋白翘睫",
        }]
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah3m0Bed/U3eWD1Axw5G6Lrnr9Ynry.So2mKl1qVNOJJ5McO6MIk!/b/dL4AAAAAAAAA&bo=vAK8AgAAAAARBzA!&rf=viewer_4",
        name: "林林",
        zhiwei: "皮肤管理师",
        congye: "5"
      }
    ],
    jianjie:"是来自韩国的综合皮肤管理中心。引用了韩国最领先的皮肤科仪器，设备，最安全的韩国院线护肤品，最专业的管理手法，针对不同肌肤进行检测，有效的为每一位顾客私人订制合理的治疗保养方案，改善各种皮肤问题。IF皮肤管理中心所有管理项目都与韩国同步，让你不出国门就能享受到专业技术的韩式皮肤管理。",
    erwei:"https://m.qpic.cn/psb?/V14JKMah3m0Bed/pTFUrE5StlpbP*Kz7.57REyFGzNhUnPuBKwnol6y06Q!/b/dLYAAAAAAAAA&bo=7gJ0AwAAAAARB6s!&rf=viewer_4"
  },
  tomeirongshi: function (e) {
    this.setData({
      meirongshi: e.currentTarget.dataset.meirongshi,
      index: e.currentTarget.dataset.index
    })
    wx.navigateTo({
      url: '../../pages/meirongshi/meirongshi?meirongshi=' + encodeURIComponent(JSON.stringify(this.data.meirongshi)) + "&index=" + this.data.index,
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
  previewImg1: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.erwei;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr.split(","),               //所有要预览的图片的地址集合 数组形式
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
  click: function (e) {
    wx.openLocation({
      latitude: 29.055672,
      longitude: 111.710253,
      scale: 15,
      name: 'IF皮肤管理中心',
      address: '柳叶大道恒大华府南门2栋105'
    })
  },
  tophone:function(){
    wx.makePhoneCall({
      phoneNumber: '0736-7707165',
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