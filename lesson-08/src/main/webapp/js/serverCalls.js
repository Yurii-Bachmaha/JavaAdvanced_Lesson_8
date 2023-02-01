$('button.create-magazine-btn').click(function () {
    var name = $('form.create-magazine input.magazine-name').val();
    var publishDate = $('form.create-magazine input.magazine-publishDate').val();
    var subscribePrice = $('form.create-magazine input.magazine-price').val();

    if (name == '' || publishDate == '' || subscribePrice == '') {
        alert("Please fill all fields!");
    } else {
        var magazine = {
            name: name,
            publishDate: publishDate,
            subscribePrice: subscribePrice
        };

        $.post("magazine", magazine, function (data) {
            $('.create-magazine').trigger('reset');
        });
    }
});