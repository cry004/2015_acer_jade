  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-61373469-1', 'auto');
  ga('send', 'pageview');

// function GT(category,action,label){
// 	//console.log(category+";"+action+";"+label)
//   ga('send','event',category,action,label, 1);  
// }//

// function trackEvent(category, label, event) {
// 	ga('send', 'event', category, 'click', label, 1);
// }

var index = 'http://coldstone-8th.campaigns.com.tw/';

function outlink(id){
	//consle.log('c;k')
	switch(id){
	case "official":
	    window.open('//www.acer.com.tw/ac/zh/TW/content/home','_blank');	    
	break;	
	case "index":
	    location.href='index.html';	    
	break;	
	case "product":
	    location.href='product.html';	    
	break;
	case "login":
	    // location.href='login.html';	    
	    alert('活動登錄日期已結束，謝謝您的熱情支持');
	break;
	case "rule":
	    location.href='rule.html';	    
	break;
	case "winner":
		alert('敬請期待！')
	    //window.open('//www.acer.com.tw/ac/zh/TW/content/home','_blank');	    
	break;
	case "agree":
	    window.open('//www.acer-group.com/public/index/privacy_main_TCH.htm','_blank');	    
	break;
	}
    
}