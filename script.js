//your code here
  // const images = [
  //   'https://picsum.photos/id/237/200/300',
  //   'https://picsum.photos/seed/picsum/200/300',
  //   'https://picsum.photos/200/300?grayscale',
  //   'https://picsum.photos/200/300/',
  //   'https://picsum.photos/200/300.jpg'
  //  ];

  //  function generateImages(){
  //   var selectedImageIndex = Math.floor(Math.random()*images.length); //1 , 4,2,3, 0,5
  //   var selectedImage = images[selectedImageIndex];
  //   var allImages = images.concat(selectedImage);
  //   var shuffledImages = allImages.sort(function(){
  //       return 0.5 - Math.random();
  //   });

    
  //   var imageContainer = document.getElementById('image-container');
  //   imageContainer.innerHTML = '';
  //   for(var index = 0; index < shuffledImages.length; index++){
  //       var src = shuffledImages[index];
  //       var img = document.createElement('img');
  //       img.src = src;
  //       img.className = 'img' +(index+1);
  //       img.dataset.index = index;
  //       img.addEventListener('click', handleImageClick);
  //       imageContainer.appendChild(img);
  //   }; 
  //  }

  //  let firstClick = null;
  //  let secondClick = null;

  //  function handleImageClick(event){
  //   const clickedImage = event.target;
  //   if(firstClick == clickedImage || secondClick == clickedImage ) return;

  //   document.getElementById('reset').style.display = 'block';

  //   if(!firstClick) {
  //       firstClick = clickedImage;
  //   }else if(!secondClick){
  //       secondClick = clickedImage;
  //       document.getElementById('verify').style.display = 'block';
  //   }

    
  //  }

  //  function reset(){
  //   firstClick = null;
  //   secondClick = null;
  //   document.getElementById('reset').style.display = 'none';
  //   document.getElementById('verify').style.display = 'none';
  //   document.getElementById('para').style.display = 'none';
  //   document.getElementById('image-container').innerHTML = '';
  //   generateImages();
  //  }

  //  function verify(){
  //   if(firstClick && secondClick){
  //       if(firstClick.src === secondClick.src){
  //           document.getElementById('para').innerHTML = 'Verified';

  //       }else{
  //           document.getElementById('para').innerHTML = 'Not a human';
  //       }

  //       document.getElementById('para').style.display = 'block';
  //   }
  //  }
  //  document.getElementById('reset').addEventListener('click', reset);
  //  document.getElementById('verify').addEventListener('click', verify);

  //  generateImages();
