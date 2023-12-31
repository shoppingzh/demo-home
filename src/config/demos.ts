export interface Demo {
  name?: string
  description?: string
  snapshot?: string
  url?: string
}

import snapshots from "@/assets/snapshots"

function getSnapshot(name: string) {
  return snapshots[name]
}


export default [
  {
    name: '必应雪花效果',
    description: '必应网站冬天的下雪效果',
    snapshot: getSnapshot('bing-snow'),
    url: './bing-snow/index.html',
  },
  {
    name: '录音/录制',
    description: '使用媒体API录音和录像',
    snapshot: getSnapshot('media-record'),
    url: './media-record/index.html',
  },
  {
    name: 'canvas测量文字',
    description: '',
    snapshot: getSnapshot('canvas-measure-text'),
    url: './canvas-measure-text/index.html',
  },
  {
    name: 'canvas画水印',
    description: '',
    snapshot: getSnapshot('canvas-watermark'),
    url: './canvas-watermark/index.html',
  },
  {
    name: '截图',
    description: '使用屏幕录制截图，可还行？',
    // snapshot: getSnapshot('media-screenshot'),
    url: './media-screenshot/index.html',
  },
  {
    name: '洗牌效果',
    description: '洗牌效果',
    snapshot: getSnapshot('shuffle'),
    url: './shuffle/index.html',
  },
  {
    name: '瀑布图效果',
    description: '瀑布图效果',
    snapshot: getSnapshot('waterfall'),
    url: './waterfall/index.html',
  },
  {
    name: '图片像素点查看',
    description: '图片像素点查看',
    snapshot: getSnapshot('pixel-viewer'),
    url: './pixel-viewer/index.html',
  },
  {
    name: '自动打字',
    description: '自动打字',
    snapshot: getSnapshot('auto-input'),
    url: './auto-input/index.html',
  },
  {
    name: '创建表格',
    description: '创建表格',
    snapshot: getSnapshot('create-table'),
    url: './create-table/index.html',
  },
  {
    name: '365天倒计时',
    snapshot: getSnapshot('365-dots'),
    url: './365dots/index.html',
  },
  {
    name: '二维码角',
    snapshot: getSnapshot('corner-qrcode'),
    url: './corner-qrcode/index.html',
  },
  {
    name: 'CSS Tooltip',
    snapshot: getSnapshot('css-tooltip'),
    url: './css-tooltip/index.html',
  },
  {
    name: '饿了么首页效果',
    snapshot: getSnapshot('ele-me'),
    url: './ele.me/index.html',
  },
  {
    name: '京东商品信息',
    snapshot: getSnapshot('goods-preview'),
    url: './goods-preview/index.html',
  },
  {
    name: '八卦',
    snapshot: getSnapshot('gossip'),
    url: './gossip/index.html',
  },
  {
    name: 'iPhone搜索效果',
    snapshot: getSnapshot('iphone-search'),
    url: './iphone-search/index.html',
  },
  {
    name: '直播动效',
    snapshot: getSnapshot('living'),
    url: './living/index.html',
  },
  {
    name: '网页放大镜',
    snapshot: getSnapshot('magnifier'),
    url: './magnifier/index.html',
  },
] as Demo[]
