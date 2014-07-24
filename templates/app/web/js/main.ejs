$(function(){
    var $messages=$('.messages .alert');
    var showMessage= function(message, type){
        type=type || 'info';
        var $message=$messages.filter('.alert-'+type);
        $messages.hide();
        $message.show().find('span').html(message);
        $('html, body').animate({
            scrollTop: $message.offset().top
        }, 500);
        $('.modal').modal('hide');
    };
    $('form').on('submit',function(e){
        var $this=$(this);
        $.post($this.attr('action'),$this.serialize(),function(result){
            if(result.success)
                showMessage(result.message || 'Success!', 'success');
            else
                showMessage(result.message || 'Error!', 'danger');
        }).error(function(xhr, text, error){
            showMessage(xhr.responseText || text, 'danger');
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
});
