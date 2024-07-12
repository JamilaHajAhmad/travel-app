import { handleSubmit } from "../src/client/js/formHandler";
describe('handleSubmit must be a function', () => {
    it('must be a function', async () => {
        expect(typeof handleSubmit).toBe('function');
    })
})
