(function($){
    $(function(){
        var version = location.search.substring(1).toLowerCase();
        var filename = version == 'en' ? 'en.json' : 'cn.json';
        var tempFn = doT.template($('#resumeTpl').remove().text());
        $.get(filename,function(data){
            var resultText = tempFn(data);
            $('body').html(resultText);
        });
    });
}(jQuery));
