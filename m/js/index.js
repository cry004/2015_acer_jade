(function ($){
    $.fn.MainDataInIt = function () {
        $.Body.introAni();
    }
    
    $.fn.introAni = function(){
        if($.Body.attr('val') == 'index'){
            $('.lbtn').addClass('animate');
            $('.txt').addClass('animate');    
        } 
        if(location.pathname.match('/m/list.html')){
           $.ajax({
                url:'http://www.acer-sp.com.tw/v-nitro/acernitro/?apptype=acernitro&mode=lotterylist&access_token=e50fb1f703b1533d768ee4609a04e3fb&op=json',
                //url: "http://www.acer-sp.com.tw/cny/winner.json",
                cache: !1,
                type: "get",
                dataType: "json",
                    success: function(resp){
                        for(var i = 0; i<resp.data.length; i++){                                
                            $('#Date').append('<option>'+resp.data[i].date+'</option>');
                        }
                        for(var i = 0; i<resp.data[0].list.length; i++){                                
                            $('.wform').append('<tr><td>'+resp.data[0].list[i].name+'</td><td>'+resp.data[0].list[i].tel+'</td><td>'+resp.data[0].list[i].sale_store+'</td></tr>');
                        }
                        $(document).on('change', '#Date', function(event){
                            var time;
                            for(var i = 0; i<resp.data.length; i++){        
                                // console.log(i,$('#Date').val(),resp.data.length);
                                if ($('#Date').val() == resp.data[i].date.toString()){
                                    time = i;
                                    $('.wform').empty();

                                }
                            }
                            for(var i = 0; i<resp.data[time].list.length; i++){
                                $('.wform').append('<tr><td>'+resp.data[time].list[i].name+'</td><td>'+resp.data[time].list[i].tel+'</td><td>'+resp.data[time].list[i].sale_store+'</td></tr>');
                            }
                        });
                    },
                    error: function(resp){
                        alert('有誤請稍後再試！')
                    }
            });
        }
        if(location.pathname.match('/m/login.html')){
           $('#Buydate').datepicker({minDate:new Date(2015, 3, 1), maxDate: new Date(2015, 4, 4)});
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
        }
        $('.demo ').click(function(){
            $('.demo_c').fadeIn();
        });
        $('.demoBox').click(function(){
            $('.demo_c').fadeOut();
        });
        $('.close2').click(function(){
            $('.send_ok').fadeOut();
            clearForm();
        });
        $('.menu').click(function(){
            $('.menu_o').show();
            $('.mask').fadeIn();
            $('.mainc').animate({'left':-580},300);
        });
        $('.menu_o').click(function(){
            $(this).hide();
            $('.mask').fadeOut();
            $('.mainc').animate({'left':0},300);
        });
        $('.logo').click(function(){
            outlink('official');
        });

 /*--------------------------------------------------------------------*/       
        $('.videoBtn').click(function(){
           window.open('https://www.youtube.com/watch?v=DfAxzu1RIKw','_blank');
        });
        $('.mailLink').click(function(){
            location.href = "mailto:2015acerevent@gmail.com";
        });
 /*--------------------------------------------------------------------*/    
        $('.lbtn').click(function(){
           //location.href = "login.html";
           alert('活動登錄日期已結束，謝謝您的熱情支持');
        });
        $('.menubtn').click(function(){
            $(this).css({'background': 'rgba(0,0,0,.5'});
        });
        
    
    } 

    $.fn.ComCss = function (property) {
        var _self = $(this);
            _self['propObj'] = {};
        for(x in property){ 
            _self.propObj['-webkit-'+x] = property[x];
            _self.propObj['-moz-'+x] = property[x];
            _self.propObj['-ms-'+x] = property[x];
            _self.propObj[x] = property[x];
        }
        _self.css(_self.propObj);
        /*for(x in _self.propObj){ 
            delete _self.propObj[x];
        }*/
        delete _self.propObj;
        property = null;
        _self = null;      
    }
    //*****去除 png圖 黑邊*****
    $.fn.PngFix = function () {
        var _self = $(this)
        _self.find('img[src$=".png"],img[src$=".gif"]').each(function() {
            this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='image',src='"+ this.src +"')";
        });
    }

})(jQuery);
    
$(function(){
    $.Body =$('body');  
    $.Window = $(window);
    $.Wrapper = $.Body.find('div.wrapper');
    $.Loading = $.Body.find('div.loading');

    var imagesN = $("body img").length;
    var logfbfrom,clkcuId;
    var c = 0;
    var arrayc;
    jQuery.support.cors = true;
        var $imgs = $('body img'),
        count = 0;
        $imgs.imagesLoaded().progress(function(instance, image){
            count ++;
            percent = Math.round(count/$imgs.length*100);
            $('.loading .percent').html(percent+'%');
            if(count == $imgs.length){
                $.Body.PngFix();
                $.Loading.fadeOut(500);
                $.Body.MainDataInIt();
            }

        });
});

