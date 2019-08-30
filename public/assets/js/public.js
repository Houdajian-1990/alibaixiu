//获取搜索表单
$('.search form').on('submit', function() {
    // alert('11')
    var keys = $(this).find('.keys').val();
    // console.log(searchVal);
    //跳转到搜索页面，并把参数带过去
    location.href = "/search.html?key=" + keys;

    return false
})