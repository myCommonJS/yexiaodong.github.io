---
layout: post
title:  "jekyll默认模板修改"
date:   2016-03-31
categories: Test
---
虽然jekyll有着jekyllbootstrap模板，但是本人觉得如果是做个博客，只需要将默认的模板修改一下就可以了。

# 1 中文编码问题 #
如果html页面中有中文就会报错，“invalid byte sequence in UTF-8”。

**原因：**html页面编码是ANSI。

**方法：**使用Notepad++编辑器，修改页面的编码格式，如：header.html文件保存为UTF-8无BOM编码格式。

**PS：**不要适应记事本，否则有BOM会导致页面导航前有空格。



# 2 导航条问题 #
默认模板的导航条只有一个about，如何在加一个blog菜单呢？

**方法：**
在根目录加一个.md或html文件。其页面变量title就是导航的名称。

**遗漏问题：**由于导航条的信息是使用全局变量pages循环输出，导致导航条的顺序无法控制。

**遗漏问题解决：**在文件名称前添加“01_”控制文件的排序，从而控制导航条在pages中的排序，最终解决导航排序问题。
({{site.url}}/assets/screenshot.jpg)


# 3 时间格式修改 #
由于jekyll的默认时间是国外的样式，不符合国人的习惯（主要是英文是硬伤，改改改）

默认样式的代码是（Mar 31, 2016）：

```ruby
{ post.date | date: "%b %-d, %Y" } //最外层还有一对{}，由于写了无法显示，所有忽略了
```
从中可以看出是使用Liquid语法（[官网](https://docs.shopify.com/themes/liquid/basics)）。

改为（2016-03-31）：

```ruby
{ post.date | date: "%Y-%m-%d" } //最外层还有一对{}，由于写了无法显示，所有忽略了
```


# 4 站内搜索问题 #

参考：https://codeboy.me/2016/01/18/jekyll-search-component/

# 5 站点统计与评论

站点统计：http://zhanzhang.cnzz.com/
评论：使用社会化评论系统，如：多说，友言，畅言等。

