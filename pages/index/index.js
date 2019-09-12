//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    mainInfoVisible: false,
    musicList: [
      { imageSrc: '/static/素材/1.jpg', description: '华语速爆新歌', viewNum: 534234123 },
      { imageSrc: '/static/素材/1.jpg', description: '《夏日集》·水烁风习 橘味梦季', viewNum: 601234 },
      { imageSrc: '/static/素材/1.jpg', description: '〖纯音乐〗轻旋淡律，也可以抓住你的心', viewNum: 17781234 },
      { imageSrc: '/static/素材/1.jpg', description: '向生活请个假，今天做个快乐的废物', viewNum: 2771234 },
      { imageSrc: '/static/素材/1.jpg', description: '千与千寻 电影原声音乐+精选', viewNum: 1131234 },
      { imageSrc: '/static/素材/1.jpg', description: '耳朵喜欢你，好听到可以单曲循环', viewNum: 99741234 }
    ],
    currPlay: {
      imageSrc: '/static/icon/musicList.png',
      title: 'Dusk',
      name: 'Peter Jeremias',
      playing: true,
      profile: false,
      playTimer: null,
      percent: 0
    }
  },
  onLoad: function () {
    this.formatViewNum()
    this.updatePlayIcon()
  },
  openMainInfo (e) {
    this.setData({ mainInfoVisible: true })
  },
  closeMainInfo () {
    this.setData({ mainInfoVisible: false })
  },
  openSearch (e) {
    console.log('打开了搜索页')
  },
  tabChange (e) {
    console.log(e)
  },
  // 格式化播放量
  formatViewNum () {
    const that = this
    this.data.musicList.forEach((music, i) => {
      let num = music.viewNum
      let res = ''
      let unitArr = ['', '万', '亿']
      let index = 0
      let basic = 10000
      while (num > basic) {
        num = parseFloat(num / basic).toFixed(1)
        index++
      }
      if (index <= 1) {
        num = parseInt(num)
      }
      music.viewNum = num + unitArr[index]
    })
    this.setData({
      musicList: this.data.musicList
    })
  },
  // 页面下部播放器相关
  createPlayIcon(angle) {
    const that = this
    wx.getSystemInfo({
      success: function(res) {
        let per = res.windowWidth / 750
        let ctx = wx.createContext()

        ctx.clearRect(0, 0, per*60, per*60)

        ctx.arc(30 * per, 30 * per, 28 * per, 0, Math.PI * 2)
        ctx.stroke()

        ctx.beginPath()
        if(that.data.currPlay.playing){
          ctx.moveTo(per*25, per*20)
          ctx.lineTo(per*25, per*40)
          ctx.lineTo(per*40, per*30)
          ctx.lineTo(per*25, per*20)
        }else{
          ctx.moveTo(per*20, per*15)
          ctx.lineTo(per*20, per*35)
          ctx.beginPath()
          ctx.moveTo(per*40, per*15)
          ctx.lineTo(per*40, per*35)
        }
        ctx.stroke()

        ctx.beginPath()
        ctx.save()
        ctx.setStrokeStyle('#f00')
        ctx.arc(30*per, 30*per, 28*per, -Math.PI/2, angle)
        ctx.stroke()
        ctx.restore()

        wx.drawCanvas({
          canvasId: 'canvas',
          actions: ctx.getActions()
        })
      },
    })
  },
  updatePlayIcon () {
    var that = this
    var currPlay = this.data.currPlay
    var perAngle = Math.PI / 30
    var percent = currPlay.percent
    var timer = setInterval(function () {
      if (percent >= 60 || !currPlay.playing){
        that.setData({
          'currPlay.percent': percent
        })
        clearTimeout(timer)
      }
      that.createPlayIcon(perAngle * percent - Math.PI/2)
      percent++
    }, 200)
  },
  playMusic () {
    const currPlay = this.data.currPlay
    let playing = true
    if(currPlay.playing){
      playing = false      
    }
    this.setData({
      'currPlay.playing': playing
    })
  },
  // 播放详情相关
  openCurrPlayProfile () {
    this.setData({
      'currPlay.profile': true
    })
  },
  closeCurrPlayProfile () {
    this.setData({
      'currPlay.profile': false
    })
  }
})
