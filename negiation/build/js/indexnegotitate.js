/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by xdm2556561 on 2016/12/12.
	 */
	/**
	 * Created by xdm2556561 on 2016/12/12.
	 */
	__webpack_require__(178);
	__webpack_require__(183);
	__webpack_require__(187);
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

/***/ },

/***/ 178:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 183:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 187:
/***/ function(module, exports) {

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


/***/ }

/******/ });