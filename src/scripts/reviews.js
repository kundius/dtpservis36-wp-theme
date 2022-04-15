function init (wrapper, reviews) {
  const buttonLeft = wrapper.querySelector('.reviews-info__nav-left')
  const buttonRight = wrapper.querySelector('.reviews-info__nav-right')
  const name = wrapper.querySelector('.reviews-info__name')
  const description = wrapper.querySelector('.reviews-info__desc')
  const date = wrapper.querySelector('.reviews-info__date')
  const previewExcerpt = wrapper.querySelector('.reviews-preview__excerpt')
  const previewImage = wrapper.querySelector('.reviews-preview__figure-image')
  const previewVideo = wrapper.querySelector('.reviews-preview__video')
  const detailsExcerpt = wrapper.querySelector('.reviews-details__excerpt')
  const detailsImage = wrapper.querySelector('.reviews-details__figure-image')
  const detailsVideo = wrapper.querySelector('.reviews-details__video')

  let duration = 400
  let active = 0
  let animating = false

  const renderReview = (index) => {
    wrapper.classList.add('reviews_animation-out')
    animating = true
    setTimeout(() => {
      name.innerHTML = reviews[index].name
      description.innerHTML = reviews[index].description
      date.innerHTML = reviews[index].date
      
      previewExcerpt.innerHTML = reviews[index].excerpt
      previewVideo.innerHTML = reviews[index].video
      previewVideo.style.display = reviews[index].video ? 'block' : 'none'
      previewImage.style.backgroundImage = reviews[index].image ? `url('${reviews[index].image.url}')` : null
      
      detailsExcerpt.innerHTML = reviews[index].excerpt
      detailsVideo.innerHTML = reviews[index].video
      detailsVideo.style.display = reviews[index].video ? 'block' : 'none'
      detailsImage.style.backgroundImage = reviews[index].image ? `url('${reviews[index].image.url}')` : null
      
      wrapper.classList.remove('reviews_animation-out')
      wrapper.classList.add('reviews_animation-in')
      
      setTimeout(() => {
        wrapper.classList.remove('reviews_animation-in')
        animating = false
      }, duration)
    }, duration)
  }

  buttonLeft.addEventListener('click', () => {
    if (animating) return

    active = active === 0 ? reviews.length - 1 : active - 1

    renderReview(active)
    
  })
  
  buttonRight.addEventListener('click', () => {
    if (animating) return

    active = active === reviews.length - 1 ? 0 : active + 1

    renderReview(active)
  })
}

const wrapper = document.querySelector('.reviews')
if (typeof theme_reviews !== 'undefined' && wrapper) {
  init(wrapper, theme_reviews)
}
