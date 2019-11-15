function showWorkItems(){
    $('#content2').removeClass('d-none');
    $('#content1').addClass('d-none');
    $('#content3').addClass('d-none');
}
function showQuery(){
    $('#content1').removeClass('d-none');
    $('#content2').addClass('d-none');
    $('#content3').addClass('d-none');
}
function showProductBacklog(){
    $('#content3').removeClass('d-none');
    $('#content2').addClass('d-none');
    $('#content1').addClass('d-none');
}