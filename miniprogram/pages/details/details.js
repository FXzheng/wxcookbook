// pages/details/details.js
const db = wx.cloud.database()
const menulist = db.collection('_recipe')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: [],
    reCollectStorage: [],
    isClick: false,
    col: false,
    id: '',
    reid: '',
    collid: {},
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    openid: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let openid = app.globalData.openid;
    var _this = this;
    db.collection('_recipe').doc(options.id).get().then(res => {
      this.setData({
        details: res.data
      })
    })
  },

  collection: function(e) {
    let _this = this;
    let id = e.currentTarget.dataset.id;
    let isClick = !this.data.isClick;
    
    this.setData({
      isClick
    })
    wx.showToast({
      title: isClick ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    //判断是否存在openid
    // if(!app.globalData.openid){
    //   wx.switchTab({
    //     url: '../user/user',
    //   })
    // }

    if (isClick) {
      // 收藏
      db.collection('collect').add({
        data: {
          _openid: app.globalData.openid,
          _id: id,
          title: this.data.details.title,
          figure: this.data.details.figure,
          materails: this.data.details.materails,
          author: this.data.details.author,
          socre: this.data.details.socre,
          col: true
        },
        success(res) {
          this.setData({
            col: true
          })
        }
      })
    } else {
      db.collection('collect').doc(id).remove({
        success(res) {
          console.log(res.data)
        }
      })
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})