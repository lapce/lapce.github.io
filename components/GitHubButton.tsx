import Button from 'react-github-btn'

import type { FunctionComponent } from 'react'

const GitHubButton: FunctionComponent = () => <Button
  href="https://github.com/lapce/lapce"
  data-size="large"
  data-show-count="true"
  aria-label="Star lapce/lapce on GitHub">
    Star
  </Button>

export default GitHubButton