$(function(){
    $('form').on('submit',function(e){ 
        var $this=$(this); 
        $.post($this.attr('action'),$this.serialize(),function(result){ 
            if(result.success)
                alert('success');
            else
                alert('error');  
        }).error(function(){
            alert('error');
            console.log(arguments);
        });
        return false;
    });
    $('form input').tooltip({
        placement: 'top',
        trigger: 'focus',
        title: function (){
            return $(this).attr('placeholder');
        }
    });
    $('#illustration').on('hover',function(){
        $(this).addClass('expand');
    }, function(){
        $(this).removeClass('expand');
    });
});