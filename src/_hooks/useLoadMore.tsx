import React from "react"

const useLoadMore = ({ data }: any) => {
  const [list, setList] = React.useState([...data.slice(0, 10)])
  const [loadMore, setLoadMore] = React.useState(false)

  const [hasMore, setHasMore] = React.useState(data.length > 10)

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  React.useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < data.length
      const nextResults = isMore
        ? data.slice(currentLength, currentLength + 8)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  React.useEffect(() => {
    const isMore = list.length < data.length
    setHasMore(isMore)
  }, [list])

  return {
    handleLoadMore,
    hasMore,
    list,
  }
}

export default useLoadMore
