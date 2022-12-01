        $(function() {
            $('#dongdaemun').click(function() {
                $("#syousai>.naiyou:nth-of-type(1)").fadeIn();
                $("#syousai>.naiyou:nth-of-type(2)").hide();
                $("#syousai>.naiyou:nth-of-type(3)").hide();
                $("#syousai>.naiyou:nth-of-type(4)").hide();
                $("#syousai>.naiyou:nth-of-type(5)").hide();
                $("#syousai>.naiyou:nth-of-type(6)").hide();
                
            });

            $('#banpo').click(function() {
                $("#syousai>.naiyou:nth-of-type(2)").fadeIn();
                $("#syousai>.naiyou:nth-of-type(1)").hide();
                $("#syousai>.naiyou:nth-of-type(3)").hide();
                $("#syousai>.naiyou:nth-of-type(4)").hide();
                $("#syousai>.naiyou:nth-of-type(5)").hide();
                $("#syousai>.naiyou:nth-of-type(6)").hide();
            });

            $('#rotewarudo').click(function() {
                $("#syousai>.naiyou:nth-of-type(3)").fadeIn();
                $("#syousai>.naiyou:nth-of-type(1)").hide();
                $("#syousai>.naiyou:nth-of-type(2)").hide();
                $("#syousai>.naiyou:nth-of-type(4)").hide();
                $("#syousai>.naiyou:nth-of-type(5)").hide();
                $("#syousai>.naiyou:nth-of-type(6)").hide();
            });

            $('#sityou').click(function() {
                $("#syousai>.naiyou:nth-of-type(4)").fadeIn();
                $("#syousai>.naiyou:nth-of-type(1)").hide();
                $("#syousai>.naiyou:nth-of-type(2)").hide();
                $("#syousai>.naiyou:nth-of-type(3)").hide();
                $("#syousai>.naiyou:nth-of-type(5)").hide();
                $("#syousai>.naiyou:nth-of-type(6)").hide();
            });

            $('#bukchon').click(function() {
                $("#syousai>.naiyou:nth-of-type(5)").fadeIn();
                $("#syousai>.naiyou:nth-of-type(1)").hide();
                $("#syousai>.naiyou:nth-of-type(2)").hide();
                $("#syousai>.naiyou:nth-of-type(3)").hide();
                $("#syousai>.naiyou:nth-of-type(4)").hide();
                $("#syousai>.naiyou:nth-of-type(6)").hide();
            });

            $('#mdong').click(function() {
                $("#syousai>.naiyou:nth-of-type(6)").fadeIn();
                $("#syousai>.naiyou:nth-of-type(1)").hide();
                $("#syousai>.naiyou:nth-of-type(2)").hide();
                $("#syousai>.naiyou:nth-of-type(3)").hide();
                $("#syousai>.naiyou:nth-of-type(4)").hide();
                $("#syousai>.naiyou:nth-of-type(5)").hide();
            });

            
            $('.po1').click(function() {
                $(".kosusenntaku").fadeIn();
                $(".jouhou").hide();
                $(".leview").hide();
            });

            $('.po2').click(function() {
                $(".jouhou").fadeIn();
                $(".kosusenntaku").hide();
                $(".leview").hide();
            });

            $('.po2_1').click(function() {
                $(".leview").fadeIn();
                $(".kosusenntaku").hide();
                $(".jouhou").hide();
            });

            $('.po4').click(function() {
                $(".naiyou").hide();
             });
        });


