$('#logout').on('click', function() {
    var isConfirm = confirm('你确定要退出吗？');
    if (isConfirm) {
        $.ajax({
            url: '/logout',
            type: 'post',
            success: function() {
                location.href = 'login.html'
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
})