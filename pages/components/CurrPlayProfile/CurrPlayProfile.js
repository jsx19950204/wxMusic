// pages/components/CurrPlayProfile/CurrPlayProfile.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    duration: 240,
    progress: 0,
    usedTime: '00:00'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭本页面
    closePage () {
      this.triggerEvent('closeCurrPlayProfile')
    },
    // 改变进度
    changeProgress (e) {
      const x = e.detail.x;
      const offsetLeft = e.currentTarget.offsetLeft
      let usedSeconds = parseInt(this.data.duration * ((x - offsetLeft) / this.data.progressMaxWidth))
      this.setData({
        progress: x - offsetLeft,
        usedTime: this.formatMusicTime(usedSeconds)
      })
    },
    progressTouchstart (e) {
      const x = e.touches[0].clientX;
      const offsetLeft = e.currentTarget.offsetLeft
      this.setData({
        progress: x - offsetLeft
      })
      if(!this.progressMaxWidth){
        this.setData({
          progressMaxWidth: this.data.screenWidth - 2 * offsetLeft
        })
      }
    },
    // 滑动进度条
    progressTouchmove (e) {
      const x = e.touches[0].clientX;
      const offsetLeft = e.currentTarget.offsetLeft
      let w
      if(x < offsetLeft){
        w = 0
      }else if (x > this.data.progressMaxWidth + offsetLeft){
        w = this.data.progressMaxWidth
      }else{
        w = x - offsetLeft
      }
      let usedSeconds = parseInt(this.data.duration * (w / this.data.progressMaxWidth))
      this.setData({
        progress: w,
        usedTime: this.formatMusicTime(usedSeconds)
      })
    },
    // 格式化播放时间
    formatMusicTime (duration) {
      const seconds = duration % 60
      let minutes = (duration - seconds) / 60
      let hours = 0
      let res = ''
      if(minutes >= 60){
        hours = parseInt(minutes / 60)
        minutes = minutes % 60
      }
      if(hours){
        res += hours > 9 ? hours : '0' + hours +':'
      }
      res += minutes > 9 ? minutes : '0' + minutes + ':'
      res += seconds > 9 ? seconds : '0' + seconds
      return res
    }
  },
  lifetimes: {
    ready () {
      const that = this
      wx.getSystemInfo({
        success: function(res) {
          that.setData({
            screenWidth: res.screenWidth
          })
        }
      })
      this.setData({
        totalTime: this.formatMusicTime(this.data.duration)
      })
      let audio = wx.createInnerAudioContext()
      audio.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
      audio.onCanplay(() => {
        audio.play()
      })
    }
  }
})
