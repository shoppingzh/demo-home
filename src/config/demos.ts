export interface Demo {
  name?: string
  description?: string
  snapshot?: string
  url?: string
}

import snapshots from "@/assets/snapshots"

console.log(snapshots);

function getSnapshot(name: string) {
  return snapshots[name]
}


export default [
  {
    name: '必应雪花效果',
    description: '必应网站冬天的下雪效果',
    snapshot: getSnapshot('bing-snow'),
    url: './bing-snow/index.html',
  }
] as Demo[]
