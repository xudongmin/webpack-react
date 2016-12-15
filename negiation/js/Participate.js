/**
 * Created by xdm2556561 on 2016/12/12.
 */
require('../css/style.css');
require('../css/Negotiate.css');
require("./main.js");
//时分秒日期控件
$('.datetimepickerhms').datetimepicker({
    language:  'zh-CN',
    Format: 'Custom',
    todayBtn:  1,
    autoclose: 1,
    CustomFormat: "yyyy-MM-dd HH:mm"
});

//根据本地存储选择隐藏和显示提交按钮
if (particel.status === "pause") {
    $(".buttons").find("input[type='button']").hide();
    $(".searchactive").before("<div class='tippause'>" +
        "<span class='iconinfo icon'></span><i class='text-primary'>信息</i>" +
        "<p class='text-danger' style='font-size: 13px;'>已暂停询价,只能创建拟定报价.</p>" +
        "<p class='text-warning' style='font-size: 13px;'>暂停原因: 项目数目增加</p>" +
        "</div>"
    );
}

particel.code = localStorage.getItem("code");
particel.showtip = localStorage.getItem("showtip");

if(particel.code !== "undefined" && particel.showtip) {
    $(".searchactive").before("<div class='tippause'>" +
        "<span class='iconinfo icon'></span><i class='text-primary'>信息</i>" +
        "<p class='text-danger' style='font-size: 13px;'>您正在对以前撤销的报价作出新的报价,其中前一个报价的值已预先填好。</p>" +
        "<p class='text-warning' style='font-size: 13px;'>撤销原因: 多报了</p>" +
        "</div>"
    );
}

//创建询价编号
$("#creatcode").text(particel.datacodenum);