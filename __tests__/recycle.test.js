import { render, screen } from '@testing-library/react'
import Recycle from '../pages/recycle'
import '@testing-library/jest-dom'
//import handleSeatch from '../pages/recycle'


// Basic test to check the tests are working! PASS
it('should render a promt to the user', async () => {
    render(<Recycle />);
    expect(screen.getByText('Find your nearest textile recycle point')).toBeInTheDocument();
  });

// No onto unit tests for search functionality

