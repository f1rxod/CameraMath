var img_first_btn = document.querySelector('.img_first')
document.querySelector('.step-by-step').addEventListener('click', function(){
    img_first_btn.setAttribute('src', 'web.png')
    img_first_btn.setAttribute('style', 'margin-top:10%;margin-right:auto; margin-left:auto; display:block; width:80%;')
})
document.querySelector('.multiple').addEventListener('click', function(){
    img_first_btn.setAttribute('src', 'func-img.png')
    img_first_btn.setAttribute('style',"margin-top:10%;margin-right:auto; margin-left:auto; display:block; width:95%;")
}) 
document.querySelector('.wordd-q').addEventListener('click', function(){
    img_first_btn.setAttribute('src', 'word-q.png')
    img_first_btn.setAttribute('style',"margin-top:10%;;margin-right:auto; margin-left:auto; display:block; width:60%;")
})
document.querySelector('.help').addEventListener('click', function(){
    img_first_btn.setAttribute('src', 'helping.png')
    img_first_btn.setAttribute('style',"margin-top:10%;;margin-right:auto; margin-left:auto; display:block; width:60%;")
})