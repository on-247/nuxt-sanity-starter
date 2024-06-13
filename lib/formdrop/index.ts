const SESSION_ENDPOINT = '{base_url}/form/{id}'
const SUBMIT_ENDPOINT = '{base_url}/form/submission'
const SESSION_TIMEOUT = 600


export class FormDrop
{
    apiBaseUrl: string;
    formId: string;

    /**
     * Captcha response token.
     */
    response: string | null;

    /**
     * Session token used to to authenticate when submitting data to the form.
     */
    sessionToken: string | null;

    /**
     * Timestamp indication of when the session was created.
     */
    sessionCreatedAt: number | null;

    constructor(apiBaseUrl: string, formId: string)
    {
        this.apiBaseUrl = apiBaseUrl
        this.formId = formId

        this.response = null
        this.sessionToken = null
        this.sessionCreatedAt = null
    }

    public async updateResponse(response: string)
    {
        this.response = response

        await this.initSession()
    }

    public async submit(data: Record<string, any>) 
    {
        await this.initSession()

        const endpoint = SUBMIT_ENDPOINT
            .replace('{base_url}', this.apiBaseUrl)

        await fetch(
            endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.sessionToken}`
            }
        })
    }

    /**
     * Initialize a session.
     */
    private async initSession()
    {
        if (! this.isSessionExpired()) {

            return

        }

        if (! this.response) {
            
            throw new Error('No response captcha token was set')

        }

        const endpoint = SESSION_ENDPOINT
            .replace('{base_url}', this.apiBaseUrl)
            .replace('{id}', this.formId)

        const res = await fetch(
            endpoint, {
            method: 'POST',
            body: JSON.stringify({
                token: this.response
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await res.json()

        if (! json?.token) {
            
            throw new Error('No session token was returned')

        }

        this.sessionToken = json.token
        this.sessionCreatedAt = Math.floor(Date.now() / 1000)
    }

    private isSessionExpired()
    {
        if (! this.sessionCreatedAt) {

            return true

        }

        let now = Math.floor(Date.now() / 1000)

        return now - this.sessionCreatedAt >= SESSION_TIMEOUT
    }
}