function getIdFromButtonsAndAddListeners(){
    var nums = [1,2,3,4,5,6,7,8],
        ranNums = [],
        i = nums.length,
        j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        ranNums.push(nums[j]);
        nums.splice(j,1);
    }

    for(i=0;i<9;i++){
        $(function() {
            $('z_'+i).attr(nums[i], i+'.png');  /////random positioning
        });
        document.getElementById(nums[i]).addEventListener("click", someFunction(i));

    }
}
function someFunction(nameOfButton) {
      //Here should be some changing of elements
     //  $('#id').attr('src', 'newImage.jpg');
}

