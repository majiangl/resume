(function($){
    $(function(){
        var tempFn = doT.template($('#resumeTpl').remove().text());
        $.get('resume.json',function(data){
            var resultText = tempFn(data);
            $('body').html(resultText).append('<input>');
        });
    });
}(jQuery));
