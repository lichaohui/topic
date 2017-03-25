/* global fullpage */
"use strict";

$(function(){  
  //动态设置一些元素的css样式
  let w=$('.fp-section-content').width();
  let pw=$('.people').width();
  $('.people').css('left',(w-pw)/2);
  
  //返回第一页
  $('.back').click(function(){
    $('.fp-controller-dotted').eq(0).click();
  })
  
  //fullpage全屏滚动效果
  fullpage.init('#sectionContent', {
    beforeLeave: function (leaveIndex, nowIndex) {
      let echartId=$('.fp-section').eq(leaveIndex-1).attr('data-echart');
      if(echartId){
        echart(echartId,eval(echartId),true);
      }
      let animates=$('.fp-section').eq(leaveIndex-1).find('*');
      for(let i=0;i<animates.length;i++){
        if($(animates[i]).attr('data-animate')){
		  $(animates[i]).removeClass('animate-in-'+$(animates[i]).attr('data-animate')).addClass('animate-out-'+$(animates[i]).attr('data-animate'));
        }
      }
    },
    afterLoad: function (afterIndex) {
      let echartId=$('.fp-section').eq(afterIndex-1).attr('data-echart');
      if(echartId){
        echart(echartId,eval(echartId));
      }
      let animates=$('.fp-section').eq(afterIndex-1).find('*');
      for(let i=0;i<animates.length;i++){
		if($(animates[i]).attr('data-animate')){
		  $(animates[i]).removeClass('animate-out-'+$(animates[i]).attr('data-animate')).addClass('animate-in-'+$(animates[i]).attr('data-animate'));
        }
      }
    },
    beforeSlideLeave: function (pageIndex, slideNow, slideAfter) {
    },
    afterSlideLoad: function (pageIndex, slideIndex) {
    }
  });
})
