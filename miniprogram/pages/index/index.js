// pages/index/index.js
const db = wx.cloud.database()
const menulist = db.collection('_recipe')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    db.collection('_recipe').get().then(res=>{
      // console.log(res.data);
      // console.log(this);
      this.setData({
        menu:res.data
      })
      
    })
  },
  
  
  goToSearch: function (e) {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  goDetails: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../details/details?id=' + id
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