// pages/components/Swiper/Swiper.js
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
    indicatorDots: false,
    interval: 2000,
    duration: 500,
    autoplay: true,
    current: 1,
    imgUrls: [
      '/static/素材/1.jpg',
      '/static/素材/2.jpg'
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change (e) {
      console.log(e.detail)
    },
    animationfinish (e) {
      this.setData({ current: e.detail.current })
    }
  }
})
