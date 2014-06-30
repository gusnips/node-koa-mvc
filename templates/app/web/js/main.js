$(function(){
    $('form').submit(function(){ 
        var $this=this; 
        $.post($this.attr('action'),$this.serialize(),function(result){ 
            if(result.success)
                alert('success');
            else
                alert('error');
        }).error(function(){
            alert('http error');
        });
        return false;
    });
    $('#illustration').hover( function(){
        $(this).addClass('expand');
    }, function(){
        $(this).removeClass('expand');
    });
    $('form input').tooltip({
        placement: 'top',
        trigger: 'focus',
        title: function (){
            return $(this).attr('placeholder');
        }
    });
});