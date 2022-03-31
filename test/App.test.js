import renderer from 'react-test-renderer'
import App from './App'

describe("Fetching data and rendering names", () => {
    test('Should render 50 full names', async() => {
        const app = (
            <App/>
        )
        const renderedApp = renderer.create(app);
        const students = await renderedApp.findAllByText('Name');    
        expect(students.length).toBe(50);
    })
})