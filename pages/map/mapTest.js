// pages/map/mapTest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "latitude":39.542637,
    "longitude":116.232922,
    "time":new Date().toString(),
    markers: [{
			longitude:121.45088,
			latitude:31.25145,
			id: 0,
			width: 34,
			height: 49
		}]
  },
  getMap:function(){
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitudes = res.latitude // 纬度
        var longitudes = res.longitude // 经度
        this.setData.latitude = latitudes
        this.setData.longitude = longitudes
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      getMap()
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