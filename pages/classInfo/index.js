// pages/classInfo/index.js
Page({
  data: {
    list: [
      {
        id: 'basicCourse',
        name: '基础课程',
        open: false,
        pages: ['课程1', '课程2', '课程3']
      }, {
        id: 'advancedCourse',
        name: '进阶课程',
        open: false,
        pages: ['课程1', '课程2', '课程3']
      }, {
        id: 'coreModule',
        name: '核心模块',
        open: false,
        pages: ['1', '2']
      }, {
        id: 'history',
        name: '历史沿革',
        open: false,
        pages: ['魏', '楚', '吴']
      }, {
        id: 'teachers',
        name: '主讲教师',
        open: false,
        pages: ['李泽仁','李楚光']
      }
    ]
  },
  widgetsToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})