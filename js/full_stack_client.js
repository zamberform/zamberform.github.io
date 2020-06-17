$(document).ready(function() {

	$('.category-grid-body').hide();
    categoryDisplay();

});

function categoryDisplay() {
    $('.categories-list-item').click(function() {
        var cate = $(this).attr('cate'); //get category's name
        $('.category-grid-body').show();
       
        $('.category-grid-body>div[post-cate!=' + cate + ']').hide();
        $('.category-grid-body>div[post-cate=' + cate + ']').show();
    });
}