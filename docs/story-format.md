# 剧情数据格式说明

当前版本已经把剧情从 `index.html` 拆到 `data/story.js`。

## 普通剧情节点

```js
{
  "id": "l_01",
  "chapter": "Lolita线 第一章：红茶与误会",
  "bgm": "lolita",
  "image": "lolita",
  "speaker": "旁白",
  "text": "剧情文本……",
  "next": "l_02"
}
```

## 选项节点

```js
{
  "id": "l_choice",
  "speaker": "巨哼",
  "text": "你要怎么回答？",
  "choices": [
    {
      "text": "认真解释",
      "next": "l_next",
      "delta": { "trust": 2, "understand": 1 },
      "set": { "honest_camera": true }
    }
  ]
}
```

## 跨路线隐藏选项

```js
{
  "text": "你也去过那家茶室吗",
  "next": "o_16b",
  "require": { "memory": "lolita_good" }
}
```

## 结局节点

```js
{
  "id": "l_end_good",
  "ending": "good",
  "title": "Good Ending：《你眼中的我》",
  "memory": { "lolita_good": true }
}
```

## 当前支持字段

- `id`：节点唯一编号
- `chapter`：顶部章节名
- `bgm`：common / lolita / office / nurse
- `image`：lolita / office / nurse
- `speaker`：说话人
- `text`：正文
- `next`：下一节点
- `choices`：选项
- `delta`：修改好感/理解/信任
- `set`：设置当前周目 flag
- `memory`：设置全局记忆，跨周目保留
- `require`：显示条件
  - `{ "memory": "lolita_good" }`
  - `{ "anyMemory": ["lolita_good", "office_good"] }`
  - `{ "goodCount": 2 }`
  - `{ "flag": "nurse_coffee" }`


## 北京版地点建议

后续新增剧情时，建议保持以下地点风格：

- 日常序章：北京南站、地铁、胡同、咖啡店
- Lolita线：五道营胡同、雍和宫、鼓楼、复古茶室
- 职业装线：国贸 CBD、东三环、写字楼、便利蜂、深夜办公室
- 护士线：北京协和医院、医院走廊、护士站、朝阳公园
- 交叉线/真结局：亮马河、什刹海、奥森、北京城市影像展
