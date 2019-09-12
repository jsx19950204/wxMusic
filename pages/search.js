// pages/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder: '病变',
    historyList: [
      { id: 1, title: '遇见' },
      { id: 2, title: '虹之间' },
      { id: 3, title: '悲伤逆流成河' },
      { id: 4, title: '莫失莫忘' },
      { id: 5, title: '再见警察' },
      { id: 6, title: '红色高跟鞋' }
    ],
    hotSearchList: [
      {
        musicName: '福克斯',
        searchCount: 1766428,
        desc: '又一个宝藏男孩要被发现了！',
        isHot: true
      },
      {
        musicName: '亲爱的',
        searchCount: 1470000,
        desc: '听着歌就像回到童年的纯真宽了~',
        isHot: true
      },
      {
        musicName: 'bad guy',
        searchCount: 1345355,
        desc: '欧美活跃范儿，一扫疲惫和慵懒！',
        isHot: true
      },
      {
        musicName: '赤伶',
        searchCount: 1145962,
        desc: '戏腔与古风相结合的绝美唱段！',
        isHot: true
      },
      {
        musicName: '遇见',
        searchCount: 1085000,
        desc: '孙燕姿火遍大街小巷的经典歌曲！',
        isHot: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  // 获取焦点
  getFocus () {
    wx.showToast({
      title: '获取到焦点',
    })
    this.setData({
      searchFocus: true
    })
  }
})