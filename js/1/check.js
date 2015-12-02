function checkStep1form() {
    /*check Step1 form data */
    Pserial = $("#q-text input[name= 'Pserial']");
    Preceipt = $("#q-text input[name= 'Preceipt']");
    Store = $("#q-text #Store");
    Store_name = $("#q-text input[name= 'Store_name']");
    Buydate = $("#q-text input[name= 'Buydate']");
    uName = $("#q-text input[name='uName']");
    tel = $("#q-text input[name='tel']");
    email = $("#q-text input[name='email']");    
    uCity = $("#zone1");
    uArea = $("#zone2");
    uAddr = $("#q-text input[name='address']");
    
  
    var testmail = /^.+@.+\..{2,3}$/;
    var word = /^[A-Za-z]+$/;
    var num= /^[0-9]+$/;
    var specialChars = /^[a-zA-Z0-9]+$/;
    var Chinese = /^[\u4e00-\u9fa5]+$/;
    //var cellPhone = /^09[0-9]{8}+$/;
    var str="";
    var tel1 = tel.val().substring(0,1);
    var tel2 = tel.val().substring(0,2);
    var tel3 = tel.val().substring(0,3);
    var tel4 = tel.val().substring(0,4);

    
    if(Pserial.val() ==""){
        str+="請填入產品序號 !\n";
    }else if(Pserial.val().length != 22 ){
        str+="請填入正確的產品序號 !\n";
    }
    if(Preceipt.val() ==""){
        str+="請填入發票號碼 !\n";
    }else if(Preceipt.val().length !=10 ){
        str+="請填入正確的發票號碼 !\n";
    }else if( !word.test(Preceipt.val().slice(0,2)) || !num.test(Preceipt.val().slice(2,10))){
        str+="請填入正確的發票號碼 !\n";
    }
    if(Store.val()==null ){
        str+="請選擇銷售門市 !\n";
    }else if(Store.val() =="其它"){
        if(Store_name.val() == ''){
            str+="請填入分店名稱 !\n";        
        }
    }
    if(Buydate.val()==""){
        str+="請選擇購買日期 !\n";
    }
    if(uName.val() == "") {
        str+="請填入中文全名 !\n";
    }else if( !Chinese.test(uName.val())){
        str+="請以中文填入全名 !\n";
    }
    if($.trim(tel.val()) == "") {
        str+="請填入電話號碼 !\n";
    }else if(isNaN(tel.val())) {
        str+="請以數字填入電話號碼 !\n";
    }
    if(email.val() == "") {
        str+="請填入電子信箱 !\n";
    }else if(!checkEmail( email.val())) {
        str+="電子信箱 不正確 !\n";
    }if(uCity.val() == "") {
        str+="請選擇 縣市 !\n";
    }if(uArea.val() == "") {
        str+="請選擇 區域 !\n";
    }if(uAddr.val() == "" ) {
        str+="請填入完整地址 !\n";
    }if(!document.getElementById("readRule").checked) {
        str+="請勾選 閱讀並同意 條款！\n";
    }if(!document.getElementById("sendRule").checked) {
        str+="請勾選 確認資料無誤 選項！\n";
    } 
    if(str!=""){ 
        alert(str);
      return false;
    }
    
    sendData();
    return true;
}

function showAlert(){
    $('.send').show().parent().fadeIn();
    $('.close2').click(function(){
        $('.send').hide().parent().fadeOut();
        clearForm();
    });
}
//102
function sendData() {
   $.post('http://www.acer-sp.com.tw/v-nitro/acernitro/?apptype=acernitro&mode=signup&access_token=e50fb1f703b1533d768ee4609a04e3fb&op=json',
        { mode:'Ins',
          sn: Pserial.val(),
          invoice: Preceipt.val(),
          sale_store: Store.val(),
          sale_store2: Store_name.val(),
          sale_date: Buydate.val(),
          name: uName.val(),
          tel: tel.val(),
          email: email.val(),
          adr1: uCity.val(),
          adr2: uArea.val(),
          adr3: uAddr.val(),
        },
        function(pResponse){
            if (pResponse.state==1) {
                showAlert();
            }else if(pResponse.state==2){
                alert("這個序號已經輸入過嘍！");
            }else if(pResponse.state==3){
                alert("沒有這個序號，請再次確認！");
            }else{
                alert("出現錯誤，請稍後再試！");
            }
        },"json")   
}

//信箱格式判斷
function checkEmail(email) {
    EmailCheck = new RegExp(/^([a-zA-Z0-9]+)([\.\-\_]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9\_\-]+)+$/)
    if (EmailCheck.test(email)) {
        return true;
    }
    else {
        return false;
    }
}

function ValidEmail(emailtoCheck) {
    // 規則: 1.只有一個 "@"
    //       2.網址中, 至少要有一個".", 且不能連續出現
    //       3.不能有空白和,

    var regExp = /^[^@^\s^,]+@[^\.@^\s^,]+(\.[^\.@^\s^,]+)+$/;
    if (emailtoCheck.match(regExp))
        return true;
    else
        return false;
}

// function newGuid() {
//     var guid = "";
//     for (var i = 1; i <= 32; i++) {
//         var n = Math.floor(Math.random() * 16.0).toString(16);
//         guid += n;
//         if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
//             guid += "-";
//     }
//     return guid;
// }

// function FBShare() {
//     shareURL = weburl + "fbshare.aspx";
//     GUID = newGuid();

//     var url = "http://www.facebook.com/sharer.php?u=__U__";

//     var bm_url = shareURL + '?g=' + GUID;

//     if (bm_url == '') bm_url = window.location.href.toLowerCase();

//     url = url.replace('__U__', encodeURIComponent(bm_url));

//     window.open(url, '_blank', 'width=800,height=600,status=yes');

// }

function clearForm() {
    $("#q-text input[name= 'Pserial']").val('');
    $("#q-text input[name= 'Preceipt']").val('');
    $("#q-text select[name= 'Store']").val(null);
    $("#q-text input[name= 'Store_name']").val('');
    $("#q-text input[name= 'Buydate']").val('');
    $("#q-text input[name='uName']").val('');
    $("#q-text input[name='tel']").val('');
    $("#q-text input[name='email']").val('');    
    $("#zone1").val('');
    $("#zone2").val('');
    $("#q-text input[name='address']").val('');
    $("#step1frm input[name='zipcode']").val('');
    document.getElementById("readRule").checked = false;
    document.getElementById("sendRule").checked = false;
}

