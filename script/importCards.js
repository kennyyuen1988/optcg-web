const { Pool } = require('pg')

// Create a new client instance
const client = new Pool({
  user: 'kennyyuen',
  host: 'localhost',
  database: 'optcg-web',
  port: 5432,
})

// Connect to your postgres DB
client.connect()

// Your cards data
const cards = [
    {
      "cardId": "OP01-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "羅羅亞・索隆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-001.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】自己的角色卡全數力量值+1000。",
      "effectType": [
        "咚!!×1",
        "我方回合中"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "羅羅亞・索隆(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-001_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】自己的角色卡全數力量值+1000。",
      "effectType": [
        "咚!!×1",
        "我方回合中"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "羅羅亞・索隆(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-001_p2.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】自己的角色卡全數力量值+1000。",
      "effectType": [
        "咚!!×1",
        "我方回合中"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION 25th ANNIVERSARY EDITION"
    },
    {
      "cardId": "OP01-002",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "托拉法爾加・羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-002.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅",
        "綠"
      ],
      "type": [
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】②(可將費用區的咚!!卡依指定的數量置為休息狀態)：若場上有5張自己的角色卡時，將1張自己的角色卡放回持有者的手牌，並從自己的手牌中，使最多1張和被放回的角色卡不同顏色費用5以下的角色卡登場。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-002",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "托拉法爾加・羅(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-002_p1.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅",
        "綠"
      ],
      "type": [
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】②(可將費用區的咚!!卡依指定的數量置為休息狀態)：若場上有5張自己的角色卡時，將1張自己的角色卡放回持有者的手牌，並從自己的手牌中，使最多1張和被放回的角色卡不同顏色費用5以下的角色卡登場。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-003",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-003.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅",
        "綠"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】④(可將費用區的咚!!卡依指定的數量置為休息狀態)：將最多1張自己費用5以下擁有《超新星》或《草帽一行人》特徵的角色卡置為活動狀態，且該張卡片，在這個回合，力量值+1000。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-003",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "蒙其・D・魯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-003_p1.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅",
        "綠"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】④(可將費用區的咚!!卡依指定的數量置為休息狀態)：將最多1張自己費用5以下擁有《超新星》或《草帽一行人》特徵的角色卡置為活動狀態，且該張卡片，在這個回合，力量值+1000。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-004",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "騙人布",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-004.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】【每回合1次】對手發動事件卡時，抽1張卡片。",
      "effectType": [
        "咚!!×1",
        "我方回合中",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-005",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "美音",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-005.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張自己廢棄區中除了「美音」以外費用3以下紅色的角色卡，加入手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-005",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "美音(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-005_p2.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張自己廢棄區中除了「美音」以外費用3以下紅色的角色卡，加入手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "OP01-006",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "玉兒",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-006.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": null,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張對手的角色卡，在這個回合，力量值-2000。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "格列佛",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-007.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "格列佛海賊團"
      ],
      "trigger": "",
      "effect": "【KO時】KO最多1張對手力量值4000以下的角色卡。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "卡文迪許",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-008.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "貌美海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】可將1張自己的生命值卡加入手牌：這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】規則和判定變更"
    },
    {
      "cardId": "OP01-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "卡文迪許(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-008_p1.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "貌美海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】可將1張自己的生命值卡加入手牌：這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】規則和判定變更"
    },
    {
      "cardId": "OP01-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "凱洛特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-009.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "純毛族"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "狛千世",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-010.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "和之國"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-011",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "高登",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-011.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "【登場時】可將1張自己的手牌放置到卡組下面：抽1張卡片。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "雜菜",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-012.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "八寶水軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-013",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "香吉士",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-013.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】可將1張自己的生命值卡加入手牌：這張角色卡，在這個回合，力量值+2000。之後，附加最多2張休息狀態的咚!!卡在這張角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】規則和判定變更"
    },
    {
      "cardId": "OP01-013",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "香吉士(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-013_p1.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】可將1張自己的生命值卡加入手牌：這張角色卡，在這個回合，力量值+2000。之後，附加最多2張休息狀態的咚!!卡在這張角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】規則和判定變更"
    },
    {
      "cardId": "OP01-013",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "香吉士(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-013_p2.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】可將1張自己的生命值卡加入手牌：這張角色卡，在這個回合，力量值+2000。之後，附加最多2張休息狀態的咚!!卡在這張角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION 25th ANNIVERSARY EDITION規則和判定變更"
    },
    {
      "cardId": "OP01-014",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "吉貝爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-014.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "魚人族",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚!!×1】【防禦時】使最多1張自己手牌中費用2以下紅色的角色卡登場。",
      "effectType": [
        "防禦",
        "咚!!×1",
        "防禦時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-014",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "吉貝爾(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-014_p2.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "魚人族",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚!!×1】【防禦時】使最多1張自己手牌中費用2以下紅色的角色卡登場。",
      "effectType": [
        "防禦",
        "咚!!×1",
        "防禦時"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "OP01-015",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "多尼多尼・喬巴",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-015.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】可以廢棄1張自己的手牌：將最多1張自己廢棄區中除了「多尼多尼・喬巴」以外費用4以下擁有《草帽一行人》特徵的角色卡，加入手牌。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-016",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "娜美",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-016.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「娜美」以外擁有《草帽一行人》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-016",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "娜美(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-016_p1.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「娜美」以外擁有《草帽一行人》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-016",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "娜美(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-016_p2.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「娜美」以外擁有《草帽一行人》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION 25th ANNIVERSARY EDITION"
    },
    {
      "cardId": "OP01-017",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "妮可・羅賓",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-017.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】KO最多1張對手力量值3000以下的角色卡。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-017",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "妮可・羅賓(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-017_p2.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】KO最多1張對手力量值3000以下的角色卡。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "OP01-018",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "哈爾汀",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-018.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "巨人族",
        "新巨兵海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-019",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "巴特洛馬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-019.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "巴特俱樂部"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚!!×2】【對方回合中】這張角色卡的力量值+3000。",
      "effectType": [
        "防禦",
        "咚!!×2",
        "對方回合中"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-020",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "豹五郎",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-020.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：最多1張自己的領航卡或角色卡，在這個回合，力量值+2000。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-021",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "佛朗基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-021.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】這張角色卡可以攻擊對手活動狀態的角色卡。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-021",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "佛朗基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-021_p1.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】這張角色卡可以攻擊對手活動狀態的角色卡。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "常規賽2022年9月優勝紀念品"
    },
    {
      "cardId": "OP01-021",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "佛朗基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-021_p2.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】這張角色卡可以攻擊對手活動狀態的角色卡。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "常規賽卡包2022 Vol.1"
    },
    {
      "cardId": "OP01-021",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "佛朗基(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-021_p4.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】這張角色卡可以攻擊對手活動狀態的角色卡。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "OP01-022",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "布魯克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-022.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】最多2張對手的角色卡，在這個回合，力量值-2000。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-022",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "布魯克(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-022_p1.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】最多2張對手的角色卡，在這個回合，力量值-2000。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION 25th ANNIVERSARY EDITION"
    },
    {
      "cardId": "OP01-023",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "馬可",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-023.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "原白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-024",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-024.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×2】這張角色卡在和擁有 (打)屬性的角色卡對戰中，不會遭到KO。【啟動主要】【每回合1次】附加最多2張休息狀態的咚!!卡在這張角色卡。",
      "effectType": [
        "咚!!×2",
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-024",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-024_p1.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×2】這張角色卡在和擁有 (打)屬性的角色卡對戰中，不會遭到KO。【啟動主要】【每回合1次】附加最多2張休息狀態的咚!!卡在這張角色卡。",
      "effectType": [
        "咚!!×2",
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-025",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "羅羅亞・索隆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-025.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【速攻】(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "速攻"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-025",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "羅羅亞・索隆(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-025_p1.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【速攻】(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "速攻"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-026",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "橡膠火拳槍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-026.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "【觸發器】最多1張對手的領航卡或角色卡，在這個回合，力量值-10000。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，KO最多1張對手力量值4000以下的角色卡。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-027",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "圓桌",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-027.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "貌美海賊團"
      ],
      "trigger": "",
      "effect": "【主要】最多1張對手的角色卡，在這個回合，力量值-10000。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-028",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "必殺綠星霸王花",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-028.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】發動這張卡片的【反擊】效果。",
      "effect": "【反擊】最多1張對手的領航卡或角色卡，在這個回合，力量值-2000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-029",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "佛朗基激光～～～束!!!!",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-029.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。之後，若自己的生命值卡在2張以下時，該張卡片，在這場對戰中，力量值+2000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-030",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "兩年後!!!在夏波帝群島!!!",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-030.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】從自己的卡組上面查看5張卡片，公開最多1張擁有《草帽一行人》特徵的角色卡，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-031",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "光月御田",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-031.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】可以廢棄1張自己手牌中擁有《和之國》特徵的卡片：將最多2張自己的咚!!卡置為活動狀態。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-031",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "光月御田(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-031_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】可以廢棄1張自己手牌中擁有《和之國》特徵的卡片：將最多2張自己的咚!!卡置為活動狀態。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-032",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "阿修羅童子",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-032.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【咚!!×1】若場上有2張以上對手休息狀態的角色卡時，這張角色卡，力量值+2000。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-033",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "以藏",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-033.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 3000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "原白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-033",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "以藏",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-033_p1.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 3000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "原白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "常規賽卡包2022 Vol.1"
    },
    {
      "cardId": "OP01-034",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "犬嵐",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-034.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族",
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【咚!!×2】【攻擊時】將最多1張自己的咚!!卡置為活動狀態。",
      "effectType": [
        "咚!!×2",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-034",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "犬嵐(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-034_p1.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族",
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【咚!!×2】【攻擊時】將最多1張自己的咚!!卡置為活動狀態。",
      "effectType": [
        "咚!!×2",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-035",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "阿菊",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-035.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】【每回合1次】將最多1張對手費用5以下的角色卡置為休息狀態。",
      "effectType": [
        "咚!!×1",
        "攻擊時",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-035",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "阿菊(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-035_p1.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】【每回合1次】將最多1張對手費用5以下的角色卡置為休息狀態。",
      "effectType": [
        "咚!!×1",
        "攻擊時",
        "每回合1次"
      ],
      "cardSet": "常規賽卡包Vol.3"
    },
    {
      "cardId": "OP01-036",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "阿鶴",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-036.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-037",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "河松",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-037.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "魚人族",
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-038",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "勘十郎",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-038.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】KO最多1張對手休息狀態費用2以下的角色卡。【KO時】自己的手牌讓對手選擇1張，並廢棄。",
      "effectType": [
        "咚!!×1",
        "攻擊時",
        "KO時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-039",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "奇拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-039.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚!!×1】【防禦時】若場上有3張以上自己的角色卡時，抽1張卡片。",
      "effectType": [
        "防禦",
        "咚!!×1",
        "防禦時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-040",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "錦右衛門",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-040.png?230512",
      "cost": 6,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡是「光月御田」時，使最多1張自己手牌中費用3以下擁有《紅鞘九人眾》特徵的角色卡登場。【咚!!×1】【攻擊時】【每回合1次】將最多1張自己費用3以下擁有《紅鞘九人眾》特徵的角色卡置為活動狀態。",
      "effectType": [
        "登場時",
        "咚!!×1",
        "攻擊時",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-040",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "錦右衛門(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-040_p1.png?230512",
      "cost": 6,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡是「光月御田」時，使最多1張自己手牌中費用3以下擁有《紅鞘九人眾》特徵的角色卡登場。【咚!!×1】【攻擊時】【每回合1次】將最多1張自己費用3以下擁有《紅鞘九人眾》特徵的角色卡置為活動狀態。",
      "effectType": [
        "登場時",
        "咚!!×1",
        "攻擊時",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-041",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "光月桃之助",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-041.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": null,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "【啟動主要】①(可將費用區的咚!!卡依指定的數量置為休息狀態)，可將這張角色卡置為休息狀態：從自己的卡組上面查看5張卡片，公開最多1張擁有《和之國》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-042",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "小紫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-042.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "【登場時】③(可將費用區的咚!!卡依指定的數量置為休息狀態)：若自己的領航卡是「光月御田」時，將最多1張自己費用3以下擁有《和之國》特徵的角色卡置為活動狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-043",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "忍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-043.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-044",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏奇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-044.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】若場上沒有自己的「企鵝」時，使最多1張自己手牌中的「企鵝」登場。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-045",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "強帕爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-045.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-046",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "傳二郎",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-046.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 7000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】若自己的領航卡是「光月御田」時，將最多2張自己的咚!!卡置為活動狀態。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-047",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-047.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】可將1張自己的角色卡放回持有者的手牌：使最多1張自己手牌中費用3以下的角色卡登場。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-047",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-047_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】可將1張自己的角色卡放回持有者的手牌：使最多1張自己手牌中費用3以下的角色卡登場。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-047",
      "rarity": "SP卡",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-047_p2.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】可將1張自己的角色卡放回持有者的手牌：使最多1張自己手牌中費用3以下的角色卡登場。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP01-048",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "貓蝮蛇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-048.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族",
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張對手費用3以下的角色卡置為休息狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-048",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "貓蝮蛇(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-048_p1.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族",
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張對手費用3以下的角色卡置為休息狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-049",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "培波",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-049.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 4000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】使最多1張自己手牌中費用4以下除了「培波」以外擁有《哈特海賊團》特徵的角色卡登場。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-050",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "企鵝",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-050.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 2000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】若場上沒有自己的「夏奇」時，使最多1張自己手牌中的「夏奇」登場。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-051",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "尤斯塔斯・基德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-051.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 8000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【對方回合中】若這張角色卡在休息狀態時，對手只能攻擊角色卡「尤斯塔斯・基德」。【啟動主要】【每回合1次】可將這張角色卡置為休息狀態：使最多1張自己手牌中費用3以下的角色卡登場。",
      "effectType": [
        "咚!!×1",
        "對方回合中",
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-051",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "尤斯塔斯・基德(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-051_p1.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 8000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【對方回合中】若這張角色卡在休息狀態時，對手只能攻擊角色卡「尤斯塔斯・基德」。【啟動主要】【每回合1次】可將這張角色卡置為休息狀態：使最多1張自己手牌中費用3以下的角色卡登場。",
      "effectType": [
        "咚!!×1",
        "對方回合中",
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-051",
      "rarity": "SP卡",
      "role": "CHARACTER",
      "cardName": "尤斯塔斯・基德(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-051_p2.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 8000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【對方回合中】若這張角色卡在休息狀態時，對手只能攻擊角色卡「尤斯塔斯・基德」。【啟動主要】【每回合1次】可將這張角色卡置為休息狀態：使最多1張自己手牌中費用3以下的角色卡登場。",
      "effectType": [
        "咚‼×1",
        "對方回合中",
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP01-052",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "雷藏",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-052.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【攻擊時】【每回合1次】若場上有2張以上自己休息狀態的角色卡時，抽1張卡片。",
      "effectType": [
        "攻擊時",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-053",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "瓦耶",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-053.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-054",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "X・多雷古",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-054.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "海軍",
        "多雷古海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】KO最多1張對手休息狀態費用4以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-055",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "成為我的”武士”吧!!!",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-055.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "【主要】可將2張自己的角色卡置為休息狀態：抽2張卡片。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-056",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "降魔之相",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-056.png?230512",
      "cost": 6,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "霍金斯海賊團"
      ],
      "trigger": "",
      "effect": "【主要】KO最多2張對手休息狀態費用5以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-057",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "桃源白瀧",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-057.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "【觸發器】KO最多1張對手休息狀態費用4以下的角色卡。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。之後，將最多1張自己的角色卡置為活動狀態。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-058",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "磁氣弦",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-058.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "【觸發器】將最多1張對手的角色卡置為休息狀態。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-059",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "琤琤!!",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-059.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【主要】可以廢棄1張自己手牌中擁有《和之國》特徵的卡片：將最多1張自己費用3以下擁有《和之國》特徵的角色卡置為活動狀態。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-060",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "唐吉訶德・多佛朗明哥",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-060.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×2】【攻擊時】①(可將費用區的咚!!卡依指定的數量置為休息狀態)：公開自己卡組最上面的卡片，若該張卡片是費用4以下擁有《王下七武海》特徵的角色卡時，也可以休息狀態登場。",
      "effectType": [
        "咚!!×2",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-060",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "唐吉訶德・多佛朗明哥(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-060_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×2】【攻擊時】①(可將費用區的咚!!卡依指定的數量置為休息狀態)：公開自己卡組最上面的卡片，若該張卡片是費用4以下擁有《王下七武海》特徵的角色卡時，也可以休息狀態登場。",
      "effectType": [
        "咚!!×2",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-061",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "海道",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-061.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "藍",
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】【每回合1次】對手的角色卡遭到KO時，從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effectType": [
        "咚!!×1",
        "我方回合中",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-061",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "海道(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-061_p1.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "藍",
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】【每回合1次】對手的角色卡遭到KO時，從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effectType": [
        "咚!!×1",
        "我方回合中",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-062",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "克洛克達爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-062.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "藍",
        "紫"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【咚!!×1】自己發動事件卡時，自己的手牌在4張以下，且在這個回合，若因這張領航卡的效果而沒有抽卡片時，可以抽1張卡片。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-062",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "克洛克達爾(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-062_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "藍",
        "紫"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【咚!!×1】自己發動事件卡時，自己的手牌在4張以下，且在這個回合，若因這張領航卡的效果而沒有抽卡片時，可以抽1張卡片。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-063",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "惡龍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-063.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "魚人族",
        "惡龍海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【啟動主要】可將這張角色卡置為休息狀態：選擇對手的1張手牌，並公開。若公開的卡片是事件卡時，將最多1張對手的生命值卡放到持有者的卡組下面。",
      "effectType": [
        "咚‼×1",
        "啟動主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】規則和判定變更"
    },
    {
      "cardId": "OP01-064",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "亞爾麗塔",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-064.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "藍"
      ],
      "type": [
        "巴其海賊團船長"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】可以廢棄1張自己的手牌：將最多1張對手費用3以下的角色卡放回持有者的手牌。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-064",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "亞爾麗塔(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-064_p1.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "藍"
      ],
      "type": [
        "巴其海賊團船長"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】可以廢棄1張自己的手牌：將最多1張對手費用3以下的角色卡放回持有者的手牌。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-065",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "威爾可",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-065.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 7000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "海軍",
        "唐吉訶德海賊團",
        "龐克哈薩特"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-066",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "克利克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-066.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "克利克海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-067",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "克洛克達爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-067.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【消失】(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)【咚!!×1】自己手牌中的藍色事件卡，費用-1。",
      "effectType": [
        "消失",
        "咚!!×1"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-067",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "克洛克達爾(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-067_p1.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【消失】(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)【咚!!×1】自己手牌中的藍色事件卡，費用-1。",
      "effectType": [
        "消失",
        "咚!!×1"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-068",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "月光‧摩利亞",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-068.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "恐怖三桅帆船海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合中】若自己的手牌在5張以上時，這張角色卡獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "我方回合中",
        "雙重攻擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-069",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "凱薩克勞恩",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-069.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "科學家",
        "龐克哈薩特"
      ],
      "trigger": "",
      "effect": "【KO時】使最多1張自己卡組中的「史邁利」登場，並將卡組洗牌。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-070",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "喬拉可爾・密佛格",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-070.png?230512",
      "cost": 9,
      "attribute": "斬",
      "power": 9000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張費用7以下的角色卡放到持有者的卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-070",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "喬拉可爾・密佛格異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-070_p1.png?230512",
      "cost": 9,
      "attribute": "斬",
      "power": 9000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張費用7以下的角色卡放到持有者的卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-071",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "吉貝爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-071.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 2000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "魚人族",
        "草帽一行人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】將最多1張費用3以下的角色卡放到持有者的卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-072",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "史邁利",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-072.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "生物兵器",
        "龐克哈薩特"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】自己每有1張手牌，這張角色卡的力量值+1000。",
      "effectType": [
        "咚!!×1",
        "我方回合中"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-073",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・多佛朗明哥",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-073.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】從自己的卡組上面查看5張卡片，並依任意順序變換排列放到卡組上面或下面。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-073",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・多佛朗明哥(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-073_p1.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】從自己的卡組上面查看5張卡片，並依任意順序變換排列放到卡組上面或下面。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-074",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "巴索羅繆・大熊",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-074.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "革命軍"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】使最多1張自己手牌中費用4以下的「和平主義者」登場。",
      "effectType": [
        "防禦",
        "KO時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-075",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "和平主義者",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-075.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "生物兵器",
        "海軍"
      ],
      "trigger": "",
      "effect": "在規則上，這張卡片可不限張數放入卡組中。【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-076",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "貝拉密",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-076.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-077",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "培羅娜",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-077.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "多雷斯羅薩恐怖三桅帆船海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，並依任意順序變換排列放到卡組上面或下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-077",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "培羅娜(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-077_p1.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "多雷斯羅薩恐怖三桅帆船海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，並依任意順序變換排列放到卡組上面或下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-078",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "波雅‧漢考克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-078.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "九蛇海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚!!×1】【攻擊時】/【防禦時】若自己的手牌在5張以下時，抽1張卡片。",
      "effectType": [
        "防禦",
        "咚!!×1",
        "攻擊時",
        "防禦時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-078",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "波雅‧漢考克(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-078_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "九蛇海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚!!×1】【攻擊時】/【防禦時】若自己的手牌在5張以下時，抽1張卡片。",
      "effectType": [
        "防禦",
        "咚!!×1",
        "攻擊時",
        "防禦時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-078",
      "rarity": "SP卡",
      "role": "CHARACTER",
      "cardName": "波雅・漢考克(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-078_p2.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "九蛇海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚‼×1】【攻擊時】/【防禦時】若自己的手牌在5張以下時，抽1張卡片。",
      "effectType": [
        "防禦",
        "咚‼×1",
        "攻擊時",
        "防禦時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP01-079",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "Miss All星期天",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-079.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 1000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】若自己的領航卡擁有《B・W》特徵時，將最多1張自己廢棄區中的事件卡，加入手牌。",
      "effectType": [
        "防禦",
        "KO時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-080",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "Miss雙手指(薩菈)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-080.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "",
      "effect": "【KO時】抽1張卡片。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-081",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "蒙查",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-081.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "龐克哈薩特"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-082",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "莫內",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-082.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "龐克哈薩特",
        "唐吉訶德海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-083",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "Mr.1(達茲・波涅士)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-083.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】若自己的領航卡擁有《B・W》特徵時，自己的廢棄區中每有2張事件卡，這張角色卡的力量值+1000。",
      "effectType": [
        "咚!!×1",
        "我方回合中"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-084",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "Mr.2(馮・克雷)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-084.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 2000,
      "color": [
        "藍"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】從自己的卡組上面查看5張卡片，公開最多1張擁有《B・W》特徵的事件卡，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-085",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "Mr.3(賈爾迪諾)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-085.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有《B・W》特徵時，選擇最多1張對手費用4以下的角色卡。在下一個對手回合結束前，被選擇的角色卡無法進行攻擊。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-086",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "超荷鞭線",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-086.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "【觸發器】將最多1張費用4以下的角色卡放回持有者的手牌。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，將最多1張活動狀態費用3以下的角色卡放回持有者的手牌。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-087",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "高級特務",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-087.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "【觸發器】發動這張卡片的【反擊】效果。",
      "effect": "【反擊】使最多1張自己手牌中費用3以下擁有《B・W》特徵的角色卡登場。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-088",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "砂漠寶刀",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-088.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "【觸發器】抽2張卡片，並廢棄1張自己的手牌。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。之後，從自己的卡組上面查看3張卡片，並依任意順序變換排列放到卡組上面或下面。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-089",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "三日月形砂丘",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-089.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【反擊】若自己的領航卡擁有《王下七武海》特徵時，將最多1張費用5以下的角色卡放回持有者的手牌。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-090",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "巴洛克華克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-090.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "",
      "effect": "【主要】從自己的卡組上面查看5張卡片，公開最多1張除了「巴洛克華克」以外擁有《B・W》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-091",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "KING",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-091.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合中】若自己的場上有10張咚!!卡時，對手的角色卡全數力量值-1000。",
      "effectType": [
        "我方回合中"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-091",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "KING(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-091_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合中】若自己的場上有10張咚!!卡時，對手的角色卡全數力量值-1000。",
      "effectType": [
        "我方回合中"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-092",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "浦島",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-092.png?230512",
      "cost": 7,
      "attribute": "打",
      "power": 9000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-093",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "烏爾蒂",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-093.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】①(可將費用區的咚!!卡依指定的數量置為休息狀態)：從咚!!卡組追加最多1張休息狀態的咚!!卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-093",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "烏爾蒂(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-093_p1.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】①(可將費用區的咚!!卡依指定的數量置為休息狀態)：從咚!!卡組追加最多1張休息狀態的咚!!卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-094",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "海道",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-094.png?230512",
      "cost": 10,
      "attribute": "打",
      "power": 12000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-6(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：若自己的領航卡擁有《百獸海賊團》特徵時，除了這張角色卡以外，KO全數的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-094",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "海道(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-094_p1.png?230512",
      "cost": 10,
      "attribute": "打",
      "power": 12000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-6(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：若自己的領航卡擁有《百獸海賊團》特徵時，除了這張角色卡以外，KO全數的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-095",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "狂死郎",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-095.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的場上有8張以上咚!!卡時，抽1張卡片。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-096",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "KING",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-096.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-2(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：KO最多1張對手費用3以下的角色卡，和最多1張對手費用2以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-096",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "KING(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-096_p1.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-2(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：KO最多1張對手費用3以下的角色卡，和最多1張對手費用2以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-097",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "QUEEN",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-097.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：這張角色卡，在這個回合，獲得【速攻】。之後，最多1張對手的角色卡，在這個回合，力量值-2000。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-097",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "QUEEN(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-097_p1.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：這張角色卡，在這個回合，獲得【速攻】。之後，最多1張對手的角色卡，在這個回合，力量值-2000。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-098",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "黑炭大蛇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-098.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 2000,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "和之國",
        "黑炭家"
      ],
      "trigger": "",
      "effect": "【登場時】公開最多1張自己卡組中的「人造惡魔果實SMILE」，並加入手牌，再將卡組洗牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-099",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "黑炭蟬丸",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-099.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "和之國",
        "黑炭家"
      ],
      "trigger": "",
      "effect": "除了自己的「黑炭蟬丸」以外，擁有《黑炭家》特徵的角色卡在對戰中不會遭到KO。",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-100",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "黑炭日暮",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-100.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "和之國",
        "黑炭家"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-101",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "佐佐木",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-101.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】可以廢棄1張自己的手牌：從咚!!卡組追加最多1張休息狀態的咚!!卡。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-102",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "JACK",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-102.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【攻擊時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：對手廢棄1張自身的手牌。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-102",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "JACK(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-102_p1.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【攻擊時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：對手廢棄1張自身的手牌。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-103",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "刮盤人・亞普",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-103.png?230512",
      "cost": 4,
      "attribute": "射",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "ONAIR海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-104",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "史比托",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-104.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-105",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "包紡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-105.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "",
      "effect": "【登場時】選擇對手的2張手牌，並公開。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-106",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "巴吉魯・霍金斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-106.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "霍金斯海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】從咚!!卡組追加最多1張休息狀態的咚!!卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-107",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "巴伐奴基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-107.png?230512",
      "cost": 5,
      "attribute": "射",
      "power": 7000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-108",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "砍人鐮藏",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-108.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "超新星",
        "基德海賊團",
        "SMILE"
      ],
      "trigger": "",
      "effect": "【KO時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：KO最多1張對手費用5以下的角色卡。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-109",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "福茲胡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-109.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】若自己的場上有8張以上咚!!卡時，這張角色卡的力量值+1000。",
      "effectType": [
        "咚!!×1",
        "我方回合中"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-109",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "福茲胡(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-109_p1.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】若自己的場上有8張以上咚!!卡時，這張角色卡的力量值+1000。",
      "effectType": [
        "咚!!×1",
        "我方回合中"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-110",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "福祿壽",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-110.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 8000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "和之國",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-111",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "黑瑪麗亞",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-111.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【防禦時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：在這個回合，這張角色卡的力量值+1000。",
      "effectType": [
        "防禦",
        "防禦時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-112",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "培濟萬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-112.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：這張角色卡，在這個回合，可以攻擊對手活動狀態的角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-113",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "赫戴姆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-113.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "",
      "effect": "【KO時】從咚!!卡組追加最多1張休息狀態的咚!!卡。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-114",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "X・多雷古",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-114.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "海軍",
        "多雷古海賊團",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：對手廢棄1張自身的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-115",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "象鼻息",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-115.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】KO最多1張對手費用2以下的角色卡，並從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-116",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "人造惡魔果實SMILE",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-116.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】從自己的卡組上面查看5張卡片，使最多1張費用3以下擁有《SMILE》特徵的角色卡登場。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-117",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "羊群號角",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-117.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "",
      "effect": "【主要】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：將最多1張對手費用6以下的角色卡置為休息狀態。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-118",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "烏爾頭槍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-118.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "【觸發器】從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effect": "【反擊】咚!!-2(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。之後，抽1張卡片。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-119",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "雷鳴八卦",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-119.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "【觸發器】從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，若自己的生命值卡在2張以下時，從咚‼卡組追加最多1張休息狀態的咚‼卡。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-120",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "傑克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-120.png?230512",
      "cost": 9,
      "attribute": "斬",
      "power": 10000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "四皇",
        "紅髮海賊團"
      ],
      "trigger": "",
      "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【攻擊時】對手在這場對戰中，力量值2000以下的角色卡無法發動【防禦】。",
      "effectType": [
        "速攻",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-120",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "傑克(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-120_p1.png?230512",
      "cost": 9,
      "attribute": "斬",
      "power": 10000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "四皇",
        "紅髮海賊團"
      ],
      "trigger": "",
      "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【攻擊時】對手在這場對戰中，力量值2000以下的角色卡無法發動【防禦】。",
      "effectType": [
        "速攻",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-120",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "傑克(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-120_p2.png?230512",
      "cost": 9,
      "attribute": "斬",
      "power": 10000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "四皇",
        "紅髮海賊團"
      ],
      "trigger": "",
      "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【攻擊時】對手在這場對戰中，力量值2000以下的角色卡無法發動【防禦】。",
      "effectType": [
        "速攻",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-121",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "大和",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-121.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "在規則上，這張卡片的卡片名稱也可視為「光月御田」。【雙重攻擊】(這張卡片造成的傷害為2)【消失】(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)",
      "effectType": [
        "雙重攻擊",
        "消失"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP01-121",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "大和(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP01-121_p1.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "在規則上，這張卡片的卡片名稱也可視為「光月御田」。【雙重攻擊】(這張卡片造成的傷害為2)【消失】(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)",
      "effectType": [
        "雙重攻擊",
        "消失"
      ],
      "cardSet": "ROMANCE DAWN【OP-01】"
    },
    {
      "cardId": "OP02-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "艾德華・紐蓋特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-001.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "四皇",
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】將自己生命值區最上面的1張卡片加入手牌。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "艾德華・紐蓋特(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-001_p1.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "四皇",
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】將自己生命值區最上面的1張卡片加入手牌。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-002",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "蒙其・D・卡普",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-002.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅",
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【我方回合中】這張領航卡或自己的角色卡附加咚!!卡時，最多1張對手費用7以下的角色卡，在這個回合，費用-1。",
      "effectType": [
        "我方回合中"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-002",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "蒙其・D・卡普(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-002_p1.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅",
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【我方回合中】這張領航卡或自己的角色卡附加咚!!卡時，最多1張對手費用7以下的角色卡，在這個回合，費用-1。",
      "effectType": [
        "我方回合中"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-003",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "亞托摩斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-003.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-004",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "艾德華・紐蓋特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-004.png?230512",
      "cost": 9,
      "attribute": "特",
      "power": 10000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "四皇",
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】到下一個我方回合開始前，最多1張自己的領航卡力量值+2000。之後，在這個回合，自己無法以自己的效果將生命值卡加入手牌。【咚!!×2】【攻擊時】KO最多1張對手力量值3000以下的角色卡。",
      "effectType": [
        "登場時",
        "咚!!×2",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-004",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "艾德華・紐蓋特(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-004_p1.png?230512",
      "cost": 9,
      "attribute": "特",
      "power": 10000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "四皇",
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】到下一個我方回合開始前，最多1張自己的領航卡力量值+2000。之後，在這個回合，自己無法以自己的效果將生命值卡加入手牌。【咚!!×2】【攻擊時】KO最多1張對手力量值3000以下的角色卡。",
      "effectType": [
        "登場時",
        "咚!!×2",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-004",
      "rarity": "SP卡",
      "role": "CHARACTER",
      "cardName": "艾德華・紐蓋特(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-004_p2.png?230512",
      "cost": 9,
      "attribute": "特",
      "power": 10000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "四皇",
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】到下一個我方回合開始前，最多1張自己的領航卡力量值+2000。之後，在這個回合，自己無法以自己的效果將生命值卡加入手牌。【咚‼×2】【攻擊時】KO最多1張對手力量值3000以下的角色卡。",
      "effectType": [
        "登場時",
        "咚‼×2",
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP02-005",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "卡莉・達坦",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-005.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "山賊"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看最多5張卡片，公開最多1張費用1紅色的角色卡，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "金格杜",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-006.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 7000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "薩吉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-007.png?230512",
      "cost": 6,
      "attribute": "知",
      "power": 8000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-008",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "裘斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-008.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 4000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】若自己的生命值卡在2張以下，並且自己的領航卡擁有包含『白鬍子海賊團』特徵時，這張角色卡獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "咚!!×1",
        "速攻"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-009",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "史庫亞德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-009.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團旗下"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有包含『白鬍子海賊團』特徵時，最多1張對手的角色卡，在這個回合，力量值-4000，並且將自己生命值區最上面的1張卡片加入手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-009",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "史庫亞德(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-009_p1.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團旗下"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有包含『白鬍子海賊團』特徵時，最多1張對手的角色卡，在這個回合，力量值-4000，並且將自己生命值區最上面的1張卡片加入手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "多古拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-010.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "山賊"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：使最多1張自己手牌中除了「多古拉」以外費用1紅色的角色卡登場。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-011",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "比斯塔",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-011.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】KO最多1張對手力量值3000以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "布雷海姆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-012.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "波特卡斯・D・艾斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-013.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】最多2張對手的角色卡，在這個回合，力量值-3000。之後，若自己的領航卡擁有包含『白鬍子海賊團』特徵時，這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "波特卡斯・D・艾斯(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-013_p1.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】最多2張對手的角色卡，在這個回合，力量值-3000。之後，若自己的領航卡擁有包含『白鬍子海賊團』特徵時，這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "波特卡斯・D・艾斯(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-013_p2.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】最多2張對手的角色卡，在這個回合，力量值-3000。之後，若自己的領航卡擁有包含『白鬍子海賊團』特徵時，這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-014",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "雪白之珮",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-014.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團旗下"
      ],
      "trigger": "",
      "effect": "【咚!!×1】這張角色卡可以攻擊對手活動狀態的角色卡。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-015",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "瑪姬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-015.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "佛夏村"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：最多1張自己費用1紅色的角色卡，在這個回合，力量值+3000。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-016",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "馬古拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-016.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "山賊"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張自己費用1紅色的角色卡，在這個回合，力量值+3000。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-017",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "面具・迪斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-017.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "黑桃海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×2】【攻擊時】KO最多1張對手力量值2000以下的角色卡。",
      "effectType": [
        "咚!!×2",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-017",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "面具・迪斯(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-017_p1.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "黑桃海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×2】【攻擊時】KO最多1張對手力量值2000以下的角色卡。",
      "effectType": [
        "咚!!×2",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-018",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "馬可",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-018.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】可以廢棄1張自己手牌中擁有包含『白鬍子海賊團』特徵的卡片：若自己的生命值卡在2張以下時，使這張角色卡從廢棄區以休息狀態登場。",
      "effectType": [
        "防禦",
        "KO時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-018",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "馬可(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-018_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】可以廢棄1張自己手牌中擁有包含『白鬍子海賊團』特徵的卡片：若自己的生命值卡在2張以下時，使這張角色卡從廢棄區以休息狀態登場。",
      "effectType": [
        "防禦",
        "KO時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-019",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "落葉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-019.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】自己擁有包含『白鬍子海賊團』特徵的角色卡全數力量值+1000。",
      "effectType": [
        "咚!!×1",
        "我方回合中"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-020",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "小歐斯Jr.",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-020.png?230512",
      "cost": 7,
      "attribute": "打",
      "power": 9000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "巨人族",
        "白鬍子海賊團旗下"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-021",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "海震",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-021.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "四皇",
        "白鬍子海賊團"
      ],
      "trigger": "【觸發器】最多1張對手的領航卡或角色卡，在這個回合，力量值-3000。",
      "effect": "【主要】若自己的領航卡擁有包含『白鬍子海賊團』特徵時，KO最多1張對手力量值3000以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-022",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "白鬍子海賊團",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-022.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】從自己的卡組上面查看5張卡片，公開最多1張擁有包含『白鬍子海賊團』特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-023",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "即使是笨兒子我還是會愛你…",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-023.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "四皇",
        "白鬍子海賊團"
      ],
      "trigger": "【觸發器】最多1張自己的領航卡，在這個回合，力量值+1000。",
      "effect": "【主要】若自己的生命值在3以下時，在這個回合，自己無法以自己的效果將生命值卡加入手牌。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-024",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "白鯨號",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-024.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【我方回合中】若自己的生命值卡在1張以下時，自己的「艾德華・紐蓋特」和擁有包含『白鬍子海賊團』特徵的角色卡全數力量值+2000。",
      "effectType": [
        "我方回合中"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-025",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "錦右衛門",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-025.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】若自己的角色卡在1張以下時，在這個回合，接下來使自己手牌中費用3以上擁有《和之國》特徵的角色卡登場的支付費用減少1。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-025",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "錦右衛門(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-025_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】若自己的角色卡在1張以下時，在這個回合，接下來使自己手牌中費用3以上擁有《和之國》特徵的角色卡登場的支付費用減少1。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-026",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "香吉士",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-026.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "綠",
        "藍"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【每回合1次】使自己原本沒有效果的角色卡從手牌中登場時，若自己的角色卡在3張以下時，將最多2張自己的咚!!卡，置為活動狀態。",
      "effectType": [
        "每回合1次"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-026",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "香吉士(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-026_p1.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "綠",
        "藍"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【每回合1次】使自己原本沒有效果的角色卡從手牌中登場時，若自己的角色卡在3張以下時，將最多2張自己的咚!!卡，置為活動狀態。",
      "effectType": [
        "每回合1次"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-027",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "犬嵐",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-027.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族",
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "若自己的咚!!卡全部在休息狀態時，這張角色卡不會因對手的效果而離開場上。",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-028",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "騙人布",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-028.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-029",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "凱洛特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-029.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】將最多1張自己的咚!!卡置為活動狀態。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-030",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "光月御田",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-030.png?230512",
      "cost": 8,
      "attribute": "斬",
      "power": 8000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】③(可將費用區的咚!!卡依指定的數量置為休息狀態)：將這張角色卡置為活動狀態。【KO時】使最多1張自己卡組中費用3綠色擁有《和之國》特徵的角色卡登場。之後，將卡組洗牌。",
      "effectType": [
        "啟動主要",
        "每回合1次",
        "KO時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-030",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "光月御田(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-030_p1.png?230512",
      "cost": 8,
      "attribute": "斬",
      "power": 8000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】③(可將費用區的咚!!卡依指定的數量置為休息狀態)：將這張角色卡置為活動狀態。【KO時】使最多1張自己卡組中費用3綠色擁有《和之國》特徵的角色卡登場。之後，將卡組洗牌。",
      "effectType": [
        "啟動主要",
        "每回合1次",
        "KO時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-031",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "光月時",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-031.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "若場上有自己的角色卡「光月御田」時，這張角色卡獲得【防禦】。(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-031",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "光月時(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-031_p1.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "若場上有自己的角色卡「光月御田」時，這張角色卡獲得【防禦】。(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-032",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "西西利昂",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-032.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族"
      ],
      "trigger": "",
      "effect": "【登場時】②(可將費用區的咚!!卡依指定的數量置為休息狀態)：將最多1張自己費用5以下擁有《純毛族》特徵的角色卡置為活動狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-033",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "吉貝爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-033.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "魚人族",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-034",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "多尼多尼・喬巴",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-034.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 2000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "動物",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】將最多1張對手費用2以下的角色卡置為休息狀態。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-035",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-035.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】➀(可將費用區的咚!!卡依指定的數量置為休息狀態)，可將這張角色卡放回持有者的手牌：使最多1張自己手牌中費用3的角色卡登場。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-035",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-035_p1.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】➀(可將費用區的咚!!卡依指定的數量置為休息狀態)，可將這張角色卡放回持有者的手牌：使最多1張自己手牌中費用3的角色卡登場。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "推廣卡包 Vol.3"
    },
    {
      "cardId": "OP02-036",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "娜美",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-036.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】/【攻擊時】➀(可將費用區的咚!!卡依指定的數量置為休息狀態)：從自己的卡組上面查看3張卡片，公開最多1張除了「娜美」以外擁有《FILM》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-036",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "娜美(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-036_p1.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】/【攻擊時】➀(可將費用區的咚!!卡依指定的數量置為休息狀態)：從自己的卡組上面查看3張卡片，公開最多1張除了「娜美」以外擁有《FILM》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-037",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "妮可・羅賓",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-037.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】使最多1張自己手牌中費用2以下擁有《FILM》或《草帽一行人》特徵的角色卡登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-038",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "貓蝮蛇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-038.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族",
        "和之國",
        "紅鞘九人眾"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-039",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "佛朗基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-039.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 7000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-040",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "布魯克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-040.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】使最多1張自己手牌中費用3以下擁有《FILM》或《草帽一行人》特徵的角色卡登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-041",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-041.png?230512",
      "cost": 7,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】使最多1張自己手牌中費用4以下擁有《FILM》或《草帽一行人》特徵的角色卡登場。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-041",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-041_p1.png?230512",
      "cost": 7,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】使最多1張自己手牌中費用4以下擁有《FILM》或《草帽一行人》特徵的角色卡登場。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-042",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "大和",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-042.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "在規則上，這張卡片的卡片名稱也可視為「光月御田」。【登場時】將最多1張對手費用6以下的角色卡置為休息狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-043",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "羅羅亞・索隆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-043.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-044",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "萬妲",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-044.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族"
      ],
      "trigger": "",
      "effect": "【登場時】使最多1張自己手牌中除了「萬妲」以外費用3以下擁有《純毛族》特徵的角色卡登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-045",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "三刀流　鬼斬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-045.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "超新星",
        "草帽一行人"
      ],
      "trigger": "【觸發器】將最多1張對手的領航卡或費用5以下的角色卡置為休息狀態。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+6000。之後，使最多1張自己手牌中費用3以下原本沒有效果的角色卡登場。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-046",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "惡魔風腳　野獸肉SHOOT",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-046.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "草帽一行人"
      ],
      "trigger": "【觸發器】使最多1張自己手牌中費用4以下原本沒有效果的角色卡登場。",
      "effect": "【主要】KO最多1張對手休息狀態費用4以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-047",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "桃源十拳",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-047.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "【觸發器】KO最多1張對手休息狀態費用3以下的角色卡。",
      "effect": "【主要】將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-048",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "和之國",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-048.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【啟動主要】廢棄1張自己手牌中擁有《和之國》特徵的卡片，可將這張舞台卡置為休息狀態：將最多1張自己的咚!!卡，置為活動狀態。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-049",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "艾波利歐・伊娃柯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-049.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "革命軍"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】若自己的手牌為0張時，抽2張卡片。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-049",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "艾波利歐・伊娃柯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-049_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "革命軍"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】若自己的手牌為0張時，抽2張卡片。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-050",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "雷電",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-050.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "革命軍"
      ],
      "trigger": "",
      "effect": "若自己的手牌在1張以下時，這張角色卡的力量值+2000。【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-051",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "艾波利歐・伊娃柯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-051.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "革命軍"
      ],
      "trigger": "",
      "effect": "【登場時】抽取卡片使自己的手牌有3張，使最多1張自己手牌中費用6以下藍色擁有《推進城》特徵的角色卡登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-051",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "艾波利歐・伊娃柯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-051_p1.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "革命軍"
      ],
      "trigger": "",
      "effect": "【登場時】抽取卡片使自己的手牌有3張，使最多1張自己手牌中費用6以下藍色擁有《推進城》特徵的角色卡登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-052",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "卡巴吉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-052.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "巴其海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】若場上有自己的「摩奇」時，抽2張卡片，並廢棄1張自己的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-053",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "克洛克達爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-053.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 7000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "前B・W"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-054",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "月光・摩利亞",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-054.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "恐怖三桅帆船海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-055",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "喬拉可爾・密佛格",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-055.png?230512",
      "cost": 6,
      "attribute": "斬",
      "power": 8000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-056",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・多佛朗明哥",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-056.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 2000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看3張卡片，並任意變換排列順序放到卡組上面或下面。【咚!!×1】【攻擊時】可以廢棄1張自己的手牌：將最多1張對手費用1以下的角色卡放到持有者的卡組下面。",
      "effectType": [
        "登場時",
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-057",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "巴索羅繆・大熊",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-057.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "革命軍"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看2張卡片，公開最多1張擁有《王下七武海》特徵的卡片，並加入手牌。之後，將其餘卡片任意變換排列順序放到卡組上面或下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-058",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "巴其",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-058.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "巴其海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「巴其」以外藍色擁有《推進城》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-058",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "巴其(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-058_p1.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "巴其海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「巴其」以外藍色擁有《推進城》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-059",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "波雅・漢考克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-059.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "王下七武海",
        "九蛇海賊團"
      ],
      "trigger": "",
      "effect": "【攻擊時】抽1張卡片，並廢棄1張自己的手牌。之後，廢棄最多3張自己的手牌。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-059",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "波雅・漢考克(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-059_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "王下七武海",
        "九蛇海賊團"
      ],
      "trigger": "",
      "effect": "【攻擊時】抽1張卡片，並廢棄1張自己的手牌。之後，廢棄最多3張自己的手牌。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-060",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "摩奇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-060.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "巴其海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-061",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "摩利",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-061.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "巨人族",
        "革命軍"
      ],
      "trigger": "",
      "effect": "【攻擊時】若自己的手牌在1張以下時，對手在這場對戰中，費用5以下的角色卡無法發動【防禦】。",
      "effectType": [
        "攻擊時",
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-062",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-062.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】/【攻擊時】可以廢棄2張自己的手牌：將最多1張費用4以下的角色卡放回持有者的手牌。之後，這張角色卡，在這個回合，獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "登場時",
        "攻擊時",
        "雙重攻擊"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-062",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-062_p1.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】/【攻擊時】可以廢棄2張自己的手牌：將最多1張費用4以下的角色卡放回持有者的手牌。之後，這張角色卡，在這個回合，獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "登場時",
        "攻擊時",
        "雙重攻擊"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-063",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "Mr.1(達茲・波涅士)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-063.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 1000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "前B・W"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張自己廢棄區中費用1藍色的事件卡，加入手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-064",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "Mr.2・馮・克雷(班薩姆)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-064.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": 2000,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "前B・W"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】可以廢棄1張自己的手牌：將最多1張費用2以下的角色卡放到持有者的卡組下面。之後，這場對戰結束時，將這張角色卡放到持有者的卡組下面。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-065",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "Mr.3(賈爾迪諾)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-065.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "前B・W"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【我方回合結束時】可以廢棄1張自己的手牌：將這張角色卡置為活動狀態。",
      "effectType": [
        "防禦",
        "我方回合結束時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-066",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "推進城全明星",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-066.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "【觸發器】抽2張卡片。",
      "effect": "【主要】可以廢棄2張自己的手牌：若自己的領航卡擁有《推進城》特徵時，最多抽2張卡片。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-067",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "唐草瓦正拳",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-067.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "魚人族",
        "推進城"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】將最多1張費用4以下的角色卡放回持有者的手牌。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-068",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "橡膠雨",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-068.png?230512",
      "cost": null,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "草帽一行人"
      ],
      "trigger": "【觸發器】將最多1張費用2以下的角色卡放回持有者的手牌。",
      "effect": "【反擊】可以廢棄1張自己的手牌：最多1張自己的領航卡或角色卡，在這場對戰中，力量值+3000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-069",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "DEATH WINK",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-069.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "推進城",
        "革命軍"
      ],
      "trigger": "【觸發器】將最多1張費用7以下的角色卡放回持有者的手牌。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+6000。之後，抽取卡片使自己的手牌有2張。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-070",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "新人類樂園",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-070.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張舞台卡置為休息狀態：若自己的領航卡是「艾波利歐・伊娃柯夫」時，抽1張卡片，並廢棄1張自己的手牌。之後，廢棄最多3張自己的手牌。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-071",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "麥哲倫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-071.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【我方回合中】【每回合1次】場上的咚!!卡被放回咚!!卡組時，這張領航卡，在這個回合，力量值+1000。",
      "effectType": [
        "我方回合中",
        "每回合1次"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-071",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "麥哲倫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-071_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【我方回合中】【每回合1次】場上的咚!!卡被放回咚!!卡組時，這張領航卡，在這個回合，力量值+1000。",
      "effectType": [
        "我方回合中",
        "每回合1次"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-072",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "Z",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-072.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紫",
        "黑"
      ],
      "type": [
        "FILM",
        "新海軍"
      ],
      "trigger": "",
      "effect": "【攻擊時】咚!!-4(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：KO最多1張對手費用3以下的角色卡。之後，這張領航卡，在這個回合，力量值+1000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-072",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "Z(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-072_p1.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紫",
        "黑"
      ],
      "type": [
        "FILM",
        "新海軍"
      ],
      "trigger": "",
      "effect": "【攻擊時】咚!!-4(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：KO最多1張對手費用3以下的角色卡。之後，這張領航卡，在這個回合，力量值+1000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-073",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "小莎蒂",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-073.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【登場時】使最多1張自己手牌中擁有《獄卒獸》特徵的角色卡登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-073",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "小莎蒂(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-073_p1.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【登場時】使最多1張自己手牌中擁有《獄卒獸》特徵的角色卡登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-074",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "薩魯戴斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-074.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "自己的「藍猩猩」獲得【防禦】。(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-075",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "獅鬼",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-075.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "金獅子海賊團"
      ],
      "trigger": "【觸發器】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-076",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "矢龍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-076.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：KO最多1張對手費用1以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-077",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "索莉媞雅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-077.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-078",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "道佛戈",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-078.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-2(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：使最多1張自己手牌中除了「道佛戈」以外費用3以下擁有《SMILE》特徵的角色卡登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-079",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "道格拉斯・巴雷特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-079.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "海賊萬博會"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-080",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "多彭",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-080.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-081",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "托米諾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-081.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-082",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "班迪・瓦爾德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-082.png?230512",
      "cost": 8,
      "attribute": "打",
      "power": 8000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "瓦爾德海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】咚!!-8(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：這張角色卡，在這個回合，力量值+792000。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-083",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "般若拔",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-083.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「般若拔」以外紫色擁有《推進城》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-084",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "藍猩猩",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-084.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "動物",
        "推進城"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-085",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "麥哲倫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-085.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：對手將1張自身場上的咚!!卡放回咚!!卡組。【對方回合中】這張角色卡遭到KO時，對手將2張自身場上的咚!!卡放回咚!!卡組。",
      "effectType": [
        "登場時",
        "對方回合中"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-085",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "麥哲倫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-085_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：對手將1張自身場上的咚!!卡放回咚!!卡組。【對方回合中】這張角色卡遭到KO時，對手將2張自身場上的咚!!卡放回咚!!卡組。",
      "effectType": [
        "登場時",
        "對方回合中"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-085",
      "rarity": "SP卡",
      "role": "CHARACTER",
      "cardName": "麥哲倫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-085_p2.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【登場時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：對手將1張自身場上的咚‼卡放回咚‼卡組。【對方回合中】這張角色卡遭到KO時，對手將2張自身場上的咚‼卡放回咚‼卡組。",
      "effectType": [
        "登場時",
        "對方回合中"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP02-086",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "米諾無尾熊",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-086.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "推進城",
        "獄卒獸"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】若自己的領航卡擁有《推進城》特徵時，從咚!!卡組追加最多1張休息狀態的咚!!卡。",
      "effectType": [
        "防禦",
        "KO時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-086",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "米諾無尾熊(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-086_p1.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "推進城",
        "獄卒獸"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】若自己的領航卡擁有《推進城》特徵時，從咚!!卡組追加最多1張休息狀態的咚!!卡。",
      "effectType": [
        "防禦",
        "KO時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-087",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "米諾陶爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-087.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "推進城",
        "獄卒獸"
      ],
      "trigger": "",
      "effect": "【雙重攻擊】(這張卡片造成的傷害為2)【KO時】若自己的領航卡擁有《推進城》特徵時，從咚!!卡組追加最多1張休息狀態的咚!!卡。",
      "effectType": [
        "雙重攻擊",
        "KO時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-088",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "SPHINX",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-088.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "動物",
        "推進城"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-089",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "地獄審判",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-089.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "【觸發器】若對手的場上有6張以上咚!!卡時，對手將1張自身場上的咚!!卡放回咚!!卡組。",
      "effect": "【反擊】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：合計最多2張對手的領航卡或角色卡，在這個回合，力量值-3000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-090",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "毒龍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-090.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "【觸發器】若對手的場上有6張以上咚!!卡時，對手將1張自身場上的咚!!卡放回咚!!卡組。",
      "effect": "【主要】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：最多1張對手的角色卡，在這個回合，力量值-3000。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-091",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "毒之路",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-091.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "【觸發器】若對手的場上有6張以上咚!!卡時，對手將1張自身場上的咚!!卡放回咚!!卡組。",
      "effect": "【主要】從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-092",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "推進城",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-092.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "推進城"
      ],
      "trigger": "",
      "effect": "【啟動主要】廢棄1張自己的手牌，可將這張舞台卡置為休息狀態：從自己的卡組上面查看3張卡片，公開最多1張擁有《推進城》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-093",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "斯摩格",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-093.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【啟動主要】【每回合1次】最多1張對手的角色卡，在這個回合，費用-1。之後，若場上有費用0的角色卡時，這張領航卡，在這個回合，力量值+1000。",
      "effectType": [
        "咚!!×1",
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-093",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "斯摩格(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-093_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【啟動主要】【每回合1次】最多1張對手的角色卡，在這個回合，費用-1。之後，若場上有費用0的角色卡時，這張領航卡，在這個回合，力量值+1000。",
      "effectType": [
        "咚!!×1",
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-094",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "伊絲卡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-094.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【每回合1次】經由這張角色卡的對戰而將對手的角色卡KO時，將這張角色卡置為活動狀態。",
      "effectType": [
        "咚!!×1",
        "每回合1次"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-095",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "鬼蜘蛛",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-095.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "若場上有費用0的角色卡時，這張角色卡獲得【消失】。(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)",
      "effectType": [
        "消失"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-096",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "庫山",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-096.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】抽1張卡片。【攻擊時】最多1張對手的角色卡，在這個回合，費用-4。",
      "effectType": [
        "登場時",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-096",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "庫山(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-096_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】抽1張卡片。【攻擊時】最多1張對手的角色卡，在這個回合，費用-4。",
      "effectType": [
        "登場時",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-097",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "柯米爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-097.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-098",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "克比",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-098.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：KO最多1張對手費用3以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-098",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "克比(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-098_p1.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：KO最多1張對手費用3以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "推廣卡包 Vol.3"
    },
    {
      "cardId": "OP02-099",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "盃",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-099.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：KO最多1張對手費用5以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-099",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "盃(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-099_p1.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：KO最多1張對手費用5以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-099",
      "rarity": "SP卡",
      "role": "CHARACTER",
      "cardName": "盃(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-099_p2.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：KO最多1張對手費用5以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP02-100",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "傑克斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-100.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "若場上有自己的「芬布迪」時，這張角色卡在對戰中不會遭到KO。",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-101",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "斯托洛貝里",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-101.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【攻擊時】若場上有費用0的角色卡時，對手在這場對戰中，費用5以下的角色卡無法發動【防禦】。",
      "effectType": [
        "攻擊時",
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-102",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "斯摩格",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-102.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "這張角色卡不會因效果而遭到KO。【攻擊時】若場上有費用0的角色卡時，這張角色卡在這場對戰中，力量值+2000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-103",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "戰國",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-103.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】最多1張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-104",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "戰桃丸",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-104.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-105",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "達絲琪",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-105.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】最多1張對手的角色卡，在這個回合，費用-3。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-105",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "達絲琪(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-105_p1.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】最多1張對手的角色卡，在這個回合，費用-3。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-106",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "阿鶴",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-106.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-107",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "鬥犬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-107.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-108",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・羅希南特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-108.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-108",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・羅希南特(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-108_p1.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-109",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "哈古瓦爾・D・薩烏羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-109.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "巨人族",
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-110",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "希娜",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-110.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【防禦時】選擇最多1張對手費用6以下的角色卡。被選擇的角色卡，在這個回合，無法進行攻擊。",
      "effectType": [
        "防禦",
        "防禦時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-111",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "芬布迪",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-111.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【攻擊時】若場上有自己的「傑克斯」時，在這場對戰中，這張卡片的力量值+3000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-112",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "貝爾梅爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-112.png?230512",
      "cost": 1,
      "attribute": "射",
      "power": 1000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：最多1張對手的角色卡，在這個回合，費用-1。之後， 最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-113",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "貝魯梅柏",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-113.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【攻擊時】最多1張對手的角色卡，在這個回合，費用-2。之後，若場上有費用0的角色卡時，這張角色卡在這場對戰中，力量值+2000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-114",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "波爾薩利諾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-114.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【對方回合中】這張角色卡不會因效果而遭到KO，力量值+1000。【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "對方回合中",
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-114",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "波爾薩利諾(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-114_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【對方回合中】這張角色卡不會因效果而遭到KO，力量值+1000。【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "對方回合中",
        "防禦"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-115",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "蒙其・D・卡普",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-115.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚!!×2】【攻擊時】KO最多1張對手費用0的角色卡。",
      "effectType": [
        "咚!!×2",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-115",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "蒙其・D・卡普(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-115_p1.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚!!×2】【攻擊時】KO最多1張對手費用0的角色卡。",
      "effectType": [
        "咚!!×2",
        "攻擊時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-116",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "火燒山",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-116.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-117",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "冰河時代",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-117.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "【觸發器】KO最多1張對手費用3以下的角色卡。",
      "effect": "【主要】最多1張對手的角色卡，在這個回合，費用-5。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-118",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "八尺瓊勾玉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-118.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "【觸發器】KO最多1張對手費用3以下的舞台卡。",
      "effect": "【反擊】可以廢棄1張自己的手牌：選擇最多1張自己的角色卡。被選擇的角色卡，在這場對戰中，不會遭到KO。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-119",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "流星火山",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-119.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "【觸發器】抽2張卡片，並廢棄1張自己的手牌。",
      "effect": "【主要】KO最多1張對手費用1以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-120",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "美音",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-120.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 8000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-2(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：到下一個我方回合開始前，自己的領航卡和角色卡全數力量值+1000。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-120",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "美音(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-120_p1.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 8000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-2(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：到下一個我方回合開始前，自己的領航卡和角色卡全數力量值+1000。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-121",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "庫山",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-121.png?230512",
      "cost": 10,
      "attribute": "特",
      "power": 10000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "前海軍"
      ],
      "trigger": "",
      "effect": "【我方回合中】對手的角色卡全數費用-5。【登場時】KO最多1張對手費用0的角色卡。",
      "effectType": [
        "我方回合中",
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP02-121",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "庫山(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP02-121_p1.png?230512",
      "cost": 10,
      "attribute": "特",
      "power": 10000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "前海軍"
      ],
      "trigger": "",
      "effect": "【我方回合中】對手的角色卡全數費用-5。【登場時】KO最多1張對手費用0的角色卡。",
      "effectType": [
        "我方回合中",
        "登場時"
      ],
      "cardSet": "頂點決戰【OP-02】"
    },
    {
      "cardId": "OP03-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "波特卡斯・D・艾斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-001.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "這張領航卡攻擊時或遭受攻擊時，可以廢棄自己手牌中任意張數的事件卡或舞台卡。每廢棄1張卡片，這張領航卡在這場對戰中，力量值+1000。",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "波特卡斯・D・艾斯(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-001_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "這張領航卡攻擊時或遭受攻擊時，可以廢棄自己手牌中任意張數的事件卡或舞台卡。每廢棄1張卡片，這張領航卡在這場對戰中，力量值+1000。",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "波特卡斯・D・艾斯(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-001_p2.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "這張領航卡攻擊時或遭受攻擊時，可以廢棄自己手牌中任意張數的事件卡或舞台卡。每廢棄1張卡片，這張領航卡在這場對戰中，力量值+1000。",
      "effectType": [],
      "cardSet": "冠軍錦標賽套裝2023 (艾斯・薩波・魯夫)"
    },
    {
      "cardId": "OP03-002",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "艾狄歐",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-002.png?230512",
      "cost": 4,
      "attribute": "射",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "時光旅詩"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】對手在這場對戰中，力量值2000以下的角色卡無法發動【防禦】。",
      "effectType": [
        "咚‼×1",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-003",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "以藏",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-003.png?230512",
      "cost": 1,
      "attribute": "射",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "和之國",
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「以藏」以外擁有包含『白鬍子海賊團』特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "克利耶爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-004.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "這張角色卡，在登場的回合，無法攻擊領航卡。【咚‼×1】這張角色卡獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "咚‼×1",
        "速攻"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-005",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "薩吉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-005.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】這張角色卡，在這個回合，力量值+2000。之後，這回合結束時，將這張角色卡放置到廢棄區。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "史比托・吉爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-006.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "納米爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-007.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "魚人族",
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-008",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "巴其",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-008.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 3000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "巴其海賊團"
      ],
      "trigger": "",
      "effect": "這張角色卡在和擁有(斬)屬性的卡片對戰中，不會遭到KO。【登場時】從自己的卡組上面查看5張卡片，公開最多1張紅色的事件卡，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "哈爾達",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-009.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】附加最多1張休息狀態的咚‼卡在1張自己的領航卡或角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "佛薩",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-010.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-011",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "布朗明哥",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-011.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】最多1張對手的角色卡，在這個回合，力量值-2000。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-012",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "馬歇爾・D・汀奇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-012.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【攻擊時】可將1張自己力量值4000以上紅色的角色卡放置到廢棄區：抽1張卡片。之後，這張角色卡，在這場對戰中，力量值+1000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "馬可",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-013.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合中】【登場時】KO最多1張對手力量值3000以下的角色卡。【KO時】可以廢棄1張自己手牌中的事件卡：使這張角色卡從廢棄區以休息狀態登場。",
      "effectType": [
        "我方回合中",
        "登場時",
        "KO時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "馬可(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-013_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合中】【登場時】KO最多1張對手力量值3000以下的角色卡。【KO時】可以廢棄1張自己手牌中的事件卡：使這張角色卡從廢棄區以休息狀態登場。",
      "effectType": [
        "我方回合中",
        "登場時",
        "KO時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-014",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "蒙其・D・卡普",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-014.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【攻擊時】使最多1張自己手牌中費用1紅色的角色卡登場。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-015",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "莉姆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-015.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 2000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "時光旅詩"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【對方回合中】這張角色卡遭到KO時，最多1張對手的領航卡或角色卡，在這個回合，力量值-2000。",
      "effectType": [
        "防禦",
        "對方回合中"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-016",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "炎帝",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-016.png?230512",
      "cost": 7,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "【觸發器】KO最多1張對手力量值6000以下的角色卡。",
      "effect": "【主要】若自己的領航卡是「波特卡斯・D・艾斯」時，KO最多1張對手力量值8000以下的角色卡，自己的領航卡，在這個回合，獲得【雙重攻擊】，力量值+3000。(這張卡片造成的傷害為2)",
      "effectType": [
        "主要",
        "雙重攻擊"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-017",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "十字火",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-017.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】/【反擊】若自己的領航卡擁有包含『白鬍子海賊團』特徵時，最多1張對手的角色卡，在這個回合，力量值-4000。",
      "effectType": [
        "主要",
        "反擊"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-018",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "火拳",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-018.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "【觸發器】KO最多1張對手力量值5000以下的角色卡。",
      "effect": "【主要】可以廢棄1張自己手牌中的事件卡：KO最多1張對手力量值5000以下的角色卡和最多1張力量值4000以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-018",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "火拳(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-018_p1.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "【觸發器】KO最多1張對手力量值5000以下的角色卡。",
      "effect": "【主要】可以廢棄1張自己手牌中的事件卡：KO最多1張對手力量值5000以下的角色卡和最多1張力量值4000以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-019",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "火達磨",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-019.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "【觸發器】最多1張對手的領航卡或角色卡，在這個回合，力量值-10000。",
      "effect": "【主要】自己的領航卡，在這個回合，力量值+4000。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-020",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "火力船",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-020.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】②(可將費用區的咚‼卡依指定的數量置為休息狀態)，可將這張舞台卡置為休息狀態：若自己的領航卡是「波特卡斯・D・艾斯」時，從自己的卡組上面查看5張卡片，公開最多1張事件卡，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-021",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "克洛",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-021.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "黑貓海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】③(可將費用區的咚‼卡依指定的數量置為休息狀態)，可將2張自己擁有《東方藍》特徵的角色卡置為休息狀態：將這張領航卡置為活動狀態，並將最多1張對手費用5以下的角色卡置為休息狀態。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-021",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "克洛(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-021_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "黑貓海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】③(可將費用區的咚‼卡依指定的數量置為休息狀態)，可將2張自己擁有《東方藍》特徵的角色卡置為休息狀態：將這張領航卡置為活動狀態，並將最多1張對手費用5以下的角色卡置為休息狀態。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-022",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "惡龍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-022.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠",
        "黃"
      ],
      "type": [
        "魚人族",
        "東方藍",
        "惡龍海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×2】【攻擊時】①(可將費用區的咚‼卡依指定的數量置為休息狀態)：使最多1張自己手牌中費用4以下持有【觸發器】的角色卡登場。",
      "effectType": [
        "咚‼×2",
        "攻擊時",
        "觸發器"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-022",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "惡龍(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-022_p1.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠",
        "黃"
      ],
      "type": [
        "魚人族",
        "東方藍",
        "惡龍海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×2】【攻擊時】①(可將費用區的咚‼卡依指定的數量置為休息狀態)：使最多1張自己手牌中費用4以下持有【觸發器】的角色卡登場。",
      "effectType": [
        "咚‼×2",
        "攻擊時",
        "觸發器"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-023",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "亞爾麗塔",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-023.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "亞爾麗塔海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-024",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "銀仔",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-024.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "克利克海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有《東方藍》特徵時，將最多2張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-024",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "銀仔(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-024_p1.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "克利克海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有《東方藍》特徵時，將最多2張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-025",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "克利克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-025.png?230512",
      "cost": 6,
      "attribute": "射",
      "power": 7000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "克利克海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：KO最多2張對手休息狀態費用4以下的角色卡。【咚‼×1】這張角色卡獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "登場時",
        "咚‼×1",
        "雙重攻擊"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-025",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "克利克(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-025_p1.png?230512",
      "cost": 6,
      "attribute": "射",
      "power": 7000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "克利克海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：KO最多2張對手休息狀態費用4以下的角色卡。【咚‼×1】這張角色卡獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "登場時",
        "咚‼×1",
        "雙重攻擊"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-026",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "克羅歐比",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-026.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "魚人族",
        "東方藍",
        "惡龍海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】若自己的領航卡擁有《東方藍》特徵時，將最多1張對手的角色卡置為休息狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-027",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "山姆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-027.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "黑貓海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有《東方藍》特徵時，將最多1張對手費用2以下的角色卡置為休息狀態，且場上沒有自己的「布奇」時，使最多1張自己手牌中的「布奇」登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-028",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "傑克斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-028.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "黑貓海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】選擇下列其中一項。・將自己擁有《東方藍》特徵的領航卡或最多1張費用6以下的角色卡，置為活動狀態。・將這張角色卡和最多1張對手的角色卡置為休息狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-029",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "啾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-029.png?230512",
      "cost": 4,
      "attribute": "射",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "魚人族",
        "東方藍",
        "惡龍海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】KO最多1張對手休息狀態費用4以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-030",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "娜美",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-030.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 2000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "惡龍海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「娜美」以外擁有《東方藍》特徵綠色的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-031",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "帕魯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-031.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 2000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "克利克海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-032",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "巴其",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-032.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "巴其海賊團"
      ],
      "trigger": "",
      "effect": "這張角色卡在和擁有(斬)屬性的卡片對戰中，不會遭到KO。",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-033",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "小八",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-033.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 4000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "魚人族",
        "東方藍",
        "惡龍海賊團"
      ],
      "trigger": "【觸發器】若自己的領航卡擁有《東方藍》特徵時，使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-034",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "布奇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-034.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "黑貓海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】KO最多1張對手休息狀態費用2以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-035",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "海牛呣",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-035.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "動物",
        "東方藍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-036",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "杓死",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-036.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "黑貓海賊團"
      ],
      "trigger": "【觸發器】KO最多1張對手休息狀態費用3以下的角色卡。",
      "effect": "【主要】可將1張自己擁有《東方藍》特徵的角色卡置為休息狀態：將最多1張自己的「克洛」，置為活動狀態。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-037",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "鋼牙功",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-037.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "魚人族",
        "東方藍",
        "惡龍海賊團"
      ],
      "trigger": "【觸發器】使最多1張自己手牌中費用4以下持有【觸發器】的角色卡登場。",
      "effect": "【主要】可將1張自己擁有《東方藍》特徵的角色卡置為休息狀態：KO最多1張對手休息狀態費用3以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-038",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "劇毒毒氣彈「M‧H‧5」",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-038.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "克利克海賊團"
      ],
      "trigger": "【觸發器】將最多1張對手費用5以下的角色卡置為休息狀態。",
      "effect": "【主要】將最多2張對手費用2以下的角色卡置為休息狀態。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-039",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "一、二、傑克斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-039.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "黑貓海賊團"
      ],
      "trigger": "【觸發器】將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effect": "【主要】將最多1張對手費用1以下的角色卡置為休息狀態。之後，最多1張自己的角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-040",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "娜美",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-040.png?230512",
      "cost": 5,
      "attribute": "知",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "在規則上，若自己的卡組為0張卡片時，自己將獲勝而非輸掉遊戲。【咚‼×1】因為這張領航卡的攻擊，而造成對手生命值傷害時，可將1張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "咚‼×1"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-040",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "娜美(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-040_p1.png?230512",
      "cost": 5,
      "attribute": "知",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "在規則上，若自己的卡組為0張卡片時，自己將獲勝而非輸掉遊戲。【咚‼×1】因為這張領航卡的攻擊，而造成對手生命值傷害時，可將1張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "咚‼×1"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-041",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "騙人布",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-041.png?230512",
      "cost": 4,
      "attribute": "射",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【咚‼×1】因為這張角色卡的攻擊，而造成對手生命值傷害時，可將7張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "速攻",
        "咚‼×1"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-041",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "騙人布(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-041_p1.png?230512",
      "cost": 4,
      "attribute": "射",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【咚‼×1】因為這張角色卡的攻擊，而造成對手生命值傷害時，可將7張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "速攻",
        "咚‼×1"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-042",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "騙人布海賊團",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-042.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張自己廢棄區中藍色的「騙人布」，加入手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-043",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "卡蒙",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-043.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "造成對手生命值傷害時，可將3張自己卡組上面的卡片放置到廢棄區。若有執行此動作時，將這張角色卡放置到廢棄區。",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-044",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "可雅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-044.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 2000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【登場時】抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-045",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "卡爾涅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-045.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【對方回合中】若自己的卡組在20張以下時，這張角色卡的力量值+3000。",
      "effectType": [
        "防禦",
        "對方回合中"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-046",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "源造",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-046.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-047",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "哲普",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-047.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】因為這張角色卡的攻擊，而造成對手生命值傷害時，可將7張自己卡組上面的卡片放置到廢棄區。【登場時】將最多1張費用3以下的角色卡放回持有者的手牌，並可將2張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "咚‼×1",
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-047",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "哲普(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-047_p1.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】因為這張角色卡的攻擊，而造成對手生命值傷害時，可將7張自己卡組上面的卡片放置到廢棄區。【登場時】將最多1張費用3以下的角色卡放回持有者的手牌，並可將2張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "咚‼×1",
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-048",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "虹子",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-048.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡是「娜美」時，將最多1張對手費用5以下的角色卡放回持有者的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-049",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "派迪",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-049.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的卡組在20張以下時，將最多1張費用3以下的角色卡放回持有者的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-050",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "布多爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-050.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】可將1張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "防禦",
        "KO時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-051",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "貝爾梅爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-051.png?230512",
      "cost": 4,
      "attribute": "射",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍",
        "前海軍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】因為這張角色卡的攻擊，而造成對手生命值傷害時，可將7張自己卡組上面的卡片放置到廢棄區。【KO時】可將3張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "咚‼×1",
        "KO時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-052",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "梅利",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-052.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-053",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "約瑟夫&強尼",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-053.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 3000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】若自己的卡組在20張以下時，這張角色卡的力量值+2000。",
      "effectType": [
        "咚‼×1"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-054",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "騙人布橡皮筋!!!",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-054.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍",
        "草帽一行人"
      ],
      "trigger": "【觸發器】抽1張卡片，可將1張自己卡組上面的卡片放置到廢棄區。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。之後，可將1張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-055",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "橡膠大槌",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-055.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍",
        "草帽一行人"
      ],
      "trigger": "【觸發器】將最多1張費用4以下的角色卡放回持有者的手牌。",
      "effect": "【反擊】可以廢棄1張自己的手牌：最多1張自己的領航卡，在這場對戰中，力量值+4000。之後，可將2張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-056",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "香吉士海鮮炒飯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-056.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】抽2張卡片。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-057",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "三・千・世・界",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-057.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍",
        "草帽一行人"
      ],
      "trigger": "【觸發器】將最多1張費用3以下的角色卡放到持有者的卡組下面。",
      "effect": "【主要】將最多1張費用5以下的角色卡放到持有者的卡組下面。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-058",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "艾斯巴古",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-058.png?230512",
      "cost": 5,
      "attribute": "知",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "這張領航卡無法攻擊。【啟動主要】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)，可將這張領航卡置為休息狀態：使最多1張自己手牌中費用5以下擁有《GC》特徵的角色卡登場。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-058",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "艾斯巴古(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-058_p1.png?230512",
      "cost": 5,
      "attribute": "知",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "這張領航卡無法攻擊。【啟動主要】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)，可將這張領航卡置為休息狀態：使最多1張自己手牌中費用5以下擁有《GC》特徵的角色卡登場。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-059",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "卡古",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-059.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "【攻擊時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：這張角色卡，在這場對戰中，獲得【消失】。(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)",
      "effectType": [
        "攻擊時",
        "消失"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-060",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "卡莉法",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-060.png?230512",
      "cost": 4,
      "attribute": "知",
      "power": 4000,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "【攻擊時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：抽2張卡片，並廢棄1張自己的手牌。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-061",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "基威&摩茲",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-061.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "佛朗基家族"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-062",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "可可羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-062.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "人魚族",
        "W7"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「可可羅」以外擁有《W7》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-063",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "贊拜",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-063.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 2000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "佛朗基家族"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有《W7》特徵時，抽1張卡片。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-064",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "戴魯斯通",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-064.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "【KO時】若自己的領航卡擁有《GC》特徵時，從咚‼卡組追加最多1張休息狀態的咚‼卡。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-065",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "蒂姆妮&公貝",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-065.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "動物",
        "W7"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-066",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "包利",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-066.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "【登場時】➁(可將費用區的咚‼卡依指定的數量置為休息狀態)：從咚‼卡組追加最多1張活動狀態的咚‼卡。之後，若自己的場上有8張以上咚‼卡時，KO最多1張對手費用4以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-066",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "包利(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-066_p1.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "【登場時】➁(可將費用區的咚‼卡依指定的數量置為休息狀態)：從咚‼卡組追加最多1張活動狀態的咚‼卡。之後，若自己的場上有8張以上咚‼卡時，KO最多1張對手費用4以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-067",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "畢普利・露露",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-067.png?230512",
      "cost": 5,
      "attribute": "射",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】若自己的領航卡擁有《GC》特徵時，從咚‼卡組追加最多1張休息狀態的咚‼卡。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-068",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "米諾斑馬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-068.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "推進城",
        "獄卒獸"
      ],
      "trigger": "",
      "effect": "【消失】(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)【KO時】若自己的領航卡擁有《推進城》特徵時，從咚‼卡組追加最多1張休息狀態的咚‼卡。",
      "effectType": [
        "消失",
        "KO時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-069",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "米諾犀牛",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-069.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "推進城",
        "獄卒獸"
      ],
      "trigger": "",
      "effect": "【KO時】若自己的領航卡擁有《推進城》特徵時，抽2張卡片，並廢棄1張手牌。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-070",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-070.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)，可以廢棄1張自己手牌中費用5的角色卡：這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-071",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "羅布・路基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-071.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "【攻擊時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：將最多1張對手費用5以下的角色卡置為休息狀態。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-072",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "橡膠JET槍亂打",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-072.png?230512",
      "cost": null,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "草帽一行人"
      ],
      "trigger": "【觸發器】從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effect": "【反擊】可以廢棄1張自己的手牌：最多1張自己的領航卡或角色卡，在這場對戰中，力量值+3000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-073",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "船底解體斬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-073.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "佛朗基家族"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有《W7》特徵時，KO最多1張對手費用2以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-074",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "陀螺結",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-074.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：將最多1張對手費用4以下的角色卡放到持有者的卡組下面。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-075",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "卡雷拉公司",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-075.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張舞台卡置為休息狀態：若自己的領航卡是「艾斯巴古」時，從咚‼卡組追加最多1張休息狀態的咚‼卡。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-076",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "羅布・路基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-076.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【我方回合中】【每回合1次】可以廢棄2張自己的手牌：對手的角色卡遭到KO時，將這張領航卡置為活動狀態。",
      "effectType": [
        "我方回合中",
        "每回合1次"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-076",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "羅布・路基(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-076_p1.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【我方回合中】【每回合1次】可以廢棄2張自己的手牌：對手的角色卡遭到KO時，將這張領航卡置為活動狀態。",
      "effectType": [
        "我方回合中",
        "每回合1次"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-077",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "夏洛特・莉莉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-077.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黑",
        "黃"
      ],
      "type": [
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×2】【攻擊時】②(可將費用區的咚‼卡依指定的數量置為休息狀態)，可以廢棄1張自己的手牌：若自己的生命值卡在1張以下時，將最多1張卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "咚‼×2",
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-077",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "夏洛特・莉莉(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-077_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黑",
        "黃"
      ],
      "type": [
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×2】【攻擊時】②(可將費用區的咚‼卡依指定的數量置為休息狀態)，可以廢棄1張自己的手牌：若自己的生命值卡在1張以下時，將最多1張卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "咚‼×2",
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-078",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "一笑",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-078.png?230512",
      "cost": 8,
      "attribute": "斬",
      "power": 9000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【我方回合中】對手的角色卡全數費用-3。【登場時】若對手的手牌有6張以上時，廢棄2張對手的手牌。",
      "effectType": [
        "咚‼×1",
        "我方回合中",
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-078",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "一笑(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-078_p1.png?230512",
      "cost": 8,
      "attribute": "斬",
      "power": 9000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【我方回合中】對手的角色卡全數費用-3。【登場時】若對手的手牌有6張以上時，廢棄2張對手的手牌。",
      "effectType": [
        "咚‼×1",
        "我方回合中",
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-079",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "威爾可",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-079.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】這張角色卡在對戰中不會遭到KO。",
      "effectType": [
        "咚‼×1"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-080",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "卡古",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-080.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【登場時】可將2張自己廢棄區中擁有包含『CP』特徵的卡片依任意順序放到卡組下面：KO最多1張對手費用3以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-080",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "卡古(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-080_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【登場時】可將2張自己廢棄區中擁有包含『CP』特徵的卡片依任意順序放到卡組下面：KO最多1張對手費用3以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-081",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "卡莉法",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-081.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 4000,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【登場時】抽2張卡片，並廢棄2張自己的手牌。之後，最多1張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-081",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "卡莉法(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-081_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 4000,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【登場時】抽2張卡片，並廢棄2張自己的手牌。之後，最多1張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-082",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "隈取",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-082.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-083",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "柯基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-083.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "世界政府"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，將最多2張卡片放置到廢棄區。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-084",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "傑利",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-084.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "CP6"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-085",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "賈布拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-085.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 7000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-086",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "斯帕達姆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-086.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有包含『CP』特徵時，從卡組上面查看3張卡片，公開最多1張除了「斯帕達姆」以外擁有包含『CP』特徵的卡片，並加入手牌。之後，將其餘卡片放到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-086",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "斯帕達姆(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-086_p1.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有包含『CP』特徵時，從卡組上面查看3張卡片，公開最多1張除了「斯帕達姆」以外擁有包含『CP』特徵的卡片，並加入手牌。之後，將其餘卡片放到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-087",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "奈洛",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-087.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-088",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "梟",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-088.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "這張角色卡不會因效果而遭到KO。【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-089",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "布蘭紐",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-089.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看3張卡片，公開最多1張除了「布蘭紐」以外擁有《海軍》特徵的卡片，並加入手牌。之後，將其餘卡片放到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-089",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "布蘭紐(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-089_p1.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看3張卡片，公開最多1張除了「布蘭紐」以外擁有《海軍》特徵的卡片，並加入手牌。之後，將其餘卡片放到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "常規賽卡包Vol.4"
    },
    {
      "cardId": "OP03-090",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "布魯諾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-090.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【咚‼×1】這張角色卡獲得【防禦】。(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】使最多1張自己廢棄區中費用4以下擁有包含『CP』特徵的角色卡，以休息狀態登場。",
      "effectType": [
        "咚‼×1",
        "防禦",
        "KO時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-091",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "貝魯梅柏",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-091.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張對手原本沒有效果的角色卡，在這個回合，費用降為0。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-092",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "羅布・路基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-092.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【登場時】可將2張自己廢棄區中擁有包含『CP』特徵的卡片依任意順序放到卡組下面：這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-092",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "羅布・路基(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-092_p1.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "",
      "effect": "【登場時】可將2張自己廢棄區中擁有包含『CP』特徵的卡片依任意順序放到卡組下面：這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-093",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "瓦傑",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-093.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 4000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "CP7"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：若自己的領航卡擁有包含『CP』特徵時，KO最多1張對手費用1以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-094",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "空氣門",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-094.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "【觸發器】使最多1張自己廢棄區中費用3以下黑色的角色卡登場。",
      "effect": "【主要】若自己的領航卡擁有包含『CP』特徵時，從自己的卡組上面查看5張卡片，使最多1張費用5以下擁有包含『CP』特徵的角色卡登場。之後，將其餘卡片放到廢棄區。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-095",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "肥皂羊",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-095.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "【觸發器】對手廢棄1張自身的手牌。",
      "effect": "【主要】最多2張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-096",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "嵐腳　周斷",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-096.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "【觸發器】抽2張卡片。",
      "effect": "【主要】KO最多1張對手費用0的角色卡或對手費用3以下的舞台卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-097",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "六王槍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-097.png?230512",
      "cost": null,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "CP9"
      ],
      "trigger": "【觸發器】抽1張卡片。之後，KO最多1張對手費用1以下的角色卡。",
      "effect": "【反擊】可以廢棄1張自己的手牌：最多1張自己的領航卡或角色卡，在這場對戰中，力量值+3000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-098",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "艾尼愛斯大廳",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-098.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "世界政府"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【啟動主要】可將這張舞台卡置為休息狀態：若自己的領航卡擁有包含『CP』特徵時，最多1張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-099",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "夏洛特・卡塔克利",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-099.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】查看最多1張自己或對手生命值區上面的卡片，並放置在生命值區的上面或下面。之後，這張領航卡，在這場對戰中，力量值+1000。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-099",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "夏洛特・卡塔克利(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-099_p1.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】查看最多1張自己或對手生命值區上面的卡片，並放置在生命值區的上面或下面。之後，這張領航卡，在這場對戰中，力量值+1000。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-100",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "古樹王",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-100.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團",
        "歡樂友人"
      ],
      "trigger": "【觸發器】可將1張自己生命值區上面或下面的卡片放置到廢棄區：使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-101",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "海咪",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-101.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "人魚族"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-102",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "香吉士",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-102.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黃"
      ],
      "type": [
        "賓什莫克家"
      ],
      "trigger": "",
      "effect": "【咚‼×2】【攻擊時】可將1張自己生命值區上面或下面的卡片加入手牌：將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "咚‼×2",
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-102",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "香吉士(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-102_p1.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黃"
      ],
      "type": [
        "賓什莫克家"
      ],
      "trigger": "",
      "effect": "【咚‼×2】【攻擊時】可將1張自己生命值區上面或下面的卡片加入手牌：將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "咚‼×2",
        "攻擊時"
      ],
      "cardSet": "常規賽卡包Vol.4"
    },
    {
      "cardId": "OP03-103",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "殺手波賓",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-103.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-104",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "雪莉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-104.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "人魚族"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】查看最多1張自己或對手生命值區上面的卡片，並放置在生命值區的上面或下面。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-105",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "夏洛特・歐本",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-105.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】可以廢棄1張自己手牌中持有【觸發器】的卡片：這張角色卡，在這場對戰中，力量值+3000。",
      "effectType": [
        "咚‼×1",
        "攻擊時",
        "觸發器"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-106",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・歐佩拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-106.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-107",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・賈萊特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-107.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-108",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "夏洛特・慨烈卡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-108.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】可以廢棄1張自己的手牌：使這張卡片登場。",
      "effect": "【咚‼×1】若自己的生命值卡張數比對手少時，這張角色卡獲得【雙重攻擊】，力量值+1000。(這張卡片造成的傷害為2)",
      "effectType": [
        "咚‼×1",
        "雙重攻擊"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-108",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "夏洛特・慨烈卡(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-108_p1.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】可以廢棄1張自己的手牌：使這張卡片登場。",
      "effect": "【咚‼×1】若自己的生命值卡張數比對手少時，這張角色卡獲得【ダブルアタック】，力量值+1000。(這張卡片造成的傷害為2)",
      "effectType": [
        "咚‼×1",
        "ダブルアタック"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-109",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・雪紡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-109.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】可將1張自己生命值區上面或下面的卡片放置到廢棄區：將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-110",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "夏洛特・斯姆吉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-110.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】可以廢棄1張自己的手牌：使這張卡片登場。",
      "effect": "【攻擊時】可將1張自己生命值區上面或下面的卡片加入手牌：這張角色卡，在這場對戰中，力量值+2000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-111",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・普萊麗芮",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-111.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "人魚族",
        "太陽海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-112",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "夏洛特・普琳",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-112.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看4張卡片，公開最多1張除了「夏洛特・普琳」以外擁有《BIG MOM海賊團》特徵的卡片或「香吉士」，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-112",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "夏洛特・普琳(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-112_p1.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看4張卡片，公開最多1張除了「夏洛特・普琳」以外擁有《BIG MOM海賊團》特徵的卡片或「香吉士」，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-113",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "夏洛特・裴洛斯培勒",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-113.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】可以廢棄1張自己的手牌：使這張卡片登場。",
      "effect": "【KO時】從自己的卡組上面查看3張卡片，公開最多1張擁有《BIG MOM海賊團》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-113",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "夏洛特・裴洛斯培勒(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-113_p1.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】可以廢棄1張自己的手牌：使這張卡片登場。",
      "effect": "【KO時】從自己的卡組上面查看3張卡片，公開最多1張擁有《BIG MOM海賊團》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-114",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "夏洛特・莉莉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-114.png?230512",
      "cost": 10,
      "attribute": "特",
      "power": 12000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有《BIG MOM海賊團》特徵時，將最多1張自己卡組上面的卡片加入生命值區上面。之後，將最多1張對手生命值區上面的卡片放置到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-114",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "夏洛特・莉莉(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-114_p1.png?230512",
      "cost": 10,
      "attribute": "特",
      "power": 12000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有《BIG MOM海賊團》特徵時，將最多1張自己卡組上面的卡片加入生命值區上面。之後，將最多1張對手生命值區上面的卡片放置到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-115",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "蘇特羅慎",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-115.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 1000,
      "counter": 2000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己手牌中持有【觸發器】的卡片：KO最多1張對手費用1以下的角色卡。",
      "effectType": [
        "登場時",
        "觸發器"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-116",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "白星公主",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-116.png?230512",
      "cost": 5,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "人魚族"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】抽3張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-117",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "拿破崙",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-117.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團",
        "歡樂友人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：到下一個我方回合開始前，最多1張自己的「夏洛特・莉莉」，力量值+1000。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-118",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "威國",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-118.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】可以廢棄2張自己的手牌：將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+5000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-119",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "斬・切・餅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-119.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】使最多1張自己手牌中費用4以下持有【觸發器】的角色卡登場。",
      "effect": "【主要】若自己的生命值比對手少時，KO最多1張對手費用4以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-120",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "熱海溫泉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-120.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】若對手的生命值卡在4張以上時，將最多1張對手生命值區上面的卡片放置到廢棄區。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-121",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "雷霆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-121.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】KO最多1張對手費用5以下的角色卡。",
      "effect": "【主要】可將1張自己生命值區上面的卡片放置到廢棄區：KO最多1張對手費用5以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-122",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "狙擊王",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-122.png?230512",
      "cost": 7,
      "attribute": "射",
      "power": 6000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "狙擊島"
      ],
      "trigger": "",
      "effect": "在規則上，這張卡片的卡片名稱也可視為「騙人布」。【登場時】將最多1張費用6以下的角色卡放回持有者的手牌。之後，抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-122",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "狙擊王(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-122_p1.png?230512",
      "cost": 7,
      "attribute": "射",
      "power": 6000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "狙擊島"
      ],
      "trigger": "",
      "effect": "在規則上，這張卡片的卡片名稱也可視為「騙人布」。【登場時】將最多1張費用6以下的角色卡放回持有者的手牌。之後，抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-122",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "狙擊王(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-122_p2.png?230512",
      "cost": 7,
      "attribute": "射",
      "power": 6000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "狙擊島"
      ],
      "trigger": "",
      "effect": "在規則上，這張卡片的卡片名稱也可視為「騙人布」。【登場時】將最多1張費用6以下的角色卡放回持有者的手牌。之後，抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-123",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "夏洛特・卡塔克利",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-123.png?230512",
      "cost": 8,
      "attribute": "打",
      "power": 8000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張費用8以下的角色卡以正面朝上加入持有者的生命值區上面或下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP03-123",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "夏洛特・卡塔克利(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP03-123_p1.png?230512",
      "cost": 8,
      "attribute": "打",
      "power": 8000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張費用8以下的角色卡以正面朝上加入持有者的生命值區上面或下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "OP04-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "納菲魯塔利・薇薇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-001.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅",
        "藍"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "這張領航卡無法攻擊。【啟動主要】【每回合1次】➁(可將費用區的咚‼卡依指定的數量置為休息狀態)：抽1張卡片，最多1張自己的角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "啟動主要",
        "每回合1次",
        "速攻"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "納菲魯塔利・薇薇(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-001_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅藍"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "這張領航卡無法攻擊。【啟動主要】【每回合1次】➁(可將費用區的咚‼卡依指定的數量置為休息狀態)：抽1張卡片，最多1張自己的角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "啟動主要",
        "每回合1次",
        "速攻"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-002",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "尹卡蘭姆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-002.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態，1張自己活動狀態的領航卡，在這個回合，力量值-5000：從自己的卡組上面查看5張卡片，公開最多1張擁有《阿拉巴斯坦王國》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-003",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "騙人布",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-003.png?230512",
      "cost": 4,
      "attribute": "知",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【KO時】KO最多1張對手原本力量值5000以下的角色卡。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "飛毛腿",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-004.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：附加最多各1張休息狀態的咚‼卡在全數自己擁有《阿拉巴斯坦王國》特徵的角色卡。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "功夫海牛",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-005.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 1000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "若場上有除了這張角色卡以外自己的「功夫海牛」時，這張角色卡獲得【防禦】。(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-006",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "寇沙",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-006.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "【攻擊時】1張自己活動狀態的領航卡，在這個回合，可以力量值-5000：這張角色卡，到下一個我方回合開始前，力量值+2000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "香吉士",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-007.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-008",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "加卡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-008.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】若自己的領航卡是「納菲魯塔利・薇薇」時，最多1張對手的角色卡，在這個回合，力量值-3000。之後，KO最多1張對手力量值0以下的角色卡。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-009",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "超級飛毛腿鴨部隊",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-009.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "【攻擊時】1張自己活動狀態的領航卡，在這個回合，可以力量值-5000：這個回合結束時，將這張角色卡放回持有者的手牌。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "多尼多尼・喬巴",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-010.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "阿拉巴斯坦王國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】使最多1張自己手牌中力量值3000以下擁有《動物》特徵的角色卡登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "娜美",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-011.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【攻擊時】公開1張自己卡組上面的卡片，若公開的卡片是力量值6000以上的角色卡時，這張角色卡，在這個回合，力量值+3000。之後，將公開的卡片放到卡組下面。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "納菲魯塔利・寇布拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-012.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "【我方回合中】除了這張角色卡以外自己擁有《阿拉巴斯坦王國》特徵的角色卡全數力量值+1000。",
      "effectType": [
        "我方回合中"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "貝爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-013.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】KO最多1張對手力量值4000以下的角色卡。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "貝爾(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-013_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】KO最多1張對手力量值4000以下的角色卡。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-014",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-014.png?230512",
      "cost": 8,
      "attribute": "打",
      "power": 9000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【消失】(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)",
      "effectType": [
        "消失"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-015",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "羅羅亞・索隆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-015.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張對手的角色卡，在這個回合，力量值-2000。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-016",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "違反禮儀之踢",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-016.png?230512",
      "cost": null,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國",
        "草帽一行人"
      ],
      "trigger": "【觸發器】最多1張對手的領航卡或角色卡，在這個回合，力量值-3000。",
      "effect": "【反擊】可以廢棄1張自己的手牌：最多1張自己的領航卡或角色卡，在這場對戰中，力量值+3000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-017",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "幸福的一擊",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-017.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【反擊】最多1張對手的領航卡或角色卡，在這個回合，力量值-2000。之後，若自己的領航卡為活動狀態時，最多1張對手的領航卡或角色卡，在這個回合，力量值-1000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-018",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "魅惑的頭昏眼花舞",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-018.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】若自己的領航卡擁有《阿拉巴斯坦王國》特徵時，最多2張對手的角色卡，在這個回合，力量值-2000。",
      "effectType": [
        "主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-019",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "唐吉訶德・多佛朗明哥",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-019.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "綠",
        "紫"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】將最多2張自己的咚‼卡，置為活動狀態。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-019",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "唐吉訶德・多佛朗明哥(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-019_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "綠紫"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】將最多2張自己的咚‼卡，置為活動狀態。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-020",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "一笑",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-020.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "綠",
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【我方回合中】對手的角色卡全數費用-1。【我方回合結束時】➀(可將費用區的咚‼卡依指定的數量置為休息狀態)：將最多1張自己費用5以下的角色卡，置為活動狀態。",
      "effectType": [
        "咚‼×1",
        "我方回合中",
        "我方回合結束時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-020",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "一笑(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-020_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "綠黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【我方回合中】對手的角色卡全數費用-1。【我方回合結束時】➀(可將費用區的咚‼卡依指定的數量置為休息狀態)：將最多1張自己費用5以下的角色卡，置為活動狀態。",
      "effectType": [
        "咚‼×1",
        "我方回合中",
        "我方回合結束時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-021",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "碧歐菈",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-021.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 3000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【對方攻擊時】➁(可將費用區的咚‼卡依指定的數量置為休息狀態)：將最多1張對手的咚‼卡置為休息狀態。",
      "effectType": [
        "對方攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-022",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "艾利克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-022.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：將最多1張對手費用1以下的角色卡置為休息狀態。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-023",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "克洛",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-023.png?230512",
      "cost": 6,
      "attribute": "斬",
      "power": 8000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "黑貓海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-024",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "砂糖",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-024.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": null,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【對方回合中】【每回合1次】對手使角色卡登場時，若自己的領航卡擁有《唐吉訶德海賊團》特徵時，將最多1張對手的角色卡置為休息狀態。之後，將這張角色卡置為休息狀態。【登場時】將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "對方回合中",
        "每回合1次",
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-024",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "砂糖(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-024_p1.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": null,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【對方回合中】【每回合1次】對手使角色卡登場時，若自己的領航卡擁有《唐吉訶德海賊團》特徵時，將最多1張對手的角色卡置為休息狀態。之後，將這張角色卡置為休息狀態。【登場時】將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "對方回合中",
        "每回合1次",
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-025",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "喬菈",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-025.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【對方攻擊時】➁(可將費用區的咚‼卡依指定的數量置為休息狀態)：將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "對方攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-026",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "粉紅先生",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-026.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【攻擊時】➀(可將費用區的咚‼卡依指定的數量置為休息狀態)：若自己的領航卡擁有《唐吉訶德海賊團》特徵時，將最多1張對手費用4以下的角色卡置為休息狀態。之後，這個回合結束時，將最多1張自己的咚‼卡置為活動狀態。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-027",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "達迪・馬斯達森",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-027.png?230512",
      "cost": 4,
      "attribute": "射",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "東方藍",
        "前海軍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【我方回合結束時】將這張角色卡置為活動狀態。",
      "effectType": [
        "咚‼×1",
        "我方回合結束時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-028",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "帝雅曼鐵",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-028.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚‼×1】【我方回合結束時】若自己活動狀態的咚‼卡有2張以上時，將這張角色卡置為活動狀態。",
      "effectType": [
        "防禦",
        "咚‼×1",
        "我方回合結束時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-028",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "帝雅曼鐵(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-028_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚‼×1】【我方回合結束時】若自己活動狀態的咚‼卡有2張以上時，將這張角色卡置為活動狀態。",
      "effectType": [
        "防禦",
        "咚‼×1",
        "我方回合結束時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-029",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "德林傑",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-029.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】將最多1張自己的咚‼卡置為活動狀態。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-030",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "托雷波爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-030.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】KO最多1張對手休息狀態費用5以下的角色卡。【對方攻擊時】➁(可將費用區的咚‼卡依指定的數量置為休息狀態)：將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "登場時",
        "對方攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-030",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "托雷波爾(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-030_p1.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】KO最多1張對手休息狀態費用5以下的角色卡。【對方攻擊時】➁(可將費用區的咚‼卡依指定的數量置為休息狀態)：將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "登場時",
        "對方攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-031",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・多佛朗明哥",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-031.png?230512",
      "cost": 10,
      "attribute": "特",
      "power": 10000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】合計最多3張對手休息狀態的領航卡和角色卡，在下一個對手的重整階段無法為活動狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-031",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・多佛朗明哥(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-031_p1.png?230512",
      "cost": 10,
      "attribute": "特",
      "power": 10000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】合計最多3張對手休息狀態的領航卡和角色卡，在下一個對手的重整階段無法為活動狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-032",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "BABY5",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-032.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】可將這張角色卡放置到廢棄區：將最多2張自己的咚‼卡置為活動狀態。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-033",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "馬赫拜茲",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-033.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有《唐吉訶德海賊團》特徵時，將最多1張對手費用5以下的角色卡置為休息狀態。之後，這個回合結束時，將最多1張自己的咚‼卡置為活動狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-034",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "拉歐G",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-034.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】若自己活動狀態的咚‼卡有3張以上時，KO最多1張對手休息狀態費用3以下的角色卡。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-035",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "蜘蛛築巢",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-035.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "【觸發器】最多1張自己的領航卡，在這個回合，力量值+2000。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，將最多1張自己的角色卡置為活動狀態。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-036",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "唐吉訶德家族",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-036.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "唐吉訶德海賊團"
      ],
      "trigger": "【觸發器】發動這張卡片的【反擊】效果。",
      "effect": "【反擊】從自己的卡組上面查看5張卡片，公開最多1張擁有《唐吉訶德海賊團》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-037",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "羽擊線",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-037.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "【觸發器】KO最多1張對手休息狀態費用4以下的角色卡。",
      "effect": "【反擊】若自己的領航卡擁有《唐吉訶德海賊團》特徵時，最多1張自己的領航卡或角色卡，在這個回合，力量值+2000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-038",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "弱者連死法都不能夠選擇!!!",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-038.png?230512",
      "cost": 5,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "【觸發器】將最多5張自己的咚‼卡，置為活動狀態。",
      "effect": "【主要】/【反擊】將最多1張對手的領航卡或角色卡置為休息狀態。之後，KO最多1張對手休息狀態費用6以下的角色卡。",
      "effectType": [
        "主要",
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-039",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "蕾貝卡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-039.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "藍",
        "黑"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "這張領航卡無法攻擊。【啟動主要】【每回合1次】➀(可將費用區的咚‼卡依指定的數量置為休息狀態)：若自己的手牌在6張以下時，從自己的卡組上面查看2張卡片，公開最多1張擁有《多雷斯羅薩》特徵的卡片，並加入手牌。之後，將其餘卡片放到廢棄區。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-039",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "蕾貝卡(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-039_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "藍黑"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "這張領航卡無法攻擊。【啟動主要】【每回合1次】➀(可將費用區的咚‼卡依指定的數量置為休息狀態)：若自己的手牌在6張以下時，從自己的卡組上面查看2張卡片，公開最多1張擁有《多雷斯羅薩》特徵的卡片，並加入手牌。之後，將其餘卡片放到廢棄區。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-040",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "QUEEN",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-040.png?230512",
      "cost": 4,
      "attribute": "射",
      "power": 5000,
      "counter": null,
      "color": [
        "藍",
        "黃"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】若自己的生命值卡和手牌合計張數在4張以下時，抽1張卡片。若場上有自己費用8以上的角色卡時，抽1張卡片則替換成可以將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-040",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "QUEEN(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-040_p1.png?230512",
      "cost": 4,
      "attribute": "射",
      "power": 5000,
      "counter": null,
      "color": [
        "藍黃"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】若自己的生命值卡和手牌合計張數在4張以下時，抽1張卡片。若場上有自己費用8以上的角色卡時，抽1張卡片則替換成可以將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-041",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "阿碧絲",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-041.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 2000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄2張自己的手牌：從自己的卡組上面查看5張卡片，公開最多1張擁有《東方藍》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-042",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "賣一刀",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-042.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 1000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張自己擁有(斬)屬性的角色卡，在這個回合，力量值+3000。之後，將1張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-043",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "烏爾蒂",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-043.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】將最多1張費用2以下的角色卡放回持有者的手牌或卡組下面。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-044",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "海道",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-044.png?230512",
      "cost": 10,
      "attribute": "打",
      "power": 12000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張費用8以下的角色卡和最多1張費用3以下的角色卡放回持有者的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-044",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "海道(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-044_p1.png?230512",
      "cost": 10,
      "attribute": "打",
      "power": 12000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張費用8以下的角色卡和最多1張費用3以下的角色卡放回持有者的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-045",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "KING",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-045.png?230512",
      "cost": 7,
      "attribute": "斬",
      "power": 8000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】抽1張卡片。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-046",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "QUEEN",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-046.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】若自己的領航卡擁有《百獸海賊團》特徵時，從自己的卡組上面查看7張卡片，公開合計最多2張「瘟禍彈」或「冰鬼」，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-047",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "冰鬼",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-047.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": null,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "疫災",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合中】這張角色卡和對手費用5以下的角色卡對戰且對戰結束時，將對手對戰的角色卡放置到持有者的卡組下面。",
      "effectType": [
        "我方回合中"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-048",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "佐佐木",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-048.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 2000,
      "color": [
        "藍"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將自己的手牌全部放回卡組，並將卡組洗牌。之後，依放回卡組的卡片張數抽卡片。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-049",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "JACK",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-049.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【KO時】抽1張卡片。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-050",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "漢葛先生",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-050.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "【啟動主要】可以廢棄1張自己的手牌，將這張角色卡置為休息狀態：抽1張卡片。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-051",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "福茲胡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-051.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「福茲胡」以外擁有《百獸海賊團》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-051",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "福茲胡(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-051_p1.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「福茲胡」以外擁有《百獸海賊團》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-052",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "黑瑪麗亞",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-052.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【啟動主要】➁(可將費用區的咚‼卡依指定的數量置為休息狀態)，可將這張角色卡置為休息狀態：抽1張卡片。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-053",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "培濟萬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-053.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【每回合1次】自己發動事件卡時，抽1張卡片。之後，將1張自己的手牌放置到卡組下面。",
      "effectType": [
        "咚‼×1",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-054",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "六鬼",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-054.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 7000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "巨人族",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-055",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "瘟禍彈",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-055.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】可以廢棄1張自己手牌中的「冰鬼」，並將1張費用4以下的角色卡放置在持有者的卡組下面：使1張自己廢棄區中的「冰鬼」登場。",
      "effectType": [
        "主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-056",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "橡膠業火手槍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-056.png?230512",
      "cost": 6,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】將最多1張費用4以下的角色卡放置在持有者的卡組下面。",
      "effect": "【主要】將最多1張角色卡放置在持有者的卡組下面。",
      "effectType": [
        "主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-057",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "龍捲壞風",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-057.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "【觸發器】將最多1張費用6以下的角色卡放回持有者的手牌。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，將最多1張費用1以下的角色卡放置在持有者的卡組下面。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-058",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "克洛克達爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-058.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紫",
        "黃"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【對方回合中】【每回合1次】自己場上的咚‼卡因為自己的效果被放回咚‼卡組時，從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effectType": [
        "對方回合中",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-058",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "克洛克達爾(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-058_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紫黃"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【對方回合中】【每回合1次】自己場上的咚‼卡因為自己的效果被放回咚‼卡組時，從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effectType": [
        "對方回合中",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-059",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "艾斯巴古",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-059.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "GC"
      ],
      "trigger": "",
      "effect": "【對方攻擊時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有《W7》特徵時，這張角色卡，在這個回合，獲得【防禦】。(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "對方攻擊時",
        "防禦"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-060",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "克洛克達爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-060.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 9000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【登場時】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有包含『B・W』特徵時，將最多1張自己卡組上面的卡片加入生命值區上面。【對方攻擊時】【每回合1次】咚‼-1：抽1張卡片，並廢棄1張自己的手牌。",
      "effectType": [
        "登場時",
        "對方攻擊時",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-060",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "克洛克達爾(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-060_p1.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 9000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【登場時】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有包含『B・W』特徵時，將最多1張自己卡組上面的卡片加入生命值區上面。【對方攻擊時】【每回合1次】咚‼-1：抽1張卡片，並廢棄1張自己的手牌。",
      "effectType": [
        "登場時",
        "對方攻擊時",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-061",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "湯姆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-061.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "魚人族",
        "W7"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡放置到廢棄區：若自己的領航卡擁有《W7》特徵時，從咚‼卡組追加最多1張休息狀態的咚‼卡。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-062",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "香蕉鱷魚",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-062.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 7000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "動物"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-063",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "佛朗基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-063.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 1000,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "W7",
        "佛朗基家族"
      ],
      "trigger": "",
      "effect": "【對方攻擊時】【每回合1次】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有《W7》特徵時，最多1張自己的領航卡或角色卡，在這場對戰中，力量值+1000。",
      "effectType": [
        "對方攻擊時",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-064",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "Miss All星期天",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-064.png?230512",
      "cost": 5,
      "attribute": "知",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "【觸發器】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：使這張卡片登場。",
      "effect": "【登場時】從咚‼卡組追加最多1張休息狀態的咚‼卡。之後，若自己的場上有6張以上咚‼卡時，抽1張卡片。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-064",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "Miss All星期天(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-064_p1.png?230512",
      "cost": 5,
      "attribute": "知",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "【觸發器】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：使這張卡片登場。",
      "effect": "【登場時】從咚‼卡組追加最多1張休息狀態的咚‼卡。之後，若自己的場上有6張以上咚‼卡時，抽1張卡片。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-065",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "Miss黃金週(瑪莉安奴)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-065.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "【觸發器】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：使這張卡片登場。",
      "effect": "【登場時】若自己的領航卡擁有包含『B・W』特徵時，最多1張對手費用5以下的角色卡，到下一個我方回合開始前無法進行攻擊。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-066",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "Miss情人節(米琪塔)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-066.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "【觸發器】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：使這張卡片登場。",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張擁有包含『B・W』特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-067",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "Miss聖誕節(多蘿菲)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-067.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 4000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "【觸發器】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：使這張卡片登場。",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-068",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "橫綱",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-068.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "動物",
        "W7"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【對方攻擊時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：將最多1張對手費用2以下的角色卡放回持有者的手牌。",
      "effectType": [
        "防禦",
        "對方攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-069",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "Mr.2・馮・克雷(班薩姆)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-069.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "【觸發器】咚‼-1：使這張卡片登場。",
      "effect": "【對方攻擊時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：這張角色卡原本的力量值，在這個回合，變成和對手進行攻擊的領航卡或角色卡的力量值相同。",
      "effectType": [
        "對方攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-070",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "Mr.3(賈爾迪諾)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-070.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "",
      "effect": "【對方攻擊時】【每回合1次】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：最多1張對手的角色卡，在這個回合，力量值-1000。",
      "effectType": [
        "對方攻擊時",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-071",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "Mr.4(貝布)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-071.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "",
      "effect": "【對方攻擊時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：這張角色卡，在這場對戰中，獲得【防禦】，力量值+1000。(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "對方攻擊時",
        "防禦"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-072",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "Mr.5(傑姆)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-072.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 8000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "",
      "effect": "【對方攻擊時】【每回合1次】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)，可將這張角色卡置為休息狀態：KO最多1張對手費用4以下的角色卡。",
      "effectType": [
        "對方攻擊時",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-072",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "Mr.5(傑姆)(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-072_p1.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 8000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "",
      "effect": "【對方攻擊時】【每回合1次】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)，可將這張角色卡置為休息狀態：KO最多1張對手費用4以下的角色卡。",
      "effectType": [
        "對方攻擊時",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-073",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "Mr.13&Miss星期五",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-073.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 1000,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "動物",
        "B・W"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【啟動主要】可將這張角色卡和1張自己擁有包含『B・W』特徵的角色卡放置到廢棄區：從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-074",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "彩色陷阱",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-074.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "【觸發器】從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effect": "【反擊】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：最多1張自己的領航卡或角色卡，在這場對戰中，力量值+1000。之後，將最多1張對手費用4以下的角色卡置為休息狀態。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-075",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "鼻空想砲",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-075.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "B・W"
      ],
      "trigger": "【觸發器】從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+6000。之後，若自己的生命值卡在2張以下時，從咚‼卡組追加最多1張休息狀態的咚‼卡。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-076",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "弱小真是…一種罪惡吶…",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-076.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "【觸發器】從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effect": "【反擊】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-077",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "伊迪歐",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-077.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-078",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "歐伊摩&卡西",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-078.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 8000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "巨人族",
        "世界政府"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-079",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "歐隆拜斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-079.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "約塔瑪利亞大船團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】最多1張對手的角色卡，在這個回合，費用-4，並將2張自己卡組上面的卡片放置到廢棄區。之後，KO1張自己擁有《多雷斯羅薩》特徵的角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-080",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "加茲",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-080.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 1000,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張自己擁有《多雷斯羅薩》特徵的角色卡，在這個回合，可以攻擊活動狀態的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-081",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "卡文迪許",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-081.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "貌美海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】這張角色卡可以攻擊活動狀態的角色卡。【攻擊時】可將自己的領航卡置為休息狀態：KO最多1張對手費用1以下的角色卡。之後，將2張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-082",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "居魯士",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-082.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "若這張角色卡即將遭到KO時，替換成可將自己的領航卡或1張「鬥牛鬥技場」置為休息狀態。【登場時】若自己的領航卡是「蕾貝卡」時，KO最多1張對手費用1以下的角色卡。之後，將1張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-082",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "居魯士(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-082_p1.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "若這張角色卡即將遭到KO時，替換成可將自己的領航卡或1張「鬥牛鬥技場」置為休息狀態。【登場時】若自己的領航卡是「蕾貝卡」時，KO最多1張對手費用1以下的角色卡。之後，將1張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-083",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "薩波",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-083.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "革命軍"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】自己的角色卡全數，到下一個我方回合開始前，不會因效果而遭到KO。之後，抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-083",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "薩波(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-083_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "革命軍"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】自己的角色卡全數，到下一個我方回合開始前，不會因效果而遭到KO。之後，抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-083",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "薩波(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-083_p2.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "革命軍"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】自己的角色卡全數，到下一個我方回合開始前，不會因效果而遭到KO。之後，抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-084",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "絲媞希",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-084.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 3000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "CP0"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看3張卡片，使最多1張除了「絲媞希」以外擁有包含『CP』特徵費用2以下的角色卡登場。之後，將其餘卡片放到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-085",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "蘇萊曼",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-085.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "【登場時】/【攻擊時】若自己的領航卡擁有《多雷斯羅薩》特徵時，最多1張對手的角色卡，在這個回合，費用-2。之後，將1張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "登場時",
        "攻擊時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-086",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "青椒",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-086.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "八寶水軍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】經由這張角色卡的對戰而將對手的角色卡KO時，抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "咚‼×1"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-087",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-087.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 7000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-088",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "哈爾汀",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-088.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 7000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "巨人族",
        "多雷斯羅薩",
        "新巨兵海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將1張自己的領航卡置為休息狀態：最多1張對手的角色卡，在這個回合，費用-4。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-089",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "巴特洛馬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-089.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "巴特俱樂部"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-090",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-090.png?230512",
      "cost": 7,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "這張角色卡可以攻擊活動狀態的角色卡。【啟動主要】【每回合1次】可將7張自己廢棄區中的卡片依任意順序放回卡組下面：將這張角色卡置為活動狀態。之後，這張角色卡，在下一個自己的重整階段無法為活動狀態。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-090",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-090_p1.png?230512",
      "cost": 7,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "這張角色卡可以攻擊活動狀態的角色卡。【啟動主要】【每回合1次】可將7張自己廢棄區中的卡片依任意順序放回卡組下面：將這張角色卡置為活動狀態。之後，這張角色卡，在下一個自己的重整階段無法為活動狀態。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-091",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "雷奧",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-091.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "頓達塔族",
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "【登場時】可將1張自己的領航卡置為休息狀態：若自己的領航卡擁有《多雷斯羅薩》特徵時，KO最多1張對手費用1以下的角色卡。之後，將2張自己卡組上面的卡片放置到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-092",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "蕾貝卡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-092.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看3張卡片，公開最多1張除了「蕾貝卡」以外擁有《多雷斯羅薩》特徵的卡片，並加入手牌。之後，將其餘卡片放到廢棄區。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-093",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "橡膠大猿王槍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-093.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "草帽一行人"
      ],
      "trigger": "【觸發器】抽3張卡片，並廢棄2張自己的手牌。",
      "effect": "【主要】最多1張自己擁有《多雷斯羅薩》特徵的角色卡，在這個回合，力量值+6000。之後，若自己廢棄區有15張以上卡片時，該張卡片，在這個回合，獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "主要",
        "雙重攻擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-094",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "轟雷破壞劍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-094.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "【觸發器】可將自己的領航卡置為休息狀態：KO最多1張對手費用5以下的角色卡。",
      "effect": "【主要】選擇最多1張對手費用4以下的角色卡，並KO。若自己廢棄區有15張以上卡片時，選擇對手費用4以下的角色卡則替換成對手費用6以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-095",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "防～～～～護罩‼",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-095.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩",
        "巴特俱樂部"
      ],
      "trigger": "【觸發器】抽2張卡片，並廢棄1張自己的手牌。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。之後，若自己廢棄區有15張以上卡片時，該張卡片，在這場對戰中，力量值+2000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-096",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "鬥牛鬥技場",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-096.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "多雷斯羅薩"
      ],
      "trigger": "",
      "effect": "若自己的領航卡擁有《多雷斯羅薩》特徵時，自己擁有《多雷斯羅薩》特徵的角色卡，在登場的回合即可攻擊角色卡。",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-097",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "玉兒",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-097.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張對手費用3以下擁有《動物》或《SMILE》特徵的角色卡，以正面朝上加入對手的生命值區上面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-098",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "子瀚",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-098.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄2張自己手牌中擁有《和之國》特徵的卡片：若自己的生命值卡在1張以下時，將1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-099",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "阿莉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-099.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "和之國",
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】若自己的生命值卡在1張以下時，使這張卡片登場。",
      "effect": "在規則上，這張卡片的卡片名稱也可視為「夏洛特・莉莉」。",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-100",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "卡波涅・培基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-100.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黃"
      ],
      "type": [
        "火戰車海賊團"
      ],
      "trigger": "【觸發器】最多1張對手的領航卡或角色卡，在這個回合，無法進行攻擊。",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-100",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "卡波涅・培基(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-100_p1.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黃"
      ],
      "type": [
        "火戰車海賊團"
      ],
      "trigger": "【觸發器】最多1張對手的領航卡或角色卡，在這個回合，無法進行攻擊。",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-101",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "卡爾梅露",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-101.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 1000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "羔羊之家"
      ],
      "trigger": "【觸發器】使這張卡片登場。之後，KO最多1張對手費用2以下的角色卡。",
      "effect": "【我方回合中】【登場時】抽1張卡片。",
      "effectType": [
        "我方回合中",
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-102",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "錦右衛門",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-102.png?230512",
      "cost": 6,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】➀(可將費用區的咚‼卡依指定的數量置為休息狀態)，可將1張自己生命值區上面或下面的卡片加入手牌：將這張角色卡置為活動狀態。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-103",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "光月日和",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-103.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": null,
      "counter": 2000,
      "color": [
        "黃"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】最多1張自己擁有《和之國》特徵的領航卡或角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-104",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "香吉士",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-104.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "賓什莫克家"
      ],
      "trigger": "【觸發器】可以廢棄1張自己的手牌：使這張卡片登場。",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-104",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "香吉士(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-104_p1.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "賓什莫克家"
      ],
      "trigger": "【觸發器】可以廢棄1張自己的手牌：使這張卡片登場。",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-105",
      "rarity": "R",
      "role": "CHARACTER",
      "cardName": "夏洛特・亞蔓德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-105.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】可以廢棄1張自己手牌中持有【觸發器】的卡片：將最多1張對手費用2以下的角色卡置為休息狀態。",
      "effectType": [
        "啟動主要",
        "每回合1次",
        "觸發器"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-106",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・巴伐洛亞",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-106.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】可以廢棄1張自己的手牌：使這張卡片登場。",
      "effect": "【咚‼×1】若自己的生命值卡張數比對手少時，這張角色卡的力量值+1000。",
      "effectType": [
        "咚‼×1"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-107",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・裴洛斯培勒",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-107.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 8000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-108",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "夏洛特・摩斯卡特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-108.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】可以廢棄1張自己的手牌：使這張卡片登場。",
      "effect": "【咚‼×1】這張角色卡獲得【消失】。(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)",
      "effectType": [
        "咚‼×1",
        "消失"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-109",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "土康",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-109.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡放置到廢棄區：最多1張自己擁有《和之國》特徵的領航卡或角色卡，在這個回合，力量值+3000。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-110",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "潘德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-110.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "圓蛋糕島"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】將最多1張對手費用3以下的角色卡，以正面朝上加入對手的生命值區上面或下面。",
      "effectType": [
        "防禦",
        "KO時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-111",
      "rarity": "UC",
      "role": "CHARACTER",
      "cardName": "赫拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-111.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團",
        "歡樂友人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【啟動主要】可將1張除了這張角色卡以外自己擁有《歡樂友人》特徵的角色卡放置到廢棄區，並將這張角色卡置為休息狀態：將最多1張自己的角色卡「夏洛特・莉莉」，置為活動狀態。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-112",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "大和",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-112.png?230512",
      "cost": 9,
      "attribute": "打",
      "power": 9000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【登場時】KO最多1張對手的持有費用在雙方生命值卡合計張數以下的角色卡。之後，若自己的生命值卡在1張以下時，將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-112",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "大和(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-112_p1.png?230512",
      "cost": 9,
      "attribute": "打",
      "power": 9000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【登場時】KO最多1張對手的持有費用在雙方生命值卡合計張數以下的角色卡。之後，若自己的生命值卡在1張以下時，將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-113",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "拉賓",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-113.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團",
        "歡樂友人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-114",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "藍道夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-114.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 7000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團",
        "歡樂友人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-115",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "槍・擬鬼",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-115.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "【觸發器】最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effect": "【主要】可將1張自己生命值區上面或下面的卡片加入手牌：最多1張自己擁有《和之國》特徵的角色卡，在這個回合，獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "主要",
        "雙重攻擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-116",
      "rarity": "UC",
      "role": "EVENT",
      "cardName": "惡魔風腳 頰肉SHOOT",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-116.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "賓什莫克家"
      ],
      "trigger": "【觸發器】抽1張卡片。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+6000。之後，若雙方的生命值卡合計張數在4張以下時，KO最多1張對手費用2以下的角色卡。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-117",
      "rarity": "R",
      "role": "EVENT",
      "cardName": "天堂烈火",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-117.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】可將1張自己生命值區上面或下面的卡片加入手牌：將最多1張自己的手牌加入生命值區上面。",
      "effect": "【主要】將最多1張對手費用3以下的角色卡以正面朝上加入對手的生命值區上面或下面。",
      "effectType": [
        "主要"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-118",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "納菲魯塔利・薇薇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-118.png?230512",
      "cost": 7,
      "attribute": "知",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "除了這張角色卡以外，自己費用3以上紅色的角色卡全數，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "速攻"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-118",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "納菲魯塔利・薇薇(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-118_p1.png?230512",
      "cost": 7,
      "attribute": "知",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "除了這張角色卡以外，自己費用3以上紅色的角色卡全數，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "速攻"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-119",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・羅希南特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-119.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 8000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "海軍",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【對方回合中】若這張角色卡在休息狀態時，自己活動狀態原本費用5的角色卡，不會因效果而遭到KO。【登場時】可將這張角色卡置為休息狀態：使最多1張自己手牌中費用5綠色的角色卡登場。",
      "effectType": [
        "對方回合中",
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "OP04-119",
      "rarity": "SEC",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・羅希南特(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/OP04-119_p1.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 8000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "海軍",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【對方回合中】若這張角色卡在休息狀態時，自己活動狀態原本費用5的角色卡，不會因效果而遭到KO。【登場時】可將這張角色卡置為休息狀態：使最多1張自己手牌中費用5綠色的角色卡登場。",
      "effectType": [
        "對方回合中",
        "登場時"
      ],
      "cardSet": "陰謀王國【OP-04】"
    },
    {
      "cardId": "P-001",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-001.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×2】這張角色卡獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "咚!!×2",
        "速攻"
      ],
      "cardSet": "ONE PIECE卡片對戰 推廣卡包2022"
    },
    {
      "cardId": "P-001",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-001_p1.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 7000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×2】這張角色卡獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "咚!!×2",
        "速攻"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION 25th ANNIVERSARY EDITION"
    },
    {
      "cardId": "P-002",
      "rarity": "P",
      "role": "EVENT",
      "cardName": "我有種冒險的預感!!!",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-002.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】將自己的手牌全部放回卡組，並將卡組洗牌。之後，依放回卡組的卡片張數抽卡片。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ONE PIECE卡片對戰 推廣卡包2022"
    },
    {
      "cardId": "P-003",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "尤斯塔斯・基德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-003.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×2】這張角色卡獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "咚!!×2",
        "雙重攻擊"
      ],
      "cardSet": "ONE PIECE卡片對戰 推廣卡包2022"
    },
    {
      "cardId": "P-004",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "克洛克達爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-004.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【咚!!×1】這張角色卡獲得【防禦】。(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "咚!!×1",
        "防禦"
      ],
      "cardSet": "ONE PIECE卡片對戰 推廣卡包2022"
    },
    {
      "cardId": "P-005",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "海道",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-005.png?230512",
      "cost": 7,
      "attribute": "打",
      "power": 8000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】咚!!-2(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：這張角色卡，在這個回合，獲得【消失】。(若這張卡造成傷害，觸發器不會發動且該張卡片即放置到廢棄區)",
      "effectType": [
        "啟動主要",
        "消失"
      ],
      "cardSet": "ONE PIECE卡片對戰 推廣卡包2022"
    },
    {
      "cardId": "P-006",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-006.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×2】【我方回合中】這張角色卡的力量值+2000。",
      "effectType": [
        "咚!!×2",
        "我方回合中"
      ],
      "cardSet": "2022年11月交流會亞洲特例紀念品"
    },
    {
      "cardId": "P-007",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-007.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚‼×1】這張角色卡在和擁有 (打)屬性的領航卡和角色卡對戰中，不會遭到KO。",
      "effectType": [
        "咚‼×1"
      ],
      "cardSet": "2022年11月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-008",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "大和",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-008.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：將最多1張對手費用2以下的角色卡置為休息狀態。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "2022年11月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-009",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-009.png?230512",
      "cost": 6,
      "attribute": "斬",
      "power": 7000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】若對手的手牌有6張以上時，對手將1張自身的生命值卡加入手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "2022年11月常規賽亞洲特例紀念品規則和判定變更"
    },
    {
      "cardId": "P-010",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "海道",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-010.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 9000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "2022年11月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-011",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "美音",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-011.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】①(可將費用區的咚‼卡依指定的數量置為休息狀態)：最多1張自己原本沒有效果的角色卡，在這個回合，力量值+2000。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-012",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "水母海賊團",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-012.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "水母海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-013",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "高登",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-013.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 2000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡放置在持有者的卡組下面：最多1張對手的角色卡，在這個回合，力量值-3000。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-014",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "克比",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-014.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 3000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "海軍"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-015",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "千陽君",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-015.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-016",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "傑克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-016.png?230512",
      "cost": 8,
      "attribute": "斬",
      "power": 10000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "四皇",
        "紅髮海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-016",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "傑克(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-016_p2.png?230512",
      "cost": 8,
      "attribute": "斬",
      "power": 10000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "四皇",
        "紅髮海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "P-017",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-017.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張對手的角色卡，在這個回合，力量值-2000。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-018",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "巴特洛馬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-018.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "超新星",
        "巴特俱樂部"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-019",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "培波",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-019.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 2000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "純毛族",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】KO最多1張對手力量值3000以下的角色卡。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-020",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "貝魯梅柏",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-020.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-021",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "班・貝克曼",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-021.png?230512",
      "cost": 7,
      "attribute": "射",
      "power": 9000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "紅髮海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-022",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-022.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-022",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-022_p2.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "P-023",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "耶穌布",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-023.png?230512",
      "cost": 6,
      "attribute": "射",
      "power": 8000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "FILM",
        "紅髮海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "2022年12月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-024",
      "rarity": "P",
      "role": "EVENT",
      "cardName": "我要成為!!!海賊王!!!!",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-024.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "【觸發器】最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effect": "【主要】自己的領航卡，在這個回合，每有1張角色卡力量值+1000。",
      "effectType": [
        "主要"
      ],
      "cardSet": "2022年9月交流會紀念品"
    },
    {
      "cardId": "P-025",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "斯摩格",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-025.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】這張角色卡在和未擁有 (特)屬性的角色卡對戰中，不會遭到KO。",
      "effectType": [
        "咚‼×1"
      ],
      "cardSet": "2022年12月交流會亞洲特例紀念品"
    },
    {
      "cardId": "P-026",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙卡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-026.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【攻擊時】最多1張對手的角色卡，在這個回合，費用-3。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "2022年12月交流會紀念品"
    },
    {
      "cardId": "P-027",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "佛朗基將軍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-027.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "在規則上，這張卡片的卡片名稱也可視為「佛朗基」。【對方回合中】自己原本力量值3000以下的角色卡全數力量值+1000。",
      "effectType": [
        "對方回合中"
      ],
      "cardSet": "2023年1月交流會亞洲特例紀念品"
    },
    {
      "cardId": "P-028",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "波特卡斯・D・艾斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-028.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【雙重攻擊】(這張卡片造成的傷害為2)",
      "effectType": [
        "雙重攻擊"
      ],
      "cardSet": "ONE PIECE卡片對戰 推廣卡包2022 Vol.2"
    },
    {
      "cardId": "P-028",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "波特卡斯・D・艾斯(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-028_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【雙重攻擊】(這張卡片造成的傷害為2)",
      "effectType": [
        "雙重攻擊"
      ],
      "cardSet": "2023年3月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-029",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "巴特洛馬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-029.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "FILM",
        "超新星",
        "巴特俱樂部"
      ],
      "trigger": "",
      "effect": "【我方回合結束時】可將這張角色卡置為休息狀態：將最多1張自己除了「巴特洛馬」以外擁有《FILM》特徵的角色卡置為活動狀態。",
      "effectType": [
        "我方回合結束時"
      ],
      "cardSet": "ONE PIECE卡片對戰 推廣卡包2022 Vol.2"
    },
    {
      "cardId": "P-030",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "吉貝爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-030.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "魚人族",
        "王下七武海",
        "太陽海賊團"
      ],
      "trigger": "",
      "effect": "【KO時】將最多1張費用3以下的角色卡放到持有者的卡組下面。",
      "effectType": [
        "KO時"
      ],
      "cardSet": "ONE PIECE卡片對戰 推廣卡包2022 Vol.2"
    },
    {
      "cardId": "P-031",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "美音",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-031.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "【登場時】從咚‼卡組追加最多1張休息狀態的咚‼卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ONE PIECE卡片對戰 推廣卡包2022 Vol.2"
    },
    {
      "cardId": "P-032",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "戰國",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-032.png?230512",
      "cost": 5,
      "attribute": "知",
      "power": 6000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【我方回合中】對手的角色卡全數費用-2。",
      "effectType": [
        "咚‼×1",
        "我方回合中"
      ],
      "cardSet": "ONE PIECE卡片對戰 推廣卡包2022 Vol.2"
    },
    {
      "cardId": "P-033",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-033.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡放置在持有者的卡組下面：抽1張卡片。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "2023年2月交流會亞洲特例紀念品"
    },
    {
      "cardId": "P-034",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "香吉士",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-034.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "賓什莫克家"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【我方回合中】若自己的生命值卡在2張以下時，這張角色卡的力量值+2000。",
      "effectType": [
        "咚‼×1",
        "我方回合中"
      ],
      "cardSet": "2023年2月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "P-035",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-035.png?230512",
      "cost": 6,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】可以廢棄1張自己的手牌：KO最多1張對手費用0的角色卡。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "2023年3月交流會紀念品"
    },
    {
      "cardId": "P-036",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-036.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "和之國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【攻擊時】將1張自己生命值區上面或下面的卡片加入手牌：這張角色卡和最多1張自己的領航卡，在這個回合，力量值+1000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "OP-03發售特典"
    },
    {
      "cardId": "P-037",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-037.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【攻擊時】若場上有2張以上自己休息狀態的角色卡時，這張角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "OP-04 整盒購買特典"
    },
    {
      "cardId": "P-038",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-038.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】可將1張自己的領航卡置為休息狀態：KO最多1張對手費用1以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "2023年6月交流會亞洲特例紀念品"
    },
    {
      "cardId": "P-039",
      "rarity": "P",
      "role": "CHARACTER",
      "cardName": "貝拉密",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/P-039.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "貝拉密海賊團"
      ],
      "trigger": "",
      "effect": "【消失】(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)【咚‼×2】若自己的生命值卡為0張時，這張角色卡的力量值+2000。",
      "effectType": [
        "消失",
        "咚‼×2"
      ],
      "cardSet": "2023年6月交流會紀念品"
    },
    {
      "cardId": "ST01-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-001.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】附加最多1張休息狀態的咚!!卡在這張領航卡或1張自己的角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "蒙其・D・魯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-001_p1.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】附加最多1張休息狀態的咚!!卡在這張領航卡或1張自己的角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "騙人布",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-002.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【咚!!×2】【攻擊時】對手在這場對戰中，力量值5000以上的角色卡無法發動【防禦】。",
      "effectType": [
        "咚!!×2",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "騙人布(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-002_p1.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【咚!!×2】【攻擊時】對手在這場對戰中，力量值5000以上的角色卡無法發動【防禦】。",
      "effectType": [
        "咚!!×2",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION 25th ANNIVERSARY EDITION"
    },
    {
      "cardId": "ST01-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "騙人布",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-002_p3.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【咚!!×2】【攻擊時】對手在這場對戰中，力量值5000以上的角色卡無法發動【防禦】。",
      "effectType": [
        "咚!!×2",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "騙人布(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-002_p4.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【咚!!×2】【攻擊時】對手在這場對戰中，力量值5000以上的角色卡無法發動【防禦】。",
      "effectType": [
        "咚!!×2",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "ST01-003",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "飛毛腿",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-003.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "阿拉巴斯坦王國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-003",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "飛毛腿",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-003_p1.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "阿拉巴斯坦王國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "香吉士",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-004.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×2】這張角色卡獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "咚!!×2",
        "速攻"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "香吉士(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-004_p2.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×2】這張角色卡獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "咚!!×2",
        "速攻"
      ],
      "cardSet": "推廣卡包 Vol.3"
    },
    {
      "cardId": "ST01-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "香吉士",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-004_p3.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×2】這張角色卡獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "咚!!×2",
        "速攻"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "香吉士(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-004_p4.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×2】這張角色卡獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "咚!!×2",
        "速攻"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "ST01-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "吉貝爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-005.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "魚人族",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】除了這張角色卡以外，最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "吉貝爾(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-005_p1.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "魚人族",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】除了這張角色卡以外，最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION 25th ANNIVERSARY EDITION"
    },
    {
      "cardId": "ST01-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "吉貝爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-005_p2.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "魚人族",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】除了這張角色卡以外，最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "多尼多尼・喬巴",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-006.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 1000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "多尼多尼・喬巴(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-006_p1.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 1000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION 25th ANNIVERSARY EDITION"
    },
    {
      "cardId": "ST01-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "多尼多尼・喬巴",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-006_p3.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 1000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "多尼多尼・喬巴(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-006_p4.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 1000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "ST01-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "娜美",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-007.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】附加最多1張休息狀態的咚!!卡在1張自己的領航卡或角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "娜美",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-007_p1.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】附加最多1張休息狀態的咚!!卡在1張自己的領航卡或角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "常規賽2022年12月優勝紀念品"
    },
    {
      "cardId": "ST01-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "娜美",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-007_p2.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】附加最多1張休息狀態的咚!!卡在1張自己的領航卡或角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "常規賽卡包2022 Vol.2"
    },
    {
      "cardId": "ST01-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "娜美",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-007_p4.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】附加最多1張休息狀態的咚!!卡在1張自己的領航卡或角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "娜美(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-007_p5.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】附加最多1張休息狀態的咚!!卡在1張自己的領航卡或角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "ST01-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "妮可・羅賓",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-008.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "妮可・羅賓(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-008_p1.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION 25th ANNIVERSARY EDITION"
    },
    {
      "cardId": "ST01-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "妮可・羅賓",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-008_p2.png?230512",
      "cost": 3,
      "attribute": "知",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "納菲魯塔利・薇薇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-009.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "納菲魯塔利・薇薇(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-009_p1.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "2023年1月常規賽亞洲特例紀念品"
    },
    {
      "cardId": "ST01-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "納菲魯塔利・薇薇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-009_p2.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "佛朗基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-010.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "佛朗基(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-010_p1.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION 25th ANNIVERSARY EDITION"
    },
    {
      "cardId": "ST01-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "佛朗基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-010_p2.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "布魯克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-011.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】附加最多2張休息狀態的咚!!卡在1張自己的領航卡或角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "布魯克(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-011_p2.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】附加最多2張休息狀態的咚!!卡在1張自己的領航卡或角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "常規賽卡包Vol.3"
    },
    {
      "cardId": "ST01-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "布魯克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-011_p3.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】附加最多2張休息狀態的咚!!卡在1張自己的領航卡或角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "布魯克(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-011_p4.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 2000,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【登場時】附加最多2張休息狀態的咚!!卡在1張自己的領航卡或角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "ST01-012",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-012.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【咚!!×2】【攻擊時】對手在這場對戰中，無法發動【防禦】。",
      "effectType": [
        "速攻",
        "咚!!×2",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-012",
      "rarity": "SP卡",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-012_p1.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【咚‼×2】【攻擊時】對手在這場對戰中，無法發動【防禦】。",
      "effectType": [
        "速攻",
        "咚‼×2",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "ST01-012",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-012_p2.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【咚!!×2】【攻擊時】對手在這場對戰中，無法發動【防禦】。",
      "effectType": [
        "速攻",
        "咚!!×2",
        "攻擊時",
        "防禦"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "羅羅亞・索隆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-013.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】這張角色卡的力量值+1000。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "羅羅亞・索隆",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-013_p2.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】這張角色卡的力量值+1000。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "羅羅亞・索隆(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-013_p3.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【咚!!×1】這張角色卡的力量值+1000。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "ONE PIECE CARD GAME PREMIUM CARD COLLECTION -ONE PIECE FILM RED-"
    },
    {
      "cardId": "ST01-014",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "毛皮強化",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-014.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "草帽一行人"
      ],
      "trigger": "【觸發器】最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+3000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-014",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "毛皮強化",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-014_p1.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "動物",
        "草帽一行人"
      ],
      "trigger": "【觸發器】最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+3000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "橡膠JET槍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-015.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】KO最多1張對手力量值6000以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "橡膠JET槍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-015_p1.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】KO最多1張對手力量值6000以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "橡膠JET槍(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-015_p2.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】KO最多1張對手力量值6000以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "常規賽卡包Vol.4"
    },
    {
      "cardId": "ST01-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "橡膠JET槍(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-015_p3.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "超新星",
        "草帽一行人"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】KO最多1張對手力量值6000以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "2023年6月常規賽優勝紀念品"
    },
    {
      "cardId": "ST01-016",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "惡魔風腳",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-016.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】KO最多1張對手費用3以下持有【防禦】的角色卡。",
      "effect": "【主要】選擇最多1張自己擁有《草帽一行人》特徵的領航卡或角色卡。在這個回合，若該領航卡或角色卡攻擊時，對手無法發動【防禦】。",
      "effectType": [
        "主要",
        "防禦"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-016",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "惡魔風腳",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-016_p1.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】KO最多1張對手費用3以下持有【防禦】的角色卡。",
      "effect": "【主要】選擇最多1張自己擁有《草帽一行人》特徵的領航卡或角色卡。在這個回合，若該領航卡或角色卡攻擊時，對手無法發動【防禦】。",
      "effectType": [
        "主要",
        "防禦"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST01-017",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "千陽號",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-017.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張舞台卡置為休息狀態：最多1張自己擁有《草帽一行人》特徵的領航卡或角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "草帽一行人【ST-01】"
    },
    {
      "cardId": "ST01-017",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "千陽號",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST01-017_p1.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紅"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張舞台卡置為休息狀態：最多1張自己擁有《草帽一行人》特徵的領航卡或角色卡，在這個回合，力量值+1000。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "尤斯塔斯・基德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-001.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】③(可將費用區的咚!!卡依指定的數量置為休息狀態)，可以廢棄1張自己的手牌：將這張領航卡置為活動狀態。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "尤斯塔斯・基德(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-001_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】③(可將費用區的咚!!卡依指定的數量置為休息狀態)，可以廢棄1張自己的手牌：將這張領航卡置為活動狀態。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "比特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-002.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "火戰車海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "比特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-002_p1.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "火戰車海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-003",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "烏魯基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-003.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "破戒僧海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】若場上有3張以上自己的角色卡時，這個角色的力量值+2000。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-003",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "烏魯基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-003_p1.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "破戒僧海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】若場上有3張以上自己的角色卡時，這個角色的力量值+2000。",
      "effectType": [
        "咚!!×1"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "卡波涅・培基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-004.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "火戰車海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "卡波涅・培基",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-004_p1.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "火戰車海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "奇拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-005.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】KO最多1張對手休息狀態費用3以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "奇拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-005_p1.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】KO最多1張對手休息狀態費用3以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "克比",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-006.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "克比",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-006_p1.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "珠寶・波妮",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-007.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "波妮海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】①(可將費用區的咚!!卡依指定的數量置為休息狀態)，可將這張角色卡置為休息狀態：從自己的卡組上面查看5張卡片，公開最多1張擁有《超新星》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "珠寶・波妮",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-007_p1.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "波妮海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】①(可將費用區的咚!!卡依指定的數量置為休息狀態)，可將這張角色卡置為休息狀態：從自己的卡組上面查看5張卡片，公開最多1張擁有《超新星》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "常規賽卡包2022 Vol.2"
    },
    {
      "cardId": "ST02-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "珠寶・波妮",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-007_p2.png?230512",
      "cost": 1,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "波妮海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】①(可將費用區的咚!!卡依指定的數量置為休息狀態)，可將這張角色卡置為休息狀態：從自己的卡組上面查看5張卡片，公開最多1張擁有《超新星》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "刮盤人・亞普",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-008.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 3000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "ONAIR海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】將最多1張對手的咚!!卡置為休息狀態。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "刮盤人・亞普",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-008_p1.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 3000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "ONAIR海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】將最多1張對手的咚!!卡置為休息狀態。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "刮盤人・亞普(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-008_p2.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 3000,
      "counter": 2000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "ONAIR海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】將最多1張對手的咚!!卡置為休息狀態。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "常規賽卡包Vol.4"
    },
    {
      "cardId": "ST02-009",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-009.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張自己休息狀態費用5以下擁有《超新星》或《哈特海賊團》特徵的角色卡置為活動狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-009",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-009_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張自己休息狀態費用5以下擁有《超新星》或《哈特海賊團》特徵的角色卡置為活動狀態。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "巴吉魯・霍金斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-010.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "霍金斯海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【每回合1次】【我方回合中】若這張角色卡和對手的角色卡對戰時，將這張角色卡置為活動狀態。",
      "effectType": [
        "咚!!×1",
        "每回合1次",
        "我方回合中"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "巴吉魯・霍金斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-010_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "霍金斯海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【每回合1次】【我方回合中】若這張角色卡和對手的角色卡對戰時，將這張角色卡置為活動狀態。",
      "effectType": [
        "咚!!×1",
        "每回合1次",
        "我方回合中"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "希特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-011.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "希特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-011_p1.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "培波",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-012.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "培波",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-012_p1.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "純毛族",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "尤斯塔斯・基德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-013.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚!!×1】【我方回合結束時】將這張角色卡置為活動狀態。",
      "effectType": [
        "防禦",
        "咚!!×1",
        "我方回合結束時"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-013",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "尤斯塔斯・基德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-013_p1.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚!!×1】【我方回合結束時】將這張角色卡置為活動狀態。",
      "effectType": [
        "防禦",
        "咚!!×1",
        "我方回合結束時"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-014",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "X・多雷古",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-014.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "海軍",
        "超新星",
        "多雷古海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】若這張角色卡在休息狀態時，自己擁有《超新星》或《海軍》特徵的領航卡和角色卡的力量值+1000。",
      "effectType": [
        "咚!!×1",
        "我方回合中"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-014",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "X・多雷古",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-014_p1.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "綠"
      ],
      "type": [
        "海軍",
        "超新星",
        "多雷古海賊團"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【我方回合中】若這張角色卡在休息狀態時，自己擁有《超新星》或《海軍》特徵的領航卡和角色卡的力量值+1000。",
      "effectType": [
        "咚!!×1",
        "我方回合中"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "手術刀",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-015.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "【觸發器】將最多2張自己的咚!!卡置為活動狀態。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。之後，將最多1張自己的咚!!卡置為活動狀態。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "手術刀",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-015_p1.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "哈特海賊團"
      ],
      "trigger": "【觸發器】將最多2張自己的咚!!卡置為活動狀態。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。之後，將最多1張自己的咚!!卡置為活動狀態。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-016",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "反彈",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-016.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，將最多1張自己的咚!!卡置為活動狀態。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-016",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "反彈",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-016_p1.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "基德海賊團"
      ],
      "trigger": "",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，將最多1張自己的咚!!卡置為活動狀態。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST02-017",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "稻草手刀",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-017.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "霍金斯海賊團"
      ],
      "trigger": "【觸發器】使最多1張自己手牌中費用2以下擁有《超新星》特徵的卡片登場。",
      "effect": "【主要】將最多1張對手的角色卡置為休息狀態。",
      "effectType": [
        "主要"
      ],
      "cardSet": "最可怕世代【ST-02】"
    },
    {
      "cardId": "ST02-017",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "稻草手刀",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST02-017_p1.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "綠"
      ],
      "type": [
        "超新星",
        "霍金斯海賊團"
      ],
      "trigger": "【觸發器】使最多1張自己手牌中費用2以下擁有《超新星》特徵的卡片登場。",
      "effect": "【主要】將最多1張對手的角色卡置為休息狀態。",
      "effectType": [
        "主要"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST03-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "克洛克達爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-001.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】咚!!-4(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：將最多1張費用5以下的角色卡放回持有者的手牌。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "艾德華・衛伯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-002.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-003",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "克洛克達爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-003.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚!!×1】【防禦時】將最多1張費用2以下的角色卡放到持有者的卡組下面。",
      "effectType": [
        "防禦",
        "咚!!×1",
        "防禦時"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "月光・摩利亞",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-004.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "恐怖三桅帆船海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張自己廢棄區中除了「月光‧摩利亞」以外費用4以下擁有《王下七武海》或《恐怖三桅帆船海賊團》特徵的角色卡，加入手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "喬拉可爾・密佛格",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-005.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 2000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "喬拉可爾・密佛格(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-005_p1.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 2000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "常規賽卡包Vol.3"
    },
    {
      "cardId": "ST03-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "喬拉可爾・密佛格(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-005_p2.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 2000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【攻擊時】抽2張卡片，並廢棄2張自己的手牌。",
      "effectType": [
        "咚!!×1",
        "攻擊時"
      ],
      "cardSet": "2023年3月常規賽優勝紀念品"
    },
    {
      "cardId": "ST03-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "吉貝爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-006.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "魚人族",
        "王下七武海",
        "太陽海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "戰桃丸",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-007.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【啟動主要】【每回合1次】②(可將費用區的咚!!卡依指定的數量置為休息狀態)：從自己的卡組使最多1張費用4以下的「和平主義者」登場，並將卡組洗牌。",
      "effectType": [
        "咚!!×1",
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "戰桃丸",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-007_p1.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【咚!!×1】【啟動主要】【每回合1次】②(可將費用區的咚!!卡依指定的數量置為休息狀態)：從自己的卡組使最多1張費用4以下的「和平主義者」登場，並將卡組洗牌。",
      "effectType": [
        "咚!!×1",
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "常規賽卡包2022 Vol.2"
    },
    {
      "cardId": "ST03-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "托拉法爾加・羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-008.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 1000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "哈特海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-009",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・多佛朗明哥",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-009.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張費用7以下的角色卡放回持有者的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-009",
      "rarity": "SP卡",
      "role": "CHARACTER",
      "cardName": "唐吉訶德・多佛朗明哥(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-009_p1.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "唐吉訶德海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張費用7以下的角色卡放回持有者的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "ST03-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "巴索羅繆・大熊",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-010.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "革命軍"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】從自己的卡組上面查看3張卡片，並依任意順序變換排列放到卡組上面或下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "巴其",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-011.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "巴其宅急便"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "和平主義者",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-012.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "生物兵器",
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-013",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "波雅・漢考克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-013.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "九蛇海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-014",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "馬歇爾・D・汀奇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-014.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "黑鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張費用3以下的角色卡放回持有者的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-014",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "馬歇爾・D・汀奇(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-014_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "黑鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】將最多1張費用3以下的角色卡放回持有者的手牌。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "推廣卡包 Vol.3"
    },
    {
      "cardId": "ST03-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "砂暴",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-015.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "B・W"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】將最多1張費用7以下的角色卡放回持有者的手牌。",
      "effectType": [
        "主要"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-016",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "推手壓力砲",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-016.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "革命軍"
      ],
      "trigger": "【觸發器】發動這張卡片的【反擊】效果。",
      "effect": "【反擊】將最多1張費用3以下的角色卡放回持有者的手牌。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST03-017",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "迷戀甘風",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST03-017.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "藍"
      ],
      "type": [
        "王下七武海",
        "九蛇海賊團"
      ],
      "trigger": "",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，若自己的手牌在3張以下時，抽1張卡片。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "王下七武海【ST-03】"
    },
    {
      "cardId": "ST04-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "海道",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-001.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】咚!!-7(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：將最多1張對手的生命值卡放到廢棄區。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "百獸海賊團【ST-04】規則和判定變更"
    },
    {
      "cardId": "ST04-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "烏爾蒂",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-002.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 5000,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：使最多1張自己手牌中費用4以下的「培濟萬」登場。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-003",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "海道",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-003.png?230512",
      "cost": 9,
      "attribute": "打",
      "power": 10000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-5(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：KO最多1張對手費用6以下的角色卡，並且這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-003",
      "rarity": "SP卡",
      "role": "CHARACTER",
      "cardName": "海道(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-003_p1.png?230512",
      "cost": 9,
      "attribute": "打",
      "power": 10000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚‼-5(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：KO最多1張對手費用6以下的角色卡，並且這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "強大的敵人 【OP-03】"
    },
    {
      "cardId": "ST04-004",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "KING",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-004.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：KO最多1張對手費用4以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "QUEEN",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-005.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：抽2張卡片，並廢棄1張自己的手牌。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "佐佐木",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-006.png?230512",
      "cost": 3,
      "attribute": "射",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：抽1張卡片。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "席浦斯赫德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-007.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "JACK",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-008.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "JACK(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-008_p1.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "推廣卡包 Vol.3"
    },
    {
      "cardId": "ST04-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "金菈彌",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-009.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團",
        "SMILE"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "福茲胡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-010.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 3000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：KO最多1張對手費用3以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "福茲胡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-010_p1.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 3000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【登場時】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：KO最多1張對手費用3以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "常規賽卡包2022 Vol.2"
    },
    {
      "cardId": "ST04-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "黑瑪麗亞",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-011.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "黑瑪麗亞",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-011_p1.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 2000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "常規賽卡包2022 Vol.1"
    },
    {
      "cardId": "ST04-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "培濟萬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-012.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-013",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "X・多雷古",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-013.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "海軍",
        "多雷古海賊團",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-014",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "招牌大將“災禍”",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-014.png?230512",
      "cost": 4,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】抽1張卡片，並從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "無賴男炸彈",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-015.png?230512",
      "cost": 6,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "【觸發器】從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effect": "【主要】KO最多1張對手費用6以下的角色卡，並且從咚!!卡組追加最多1張活動狀態的咚!!卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-016",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "吐息",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-016.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【反擊】咚!!-1(可將自己場上的咚!!卡依指定的數量放回咚!!卡組)：最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST04-017",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "鬼島",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST04-017.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張舞台卡置為休息狀態：若自己的領航卡擁有《百獣海賊団》特徵時，從咚!!卡組追加最多1張休息狀態的咚!!卡。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "百獸海賊團【ST-04】"
    },
    {
      "cardId": "ST05-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "傑克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-001.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "四皇",
        "紅髮海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】咚‼-3(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：自己擁有《FILM》特徵的角色卡全數，在這個回合，力量值+2000。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "傑克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-001_p1.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "四皇",
        "紅髮海賊團"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】咚‼-3(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：自己擁有《FILM》特徵的角色卡全數，在這個回合，力量值+2000。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "艾茵",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-002.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "新海軍"
      ],
      "trigger": "",
      "effect": "【登場時】從咚‼卡組追加最多1張休息狀態的咚‼卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "艾茵",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-002_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "新海軍"
      ],
      "trigger": "",
      "effect": "【登場時】從咚‼卡組追加最多1張休息狀態的咚‼卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-003",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "安",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-003.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 3000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "海賊萬博會"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-003",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "安",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-003_p1.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 3000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "海賊萬博會"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-004",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "美音",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-004.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【防禦時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：將最多1張對手費用5以下的角色卡置為休息狀態。",
      "effectType": [
        "防禦",
        "防禦時"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-004",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "美音",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-004_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【防禦時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：將最多1張對手費用5以下的角色卡置為休息狀態。",
      "effectType": [
        "防禦",
        "防禦時"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "卡莉娜",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-005.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "GRAN TESORO"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】將這張角色卡置為休息狀態，可將1張自己手牌中擁有《FILM》特徵的卡片放置到廢棄區：若對手場上的咚‼卡比自己場上的咚‼卡多時，從咚‼卡組追加2張休息狀態的咚‼卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "卡莉娜",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-005_p1.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "GRAN TESORO"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】將這張角色卡置為休息狀態，可將1張自己手牌中擁有《FILM》特徵的卡片放置到廢棄區：若對手場上的咚‼卡比自己場上的咚‼卡多時，從咚‼卡組追加2張休息狀態的咚‼卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "基爾德・泰佐羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-006.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "GRAN TESORO"
      ],
      "trigger": "",
      "effect": "【攻擊時】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：抽2張卡片。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "基爾德・泰佐羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-006_p1.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 6000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "GRAN TESORO"
      ],
      "trigger": "",
      "effect": "【攻擊時】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：抽2張卡片。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "高登",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-007.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "高登",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-007_p1.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "獅鬼",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-008.png?230512",
      "cost": 6,
      "attribute": "斬",
      "power": 7000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "金獅子海賊團"
      ],
      "trigger": "",
      "effect": "若自己的場上有8張以上咚‼卡時，這張角色卡在對戰中不會遭到KO。",
      "effectType": [],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "獅鬼",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-008_p1.png?230512",
      "cost": 6,
      "attribute": "斬",
      "power": 7000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "金獅子海賊團"
      ],
      "trigger": "",
      "effect": "若自己的場上有8張以上咚‼卡時，這張角色卡在對戰中不會遭到KO。",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "史卡雷多",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-009.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "動物",
        "金獅子海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "史卡雷多",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-009_p1.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 3000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "動物",
        "金獅子海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "Z",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-010.png?230512",
      "cost": 7,
      "attribute": "打",
      "power": 8000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "新海軍"
      ],
      "trigger": "",
      "effect": "這張角色卡在與擁有屬性(打)的角色卡對戰時，這張角色卡，在這個回合，力量值+3000。【啟動主要】【每回合1次】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：這張角色卡，在這個回合，力量值+2000。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "Z",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-010_p1.png?230512",
      "cost": 7,
      "attribute": "打",
      "power": 8000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "新海軍"
      ],
      "trigger": "",
      "effect": "這張角色卡在與擁有屬性(打)的角色卡對戰時，這張角色卡，在這個回合，力量值+3000。【啟動主要】【每回合1次】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：這張角色卡，在這個回合，力量值+2000。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-011",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "道格拉斯・巴列德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-011.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 10000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "海賊萬博會"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】咚‼-4(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：將最多2張對手費用6以下的角色卡置為休息狀態。之後，這張角色卡，在這個回合，獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "啟動主要",
        "每回合1次",
        "雙重攻擊"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-011",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "道格拉斯・巴列德",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-011_p1.png?230512",
      "cost": 8,
      "attribute": "特",
      "power": 10000,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "海賊萬博會"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】咚‼-4(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：將最多2張對手費用6以下的角色卡置為休息狀態。之後，這張角色卡，在這個回合，獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "啟動主要",
        "每回合1次",
        "雙重攻擊"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "芭卡拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-012.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "GRAN TESORO"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "芭卡拉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-012_p1.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "GRAN TESORO"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-013",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "賓茲",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-013.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "新海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-013",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "賓茲",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-013_p1.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 6000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "新海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-014",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "布埃納・費斯特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-014.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "海賊萬博會"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「布埃納・費斯特」以外擁有《FILM》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-014",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "布埃納・費斯特",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-014_p1.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": null,
      "counter": 2000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "海賊萬博會"
      ],
      "trigger": "",
      "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「布埃納・費斯特」以外擁有《FILM》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-015",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "Dr.因迪可",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-015.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "科學家",
        "金獅子海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-015",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "Dr.因迪可",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-015_p1.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 4000,
      "counter": 1000,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "科學家",
        "金獅子海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-016",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "獅子威・皇宮地卷",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-016.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "金獅子海賊團"
      ],
      "trigger": "【觸發器】從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effect": "【主要】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：KO最多1張對手費用5以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-016",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "獅子威・皇宮地卷",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-016_p1.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "金獅子海賊團"
      ],
      "trigger": "【觸發器】從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effect": "【主要】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：KO最多1張對手費用5以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST05-017",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "鎧甲合體",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-017.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "海賊萬博會"
      ],
      "trigger": "【觸發器】從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effect": "【反擊】最多1張自己擁有《FILM》特徵的領航卡或角色卡，在這場對戰中，力量值+4000。若該張卡片為角色卡時，該張角色卡，在這個回合，不會遭到KO。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "ONE PIECE FILM edition【ST-05】"
    },
    {
      "cardId": "ST05-017",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "鎧甲合體",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST05-017_p1.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "紫"
      ],
      "type": [
        "FILM",
        "海賊萬博會"
      ],
      "trigger": "【觸發器】從咚‼卡組追加最多1張活動狀態的咚‼卡。",
      "effect": "【反擊】最多1張自己擁有《FILM》特徵的領航卡或角色卡，在這場對戰中，力量值+4000。若該張卡片為角色卡時，該張角色卡，在這個回合，不會遭到KO。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "家庭牌組套裝"
    },
    {
      "cardId": "ST06-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "盃",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-001.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【啟動主要】【每回合1次】③(可將費用區的咚‼卡依指定的數量置為休息狀態)，可以廢棄1張自己的手牌：KO最多1張對手費用0的角色卡。",
      "effectType": [
        "啟動主要",
        "每回合1次"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "克比",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-002.png?230512",
      "cost": 1,
      "attribute": "打",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：KO最多1張對手費用0的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-003",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "傑克斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-003.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-004",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "斯摩格",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-004.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "這張角色卡不會因效果而遭到KO。【咚‼×1】若場上有費用0的角色卡時，這張角色卡獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "咚‼×1",
        "雙重攻擊"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "戰國",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-005.png?230512",
      "cost": 5,
      "attribute": "知",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【攻擊時】最多1張對手的角色卡，在這個回合，費用-4。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "達絲琪",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-006.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：最多1張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "達絲琪(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-006_p1.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：最多1張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "常規賽卡包Vol.3"
    },
    {
      "cardId": "ST06-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "阿鶴",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-007.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "希娜",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-008.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張對手的角色卡，在這個回合，費用-4。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "芬布迪",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-009.png?230512",
      "cost": 2,
      "attribute": "打",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "貝魯梅柏",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-010.png?230512",
      "cost": 2,
      "attribute": "斬",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張對手的角色卡，在這個回合，費用-3。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "飛鼠",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-011.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-012",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "蒙其・D・卡普",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-012.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【啟動主要】可以廢棄1張自己的手牌，將這張角色卡置為休息狀態：KO最多1張對手費用4以下的角色卡。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-013",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "T彭恩",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-013.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-014",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "衝擊波",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-014.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "【觸發器】KO最多1張對手費用4以下的角色卡。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，KO最多1張對手活動狀態費用3以下的角色卡。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "大噴火",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-015.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "【觸發器】對手選擇1張自身的手牌後廢棄。",
      "effect": "【主要】抽1張卡片。之後，最多1張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "主要"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-016",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "乳白煙霧",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-016.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "【觸發器】抽1張卡片，自己的角色卡，在這個回合，不會遭到KO。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST06-017",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "海軍本部",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST06-017.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張對手的角色卡，在這個回合，費用-1。【啟動主要】可將這張舞台卡置為休息狀態：若自己的領航卡擁有《海軍》特徵時，最多1張對手的角色卡，在這個回合，費用-1。",
      "effectType": [
        "登場時",
        "啟動主要"
      ],
      "cardSet": "海軍【ST-06】"
    },
    {
      "cardId": "ST07-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "夏洛特・莉莉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-001.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 5000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×2】【攻擊時】可將1張自己生命值區上面或下面的卡片加入手牌：若自己的生命值卡在2張以下時，將最多1張自己的手牌加入生命值區上面。",
      "effectType": [
        "咚‼×2",
        "攻擊時"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・亞娜娜",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-002.png?230512",
      "cost": 1,
      "attribute": "知",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-003",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "夏洛特・卡塔克利",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-003.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】查看最多1張自己或對手生命值區上面的卡片，並放置在生命值區的上面或下面。之後，若自己的生命值卡張數比對手少時，這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)",
      "effectType": [
        "登場時",
        "速攻"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・史納克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-004.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】可將1張自己生命值區上面或下面的卡片加入手牌：這張角色卡，在這個回合，獲得【消失】，力量值+1000。(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)",
      "effectType": [
        "咚‼×1",
        "攻擊時",
        "消失"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-005",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・代佛克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-005.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】可將1張自己生命值區上面或下面的卡片加入手牌：將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・芙蘭佩",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-006.png?230512",
      "cost": 2,
      "attribute": "射",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・布璃叡",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-007.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 1000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・普琳",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-008.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】查看最多1張自己或對手生命值區上面的卡片，並放置在生命值區的上面或下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・普琳(異圖卡)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-008_p1.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】查看最多1張自己或對手生命值區上面的卡片，並放置在生命值區的上面或下面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "推廣卡包 Vol.3"
    },
    {
      "cardId": "ST07-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "夏洛特・蒙德爾",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-009.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】可以廢棄1張自己的手牌：使這張卡片登場。",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態，並將1張自己生命值區上面或下面的卡片加入手牌：KO最多1張對手費用3以下的角色卡。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-010",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "夏洛特・莉莉",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-010.png?230512",
      "cost": 7,
      "attribute": "特",
      "power": 8000,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】對手選擇下列其中一項。・將1張對手生命值區上面的卡片放置到廢棄區。・將1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "宙斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-011.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團",
        "歡樂友人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：最多1張自己的「夏洛特・莉莉」，在這個回合，獲得【消失】。(若這張卡片造成傷害時，觸發器不會發動且該張卡片即放置到廢棄區)",
      "effectType": [
        "啟動主要",
        "消失"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "塔馬哥男爵",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-012.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-013",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "普羅米修斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-013.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 3000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團",
        "歡樂友人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：最多1張自己的「夏洛特・莉莉」，在這個回合，獲得【雙重攻擊】。(這張卡片造成的傷害為2)",
      "effectType": [
        "啟動主要",
        "雙重攻擊"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-014",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "波哥姆斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-014.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黃"
      ],
      "type": [
        "純毛族",
        "BIG MOM海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "BIG MOM海賊團【ST-07】關於卡片編號勘誤與訂正的致歉"
    },
    {
      "cardId": "ST07-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "靈魂質問",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-015.png?230512",
      "cost": 5,
      "power": null,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "四皇",
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】發動這張卡片的【主要】效果。",
      "effect": "【主要】對手選擇下列其中一項。・將1張對手生命值區上面的卡片放置到廢棄區。・將1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "主要"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-016",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "力餅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-016.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團"
      ],
      "trigger": "【觸發器】抽1張卡片，查看最多1張自己或對手生命值區上面的卡片，並放置在生命值區的上面或下面。",
      "effect": "【反擊】查看最多1張自己或對手生命值區上面的卡片，並放置在生命值區的上面或下面。之後，最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST07-017",
      "rarity": "C",
      "role": "STAGE",
      "cardName": "女王・媽媽・聖歌號",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST07-017.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "黃"
      ],
      "type": [
        "BIG MOM海賊團",
        "歡樂友人"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【啟動主要】可將這張舞台卡置為休息狀態，並將1張自己生命值區上面或下面的卡片加入手牌：將最多1張自己費用3的角色卡以正面朝上加入持有者的生命值區上面。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "BIG MOM海賊團【ST-07】"
    },
    {
      "cardId": "ST08-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-001.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "【我方回合中】角色卡遭到KO時，附加最多1張休息狀態的咚‼卡在這張領航卡。",
      "effectType": [
        "我方回合中"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-002",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "美音",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-002.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 3000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "FILM"
      ],
      "trigger": "",
      "effect": "這張角色卡在與領航卡的對戰中不會遭到KO。【啟動主要】可將這張角色卡置為休息狀態：最多1張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-003",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "卡蒙",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-003.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "東方藍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "克比",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-004.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 1000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "【啟動主要】可將這張角色卡置為休息狀態：KO最多1張對手費用2以下的角色卡。",
      "effectType": [
        "啟動主要"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-005",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "傑克",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-005.png?230512",
      "cost": 9,
      "attribute": "斬",
      "power": 10000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "紅髮海賊團"
      ],
      "trigger": "",
      "effect": "【登場時】可以廢棄1張自己的手牌：KO全數費用1以下的角色卡。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "白星公主",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-006.png?230512",
      "cost": 4,
      "attribute": "知",
      "power": null,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "人魚族"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】最多1張對手的角色卡，在這個回合，費用-4。",
      "effectType": [
        "防禦",
        "登場時"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "納菲魯塔利・薇薇",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-007.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 1000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "阿拉巴斯坦王國"
      ],
      "trigger": "【觸發器】使這張卡片登場。",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)",
      "effectType": [
        "防禦"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "西格",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-008.png?230512",
      "cost": 1,
      "attribute": "斬",
      "power": 2000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "山賊"
      ],
      "trigger": "",
      "effect": "【登場時】最多1張對手的角色卡，在這個回合，費用-2。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "瑪姬",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-009.png?230512",
      "cost": 2,
      "attribute": "知",
      "power": null,
      "counter": 2000,
      "color": [
        "黑"
      ],
      "type": [
        "佛夏村"
      ],
      "trigger": "",
      "effect": "【登場時】若場上有費用0的角色卡時，抽1張卡片。",
      "effectType": [
        "登場時"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-010",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "蒙其・D・卡普",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-010.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 7000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "海軍"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-011.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "拉布",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-012.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黑"
      ],
      "type": [
        "動物"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-013",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "Mr.2・馮・克雷(班薩姆)",
      "isSpecialVersion": true,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-013.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 6000,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "前B・W"
      ],
      "trigger": "",
      "effect": "【咚‼×1】這張角色卡和對手的角色卡對戰且對戰結束時，也可以KO對戰的對手角色卡。若有執行此動作時，KO這張角色卡。",
      "effectType": [
        "咚‼×1"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-014",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "橡膠鐘擺",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-014.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】將最多1張自己廢棄區中費用2以下黑色的角色卡，加入手牌。",
      "effect": "【主要】可將1張自己生命值區上面的卡片加入手牌：最多1張對手的角色卡，在這個回合，費用-7。",
      "effectType": [
        "主要"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST08-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "橡膠槍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST08-015.png?230512",
      "cost": 3,
      "power": null,
      "counter": null,
      "color": [
        "黑"
      ],
      "type": [
        "草帽一行人"
      ],
      "trigger": "【觸發器】抽1張卡片。",
      "effect": "【主要】KO最多1張對手費用2以下的角色卡。",
      "effectType": [
        "主要"
      ],
      "cardSet": "Side 蒙其・D・魯夫【ST-08】"
    },
    {
      "cardId": "ST09-001",
      "rarity": "L",
      "role": "LEADER",
      "cardName": "大和",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-001.png?230512",
      "cost": 5,
      "attribute": "打",
      "power": 5000,
      "counter": null,
      "color": [
        "黄"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【對方回合中】若自己的生命值卡在2張以下時，這張領航卡的力量值+1000。",
      "effectType": [
        "咚‼×1",
        "對方回合中"
      ],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-002",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "雨月天婦羅",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-002.png?230512",
      "cost": 4,
      "attribute": "斬",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黄"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "【觸發器】將最多1張對手費用2以下的角色卡置為休息狀態，並將這張卡片加入手牌。",
      "effect": "-",
      "effectType": [],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-003",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "烏爾蒂",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-003.png?230512",
      "cost": 4,
      "attribute": "打",
      "power": 6000,
      "counter": 1000,
      "color": [
        "黄"
      ],
      "type": [
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-004",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "海道",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-004.png?230512",
      "cost": 4,
      "attribute": "特",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黄"
      ],
      "type": [
        "四皇",
        "百獸海賊團"
      ],
      "trigger": "",
      "effect": "【咚‼×1】若自己的生命值卡在2張以下時，這張角色卡在對戰中不會遭到KO。",
      "effectType": [
        "咚‼×1"
      ],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-005",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "光月御田",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-005.png?230512",
      "cost": 7,
      "attribute": "斬",
      "power": 7000,
      "counter": null,
      "color": [
        "黄"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "【咚‼×1】這張角色卡獲得【雙重攻擊】。(這張卡片造成的傷害為2)【KO時】可以廢棄2張自己的手牌：將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effectType": [
        "咚‼×1",
        "雙重攻擊",
        "KO時"
      ],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-006",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "光月桃之助",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-006.png?230512",
      "cost": 2,
      "attribute": "特",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黄"
      ],
      "type": [
        "和之國",
        "光月家"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-007",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "忍",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-007.png?230512",
      "cost": 3,
      "attribute": "特",
      "power": 2000,
      "counter": null,
      "color": [
        "黄"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【防禦時】可將1張自己生命值區上面或下面的卡片加入手牌：這張角色卡，在這場對戰中，力量值+4000。",
      "effectType": [
        "防禦",
        "防禦時"
      ],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-008",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "霜月牛丸",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-008.png?230512",
      "cost": 5,
      "attribute": "斬",
      "power": 6000,
      "counter": null,
      "color": [
        "黄"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【咚‼×1】【攻擊時】可將1張自己生命值區上面或下面的卡片加入手牌：使最多1張自己手牌中費用4以下黃色擁有《和之國》特徵的角色卡登場。",
      "effectType": [
        "咚‼×1",
        "攻擊時"
      ],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-009",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "風月飯糰",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-009.png?230512",
      "cost": 3,
      "attribute": "斬",
      "power": 4000,
      "counter": 1000,
      "color": [
        "黄"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "【觸發器】KO最多1張對手費用1以下的角色卡，並將這張卡片加入手牌。",
      "effect": "-",
      "effectType": [],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-010",
      "rarity": "SR",
      "role": "CHARACTER",
      "cardName": "波特卡斯・D・艾斯",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-010.png?230512",
      "cost": 6,
      "attribute": "特",
      "power": 7000,
      "counter": null,
      "color": [
        "黄"
      ],
      "type": [
        "和之國",
        "白鬍子海賊團"
      ],
      "trigger": "",
      "effect": "【每回合1次】若這張角色卡即將遭到KO時，替換成可將1張自己生命值區上面或下面的卡片放置到廢棄區。",
      "effectType": [
        "每回合1次"
      ],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-011",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "蒙其・D・魯夫",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-011.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 5000,
      "counter": 1000,
      "color": [
        "黄"
      ],
      "type": [
        "和之國",
        "草帽一行人"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-012",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "大和",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-012.png?230512",
      "cost": 3,
      "attribute": "打",
      "power": 3000,
      "counter": 2000,
      "color": [
        "黄"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "【攻擊時】可將1張自己生命值區上面或下面的卡片加入手牌：這張角色卡，到下一個我方回合開始前，力量值+2000。",
      "effectType": [
        "攻擊時"
      ],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-013",
      "rarity": "C",
      "role": "CHARACTER",
      "cardName": "大和",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-013.png?230512",
      "cost": 5,
      "attribute": "特",
      "power": 7000,
      "counter": 1000,
      "color": [
        "黄"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "",
      "effect": "-",
      "effectType": [],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-014",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "鳴鏑",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-014.png?230512",
      "cost": 1,
      "power": null,
      "counter": null,
      "color": [
        "黄"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "【觸發器】可以廢棄2張自己的手牌：將最多1張自己卡組上面的卡片加入生命值區上面。",
      "effect": "【反擊】若自己的生命值卡在2張以下時，最多1張對手的領航卡或角色卡，在這個回合，力量值-3000。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "Side 大和【ST-09】"
    },
    {
      "cardId": "ST09-015",
      "rarity": "C",
      "role": "EVENT",
      "cardName": "雷鳴八卦",
      "isSpecialVersion": false,
      "imageURL": "https://asia-hk.onepiece-cardgame.com/images/cardlist/card/ST09-015.png?230512",
      "cost": 2,
      "power": null,
      "counter": null,
      "color": [
        "黄"
      ],
      "type": [
        "和之國"
      ],
      "trigger": "【觸發器】抽1張卡片。",
      "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，若自己的生命值卡在2張以下時，將最多1張對手費用3以下的角色卡，以正面朝上加入持有者的生命值區上面或下面。",
      "effectType": [
        "反擊"
      ],
      "cardSet": "Side 大和【ST-09】"
    }
  ]


client.query('TRUNCATE TABLE cards')
    .then(res => {
        console.log('Table truncated successfully');
        return client.query('ALTER SEQUENCE cards_id_seq RESTART WITH 1');
    })
    .then(res => {
        console.log('Sequence reset successfully');
        
        // Generate and execute INSERT INTO statements
        const promises = cards.map((card) => {
            return new Promise((resolve, reject) => {
                client.query(
                    "INSERT INTO cards (cardId, rarity, role, cardName, isSpecialVersion, imageURL, cost, attribute, power, counter, color, type, trigger, effect, effectType, cardSet) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)", 
                    [card.cardId, card.rarity, card.role, card.cardName, card.isSpecialVersion, card.imageURL, card.cost, card.attribute, card.power, card.counter, `{${card.color.join(',')}}`, `{${card.type.join(',')}}`, card.trigger, card.effect, `{${card.effectType.join(',')}}`, card.cardSet],
                    (err, res) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(res);
                        }
                    }
                );
            });
        });

        return Promise.all(promises);
    })
    .then(() => {
        console.log('json import successfully');
        // Close the connection after all INSERT INTO operations are completed
        client.end();
        // Force Node.js process to exit
        process.exit(0);
    })
    .catch((err) => {
        console.log('Error inserting data:', err);
        client.end();
        // Force Node.js process to exit
        process.exit(1);
    });