;(function($,window,document,undefined){
	//定义构造函数
	var Beaufifier=function(ele,opt){
		this.$element=ele,
		this.default={
			'color':'red',
			'fontsize':'12px',
			'textdecoration':'none'
		},
		this.options=$.extend({},this.default,opt)		
	}
	Beaufifier.prototype={
		beautify:function(){
			return this.$elment.css({
				'color':this.options.color,
				'fontsize':this.options.fontsize,
				'textdecoration':this.options.textdecoration
			});
		};
	}
	
	//添加插件
	$.fn.Beautify=function(options){
		var beautify=new Beaufifier(this,options);
		return beautify.beautify();
	}
	
})(jQuery,window,document);