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
    $(".carousel").carousel({interval: 3500});
});