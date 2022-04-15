function init (wrapper, reviews) {
  const buttonMoreWrap = wrapper.querySelector('.reviews-preview__figure-more')
  const buttonMore = wrapper.querySelector('.reviews-preview__more')
  const buttonClose = wrapper.querySelector('.reviews-details__close')
  const buttonLeft = wrapper.querySelector('.reviews-info__nav-left')
  const buttonRight = wrapper.querySelector('.reviews-info__nav-right')
  const name = wrapper.querySelector('.reviews-info__name')
  const description = wrapper.querySelector('.reviews-info__desc')
  const date = wrapper.querySelector('.reviews-info__date')
  const previewExcerpt = wrapper.querySelector('.reviews-preview__content-text')
  const previewImage = wrapper.querySelector('.reviews-preview__figure-image')
  const previewVideo = wrapper.querySelector('.reviews-preview__content-video')
  const previewWrap = wrapper.querySelector('.reviews-preview')
  const detailsWrap = wrapper.querySelector('.reviews-details')
  const detailsText = wrapper.querySelector('.reviews-details__content-text')
  const detailsImage = wrapper.querySelector('.reviews-details__figure-image')
  const detailsVideo = wrapper.querySelector('.reviews-details__content-video')

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
      buttonMoreWrap.style.display = reviews[index].content ? 'block' : 'none'
      previewVideo.style.display = reviews[index].video ? 'block' : 'none'
      previewImage.style.backgroundImage = reviews[index].image ? `url('${reviews[index].image.url}')` : null
      
      detailsText.innerHTML = reviews[index].content
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

  const alignDetails = () => {
    const rect = previewWrap.getBoundingClientRect()
    detailsWrap.style.top = `${rect.top}px`
    detailsWrap.style.left = `${rect.left}px`
    detailsWrap.style.width = `${rect.width}px`
    detailsWrap.style.height = `${detailsWrap.scrollHeight}px`
  }

  const showDetails = () => {
    alignDetails()
    detailsWrap.style.display = 'block'
    window.addEventListener('scroll', alignDetails)
  }
  
  const hideDetails = () => {
    detailsWrap.style.display = 'none'
    window.removeEventListener('scroll', alignDetails)
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

  buttonMore.addEventListener('click', () => {
    showDetails()
  })

  buttonClose.addEventListener('click', () => {
    hideDetails()
  })
}

const wrapper = document.querySelector('.reviews')
if (typeof theme_reviews !== 'undefined' && wrapper) {
  init(wrapper, theme_reviews)
}
