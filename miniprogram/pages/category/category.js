// pages/category/category.js

const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[]
  },
  goList:function(e){
    let catego = e.currentTarget.dataset.catego;
    console.log(catego);
    wx.navigateTo({
      url: '../list/list?catego=' + catego
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("category").get().then(res=>{
      this.setData({
        category:res.data
      })
    })

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