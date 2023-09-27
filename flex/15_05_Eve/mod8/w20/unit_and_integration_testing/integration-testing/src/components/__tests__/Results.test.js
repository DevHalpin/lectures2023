import { fireEvent, render, screen } from "@testing-library/react"
import Result from "../Result"

test('can display results from an API', () => {
  const {getByTestId} = render(<Result status="Waiting"/>);

  const highScoreButton = screen.getByTestId('high-scores');

  fireEvent.click(highScoreButton);

  return screen.findByText('Frankie', {exact: false})

})