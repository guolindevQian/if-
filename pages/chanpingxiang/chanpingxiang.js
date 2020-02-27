// pages/xiang/xiang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval1: 5000,
    duration: 1000,
    circular: true,
    indicator: true,
    xiang: []
  },
  tophone: function () {
    wx.makePhoneCall({
      phoneNumber: '19936776512',
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
  tohome: function () {
    wx.switchTab({
      url: '../../pages/index/index',
    })
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.xiang.url;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let xiang = JSON.parse(decodeURIComponent(options.xiang));
    var that = this;
    that.setData({
      xiang: xiang
    })
    console.log(xiang)
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