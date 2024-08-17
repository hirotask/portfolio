import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='flex content-center justify-center text-center flex-col h-screen'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error instanceof Error ? (
        <p>
          <i>{error.name || error.message}</i>
        </p>
      ) : (
        <></>
      )}
    </div>
  )
}
export default ErrorPage
