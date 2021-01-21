var request;

$("#submit").click(function(){
    var textarea = $('textarea#htmlcode').val();


    request = $.ajax({
        url: "convert.php",
        type: "post",
        data: {keyword: textarea},
        success: function(data){
            $('textarea#htmlconvert').val(data);
        }
    })
})

$("#resetValue").click(function(){
    $('textarea#htmlcode').val("");
})

$('#copyclip').click(function(){
    var copytext = $('textarea#htmlconvert');
    copytext.select();
    document.execCommand("copy");
    alert("Text copied");
})