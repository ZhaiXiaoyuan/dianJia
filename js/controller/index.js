/**
 * Created by Administrator on 2018/2/4 0004.
 */
$(function () {
    /**
     *
     */
    var isMobile=utils.deviceType();

    /**
     * 导航模块
     */
    var $navList=$('.nav-list li');
    window.navGo=function (e,id,type) {
        $navList.find('a').removeClass('active');
        $navList.find('[target='+id+']').addClass('active');
        utils.goAnchor(e,id);
        if(type=='menu'&&isMobile){
            toggleNavBlock();
        }
    }

    /**
     *移动端时菜单的显示控制
     */
    var $navBlock=$('.nav-list');
    function toggleNavBlock() {
        if(!isMobile){
            return;
        }
        if($navBlock.hasClass('active')){
            $navBlock.slideUp();
            $navBlock.removeClass('active');
        }else{
            $navBlock.slideDown();
            $navBlock.addClass('active');
        }
    }
    $('.menu-icon').click(function (e) {
        toggleNavBlock();
    });

    /**
     * 监听滚动条
     */
    var $window=$(window);
    var $toTopBtn=$('.to-top-btn');
    $(document).on('scroll', function () {
        var winTop = $window.scrollTop(); //当前滚动条的高度
        if(winTop>200){
            $toTopBtn.removeClass('cm-hidden');
        }else{
            $toTopBtn.addClass('cm-hidden');
        }
    }.bind(this));


    /**
     * 经典案例模块
     */
    var caseList=BASIC_CONFIG.caseList;
    var typeList=['全部'];
    $.each(caseList,function (i,item) {
        if(typeList.indexOf(item.type)==-1){
            typeList.push(item.type);
        }
    });
    var $typeList=$('.case-panel .type-list');
    var typeListDomStr='';
    $.each(typeList,function (i,item) {
        typeListDomStr+='<li class="cm-btn '+(i==0?'active':'')+'" value="'+item+'">'+item+'</li>'
    });
    var $typeListDom=$(typeListDomStr);
    $typeList.html($typeListDom);
    $typeListDom.on('click',function (e) {
        var $this=$(e.currentTarget)
        var type=$this.attr('value');
        $typeListDom.removeClass('active');
        $this.addClass('active');
        renaderCaseList(type);
    });
    var $caseList=$('.case-panel .case-list');
    var curCaseList=[];
    function renaderCaseList(type) {
        curCaseList=[];
        if(type=='全部'){
            curCaseList=caseList;
        }else{
            $.each(caseList,function (i,item) {
                if(item.type==type){
                    curCaseList.push(item);
                }
            });
        }
        var listDomStr='';
        $.each(curCaseList,function (i,item) {
            listDomStr+='<li class="case-item">' +
                '<div class="cover"style="background: url(\'img/case/'+item.coverPath+'\') no-repeat center;background-size: cover;">' +
                '<div class="mask '+(item.qrcodePath?'':'cm-hidden')+'"><img src="img/case/'+item.qrcodePath+'" alt=""></div> </div>' +
                '<div class="info">' +
                '<p class="sub"> <span class="title">'+item.name+'</span> <span class="time">'+item.time+'</span> </p>' +
                '<p class="desc">'+item.description+'</p>' +
                '</div> </li>';
        });
        $caseList.html(listDomStr);
    }
    renaderCaseList(typeList[0]);



    /**
     * 设置任务状态
     */
     window.addContact=function() {
         var name=$('#name').val();
         var contact=$('#contactValue').val();
         var wechat=$('#wechat').val();
         var remark=$('#remark').val();
         if(!name){
             utils.operationFeedback({type:'warn',text:'请输入您的姓名'});
             return
         }
         if(!contact){
             utils.operationFeedback({type:'warn',text:'请输入您的联系方式'});
             return
         }
         if(!remark){
             utils.operationFeedback({type:'warn',text:'请输入您的需求'});
             return
         }
        var params={
           username:name,
           linkinfo:contact,
           wechat:wechat,
           remark:remark,
        }
        var fb=utils.operationFeedback({text:'提交中...'});
        api.addContact(params,function (resp) {
            if(resp.status=='success'){
                fb.setOptions({type:'complete',text:'提交成功'});
            }else{
                fb.setOptions({type:'warn',text:resp.message});
            }
        })
    }

})