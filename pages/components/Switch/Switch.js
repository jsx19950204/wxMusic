// pages/components/Switch/Switch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currIndex: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabChange (e) {
      const data = e.currentTarget.dataset
      const tabs = this.data.tabs
      const tab = tabs[data.index]
      // 改变当前tab
      this.setData({
        currIndex: data.index
      })
      // 未读 -> 已读
      if (tab.unread) {
        tab.unread = false
        this.setData({
          tabs
        })
      }
      this.triggerEvent('tabChange')
    }
  },
  lifetimes: {
    ready () {
      
    }
  }
})
