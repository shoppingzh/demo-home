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
] as Demo[]
