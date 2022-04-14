
    function kiemtra(){
        var loi = "";
        //kiem tra ma sv
        var masv = document.getElementById("masv");
        if(masv.value==""){
            masv.className="loi";
            loi += "Mã sinh viên không bỏ trống.<br>";
        }
        else if(masv.value.length!=7){
            masv.className="loi";
            loi += "Mã sinh viên không quá 7 ký tự.<br>";
        }
        else masv.className="txt";
        //kiem tra ho ten
        var masv = document.getElementById("hoten");
        if(hoten.value==""){
            hoten.className="loi";
            loi += "Họ và tên không được bỏ trống.<br>";
        }
        else if(hoten.value.length>30){
            hoten.className="loi";
            loi += "Họ tên quá dài.<br>";
        }
        else hoten.className="txt";
        //kiem tra email
        var email = document.getElementById("email");
        if(email.value==""){
            email.className="loi";
            loi += "Email không được bỏ trống.<br>";
        }
        else email.className="txt";
        //kiem tra phai
        dem=0;
        var arr_phai = document.getElementsByName("phai");
        for(var i=0; i<arr_phai.length; i++){
            if(arr_phai[i].checked ==true) dem++;
        }
        if(dem==0){
            document.getElementById("fs1").className="loi";
            loi += "Phải chọn giới tính.<br>";
        }
        else document.getElementById("fs1").className="";
        //kiem tra so thich
        arr_sothich = document.getElementsByName("st");
        dem=0;
        for(var i=0; i<arr_sothich.length; i++){
            if(arr_sothich[i].checked) dem++;
        }
        if(dem==0){
            document.getElementById("fs2").className="loi";
            loi += "Phải chọn ít nhất 1 sở thích.<br>";
        }
        else document.getElementById("fs2").className="";
        //kiem tra quoc tich
        var qt = document.getElementById("quoctich")
        if(qt.value==0){
            qt.className="loi";
            loi += "Phải chọn quốc tịch.<br>"
        }
        else qt.className="txt";
        //kiem tra ghi chu
        var gc = document.getElementById("ghichu");
        if(gc.value.length>200){
            gc.className="lõi";
            loi += "Ghi chú phải dưới 200 kí tự<br>"
        }
        else gc.className="txt";
        if(loi!=""){
            document.getElementById('baoloi').innerHTML=loi;
            return false;
        }
    }
    setTimeout("document.getElementById('baoloi').innerHTML=''",10000);

