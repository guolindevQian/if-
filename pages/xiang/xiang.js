// pages/xiang/xiang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiang:[],
    index:""
  },
  tophone:function(){
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
  tohome:function(){
    wx.switchTab({
      url: '../../pages/index/index',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index=options.index;
    let xiang = JSON.parse(decodeURIComponent(options.xiang));
    var that = this;
    that.setData({
      index:index,
      xiang: xiang
    })
    console.log(index)
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