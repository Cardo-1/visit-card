$(document).ready(function(){
    $('.picC').hide()
    $('.picP').hide()
    $('.picBigC').hide()
    $('.picBigP').hide()
    $('.personal-container').hide()
    $('.company-container').hide()
    $('#position').hide()
    $('#positionP').hide()
    $('#logoSize').hide()
    
    $('#company').click(function(){
        $('#personal').hide()
        $('#company').hide()
        $('#companyTxt').hide()
        $('#personalTxt').hide()
        $('.picBigC').show()
    })
    $('#personal').click(function(){
        $('#personal').hide()
        $('#company').hide()
        $('#companyTxt').hide()
        $('#personalTxt').hide()
        $('.picBigP').show()
     })
    $('#pic1Big').click(function(){
        $('#personal').hide()
        $('#company').hide()
        $('.picBigC').hide()
        $('.company-container').show()
        $('#pic1').show()
        $('#position').show()
        $('#logoSize').show()
    })
    $('#pic2Big').click(function(){
        $('#personal').hide()
        $('#company').hide()
        $('.picBigC').hide()
        $('.company-container').show()
        $('#pic2').show()
        $('#position').show()
        $('#logoSize').show()
    })
    $('#pic3Big').click(function(){
        $('#personal').hide()
        $('#company').hide()
        $('.picBigC').hide()
        $('.company-container').show()
        $('#pic3').show()
        $('#position').show()
        $('#logoSize').show()
    })
    $('#pic4Big').click(function(){
        $('#personal').hide()
        $('#company').hide()
        $('.picBigC').hide()
        $('.company-container').show()
        $('#pic4').show()
        $('#position').show()
        $('#logoSize').show()
    })
    $('#pic5Big').click(function(){
        $('#personal').hide()
        $('#company').hide()
        $('.picBigP').hide()
        $('.personal-container').show()
        $('#pic5').show()
        $('#positionP').show()
    })
    $('#pic6Big').click(function(){
        $('#personal').hide()
        $('#company').hide()
        $('.picBigP').hide()
        $('.personal-container').show()
        $('#pic6').show()
        $('#positionP').show()
    })
    $('#pic7Big').click(function(){
        $('#personal').hide()
        $('#company').hide()
        $('.picBigP').hide()
        $('.personal-container').show()
        $('#pic7').show()
        $('#positionP').show()
    })
    $('#pic8Big').click(function(){
        $('#personal').hide()
        $('#company').hide()
        $('.picBigP').hide()
        $('.personal-container').show()
        $('#pic8').show()
        $('#positionP').show()
    })
    $('#tryItC').click(function(){
        var LC=$('#logoC').val()
        
             $('#company-content').append("<p class='companyData' id='nameStyle' >"+$('#companyName').val()+"</p>")
             $('#company-content').append("<p class='companyData' id='specialityStyle' >"+$('#speciality').val()+"</p>")
             $('#company-content').append("<p class='companyData' id='adresseCStyle'  >"+$('#adresseC').val()+"</p>")
             $('#company-content').append("<p class='companyData' id='phoneNumberCStyle' >"+$('#phoneNumberC').val()+"</p>")
             $('#company-content').append("<img  class='companyData' id='logoCStyle' >")
             $('#logoCStyle').attr('src', LC)
             
    })
    $('#validate-position').click(function(){
        var TP=$('#txt-position').val()
        var Top=$('#top').val()
        var Left=$('#left').val()
        var FF=$('#font').val()
        var FS=$('#font-size-C').val()
        var TC=$('#text-color-C').val()
        
        if(TP==="companyName"){
            $('#nameStyle').css("top",Top)
            $('#nameStyle').css("left",Left)
            $('#nameStyle').css("font-family",FF)
            $('#nameStyle').css("font-size",FS)
            $('#nameStyle').css("color",TC)
        }
        if(TP==="Speciality"){
            $('#specialityStyle').css("top",Top)
            $('#specialityStyle').css("left",Left)
            $('#specialityStyle').css("font-family",FF)
            $('#specialityStyle').css("font-size",FS)
            $('#specialityStyle').css("color",TC)
        }
        if(TP==="companyAdresse"){
            $('#adresseCStyle').css("top",Top)
            $('#adresseCStyle').css("left",Left)
            $('#adresseCStyle').css("font-family",FF)
            $('#adresseCStyle').css("font-size",FS)
            $('#adresseCStyle').css("color",TC)
        }
        if(TP==="phoneNumber"){
            $('#phoneNumberCStyle').css("top",Top)
            $('#phoneNumberCStyle').css("left",Left)
            $('#phoneNumberCStyle').css("font-family",FF)
            $('#phoneNumberCStyle').css("font-size",FS)
            $('#phoneNumberCStyle').css("color",TC)
        }
        if(TP==="logoC"){
            $('#logoCStyle').css("top",Top)
            $('#logoCStyle').css("left",Left)
        }
    })
    $('#clearC').click(function(){
    $('#company-content').html('')
    })
    $('#tryItP').click(function(){
        var PPP=$('#pictureP').val()
        $('#personal-content').append("<p class='personalData' id='fullNameStyle' >"+$('#fullName').val()+"</p>")
        $('#personal-content').append("<p class='personalData' id='jobStyle' >"+$('#job').val()+"</p>")
        $('#personal-content').append("<p class='personalData' id='adressePStyle' >"+$('#adresseP').val()+"</p>")
        $('#personal-content').append("<p class='personalData' id='phoneNumberPStyle' >"+$('#phoneNumberP').val()+"</p>")
        $('#personal-content').append("<img  class='personalData' id='picturePStyle' >")
        $('#picturePStyle').attr('src', PPP)
        
    })
    $('#clearP').click(function(){
        $('.personalData').html('')
    })
    $('#validate-position-P').click(function(){
        var TPP=$('#txt-position-P').val()
        var TopP=$('#topP').val()
        var LeftP=$('#leftP').val()
        var FFP=$('#fontP').val()
        var FSP=$('#font-size-P').val()
        var TCP=$('#text-color-P').val()
        
        if(TPP==="fullName"){
            $('#fullNameStyle').css("top",TopP)
            $('#fullNameStyle').css("left",LeftP)
            $('#fullNameStyle').css("font-family",FFP)
            $('#fullNameStyle').css("font-size",FSP)
            $('#fullNameStyle').css("color",TCP)
        }
        if(TPP==="job"){
            $('#jobStyle').css("top",TopP)
            $('#jobStyle').css("left",LeftP)
            $('#jobStyle').css("font-family",FFP)
            $('#jobStyle').css("font-size",FSP)
            $('#jobStyle').css("color",TCP)
        }
        if(TPP==="adresseP"){
            $('#adressePStyle').css("top",TopP)
            $('#adressePStyle').css("left",LeftP)
            $('#adressePStyle').css("font-family",FFP)
            $('#adressePStyle').css("font-size",FSP)
            $('#adressePStyle').css("color",TCP)
        }
        if(TPP==="phoneNumberP"){
            $('#phoneNumberPStyle').css("top",TopP)
            $('#phoneNumberPStyle').css("left",LeftP)
            $('#phoneNumberPStyle').css("font-family",FFP)
            $('#phoneNumberPStyle').css("font-size",FSP)
            $('#phoneNumberPStyle').css("color",TCP)
        }
        if(TPP==="pictureP"){
            $('#picturePStyle').css("top",TopP)
            $('#picturePStyle').css("left",LeftP)
        }
        
    })
})


