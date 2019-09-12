// pages/components/MainInfo/MainInfo.js
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
    headSrc: '/static/素材/1.jpg',
    userName: '贾世雄',
    userLevel: 7,
    functionList: [
      { imageSrc: '/static/素材/1.jpg', title: '我的消息' },
      { imageSrc: '/static/素材/1.jpg', title: '我的好友' },
      { imageSrc: '/static/素材/1.jpg', title: '个性换肤' },
      { imageSrc: '/static/素材/1.jpg', title: '听歌识曲' }
    ],
    blockList1: [
      { imageSrc: '/static/素材/1.jpg', title: '演出', detail: '张韶涵巡演' },
      { imageSrc: '/static/素材/1.jpg', title: '商城', detail: '头戴降噪', unread: true },
      { imageSrc: '/static/素材/1.jpg', title: '附近的人', detail: '难言《懒得跟你讲》个人单曲发布', unread: true },
      { imageSrc: '/static/素材/1.jpg', title: '口袋铃声' },
      { imageSrc: '/static/素材/1.jpg', title: '我的订单' }
    ],
    test: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeMainInfo () {
      this.triggerEvent('closeMainInfo')
    }
  },
  lifetimes: {
    ready () {
    }
  }
})
