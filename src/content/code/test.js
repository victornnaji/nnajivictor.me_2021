export const noInlineExample = `
const Wrapper = ({ children }) => (
  <div style={{
    background: 'papayawhip',
    width: '100%',
    padding: '2rem'
  }}>
    {children}
  </div>
)
const Title = () => (
  <h3 style={{ color: 'palevioletred' }}>
    Hello World!
  </h3>
)
render(
  <Wrapper>
    <Title />
  </Wrapper>
)
`