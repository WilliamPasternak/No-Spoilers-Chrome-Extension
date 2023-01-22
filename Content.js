console.log('No Spoilers Extension Loaded')

// Hulu
if (window.location.href.indexOf("hulu") > -1) {
const huluDescriptions = document.getElementsByTagName("div")
const huluEpTitles = document.getElementsByTagName("h3")
const huluEpImages = document.getElementsByTagName('img')

hideTitles()
hideDescriptions()
hideImages()

function hideTitles(){
for(let title of huluEpTitles){
  if(title.classList.contains('StandardEmphasisHorizontalTileContent__title')){
    title.style.visibility = 'hidden'
  }
}
}
function hideDescriptions(){
  for(let description of huluDescriptions){
    if(description.classList.contains('StandardEmphasisHorizontalTileContent__description') ||
       description.classList.contains('Masthead__description')||
       description.classList.contains('Masthead__subtitle')
       ){
      description.style.visibility = 'hidden'
    }
  }
}

function hideImages(){
for(let image of huluEpImages){
  if(image.classList.contains('StandardEmphasisHorizontalTileThumbnail__image')){
    image.style.visibility = 'hidden'
  }
}
}

}

