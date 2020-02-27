// pages/meirongshi/meirongshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    meirongshi:[],
    index:""
  },
  toshouye:function(){
    wx.switchTab({
      url: '../../pages/index/index',
    })
  },
  tozuopin:function(e){
    this.setData({
      zuopin: e.currentTarget.dataset.zuopin
    })
    wx.navigateTo({
      url: '../../pages/zuopin/zuopin?zuopin=' + encodeURIComponent(JSON.stringify(this.data.zuopin)) + "&meirongshi=" + encodeURIComponent(JSON.stringify(this.data.meirongshi)),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let meirongshi = JSON.parse(decodeURIComponent(options.meirongshi))
    let index = options.index
    var that = this;
    that.setData({
      meirongshi: meirongshi,
      index: index
    })
    console.log(meirongshi),
      console.log(index)
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