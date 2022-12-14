//*****************Ghi nội dung từ biến textfield nội dung vào biến content trong localStorage ****************/
function ghi_noi_dung(noidung)
{
    var x=document.getElementById("ketqua");
    if(typeof(Storage)!=="undefined")
    {
        if(!localStorage.content) localStorage.content=noidung;
    }
    else
    {
        x.innerHTML="Trình duyệt của bạn không hỗ trợ localStorage!";
    }
}
//*****************Đọc nội dung từ biến content trong localStorage**********************/
function doc_noi_dung()
{
    var x=document.getElementById("ketqua");
    x.innerHTML="";
    if(typeof(Storage)!=="undefined")
    {
        if(localStorage.content)
        x.innerHTML=localStorage.content;
    }
    else
    {
        x.innerHTML="Trình duyệt của bạn không hỗ trợ localStorage!";
    }
}
//*****************Xóa nội dung từ biến content trong localStorage**********************/
function xoa_noi_dung(){
    localStorage.removeItem("content");
}