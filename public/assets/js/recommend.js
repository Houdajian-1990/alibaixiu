$.ajax({
        type: 'get',
        url: '/posts/recommend',
        success: function(res) {
            // console.log(res);
            var temp = `
        {{each list}}
        <li>
            <a href="detail.html?categoryId={{$value._id}}">
            <img src="{{$value.thumbnail}}" alt="">
            <span>{{$value.title}}</span>
            </a>
        </li>
        {{/each}}
        `
            var str = template.render(temp, { list: res })
            $('#rec').html(str)
        }
    })
    //显示分页
$.ajax({
    type: 'get',
    url: '/categories',
    success: function(res) {
        // console.log(res);
        var navss = `
        {{each list}}
        <li><a href="list.html?categoryId={{$value._id}}"><i class="fa {{$value.className}}"></i>{{$value.title}}</a></li>
        {{/each}}
        `
        var str3 = template.render(navss, { list: res })
        $('#navs').html(str3);
        $('#topnavs').html(str3);

    }
})