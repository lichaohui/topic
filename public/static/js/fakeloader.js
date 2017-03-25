/*--页面加载效果动画特效--*/
$(".fakeloader").fakeLoader({
  timeToHide:500000,
  bgColor:"rgba(100,100,100,0.5)",
  spinner:"spinner3"
});

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
  if(document.readyState == "complete") {
    $('.fakeloader').remove();     
  }
}