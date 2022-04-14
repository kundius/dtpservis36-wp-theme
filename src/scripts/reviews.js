function init (wrapper, reviews) {
  const buttonLeft = wrapper.querySelector('.reviews-info__nav-left')
  const buttonRight = wrapper.querySelector('.reviews-info__nav-right')
  const name = wrapper.querySelector('.reviews-info__name')
  const description = wrapper.querySelector('.reviews-info__desc')
  const date = wrapper.querySelector('.reviews-info__date')
  const content = wrapper.querySelector('.reviews-preview__content')
  const image = wrapper.querySelector('.reviews-preview__figure-image')

  let active = 0

  const renderReview = (index) => {
    name.innerHTML = reviews[index].name
    description.innerHTML = reviews[index].description
    date.innerHTML = reviews[index].date
    content.innerHTML = reviews[index].excerpt
    image.style.backgroundImage = reviews[index].image ? `url('${reviews[index].image.url}')` : null
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
