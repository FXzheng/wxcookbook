// pages/search/search.js

const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: "", //输入框内的值
    searchlist: [],
    listarr: [],
    keydown_number: 0, //检测input框内是不是有值
    input_value: "",
    name_focus: true

  },


  //  获取输入框中的值
  getInputValue: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
    if (e.detail.cursor != 0) {
      this.setData({
        keydown_number: 1
      })
    } else {
      this.setData({
        keydown_number: 0
      })
    }
  },

  goSearch: function(event) {
    let inputContent = this.data.inputValue;
    let _this = this;
    if (this.data.keydown_number == 1) {
      let arr = this.data.listarr;

      if (this.data.input_value == "") {
        let arrnum = arr.indexOf(inputContent);
        if (arrnum != -1) {
          arr.splice(arrnum, 1);
          arr.unshift(inputContent);
        } else {
          arr.unshift(inputContent);
        }
      } else {
        let arr_num = arr.indexOf(this.data.input_value);
        if (arr_num != -1) {
          arr.splice(arr_num, 1)
          arr.unshift(this.data.input_value)
        } else {
          arr.unshift(this.data.input_value);
        }
      }
      wx.setStorage({
        key: 'list_arr',
        data: arr
      })

      wx.getStorage({
        key: 'list_arr',
        success: function(res) {
          _this.setData({
            listarr: res.data
          })
        }
      })
      this.setData({
        input_value: '',

      })

    } else {
      console.log("请输入菜品或者食材！");
      return;
    }
    wx.navigateTo({
      url: '../list/list?inputContent=' + inputContent
    })
  },
  // 清除历史
  delete_list: function() {
    this.setData({
      listarr: []
    });
    wx.removeStorage({
      key: 'list_arr'
    })
  },
  // 点击赋值到input框中
  hissearch: function(e) {
    this.setData({
      name_focus: true
    })
    let history = e.currentTarget.dataset.text;
    this.setData({
      input_value: history,
      // keydown_number: 1
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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