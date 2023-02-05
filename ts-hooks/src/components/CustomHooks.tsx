import React, { useState, useEffect, useMemo } from "react"

export interface Beverage {
  name: string
  producerName: string
  beverageName: string
  beverageColor: string
  beverageStyle: string
  producerLocation: string
  abv: number
  ibu: number
  logo: string
  level: number
}

function useFetch<Payload>(url: string): {
  data: Payload | null
  loading: boolean
} {
  const [data, setData] = useState<Payload | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [url])

  return {
    data,
    loading,
  }
}

const CustomHooks = () => {
  const { data, loading } = useFetch<Beverage[]>("/bear.json")

  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
    [data]
  )

  return (
    <div>
      {portlandTaps.length && (
        <img src={portlandTaps![1].logo} alt="Beverage logo" />
      )}
    </div>
  )
}

export default CustomHooks
