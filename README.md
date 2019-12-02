# killthislove

去年是没有感情的打工机器人，今年是没有感情的打工机器人 Pro

## 这是什么

[SPLATOON 2](https://splatoon.nintendo.com/) 的 Salmon Run / Rank Battle / Regular Battle / Legau Battle / SplatNet Gear 的 schedule。

## 那么哪里可以看呢

[这里！](http://47.103.13.83/) -> 之前的服务器和域名过期了来着，所以就只是个裸 IP。

## 为什么做这个

因为(我所知道的)能查时间表的只有在 Nintendo Switch Online 上以及[这里](https://splatoon2.ink/)和[这里](https://content.oatmealdome.me/bcat/salmon_run)查看。

以及因为出于对 splatoon 的喜爱。

## 数据来源

1. schedule 数据来源于这里 -> [splatoon2.ink](https://splatoon2.ink/)
2. 武器图片和装备图片来自这里 -> [Splatoon 2 Datamine](https://leanny.github.io/splat2/en_files.html)

## 搭建相关

前端用了 ReactJS ，以及一些 ReactJs 生态里的工具。

后端用了 Koa 2。<del>因为菜所以</del>只是简单的爬取一下数据，存到本地然后提供一下前端数据申请。

爬数据是用的 nightmare ，以及手动下载了

## 一些说明

1. 本站数据、图片、logo 等来源于网路，所有权都归作者所有。
2. 会继续深化(开发)一些(花里胡哨的)功能。
3. 确实没有参与到站内数据、资源的制作中，所以如果有伤害/侵犯到谁的利益，真的很抱歉，请一定联系我 -> bbbiaozzza@gmail.com 。
4. 数据来源。一部分来自[splatoon2.ink](https://splatoon2.ink/)，感谢[mattisenhower](https://twitter.com/mattisenhower)。还有一部分来自[这里](https://content.oatmealdome.me/bcat/salmon_run)，因为被墙了，所以这里需要翻墙，而且这个网站反爬做的好厉害(可能就是我菜)，所以通过一些观察。。。在[这里](https://github.com/Leanny/leanny.github.io)拿到的。所以其实数据的获取都不是通过爬虫完成的，前面那个是直接申请的，后面那个是手动下载的(因为一份数据里就就够用到 2021 年初了，所以本来都打算拿起 python 写爬虫，现在也放弃了，什么时候心情好想起来去下载一下就好了。)

## ToDo-List

- [x] 完成 Regular/Rank/League Battle 的时间表。
- [x] 已经爬到了所有的 gear 图片，可以进行 SplatNet Gear 的完成。
- [x] 获取到了更丰富了 salmon run donation data，完成数据更换。
- [x] 把底部的说明界面移出路由，仅作为一个普通的 modal。
- [ ] ~~图片预加载的问题。~~
- [x] ts迁移
- [ ] ts完善
- [ ] 图片加载优化。
- [ ] ~~rank/league Battle 以及 SplatNet Gear 的移动端完善。~~
- [ ] 移动端 / web端代码分离。
- [ ] 邮件/短信订阅功能
