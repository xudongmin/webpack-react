/**
 * Created by xdm2556561 on 2016/12/12.
 */
var React = require('react');
var ReactDOM = require('react-dom');
require('../css/style.css');
require('../css/Negotiate.css');
require("./main.js");

//头部菜单
var Nav = React.createClass({
    render: function() {
        return (
            <div className="header navbar navbar-default loginedheader">
                <div className="navbar-header header-left logined-nav-header col-md-3">
                    <img src="css/images/logo.png" alt="" className="pull-left"/>
                    <h3 className="pull-left">比亚迪供应商门户</h3>
                </div>
                <div className="logined-nav col-lg-6" id="navbar-collapse">
                </div>
                <div className="logined-header-right col-lg-3">
                    <span className="welcome pull-right">
                        <span className="help">帮助
                            <ul>
                                <li><a href="#">常见问题</a></li>
                                <li><a href="#">培训文档</a></li>
                                <li><a href="#">关于我们</a></li>
                            </ul>
                        </span>
                        <span className="text-danger">您好</span> <span style={{marginRight:"5px"}}>科达利科技</span><span> 30024</span> | <a href="#">修改密码</a> | <span className="icon-off off-icon text-danger"></span>
                        <a href="#" style={{marginRight:"20px",marginLeft:"5px"}}>退出</a>
                    </span>
                </div>
            </div>
        );
    }
});

//顶部消息统计
var Toptip = React.createClass({
   render: function() {
       return (
           <div className="row">
               <div className="col-md-4">
                   <h5 className="indexh5">洽谈首页</h5>
               </div>
               <div className="col-md-4">
                   <ul className="searchactive-ul">
                       <li><b>询价(含招标)项目</b></li>
                       <li><a href="" className="text-primary">已拒绝 (<span>1</span>)</a></li>
                       <li><a href="" className="text-primary">有效 (<span>2</span>)</a></li>
                       <li><a href="" className="text-primary">取消资格并撤销 (<span>0</span>)</a></li>
                       <li><a href="" className="text-primary">拟定(<span>5</span>)</a></li>
                   </ul>
               </div>
               <div className="col-md-4">
                   <ul className="searchactive-ul">
                       <li><b>竞价项目</b></li>
                       <li><a href="" className="text-primary">已拒绝 (<span>1</span>)</a></li>
                       <li><a href="" className="text-primary">有效 (<span>0</span>)</a></li>
                       <li><a href="" className="text-primary">取消资格并撤销 (<span>0</span>)</a></li>
                       <li><a href="" className="text-primary">拟定(<span>5</span>)</a></li>
                   </ul>
               </div>
           </div>
       )
   }
});

//图标显示说明
var Pausetip = React.createClass({
   render: function() {
       return (
           <div className="pausetip">
                <span className="pauseinfo">
                    <i className="icon-pause iconpause-danger"></i> 已暂停洽谈,暂不能提交报价
                </span>
                <span className="recoverinfo">
                    <i className="icon-pause iconpause-success"></i> 已恢复洽谈,可以提交报价
                </span>
                <span className="reviseinfo">
                    <i className="icon warningicon"></i> 此洽谈已修正,考虑到决标,您必须执行相关活动
                </span>
           </div>
       )
   }
});

//更新信息提示
var Checktip = React.createClass({
    render: function() {
        return (
            <div className="checktip">
                <span className="icon iconinfo"></span>
                <span>更新回应请点击洽谈编号或回应编号，更新拟定状态的回应也可以直接点击管理拟定项</span>
            </div>
        )

    }
});

//搜索表单
var Formcontentsearch = React.createClass({
    render: function() {
        return (
            <form>
                <div className="contentsearch">
                    <select name="" id="">
                        <option value="">洽谈编号</option>
                        <option value="">标题</option>
                        <option value="">洽谈类型</option>
                        <option value="">发布日期</option>
                    </select>
                    <span className="negotitle-search"><input type="text" placeholder="请输入搜索内容"/><i className="icon iconsearch" id="igoneSearch">搜索</i></span>
                </div>
            </form>
        )
    }
});

//待回应表格
var Torespond = React.createClass({
   render: function() {
       return (
           <div className="offerline negation-index clearfix">
               <div className="panel-heading negotitate-panelheading"><h5 className="pull-left togglespan"><span className="icon iconclose"></span> 待回应</h5>
                        <span className="iconsgroup">
                            <a href="#"><span className="iconrefresh icon" title="刷新表格"></span></a>
                            <a href="#"><span className="iconsettings icon" title="设置"></span></a>
                            <a href="#"><span className="iconreset icon" title="重置"></span></a>
                        </span>
                   <button className="btn btn-warning btn-sm pull-right">完整列表</button>
               </div>
               <div className="panel-body">
                   <table className="table table-bordered table-responsive table-striped Handletable">
                       <thead>
                       <tr>
                           <th>洽谈编号</th>
                           <th>回应编号</th>
                           <th>回应状态</th>
                           <th>供应商地点</th>
                           <th>标题</th>
                           <th>发布日期</th>
                           <th>洽谈类型</th>
                           <th>剩余时间</th>
                           <th>监控</th>
                           <th>未读消息</th>
                           <th>管理拟定项</th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <td><a href="indexnegotitate.html"
                                  className="text-primary revise confirm_30052000 confirmniding" data-code="30052000">30052000.1</a>
                           </td>
                           <td></td>
                           <td className="Draft" data-status="revise">未回应</td>
                           <td></td>
                           <td className="title">竞价测试-拟定未提交1轮</td>
                           <td>2016-11-13</td>
                           <td>竞价</td>
                           <td>1天1小时</td>
                           <td><a href="" data-toggle="modal" data-target="#checkstatus"><span
                               className="monitor icon"></span></a></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td><a href="indexnegotitate.html" className="text-primary">30527168 <i
                               className="icon-pause iconpause-danger" title="已暂停洽谈,暂不能提交报价"></i></a></td>
                           <td></td>
                           <td className="Draft" data-status="pause">未回应</td>
                           <td></td>
                           <td className="title">竞价测试--暂停报价</td>
                           <td>2016-11-13</td>
                           <td>竞价</td>
                           <td>1天1小时</td>
                           <td><a href="" data-toggle="modal" data-target="#checkstatus"><span
                               className="monitor icon"></span></a></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td><a href="indexnegotitate.html" className="text-primary">30074071 <i
                               className="icon-pause iconpause-success" title="已恢复洽谈,可以提交报价"></i></a></td>
                           <td></td>
                           <td className="Draft" data-status="recover">未回应</td>
                           <td></td>
                           <td className="title">竞价测试--恢复报价</td>
                           <td>2016-11-13</td>
                           <td>竞价</td>
                           <td>1天1小时</td>
                           <td><a href="" data-toggle="modal" data-target="#checkstatus"><span
                               className="monitor icon"></span></a></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td><a href="indexnegotitate.html" className="text-primary confirm_32015888 confirmdode"
                                  data-code="32015888.1">32015888.3</a></td>
                           <td></td>
                           <td className="Draft" data-status="offerconfirm">未回应</td>
                           <td></td>
                           <td className="title">竞价测试-有效报价1轮</td>
                           <td>2016-11-13</td>
                           <td>询价</td>
                           <td>0秒</td>
                           <td><a href="" data-toggle="modal" data-target="#checkstatus"><span
                               className="monitor icon"></span></a></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td><a href="indexnegotitate.html" className="text-primary">38954518</a></td>
                           <td></td>
                           <td className="Draft">未回应</td>
                           <td></td>
                           <td className="title">竞价测试</td>
                           <td>2016-11-13</td>
                           <td>竞价</td>
                           <td>0秒</td>
                           <td><a href="" data-toggle="modal" data-target="#checkstatus"><span
                               className="monitor icon"></span></a></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td className="code"><a href="indexnegotitate.html"
                                               className="text-primary confirm_32015888 confirmdode"
                                               data-code="32015888.1">32015888.2</a></td>
                           <td><a href="indexnegotitate.html" className="text-primary confirm_32015888"
                                  data-code="32015888.1">456985415</a> <i className="icon warningicon"
                                                                          title="此洽谈已修正,考虑到决标,您必须执行相关活动"></i></td>
                           <td className="Draft" data-status="offerconfirm">拟定</td>
                           <td></td>
                           <td>竞价测试-有效报价2轮</td>
                           <td>2016-11-13</td>
                           <td>竞价</td>
                           <td>1天1小时</td>
                           <td><span className="monitor-disable icon"></span></td>
                           <td>0</td>
                           <td><a href="" className="show-draft"><i className="iconedit icon" title="编辑拟定"></i></a></td>
                       </tr>
                       <tr>
                           <td className="code"><a href="indexnegotitate.html"
                                               className="text-primary confirm_30052000 confirmniding"
                                               data-code="30052000">30052000</a></td>
                           <td><a href="indexnegotitate.html" className="text-primary revise confirm_30052000">49742256</a>
                               <i className="icon warningicon" title="此洽谈已修正,考虑到决标,您必须执行相关活动"></i></td>
                           <td className="Draft" data-status="revise">拟定</td>
                           <td></td>
                           <td>竞价测试-拟定未提交被修正</td>
                           <td>2016-11-13</td>
                           <td>竞价</td>
                           <td>1天1小时</td>
                           <td><span className="monitor-disable icon"></span></td>
                           <td>0</td>
                           <td><a href="" className="show-draft"><i className="iconedit icon" title="编辑拟定"></i></a></td>
                       </tr>
                       <tr>
                           <td className="code"><a href="indexnegotitate.html" className="text-primary">30052034</a></td>
                           <td><a href="indexnegotitate.html" className="text-primary">40097425</a></td>
                           <td className="Draft" data-status="niding">拟定</td>
                           <td></td>
                           <td>竞价测试-拟定未提交</td>
                           <td>2016-11-13</td>
                           <td>竞价</td>
                           <td>1天1小时</td>
                           <td><span className="monitor-disable icon"></span></td>
                           <td>0</td>
                           <td><a href="" className="show-draft"><i className="iconedit icon" title="编辑拟定"></i></a></td>
                       </tr>
                       <tr>
                           <td className="code"><a href="indexnegotitate.html"
                                               className="text-primary confirm_32015888 confirmdode"
                                               data-code="32015888.1">32015888.1</a></td>
                           <td><a href="indexnegotitate.html" className="text-primary confirm_32015888"
                                  data-code="32015888.1">41775256</a><i className="icon warningicon"
                                                                        title="此洽谈已修正,考虑到决标,您必须执行相关活动"></i></td>
                           <td className="Draft" data-status="offerconfirm">要求重新提交</td>
                           <td></td>
                           <td>竞价测试-有效报价1轮</td>
                           <td>2016-11-13</td>
                           <td>竞价</td>
                           <td>1天1小时</td>
                           <td><span className="monitor-disable icon"></span></td>
                           <td>0</td>
                           <td></td>
                       </tr>
                       <tr>
                           <td className="code"><a href="indexnegotitate.html" className="text-primary">35645866</a> <i
                               className="icon-pause iconpause-danger" title="已暂停洽谈,暂不能提交报价"></i></td>
                           <td><a href="indexnegotitate.html" className="text-primary">48962215</a></td>
                           <td className="Draft" data-status="pause">拟定</td>
                           <td></td>
                           <td className="title">竞价测试-暂停报价</td>
                           <td>2016-11-13</td>
                           <td>询价</td>
                           <td>0秒</td>
                           <td><a href="" data-toggle="modal" data-target="#checkstatus"><span
                               className="monitor icon"></span></a></td>
                           <td></td>
                           <td><a href="" className="show-draft"><i className="iconedit icon" title="编辑拟定"></i></a></td>
                       </tr>
                       <tr>
                           <td className="code"><a href="indexnegotitate.html" className="text-primary">35489678</a> <i
                               className="icon-pause iconpause-success" title="已恢复洽谈,可以提交报价"></i></td>
                           <td><a href="indexnegotitate.html" className="text-primary">45898744</a></td>
                           <td className="Draft" data-status="recover">拟定</td>
                           <td></td>
                           <td className="title">竞价测试-恢复报价</td>
                           <td>2016-11-13</td>
                           <td>询价</td>
                           <td>0秒</td>
                           <td><a href="" data-toggle="modal" data-target="#checkstatus"><span
                               className="monitor icon"></span></a></td>
                           <td></td>
                           <td><a href="" className="show-draft"><i className="iconedit icon" title="编辑拟定"></i></a></td>
                       </tr>
                       </tbody>
                   </table>
               </div>
           </div>
       )
   }
});

//有效订单表格
var Effective = React.createClass({
    render: function() {
        return (
            <div className="offerline negation-index" style={{marginTop: "5px",paddingBottom: "20px"}}>
                <div className="panel-heading negotitate-panelheading">
                    <h5 className="pull-left togglespan"><span className="icon iconclose"></span> 有效</h5>
                    <span className="iconsgroup">
                        <a href="#"><span className="iconrefresh icon" title="刷新表格"></span></a>
                        <a href="#"><span className="iconsettings icon" title="设置"></span></a>
                        <a href="#"><span className="iconreset icon" title="重置"></span></a>
                    </span>
                    <button className="btn btn-warning btn-sm pull-right">完整列表</button>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-responsive table-striped Handletable">
                        <thead>
                        <tr>
                            <th>洽谈编号</th>
                            <th>回应编号</th>
                            <th>回应状态</th>
                            <th>供应商地点</th>
                            <th>标题</th>
                            <th>发布日期</th>
                            <th>洽谈类型</th>
                            <th>剩余时间</th>
                            <th>监控</th>
                            <th>未读消息</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="code"><a href="indexnegotitate.html" className="text-primary">30052071</a></td>
                            <td><a href="indexnegotitate.html" className="text-primary">40097424</a></td>
                            <td className="Draft" data-status="youxiao">有效</td>
                            <td></td>
                            <td className="title">竞价测试-报价提交</td>
                            <td>2016-11-13</td>
                            <td>询价</td>
                            <td>0秒</td>
                            <td><a href="" data-toggle="modal" data-target="#checkstatus"><span
                                className="monitor icon"></span></a></td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="code"><a href="indexnegotitate.html" className="text-primary">30007211</a></td>
                            <td><a href="indexnegotitate.html" className="text-primary">40097403</a></td>
                            <td className="Draft" data-status="jujue">拒绝</td>
                            <td></td>
                            <td className="title">竞价测试-拒绝报价</td>
                            <td>2016-11-13</td>
                            <td>询价</td>
                            <td>0秒</td>
                            <td><a href="" data-toggle="modal" data-target="#checkstatus"><span
                                className="monitor icon"></span></a></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});

var Indexnego = React.createClass({
   render: function() {
       return (
            <div className="register-content negotitate-content negotitate-nav indexnego">
                <div className="searchactive indexnegito">
                    <Toptip />
                    <Pausetip />
                    <Checktip />
                    <Formcontentsearch />
                    <Torespond />
                    <Effective />
                </div>
            </div>
       );
   }
});

//查看状态模态框
var Checkstatusmodal = React.createClass({
   render: function() {
       return (
           <div id="checkstatus" className="modal fade"  role="dialog" aria-hidden="true" data-backdrop="static">
               <div className="modal-dialog">
                   <div className="modal-content">
                       <div className="modal-header">
                           <a className="close" data-dismiss="modal">x</a>
                           <h5 className="text-primary">查看询价状态</h5>
                       </div>
                       <div className="modal-body">
                           <span className="checktitles"><b>标题:</b> <i className="checktitle"></i></span> <span className="checkstatus"><b>状态:</b> <i>3.洽谈结束[待会签](已开启)</i></span>
                       </div>
                       <div className="modal-footer">
                           <a href="" className="btn btn-success btn-sm" data-dismiss="modal">确认</a>
                       </div>
                   </div>
               </div>
           </div>
       )
   }
});

var Completecompent = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <Indexnego />
                <Checkstatusmodal />
            </div>
        )
    }
});

ReactDOM.render(
    <Completecompent />,
    document.getElementById('negotiate_wrap')
);

$(".confirm_32015888").on("click", function () {
    var datacode = [];
    $(".confirmdode").each(function () {
        var thistext = $(this).text();
        datacode.push(thistext);
    });
    localStorage.setItem("datacodearray", datacode);
});

$(".confirm_30052000").on("click", function () {
    var nidingdatacode = [];
    $(".confirmniding").each(function () {
        var thistext = $(this).text();
        nidingdatacode.push(thistext);
    });
    localStorage.setItem("nidingdatacodearray", nidingdatacode);
});

//查看状态模态框显示设置
$(".monitor").on("click", function() {
    var thistext = $(this).parents("td").siblings(".title").text();
    $("#checkstatus").find(".checktitle").text(thistext);
});
