// pages/list/list.js
const db = wx.cloud.database()
const menulist = db.collection('_recipe')
const app=getApp()
// const listData = require("../data/listdata.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    materails:[],
    inputContent: "",
    catego:"",
    listtitle:"",
    coll:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let inputContent = options.inputContent;
    let catego = options.catego;
    let num=options.num;
    let name=options.nickname;
    let openid=options.openid;
    console.log(openid+'11111')
    if (inputContent) {
      db.collection("_recipe").where({
        title: db.RegExp({
          regexp: inputContent,
          options: "i"
        })
      }).get().then(res => {
        var _this = this;
        console.log(res.data.title);
        _this.setData({
          list: res.data,
          inputContent: inputContent
        })
      })
    } else if (catego){
      db.collection("_recipe").where({
        classfity:catego
      }).get().then(res=>{
        this.setData({
          list: res.data,
          listtitle: catego,
         
        })
      })
    }else if(num){
      // console.log(openid)
      console.log(openid+'listjs')
      db.collection('collect').where({
        _openid: app.globalData.openid ,
        col:true
      }).get().then(res=>{
        this.setData({
          list: res.data,
          listtitle: "我的收藏"
        })
      })
    }
  },

  details: function(event) {
    var id = event.currentTarget.dataset.id;
    let col=this.data.col;
    console.log(col)
    console.log(id);
    wx.navigateTo({
      url: '../details/details?id=' + id
    })
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