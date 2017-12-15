// @flow

export const randomise = (elements: Array<any>) => {
  return elements.reduce(
    ({ remainingElements, randomisedArray }) => {
      const randomIndex = Math.floor(
        Math.random() * remainingElements.length
      )

      const randomElement = remainingElements[randomIndex]

      const newRemainingElements = [
        ...remainingElements.slice(0, randomIndex),
        ...remainingElements.slice(randomIndex + 1)
      ]

      const newRandomisedArray = [
        ...randomisedArray,
        randomElement
      ]

      return {
        remainingElements: newRemainingElements,
        randomisedArray: newRandomisedArray
      }
    },
    {
      remainingElements: [...elements],
      randomisedArray: []
    }
  ).randomisedArray
}
