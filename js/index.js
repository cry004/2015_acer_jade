function initial(){
    this.init = function(){
        if(page == 'index'){
            var _index = new index();
            setTimeout(function(){
                _index.init();
            },500)
        }
        if(page == 'login'){
            var _login = new login();
            _login.init();
        }
        if(page == 'pd'){
            var _pd = new pd();
            _pd.init();
        }
        if(page == 'rule'){
            setTimeout(people_Ani,1000)
           function people_Ani(){
                $('.wrapper .content2 .people ').fadeIn();
                TweenMax.fromTo($('.wrapper .content2 .people '), 2, {x:-150,y:50 }, {x:0,y:0 ,ease:Expo.easeOut });
                $('.rule_pd').delay(600).fadeIn().addClass('animate');
            }
        }
        // if(page == 'list'){
        //     $.ajax({
        //         url:'http://www.acer-sp.com.tw/v-nitro/acernitro/?apptype=acernitro&mode=lotterylist&access_token=e50fb1f703b1533d768ee4609a04e3fb&op=json',
        //         //url: "http://www.acer-sp.com.tw/cny/winner.json",
        //         cache: !1,
        //         type: "get",
        //         dataType: "json",
        //             success: function(resp){
        //                 for(var i = 0; i<resp.data.length; i++){                                
        //                     $('#Date').append('<option>'+resp.data[i].date+'</option>');
        //                 }
        //                 for(var i = 0; i<resp.data[0].list.length; i++){                                
        //                     $('.wform').append('<tr><td>'+resp.data[0].date+'</td><td>'+resp.data[0].list[i].name+'</td><td>'+resp.data[0].list[i].tel+'</td><td>'+resp.data[0].list[i].sale_store+'</td></tr>');
        //                 }
        //                 $(document).on('change', '#Date', function(event){
        //                     var time;
        //                     for(var i = 0; i<resp.data.length; i++){        
        //                         // console.log(i,$('#Date').val(),resp.data.length);
        //                         if ($('#Date').val() == resp.data[i].date.toString()){
        //                             time = i;
        //                             $('.wform').empty();

        //                         }
        //                     }
        //                     for(var i = 0; i<resp.data[time].list.length; i++){
        //                         $('.wform').append('<tr><td>'+resp.data[time].date+'</td><td>'+resp.data[time].list[i].name+'</td><td>'+resp.data[time].list[i].tel+'</td><td>'+resp.data[time].list[i].sale_store+'</td></tr>');
        //                     }
        //                 });
        //             },
        //             error: function(resp){
        //                 alert('有誤請稍後再試！')
        //             }
        //     });
        // }
    }
}
function navf(){
        var _s = this;
    this.init = function(){
        $('map area[shape="polygon"],.hover div').each(function(){
             _s.hovera($(this));
        });
    }
    this.hovera = function(obj){
        var _index = obj.index()+1;
        obj.hover(function(){
            $('.nav'+_index+'_h').show();
        },function(){
            $('.nav'+_index+'_h').hide();
        })
    }
}
function index(){
    var _self = this;
    var targetPoz = {x:0,y:0},
        tempPoz = {x:0,y:0};
    this.init = function(){
        $('.bg_mask').fadeOut(3000);
        $('.i_pd').fadeIn(100).find('img').animate({'top':0+'%'},100,function(){
            $('.p1').delay(100).fadeIn(100).find('img').delay(100).animate({'top':0+'%','left':0+'%'},100,function(){
                $('.p2').fadeIn(100,function(){
                    $('.p3').fadeIn(100).find('img').animate({'left':0+'%'},100,function(){
                        $('.p4').fadeIn(100).find('img').animate({'left':0+'%'},100);
                        $('.p5').delay(100).fadeIn(300).find('img').delay(100).animate({'left':0+'%'},300,function(){
                            $('.fire_bg').fadeIn(100).find('img').animate({'left':0+'%'},100,function(){
                                setTimeout(function(){
                                   _self.titleAni();   
                                },300);
                            });
                        });
                    });
                });
            });
        });      
    }
    this.titleAni = function(){
         $('.t1_1,.t1_2').fadeIn(500).find('img').animate({'top':0+'%','left':0+'%'},500,'easeOutQuint',function(){
            $('.t2').fadeIn(200).find('img').animate({'left':0+'%'},200,'easeOutQuint');
            $('.t3').fadeIn(200).find('img').animate({'left':0+'%'},200,'easeOutQuint',function(){
                $('.login').fadeIn(600);
                $('.login_l,.login_r').find('img').animate({'left':0+'%'},600,'easeOutQuint');
             });
         });
         this.loginani();
         this.mousef();
    }
   this.loginani = function(){
        $('.login_btn').jsMovie({
           sequence : 'btn000#.png',
            from: 1,
            to: 7,
            height:131,
            width:305,
            folder : 'img/',
            fps: 10,   
            repeat:false
        
        });
        setInterval(function(){
            $('.login_btn').jsMovie("play");
        },3000)
        $('.login_btn').hover(function(){
            $('.btn_o').show();
        },function(){
            $('.btn_o').hide();
        })
    }
    this.mousef = function(){
        $.Body.mousemove(function(event){
            targetPoz.x = event.pageX-$.Window.width()/2;
            targetPoz.y = event.pageY-$.Window.height()/2;
        });
        var track_timer = setInterval(
            function(){
                tempPoz.x += (targetPoz.x-tempPoz.x);
                tempPoz.y += (targetPoz.y-tempPoz.y);
                $('.index_part').eq(0).css({'margin-left': 20*(tempPoz.x/$.Window.width())+'px'});
                $('.index_part').eq(1).css({'margin-left': -40*(tempPoz.x/$.Window.width())+'px'});
                $('.index_part').eq(2).css({'margin-left': 40*(tempPoz.x/$.Window.width())+'px'});
                $('.login').css({'margin-left': -40*(tempPoz.x/$.Window.width())+'px'});
                },
            30
        );
    }

}
function pd(){
    this.init = function(){
        $('.content2 .pd').each(function(){
            var _self = $(this);
            var _index = _self.index();
            setTimeout(function(){
                pdturn(_self,_index);
            },250*_index+500);
        });
        $('.content2 .pd').hover(function(){
            $(this).find('.pd_o').stop().animate({'opacity':1,'-ms-filter':'progid:DXImageTransform.Microsoft.Alpha(Opacity='+100+')','filter': 'alpha(opacity='+100+')'},10).delay(170).animate({'opacity':0,'-ms-filter':'progid:DXImageTransform.Microsoft.Alpha(Opacity='+0+')','filter': 'alpha(opacity='+0+')'},10);
        },function(){
            
        });
        this.clickf();
    }
    this.clickf = function(){
        $('.video').click(function(){
            $('.video_c').fadeIn();
            player.playVideo();
            $('.footer').css({'position':'fixed'});
        });
        $('.close3').click(function(){
            $('.video_c').fadeOut();
            player.stopVideo();
            $('.footer').removeAttr('style');
        })
    }
    function pdturn(obj){
        obj.addClass('turn');
    }
}

function login(){
    this.init = function(){
       $( "#Buydate" ).datepicker({minDate:new Date(2015, 3, 1), maxDate: new Date(2015, 4, 4)});
       $(document).on('change', '#Store', function(event){
            if ($('#Store').val() =="其它"){
                $('.store_tit').html('請填寫');
                // $('#Store_name').removeAttr('style').removeAttr('disabled');
            }else{
                $('.store_tit').html('分店');
                // $('#Store_name').val('').css('background','#ccc').attr('disabled','disabled');
            }
        }); 
       init_address();
       this.clickf();
    }
    this.clickf = function(){
        $('.demo').click(function(){
            $('.demo_pic').show().parent().fadeIn();
        });
        $('.close1').click(function(){
            $('.send,.demo_pic').hide().parent().fadeOut();
        });
        $('.close2').click(function(){
            $('.send').hide().parent().fadeOut();
            clearForm();
        });
    }
    
}

function resizeit(){
    var  bw,bh,bwr,bhr,tem_ratio,ratio = 1920/1080;
    this.resitfun = function(){
        bw = $.Body.width(),
        bh = $.Body.height(),
        bwr = bw/1920,
        bhr = bh/1080,
        tem_ratio = bw/bh;
        if(tem_ratio >= ratio){
            $.bg .css({'width': bw, 'height':bw/ratio,'left': 0, 'top': -0.5*(bw/ratio-bh) });
            $.Content.css({'width': bh*ratio, 'height':bh,'left': 0.5*(bw-(bh*ratio)), 'top': 0});
        }else{
            $.bg .css({'width': ratio*bh, 'height':bh,'left': -0.5*((ratio*bh)-bw), 'top':0 });
            $.Content.css({'width': bw, 'height':bw/ratio,'left': 0, 'top': 0.5*(bh-(bw/ratio))});   
        }

    } 

}

(function ($){       
    //*****去除 png圖 黑邊*****
    $.fn.PngFix = function () {
    	var _self = $(this)
        _self.find('img[src$=".png"],img[src$=".gif"]').each(function() {
            this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='image',src='"+ this.src +"')";
        });
    }

})(jQuery);

var _initial = new initial();
var _resize = new resizeit();
var _navf = new navf();

$(function(){
	$.Body =$('body');	
	$.Window = $(window);
    $.Wrapper = $.Body.find('div.wrapper');
    $.Loading = $.Body.find('div.loading');
    $.bg = $('.bg');
    $.Content = $('.content');
    $.navbg = $('.navbg');
    var imagesN = $("body img").length;
    var c = 0;
    jQuery.support.cors = true;
        var $imgs = $('body img'),
        count = 0;
        $imgs.imagesLoaded().progress(function(instance, image){
            count ++;
            percent = Math.round(count/$imgs.length*100);
            $('.loading .percent').html(percent+'%');
            $('.loading .hr').css({'width':percent+'%'});
            if(count == $imgs.length){
                $.Body.PngFix();
                $.Loading.fadeOut();
                $.Window.resize(_resize.resitfun).trigger('resize');
                _initial.init();
                _navf.init();
            }

        });
    
});

