import {describe, expect, test} from 'vitest';

import {render, screen} from './react-tests-utilities'

function MyReactComponent() {
    return <div>My React Component</div>
}

describe('MyReactComponent', () => {
    test('given: no props, should: renders a text', () => {
        render(<MyReactComponent />)

        expect(screen.getByText('My React Component')).toBeInTheDocument()
    })
})