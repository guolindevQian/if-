// pages/anli/anli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiang:[],
    index:""
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.xiang.url;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr.split(','),               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let xiang = JSON.parse(decodeURIComponent(options.xiang))
    let index =options.index
    var that =this
    that.setData({
      xiang:xiang,
      index:index
    })
    console.log(xiang)
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