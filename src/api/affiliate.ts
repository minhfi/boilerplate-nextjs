import { tricorderAxios } from 'src/utils/axios.config'
import { TAxiosResponseData } from 'types/axios'

export class AffiliateApi {
  static _prefix = '/affiliate-forms'

  static submit(payload: {
    email: string
    firstName: string
    lastName: string
    phone: string
  }): TAxiosResponseData<void> {
    return tricorderAxios.post(this._prefix, payload)
  }
}
