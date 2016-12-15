/**
 * Created by xdm2556561 on 2016/10/12.
 */
var particel = {};
//tabs标签
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    // 获取已激活的标签页的名称
    var activeTab = $(e.target).text();
    // 获取前一个激活的标签页的名称
    var previousTab = $(e.relatedTarget).text();
    $(".active-tab span").html(activeTab);
    $(".previous-tab span").html(previousTab);
});

//点击创建报价按钮重置表单
$("#partconfirm").find(".closepartical").on("click", function () {
   $("#Participateinquotation")[0].reset();
});

particel.refreshofferdetail = $(".refreshoffer-detail");
//更行报价行页面增加行按钮事件
particel.refreshofferdetail.find(".addtr").on("click", function () {
    $(this).parents(".panel").find("tbody").append("<tr>" +
        "<td><input type='text'/></td>" +
        "<td><input type='text'/></td>" +
        "<td><input type='text'/></td>" +
        "<td><i class='icontrash icon deletetr'></i></td>" +
        "</tr>"
    );
});

//更行报价行页面删除行按钮事件
particel.refreshofferdetail.on("click", ".deletetr", function () {
    $(this).parents("tr").remove();
});

//折叠penle-body
$(".togglespan").on("click", function () {
    var thisClass = $(this).find("span").attr("class");
    if(thisClass === "icon iconclose") {
        $(this).find("span").attr("class", "icon iconopen");
    } else {
        $(this).find("span").attr("class", "icon iconclose");
    }
    $(this).parents(".panel-heading").siblings(".panel-body").stop().toggle();
});

//附注和附件p 高度更改
particel.filetablesHeight = $(".filetables").height();
$(".offer-panel-p").css({"height" : particel.filetablesHeight + "px"});

//本地存储洽谈首页状态
$(".Handletable").find("a").on("click", function () {
    var thisText = $(this).parents("td").siblings(".Draft").attr("data-status");
    var thisnumcode = $(this).text();
    localStorage.setItem("thisnumcode", thisnumcode);
    if(thisText == "niding") { //拟定状态
        localStorage.setItem("status", "niding");
        localStorage.removeItem("showtip");
    } else if (thisText === "youxiao") { //报价提交有效状态
        if (localStorage.getItem("code")) {
            localStorage.setItem("showtip", "recovertip");
        }
        localStorage.setItem("status", "youxiao");
    } else if (thisText === "jujue") { //报价拒绝状态
        localStorage.removeItem("showtip");
        localStorage.setItem("status", "jujue");
    } else if (thisText === "pause") { //报价暂停状态
        localStorage.removeItem("showtip");
        localStorage.setItem("status", "pause");
    } else if (thisText === "recover") { //报价暂停恢复
        localStorage.removeItem("showtip");
        localStorage.setItem("status", "niding");
    } else if (thisText === "revise") { //报价拟定修订
        localStorage.removeItem("showtip");
        localStorage.setItem("status", "revise");
        localStorage.setItem("ignoe", "ignoe");
        var thiscode = $(this).attr("data-code");
        localStorage.setItem("datacode", thiscode);
    } else if (thisText === "offerconfirm") { //报价提交修订
        localStorage.removeItem("showtip");
        localStorage.setItem("status", "offerconfirm");
        localStorage.setItem("offerconfirm", "offerconfirm");
        var thiscode = $(this).attr("data-code");
        localStorage.setItem("datacode", thiscode);
    }
});

//读取本地存储
particel.status = localStorage.getItem("status"); //拟定
particel.datacode = localStorage.getItem("datacode"); //询价编码
particel.datacodenum = localStorage.getItem("thisnumcode"); //询价编码
particel.ignoe = localStorage.getItem("ignoe"); //拟定确认修正
particel.offerconfirm = localStorage.getItem("offerconfirm"); //报价提交确认修正


//拟定修正和有效报价提交公用部分 //设置查看历史修正和title导航
particel.settitlecheckhis = function (data) {
    var needarray = data.split(",");
    var checkbuttonarray = [];
    var checkbuttonhtml = " ";
    var checkbuttonshtml = " ";
    var lastitem = needarray.length - 1;
    var needtitle;
    if(particel.datacodenum !== needarray[lastitem]) {
        needtitle = particel.datacodenum + " > " + needarray[lastitem];
        $(".thisnumcode").text(needtitle);
    }
    for (var i = 0; i < needarray.length-1; i++) {
         checkbuttonhtml = "<a href='' id='" + needarray[i] +"' class='checkhistory text-primary'>查看 询价 " + needarray[i] + "</a>";
        checkbuttonarray.push(checkbuttonhtml);
    }
    checkbuttonshtml = "<div class='checkhisbuttons'>" + checkbuttonarray.join(" ") + "</div>";
    $(".negotiae-nav").after(checkbuttonshtml);
};
