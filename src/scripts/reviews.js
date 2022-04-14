function init (wrapper, reviews) {
  const buttonLeft = wrapper.querySelector('.reviews-info__nav-left')
  const buttonRight = wrapper.querySelector('.reviews-info__nav-right')
  const name = wrapper.querySelector('.reviews-info__name')
  const description = wrapper.querySelector('.reviews-info__desc')
  const date = wrapper.querySelector('.reviews-info__date')
  const content = wrapper.querySelector('.reviews-preview__content')
  const image = wrapper.querySelector('.reviews-preview__figure-image')

  let duration = 500
  let active = 0
  let timer

  const renderReview = (index) => {
    wrapper.classList.add('reviews_animation-out')
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      name.innerHTML = reviews[index].name
      description.innerHTML = reviews[index].description
      date.innerHTML = reviews[index].date
      content.innerHTML = reviews[index].excerpt
      image.style.backgroundImage = reviews[index].image ? `url('${reviews[index].image.url}')` : null
      wrapper.classList.remove('reviews_animation-out')
      wrapper.classList.add('reviews_animation-in')
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        wrapper.classList.remove('reviews_animation-in')
      }, duration)
    }, duration)
  }

  buttonLeft.addEventListener('click', () => {
    active = active === 0 ? reviews.length - 1 : active - 1
    renderReview(active)
    
  })
  buttonRight.addEventListener('click', () => {
    active = active === reviews.length - 1 ? 0 : active + 1
    renderReview(active)
  })
}

const wrapper = document.querySelector('.reviews')
if (typeof theme_reviews !== 'undefined' && wrapper) {
  init(wrapper, theme_reviews)
}