function init (wrapper, reviews) {
  const buttonLeft = wrapper.querySelector('.reviews-info__nav-left')
  const buttonRight = wrapper.querySelector('.reviews-info__nav-right')
  const name = wrapper.querySelector('.reviews-info__name')
  const description = wrapper.querySelector('.reviews-info__desc')
  const date = wrapper.querySelector('.reviews-info__date')
  const excerpt = wrapper.querySelector('.reviews-preview__excerpt')
  const image = wrapper.querySelector('.reviews-preview__figure-image')
  const video = wrapper.querySelector('.reviews-preview__video')

  let duration = 400
  let active = 0
  let animating = false

  const renderReview = (index) => {
    const review = reviews[index]
    wrapper.classList.add('reviews_animation-out')
    animating = true
    setTimeout(() => {
      name.innerHTML = review.name
      description.innerHTML = review.description
      date.innerHTML = review.date
      excerpt.innerHTML = review.excerpt
      video.innerHTML = review.video
      video.style.display = review.video ? 'block' : 'none'
      image.style.backgroundImage = review.image ? `url('${review.image.url}')` : null
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
