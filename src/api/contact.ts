import { tricorderAxios } from 'src/utils/axios.config'
import { TAxiosResponseData } from 'types/axios'

export class ContactApi {
  static _prefix = '/contact-forms'

  static submit(payload: {
    name: string
    email: string
    content: string
  }): TAxiosResponseData<void> {
    return tricorderAxios.post(this._prefix, payload)
  }
}
