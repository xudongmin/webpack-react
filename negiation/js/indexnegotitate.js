/**
 * Created by xdm2556561 on 2016/12/12.
 */
/**
 * Created by xdm2556561 on 2016/12/12.
 */
require('../css/style.css');
require('../css/Negotiate.css');
require("./main.js");
//页面加载触发回应规则确认按钮点击事件
$(".confirmresponsebtn").trigger("click");

//读取询价编码
$(".thisnumcode").text(particel.datacodenum);

//根据本地存储页面头部显示样式
if (particel.status === "youxiao") {
    $(".switchrefuse").html("<a href='' class='text-primary' data-toggle='modal' data-target='#Revokeoffer'>撤销报价</a>");
    $(".query").before(" | " + "<b><a href='' class='text-primary' data-toggle='modal' data-target='#Exceloffer'>导出报价</a></b>");
} else if (particel.status === "jujue") {
    $(".hideswitch").hide();
} else if (particel.status === "pause") {
    $(".searchactive").before("<div class='tippause'>" +
        "<span class='iconinfo icon'></span><i class='text-primary'>信息</i>" +
        "<p class='text-danger' style='font-size: 13px;'>已暂停询价,只能创建拟定报价.</p>" +
        "<p class='text-warning' style='font-size: 13px;'>暂停原因: 项目数目增加</p>" +
        "</div>"
    );
} else if (particel.status === "revise" && particel.ignoe && !localStorage.getItem("confirm")) { //拟定确认修订
    $(".switchrevise").html("<a href='' class='text-primary' data-toggle='modal' data-target='#confirmrevise'>确认修正</a>");
    $(".searchactive").before("<div class='tippause'>" +
        "<span class='iconinfo icon'></span><i class='text-primary'>信息</i>" +
        "<p class='text-danger' style='font-size: 13px;'>已修正询价" + particel.datacode + ".考虑到决标,您必须确认每项修正并提交(或重新提交)所有回应,以确保回应与更改保持一致.</p>" +
        "</div>"
    );
    particel.settitlecheckhis(localStorage.getItem('nidingdatacodearray')); //设置查看历史修正和title导航
} else if (particel.status === "revise" && localStorage.getItem("confirm")) {
    $(".switchrevise").html("<a href='Participate.html' class='text-primary' target='_blank'>参与报价</a>");
    $(".searchactive").before("<div class='tippause'>" +
        "<span class='iconinfo icon'></span><i class='text-primary'>信息</i>" +
        "<p class='text-danger' style='font-size: 13px;'>已确认修正询价" + particel.datacode + ".可以进行报价</p>" +
        "</div>"
    );
    particel.settitlecheckhis(localStorage.getItem('nidingdatacodearray')); //设置查看历史修正和title导航
} else if (particel.status === "offerconfirm" && particel.offerconfirm && !localStorage.getItem("offerconfirmig")) { //有效报价提交确认修订
    $(".switchrevise").html("<a href='' class='text-primary' data-toggle='modal' data-target='#offerconfirmrevise'>确认修正</a>");
    $(".searchactive").before("<div class='tippause'>" +
        "<span class='iconinfo icon'></span><i class='text-primary'>信息</i>" +
        "<p class='text-danger' style='font-size: 13px;'>已修正询价" + particel.datacode + ".考虑到决标,您必须确认每项修正并提交(或重新提交)所有回应,以确保回应与更改保持一致.</p>" +
        "</div>"
    );
    particel.settitlecheckhis(localStorage.getItem("datacodearray")); //设置查看历史修正和title导航
} else if (particel.status === "offerconfirm" && localStorage.getItem("offerconfirmig")) {
    $(".switchrevise").html("<a href='Participate.html' class='text-primary' target='_blank'>参与报价</a>");
    $(".searchactive").before("<div class='tippause'>" +
        "<span class='iconinfo icon'></span><i class='text-primary'>信息</i>" +
        "<p class='text-danger' style='font-size: 13px;'>已确认修正询价" + particel.datacode + ".可以进行报价</p>" +
        "</div>"
    );
    particel.settitlecheckhis(localStorage.getItem("datacodearray")); //设置查看历史修正和title导航
}

$(".revokeofferbtn").on("click", function () {
    localStorage.setItem("revokeoff", "alerdyrevoke");
    $("#Revokeoffer").find("a[data-dismiss='modal']").trigger("click");
});

//确认修正
$(".setlocalcodes").find("a").on("click", function () {
    var thisCode = $(this).attr("data-code");
    localStorage.setItem("code", thisCode);
    localStorage.setItem("showtip", "recovertip");
});

//拟定确认修正
$(".confirmrevise").on("click", function () {
    var thisconfirm = $(this).attr("data-confirm");
    localStorage.setItem("confirm", thisconfirm);
});

//报价提交修订确认
$(".offerconfirmig").on("click", function () {
    var thisconfirm = $(this).attr("data-confirm");
    localStorage.setItem("offerconfirmig", thisconfirm);
});

//拒绝按钮应用跳转主页
$(".refusesuccess").on("click", function () {
    window.history.back(-1);
});

//固定表头
(function fixedThead() {
    var thArray = [];
    var textArray = [];
    $(".offer-detailtable").find("th").each(function() {
        thArray.push($(this).outerWidth());
        textArray.push($(this).text());
    });
    var liHtml;
    var thsArray = [];
    var lisHtml;
    for(var i = 0; i < thArray.length; i++) {
        liHtml = "<li style='width: " + thArray[i] +"px'>" + textArray[i] + "</li>";
        thsArray.push(liHtml);
    }
    lisHtml = "<ul>" + thsArray.join(" ") + "</ul>";
    $(".fixedtitle").append(lisHtml);
})();