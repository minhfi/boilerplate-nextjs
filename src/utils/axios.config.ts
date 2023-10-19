import axios from 'axios'
import { EEnv } from 'src/constants'
import './axios.interceptors'

export const tricorderAxios = axios.create({
  baseURL: EEnv.NEXT_PUBLIC_TRICORDER_API
})
