# killthislove

去年是没有感情的打工机器人，今年是没有感情的打工机器人 Pro

## 这是什么

[SPLATOON 2](https://splatoon.nintendo.com/) 的 Salmon Run / Rank Battle / Regular Battle / Legau Battle / SplatNet Gear 的 schedule。

## 那么哪里可以看呢

[这里！](http://47.103.13.83/) -> 之前的服务器和域名过期了来着，所以就只是个裸 IP。

## 为什么做这个

因为(我所知道的)能查时间表的只有在 Nintendo Switch Online 上以及[这里](https://splatoon2.ink/) 查看。

以及因为出于对 splatoon 的喜爱。

## 数据来源

1. schedule 数据来源于这里 -> [splatoon2.ink](https://splatoon2.ink/)
2. 武器图片和装备图片来自这里 -> [Splatoon 2 Datamine](https://leanny.github.io/splat2/en_files.html)

## 搭建相关

前端用了 ReactJS ，以及一些 ReactJs 生态里的工具。

后端用了 Koa 2。<del>因为菜所以</del>只是简单的爬取一下数据，存到本地然后提供一下前端数据申请。

爬数据是用的 nightmare 这个中间件。

## 一些说明

1. 本站数据、图片等来源于网路，所有权都归作者所有。
2. 会继续深化(开发)一些(花里胡哨的)功能。
3. 确实没有参与到站内数据、资源的制作中(schedule 的数据是开放的，感谢[mattisenhower](https://twitter.com/mattisenhower)，但是所有的图片都是网路获取的)，所以如果有伤害/侵犯到谁的利益，真的很抱歉，请一定联系我 -> bbbiaozzza@gmail.com 。

## ToDo-List

- [x] 完成 Regular/Rank/League Battle 的时间表
- [x] 已经爬到了所有的 gear 图片，所以可以开始最后一模块的实现了。
- [ ] 图片预加载的问题。
- [ ] rank/league Battle 以及 SplatNet Gear 的移动端改进。
- [ ] 订阅功能，在 salmon run 开始/结束的时候发邮箱/短信通知。
