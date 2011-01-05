# 通用约定 —— common-conventions


* 文件与目录命名约定
	> * 一律小写，必须是英文单词或产品名称的拼音，多个单词用连字符（-）连接。 只能出现英文字母、数字和连字符，严禁出现中文，严禁出现广告相关单词 Advertisement、ad、ads ...。  
	> * 出现版本号时，需要用字母 v 做为前缀，小版本号用点号（.）隔开，比如 global-v8.js 或 detail-v2.2.js 。  
	> * 该命名规范适用于 html, css, js, swf, xml, png, gif, jpg, ico 等前端维护的所有文件类型和相关目录。  
	> * js 和 css 压缩文件，统一以 -min 结尾，比如源码文件为 test.js，压缩后为 test-min.js 。  


* 文件编码约定
	> * 前端开发涉及的所有文本文件统一采用UTF-8编码  

* id 和 class 命名约定
	> * id 和 class 的命名总规则为：内容优先，表现为辅。  
	> 首先根据内容来命名，比如 main-nav 如果根据内容找不到合适的命名，可以再结合表现来定，比如 skin-blue,col-main。  
	> 建议使用html5中语义标签作为class（article | aside | details | footer | header | hgroup | mark | nav | section）  
	> * id 和 class 名称一律小写，多个单词用连字符连接，比如 recommend-presents。  
	> * id 和 class 名称中只能出现小写的 26 个英文字母、数字和连字符（-），任何其它字符都严禁出现。  
	> * id 和 class 尽量用英文单词命名 。确实找不到合适的单词时，可以考虑使用模块的中文拼音，比如 yaoyao, longmeng-bbs。  
	> * 在不影响语义的情况下，id 和 class 名称中可以适当采用英文单词缩写，比如 col, nav, hd, bd, ft 等，但切忌自造缩写。  
	> * id 和 class 名称中的第一个词必须是单词全拼或语义非常清晰的单词缩写，比如 present, col。  
	> * 仅在 JavaScript 代码中当作 hook 用的 id 或 class, 命名规则为 J_UpperCamelCase（请注意，J_ 后的首字母也大写！）, 其中字母 J 代表 JavaScript, 也是钩子（hook）的象形。注意：如果在 JavaScript 和 CSS 中都需要用到，则不用遵守本约定。  