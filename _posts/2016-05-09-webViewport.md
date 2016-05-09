---
layout: post
title:  "HTML5之viewport使用"
date:   2016-05-09
categories: 前端
excerpt: 每款手机都有不同的分辨率，不同的屏幕大小，我们开发的页面如何才能知道当前页面是多大的呢？viewport帮助你判断设备屏幕大小...
---

随着智能手机的普及，移动互联网也越来越受到人们的重视，用html5开发响应式网站是最好的选择。然而，每款手机都有不同的分辨率，不同的屏幕大小，我们开发的页面如何才能知道当前页面是多大的呢？viewport帮助你判断设备屏幕大小。

# 语法介绍

{% highlight html %}
<meta name="viewport" 
	content="
			width=[pixel_value | device-width],
			height=[pixel_value | device-height],
			initial-scale=float_value,
			minimum-scale=float_value,
			maximum-scale=float_value,
			user-scalable=[yes|no],
			target-densitydpi=[dpi_value | device-dpi | high-dpi | medium-dpi | low-dpi]
			"
/>
{% endhighlight %}

# 分析

## width

控制viewport的大小，可以指定一个值或者特殊的值，如**device-width**为设备的宽度（一般是使用该值，单位为缩放为100%时的CSS像素），最重要的属性，必须设置。

## height

和width想对应，指定高度，一般不设置。

## initial-scale

初始缩放，即页面初始缩放程度。这是一个浮点值，是页面的大小的一个乘值。一般设置为1.0

## minimum-scale

最小缩放，即页面最小缩放程度。这是一个浮点值，是页面的大小的一个乘值。一般设置为1.0

## maximum-scale

最大缩放，即页面最大缩放程度。这是一个浮点值，是页面的大小的一个乘值。一般设置为1.0

## user-scalable

用户调整缩放，即用户是否能改变页面缩放程度。yes-能，no-不能。一般设置为no。该属性为no时，minimum-scale和maximum-scale都被忽略，因为不肯缩放。

PS:所有的缩放值都必须在0.01-10的范围之内。

# 例子

设置屏幕宽度为设备宽度，禁止用户手动调整缩放
{% highlight html %}
<meta name="viewport" content="width=device-width,user-scalable=no"/>
{% endhighlight %}

设置屏幕密度为高频，中频，低频自动缩放，禁止用户手动调整缩放
{% highlight html %}
<meta name="viewport" content="width=device-width,target-densitydpi=high-dpi,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
{% endhighlight %}

**转：http://www.php100.com/html/webkaifa/HTML5/2012/0831/10979.html**