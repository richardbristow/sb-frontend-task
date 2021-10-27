const tagHighlight = (text) => {
  const firstPart = text.split('#')[0]
  if (text.includes('#')) {
    const tagArray = text.slice(text.indexOf('#')).split(' ')
    return { firstPart, tagArray }
  }

  return { firstPart, tagArray: [] }
}

export { tagHighlight }
