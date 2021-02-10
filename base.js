var request;

$("#submit").click(function(e){
    e.preventDefault();
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

$("#resetValue").click(function(e){
    e.preventDefault();
    $('textarea#htmlcode').val("");
    $('textarea#htmlconvert').val("");
})

$('#copyclip').click(function(e){
    e.preventDefault();
    var copytext = $('textarea#htmlconvert');
    copytext.select();
    document.execCommand("copy");
    alert("Text copied");
})
