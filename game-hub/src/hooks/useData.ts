import apiClient from "../services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios"
import { useState, useEffect } from "react"

interface FetchResponse<T> {
    count: number,
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [ data, setData ] = useState<T[]>([])
  const [ error, setError ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((res: { data: FetchResponse<T> }) => {
            setData(res.data.results)
            setIsLoading(false)
        })
        .catch((err: unknown) => {
          if (err instanceof CanceledError) return
          if (err instanceof Error) setError(err.message)
          setIsLoading(false)
        })

    return () => controller.abort()
  }, deps ? [...deps] : [])

  return { data, error, isLoading }
}

export default useData