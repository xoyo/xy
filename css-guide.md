# CSS代码规范 —— css_guide

* ID 和 Class命名遵守 —— **通用约定 common-conventions**)  
	> 1.1 ID 是用来标示具体模块，命名必须具体且唯一，由前缀和名字组成，不要滥用ID。  
	> 1.2 Class 是用来标示某一类型的元素，命名简洁表意清楚。如：.list  
	> 1.3 推荐使用的class名：  
	> 表示状态：** .on,.active,.selected,.current **  
	> 表示位置：** .first,.last,.main,.side **  
	> 表示结构：** .hd,.bd,.ft,.col,.section **  
	> 通用元素：** .tb,.frm,.nav,.list,.item,.tag,.pic,.info **  


* 单条CSS规则的书写格式要求  
	> 属性需要写在一行。  
	> ** .selector{property1:value;property2:value;} **  
	
	> 多个（>1）select选择项每个占一行  
	> ** .selector1, **  
	> ** .selector2, **  
	> ** .selector3{property:value;} **  
	
	> 兼容多个浏览器时，将标准属性写在后面，如：  
	> ** {-webkit-border-raduis:4px;-moz-border-raduis:4px;border-raduis:4px;} **  

* 注释的格式  
	> /\* 具体模块1名称 \*/  
	> ...  
	> /\* 具体模块2名称 \*/  
	> ... 


* 尽量避免使用CSS Hack  
	> 如需要推荐使用下面的：  
	> IE6 —— ** _property:value **  
	> IE6/7 —— ** \*property:value **  


* 推荐使用after的方式清浮动 或overflow的方式  
	> ** .selector:after **  
	> ** {content:".";display:block;height:0;clear:both;visibility:hidden;} **  
	
	> ** .selector{zoom:1;} **  

* 绝对不要在CSS中使用“*”选择符  


# CSS浏览器支持标准  


* A级
 	* IE8
 	* IE7
 	* IE6
 	* Chrome6
 	* Firefox3.6

* B级
 	* Chrome7
 	* Chrome6
 	* Chrome3
 	* Firefox4
 	* Safari
* C级
 	* IE9
 	* Firefox2-3.5
 	* Opera

> (注：根据2010-11-19 cnzz浏览器统计数据整理)

> 1. A级 —— 交互和视觉安全符合设计要求
> 2. B级 —— 视觉上允许有所差异，不破坏页面整体效果
> 3. C级 —— 可忽视视觉上的问题，但不妨碍使用